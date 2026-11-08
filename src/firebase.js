// Firebase Configuration for Yukyounghaksa Official (yukyounghaksa-official)
export const firebaseConfig = {
  apiKey: "AIzaSyDr2a5B2qsSXQVnFSg9WGyBItnvJYpLrWw",
  authDomain: "yukyounghaksa-official.firebaseapp.com",
  projectId: "yukyounghaksa-official",
  storageBucket: "yukyounghaksa-official.firebasestorage.app",
  messagingSenderId: "418165475912",
  appId: "1:418165475912:web:e52ee4e7c027a46a4ba67d"
};

const FIRESTORE_BASE_URL = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents`;

// Helper to convert JS object to Firestore fields
function toFirestoreFields(obj) {
  const fields = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null) continue;
    if (typeof value === 'boolean') {
      fields[key] = { booleanValue: value };
    } else if (typeof value === 'number' && Number.isInteger(value)) {
      fields[key] = { integerValue: String(value) };
    } else if (typeof value === 'number') {
      fields[key] = { doubleValue: value };
    } else {
      fields[key] = { stringValue: String(value) };
    }
  }
  return { fields };
}

// Helper to convert Firestore document to JS object
function fromFirestoreDoc(doc) {
  const parts = doc.name.split('/');
  const docId = parts[parts.length - 1];
  const result = { _docId: docId };
  if (doc.fields) {
    for (const [key, valObj] of Object.entries(doc.fields)) {
      if ('stringValue' in valObj) result[key] = valObj.stringValue;
      else if ('integerValue' in valObj) result[key] = Number(valObj.integerValue);
      else if ('doubleValue' in valObj) result[key] = Number(valObj.doubleValue);
      else if ('booleanValue' in valObj) result[key] = Boolean(valObj.booleanValue);
    }
  }
  return result;
}

export async function fetchCollectionWithFallback(collectionName, localKey, initialData = []) {
  // 1. Read local cache first
  let localItems = initialData;
  try {
    const saved = localStorage.getItem(localKey);
    if (saved) {
      localItems = JSON.parse(saved);
    } else if (initialData.length > 0) {
      localStorage.setItem(localKey, JSON.stringify(initialData));
    }
  } catch (e) {
    console.warn(`Local storage read error for ${localKey}:`, e);
  }

  // 2. Try syncing with Firebase Firestore
  try {
    const res = await fetch(`${FIRESTORE_BASE_URL}/${collectionName}?key=${firebaseConfig.apiKey}`);
    if (res.ok) {
      const data = await res.json();
      if (data.documents && data.documents.length > 0) {
        const remoteItems = data.documents.map(fromFirestoreDoc);
        remoteItems.sort((a, b) => Number(b.id || 0) - Number(a.id || 0));
        localStorage.setItem(localKey, JSON.stringify(remoteItems));
        return remoteItems;
      } else if (localItems.length > 0) {
        // Seed initial items to Firestore in background
        for (const item of localItems) {
          saveDocumentWithFallback(collectionName, localKey, item, localItems, true).catch(() => {});
        }
      }
    }
  } catch (err) {
    // Offline or Firestore not yet provisioned - fallback to localItems seamlessly
  }

  return localItems;
}

export async function saveDocumentWithFallback(collectionName, localKey, newItem, currentList = [], skipLocalUpdate = false) {
  const docId = String(newItem.id || Date.now());
  const itemWithId = { ...newItem, id: Number(newItem.id) || Date.now() };

  if (!skipLocalUpdate) {
    const updatedList = [itemWithId, ...currentList.filter(i => String(i.id) !== String(itemWithId.id))];
    try {
      localStorage.setItem(localKey, JSON.stringify(updatedList));
    } catch (e) {
      console.warn(`Local storage write error for ${localKey}:`, e);
    }
  }

  try {
    await fetch(`${FIRESTORE_BASE_URL}/${collectionName}?documentId=${encodeURIComponent(docId)}&key=${firebaseConfig.apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toFirestoreFields(itemWithId))
    });
  } catch (err) {
    // Fallback already saved to localStorage
  }

  return itemWithId;
}

export async function deleteDocumentWithFallback(collectionName, localKey, targetId, currentList = []) {
  const updatedList = currentList.filter(i => String(i.id) !== String(targetId));
  try {
    localStorage.setItem(localKey, JSON.stringify(updatedList));
  } catch (e) {
    console.warn(`Local storage delete error for ${localKey}:`, e);
  }

  try {
    await fetch(`${FIRESTORE_BASE_URL}/${collectionName}/${encodeURIComponent(String(targetId))}?key=${firebaseConfig.apiKey}`, {
      method: 'DELETE'
    });
  } catch (err) {
    // Fallback already updated in localStorage
  }

  return updatedList;
}


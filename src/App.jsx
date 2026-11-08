import React, { useState, useEffect } from 'react';
import { INITIAL_NOTICES, INITIAL_STORIES } from './data/siteData';
import {
  fetchCollectionWithFallback,
  saveDocumentWithFallback,
  deleteDocumentWithFallback
} from './firebase';

// 컴포넌트 임포트 (신생원 디자인 시스템 적용)
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import MainBottomSection from './components/MainBottomSection';
import PartnerBanner from './components/PartnerBanner';
import Footer from './components/Footer';
import SubPageLayout from './components/SubPageLayout';
import AdminModal from './components/AdminModal';

// 서브 뷰 임포트 (육영학사 모든 세부 내용 100% 유지)
import {
  GreetingView,
  CorporateView,
  HistoryView,
  OrganizationView,
  FacilityView,
  LocationView
} from './views/AboutViews';

import {
  AdmissionTargetView,
  AdmissionCounselingView
} from './views/AdmissionViews';

import {
  ProgramOverviewView,
  IndependenceProgramView
} from './views/ProgramViews';

import {
  DonationGuideView,
  DonationApplyView,
  VolunteerGuideView,
  VolunteerApplyView
} from './views/SupportViews';

import {
  IndependenceInfoView,
  AgencyLinkView
} from './views/IndependenceViews';

import {
  NoticeListView,
  NewsletterView,
  StoryGalleryView,
  PrivacyPolicyView
} from './views/CommunityViews';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState({
    menuId: 'home',
    subId: ''
  });

  // Firebase Firestore + localStorage 연동 상태
  const [notices, setNotices] = useState(() => {
    const saved = localStorage.getItem('yukyoung_notices');
    return saved ? JSON.parse(saved) : INITIAL_NOTICES;
  });

  const [stories, setStories] = useState(() => {
    const saved = localStorage.getItem('yukyoung_stories_v2');
    return saved ? JSON.parse(saved) : INITIAL_STORIES;
  });

  const [donations, setDonations] = useState(() => {
    const saved = localStorage.getItem('yukyoung_donations');
    return saved ? JSON.parse(saved) : [];
  });

  const [volunteers, setVolunteers] = useState(() => {
    const saved = localStorage.getItem('yukyoung_volunteers');
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);

  // 초기 마운트 시 Firebase Firestore 동기화
  useEffect(() => {
    fetchCollectionWithFallback('notices', 'yukyoung_notices', INITIAL_NOTICES).then(setNotices);
    fetchCollectionWithFallback('stories_v2', 'yukyoung_stories_v2', INITIAL_STORIES).then(setStories);
    fetchCollectionWithFallback('donations', 'yukyoung_donations', []).then(setDonations);
    fetchCollectionWithFallback('volunteers', 'yukyoung_volunteers', []).then(setVolunteers);
  }, []);

  const handleNavigate = (menuId, subId = '') => {
    setSelectedNotice(null);
    setSelectedStory(null);
    setCurrentRoute({ menuId, subId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddNotice = async (newNotice) => {
    const saved = await saveDocumentWithFallback('notices', 'yukyoung_notices', newNotice, notices);
    setNotices([saved, ...notices]);
  };

  const handleDeleteNotice = async (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const updated = await deleteDocumentWithFallback('notices', 'yukyoung_notices', id, notices);
      setNotices(updated);
      if (selectedNotice && selectedNotice.id === id) {
        setSelectedNotice(null);
      }
    }
  };

  const handleAddStory = async (newStory) => {
    const saved = await saveDocumentWithFallback('stories_v2', 'yukyoung_stories_v2', newStory, stories);
    setStories([saved, ...stories]);
  };

  const handleDeleteStory = async (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const updated = await deleteDocumentWithFallback('stories_v2', 'yukyoung_stories_v2', id, stories);
      setStories(updated);
      if (selectedStory && selectedStory.id === id) {
        setSelectedStory(null);
      }
    }
  };

  const handleSubmitDonation = async (donationData) => {
    const item = { id: Date.now(), ...donationData };
    const saved = await saveDocumentWithFallback('donations', 'yukyoung_donations', item, donations);
    setDonations([saved, ...donations]);
  };

  const handleSubmitVolunteer = async (volunteerData) => {
    const item = { id: Date.now(), ...volunteerData };
    const saved = await saveDocumentWithFallback('volunteers', 'yukyoung_volunteers', item, volunteers);
    setVolunteers([saved, ...volunteers]);
  };

  const handleSelectNotice = (notice) => {
    setSelectedNotice(notice);
    setCurrentRoute({ menuId: 'community', subId: 'notice' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectStory = (story) => {
    setSelectedStory(story);
    setCurrentRoute({ menuId: 'community', subId: 'story' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSubView = () => {
    const { menuId, subId } = currentRoute;

    if (menuId === 'about') {
      if (subId === 'greeting') return <GreetingView />;
      if (subId === 'corporate') return <CorporateView />;
      if (subId === 'history') return <HistoryView />;
      if (subId === 'organization') return <OrganizationView />;
      if (subId === 'facility') return <FacilityView />;
      if (subId === 'location') return <LocationView />;
      return <GreetingView />;
    }

    if (menuId === 'admission') {
      if (subId === 'target') return <AdmissionTargetView />;
      if (subId === 'counseling') return <AdmissionCounselingView />;
      return <AdmissionTargetView />;
    }

    if (menuId === 'program') {
      if (subId === 'overview') return <ProgramOverviewView />;
      if (subId === 'independence-program') return <IndependenceProgramView />;
      return <ProgramOverviewView />;
    }

    if (menuId === 'support') {
      if (subId === 'donation') return <DonationGuideView onNavigate={handleNavigate} />;
      if (subId === 'donation-apply') return <DonationApplyView onSubmitDonation={handleSubmitDonation} />;
      if (subId === 'volunteer') return <VolunteerGuideView onNavigate={handleNavigate} />;
      if (subId === 'volunteer-apply') return <VolunteerApplyView onSubmitVolunteer={handleSubmitVolunteer} />;
      return <DonationGuideView onNavigate={handleNavigate} />;
    }

    if (menuId === 'independence') {
      if (subId === 'info-list') return <IndependenceInfoView />;
      if (subId === 'agency-link') return <AgencyLinkView />;
      return <IndependenceInfoView />;
    }

    if (menuId === 'community') {
      if (subId === 'notice') {
        return (
          <NoticeListView
            notices={notices}
            selectedNotice={selectedNotice}
            onSelectNotice={setSelectedNotice}
            onBackToList={() => setSelectedNotice(null)}
          />
        );
      }
      if (subId === 'newsletter') return <NewsletterView />;
      if (subId === 'story') {
        return (
          <StoryGalleryView
            stories={stories}
            selectedStory={selectedStory}
            onSelectStory={setSelectedStory}
            onBackToList={() => setSelectedStory(null)}
          />
        );
      }
      if (subId === 'privacy-policy') return <PrivacyPolicyView />;
      return (
        <NoticeListView
          notices={notices}
          selectedNotice={selectedNotice}
          onSelectNotice={setSelectedNotice}
          onBackToList={() => setSelectedNotice(null)}
        />
      );
    }

    return <GreetingView />;
  };

  return (
    <div className="site-wrapper">
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {currentRoute.menuId === 'home' ? (
        <main>
          <HeroBanner onNavigate={handleNavigate} />
          <MainBottomSection
            notices={notices}
            stories={stories}
            onNavigate={handleNavigate}
            onSelectNotice={handleSelectNotice}
            onSelectStory={handleSelectStory}
          />
        </main>
      ) : (
        <SubPageLayout currentRoute={currentRoute} onNavigate={handleNavigate}>
          {renderSubView()}
        </SubPageLayout>
      )}

      <PartnerBanner />

      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onNavigate={handleNavigate}
      />

      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        notices={notices}
        onAddNotice={handleAddNotice}
        onDeleteNotice={handleDeleteNotice}
        stories={stories}
        onAddStory={handleAddStory}
        onDeleteStory={handleDeleteStory}
        donations={donations}
        volunteers={volunteers}
      />
    </div>
  );
}


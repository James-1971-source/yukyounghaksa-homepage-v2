import React, { useState, useEffect } from 'react';
import {
  INITIAL_NOTICES,
  INITIAL_STORIES,
  INITIAL_INDEPENDENCE_INFO
} from './data/siteData';
import {
  fetchCollectionWithFallback,
  saveDocumentWithFallback,
  deleteDocumentWithFallback
} from './firebase';

// 컴포넌트 임포트 (2026-11-13 2차 수정 요청사항 전면 반영)
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import MainBottomSection from './components/MainBottomSection';
import Footer from './components/Footer';
import SubPageLayout from './components/SubPageLayout';
import AdminModal from './components/AdminModal';

// 서브 뷰 임포트
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
  DischargeProcedureView
} from './views/AdmissionViews';

import {
  ProgramOverviewView,
  CustomizedServiceView,
  IndependenceProgramView,
  UnitOutingView
} from './views/ProgramViews';

import {
  DonationGuideView,
  DonationApplyView,
  DesignatedDepositView,
  VolunteerGuideView,
  VolunteerApplyView,
  PartnershipView
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
    const saved = localStorage.getItem('yukyoung_stories_v3');
    return saved ? JSON.parse(saved) : INITIAL_STORIES;
  });

  const [independenceList, setIndependenceList] = useState(() => {
    const saved = localStorage.getItem('yukyoung_independence_info');
    return saved ? JSON.parse(saved) : INITIAL_INDEPENDENCE_INFO;
  });

  const [donations, setDonations] = useState(() => {
    const saved = localStorage.getItem('yukyoung_donations');
    return saved ? JSON.parse(saved) : [];
  });

  const [designatedDeposits, setDesignatedDeposits] = useState(() => {
    const saved = localStorage.getItem('yukyoung_designated_deposits');
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
    fetchCollectionWithFallback('stories_v3', 'yukyoung_stories_v3', INITIAL_STORIES).then(setStories);
    fetchCollectionWithFallback('independence_info', 'yukyoung_independence_info', INITIAL_INDEPENDENCE_INFO).then(setIndependenceList);
    fetchCollectionWithFallback('donations', 'yukyoung_donations', []).then(setDonations);
    fetchCollectionWithFallback('designated_deposits', 'yukyoung_designated_deposits', []).then(setDesignatedDeposits);
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
    const saved = await saveDocumentWithFallback('stories_v3', 'yukyoung_stories_v3', newStory, stories);
    setStories([saved, ...stories]);
  };

  const handleDeleteStory = async (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const updated = await deleteDocumentWithFallback('stories_v3', 'yukyoung_stories_v3', id, stories);
      setStories(updated);
      if (selectedStory && selectedStory.id === id) {
        setSelectedStory(null);
      }
    }
  };

  // 자립정보 게시판 등록/수정/삭제 핸들러 (요청사항 9번 반영)
  const handleSaveIndependence = async (item) => {
    const saved = await saveDocumentWithFallback('independence_info', 'yukyoung_independence_info', item, independenceList);
    const exists = independenceList.some((i) => String(i.id) === String(saved.id));
    if (exists) {
      setIndependenceList(independenceList.map((i) => (String(i.id) === String(saved.id) ? saved : i)));
    } else {
      setIndependenceList([saved, ...independenceList]);
    }
  };

  const handleDeleteIndependence = async (id) => {
    if (window.confirm('해당 자립정보 게시글을 삭제하시겠습니까?')) {
      const updated = await deleteDocumentWithFallback('independence_info', 'yukyoung_independence_info', id, independenceList);
      setIndependenceList(updated);
    }
  };

  const handleSubmitDonation = async (donationData) => {
    const item = { id: Date.now(), ...donationData };
    const saved = await saveDocumentWithFallback('donations', 'yukyoung_donations', item, donations);
    setDonations([saved, ...donations]);
  };

  const handleSubmitDesignated = async (depositData) => {
    const item = { id: Date.now(), ...depositData };
    const saved = await saveDocumentWithFallback('designated_deposits', 'yukyoung_designated_deposits', item, designatedDeposits);
    setDesignatedDeposits([saved, ...designatedDeposits]);
  };

  const handleDeleteDesignated = async (id) => {
    if (window.confirm('해당 지정기탁서 내역을 삭제하시겠습니까?')) {
      const updated = await deleteDocumentWithFallback('designated_deposits', 'yukyoung_designated_deposits', id, designatedDeposits);
      setDesignatedDeposits(updated);
    }
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

    // 1. 시설 소개
    if (menuId === 'about') {
      if (subId === 'greeting') return <GreetingView />;
      if (subId === 'corporate') return <CorporateView />;
      if (subId === 'history') return <HistoryView />;
      if (subId === 'organization') return <OrganizationView />;
      if (subId === 'facility') return <FacilityView />;
      if (subId === 'location') return <LocationView />;
      return <GreetingView />;
    }

    // 2. 입퇴소안내
    if (menuId === 'admission') {
      if (subId === 'target') return <AdmissionTargetView />;
      if (subId === 'discharge') return <DischargeProcedureView />;
      return <AdmissionTargetView />;
    }

    // 3. 사업 및 프로그램 (기본사업 → 맞춤형서비스 → 꿈JOB끼 → 유닛나들이)
    if (menuId === 'program') {
      if (subId === 'overview') return <ProgramOverviewView />;
      if (subId === 'customized') return <CustomizedServiceView />;
      if (subId === 'independence-program') return <IndependenceProgramView />;
      if (subId === 'unit-outing') return <UnitOutingView />;
      return <ProgramOverviewView />;
    }

    // 4. 지역사회연계 (후원안내 → 온라인 후원신청 → 지정기탁서 → 자원봉사 안내 → 온라인 자원봉사신청 → 협약·결연)
    if (menuId === 'support') {
      if (subId === 'donation') return <DonationGuideView onNavigate={handleNavigate} />;
      if (subId === 'donation-apply') return <DonationApplyView onSubmitDonation={handleSubmitDonation} onNavigate={handleNavigate} />;
      if (subId === 'designated-deposit') return <DesignatedDepositView onSubmitDesignated={handleSubmitDesignated} />;
      if (subId === 'volunteer') return <VolunteerGuideView onNavigate={handleNavigate} />;
      if (subId === 'volunteer-apply') return <VolunteerApplyView onSubmitVolunteer={handleSubmitVolunteer} />;
      if (subId === 'partnership') return <PartnershipView onNavigate={handleNavigate} />;
      return <DonationGuideView onNavigate={handleNavigate} />;
    }

    // 5. 자립정보센터 (자립정보 게시판 → 자립지원 자원 연계)
    if (menuId === 'independence') {
      if (subId === 'info-list') return <IndependenceInfoView independenceList={independenceList} />;
      if (subId === 'agency-link') return <AgencyLinkView />;
      return <IndependenceInfoView independenceList={independenceList} />;
    }

    // 6. 알림마당
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

      {/* 요청사항 2번: 대구광역시부터 해피빈까지 이어지는 기존 외부기관 링크 모음 삭제 완료 */}

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
        independenceList={independenceList}
        onSaveIndependence={handleSaveIndependence}
        onDeleteIndependence={handleDeleteIndependence}
        donations={donations}
        designatedDeposits={designatedDeposits}
        onDeleteDesignated={handleDeleteDesignated}
        volunteers={volunteers}
      />
    </div>
  );
}

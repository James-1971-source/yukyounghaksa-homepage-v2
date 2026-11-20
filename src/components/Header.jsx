import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, ORG_INFO } from '../data/siteData';
import { Heart, ChevronDown, ChevronUp } from 'lucide-react';

export default function Header({ currentRoute, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileCat, setOpenMobileCat] = useState(currentRoute?.menuId || 'about');

  const isHome = !currentRoute?.menuId || currentRoute.menuId === 'home';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (menuId, subId = '') => {
    onNavigate(menuId, subId);
    setMobileOpen(false);
  };

  // 대구아동복지센터 참고화면처럼 메인 상단에서는 배너 사진 위로 투명 헤더가 겹쳐지도록 처리
  const isOverlayHeader = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        id="header"
        className={`${scrolled ? 'scrolled' : ''} ${isOverlayHeader ? 'header-overlay' : ''}`}
      >
        <div id="headerInner">
          {/* 로고에는 "육영학사"만 표기 (요청사항 1번 반영) */}
          <div className="logo-wrap" onClick={() => handleNav('home', '')} role="button" tabIndex={0}>
            <div className="logo-grid-symbol" aria-hidden="true">
              <span className="logo-cell c1">육</span>
              <span className="logo-cell c2">영</span>
              <span className="logo-cell c3">학</span>
              <span className="logo-cell c4">사</span>
            </div>
            <div className="logo-text-group">
              <span className="logo-main">{ORG_INFO.name}</span>
            </div>
          </div>

          {/* Desktop GNB with 2-depth dropdowns */}
          <nav id="gnb" aria-label="주 메뉴">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className={currentRoute?.menuId === item.id ? 'active' : ''}>
                  <button
                    type="button"
                    className="gnb-top-link"
                    onClick={() => handleNav(item.id, item.subItems[0].id)}
                  >
                    {item.title}
                  </button>
                  <ul className="gnb-2dep">
                    {item.subItems.map((sub) => (
                      <li key={sub.id}>
                        <button
                          type="button"
                          className={
                            currentRoute?.menuId === item.id && currentRoute?.subId === sub.id ? 'active' : ''
                          }
                          onClick={() => handleNav(item.id, sub.id)}
                        >
                          {sub.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Utility */}
          <div className="header-util">
            <button
              type="button"
              className="btn-donate"
              onClick={() => handleNav('support', 'donation-apply')}
            >
              <Heart size={15} fill="currentColor" /> 후원하기
            </button>
            <button
              type="button"
              className="btn-menu-m"
              aria-label="전체메뉴 열기"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (모바일 삼선 메뉴) */}
      {mobileOpen && <div className="gnb-m-overlay" onClick={() => setMobileOpen(false)} />}
      <div id="gnbM" className={mobileOpen ? 'open' : ''}>
        <div style={{ marginBottom: '16px', paddingBottom: '14px', borderBottom: '2px solid var(--color-primary)' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)' }}>
            {ORG_INFO.name} 메뉴 안내
          </div>
        </div>

        {NAV_ITEMS.map((item) => {
          const isOpen = openMobileCat === item.id;
          return (
            <div key={item.id} className="gnb-m-item">
              <button
                type="button"
                className="gnb-m-top"
                onClick={() => setOpenMobileCat(isOpen ? null : item.id)}
              >
                <span>{item.title}</span>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {isOpen && (
                <div className="gnb-m-sub">
                  {item.subItems.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      className={
                        currentRoute?.menuId === item.id && currentRoute?.subId === sub.id ? 'active' : ''
                      }
                      onClick={() => handleNav(item.id, sub.id)}
                    >
                      · {sub.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            type="button"
            className="btn-donate"
            style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
            onClick={() => handleNav('support', 'donation-apply')}
          >
            <Heart size={16} fill="currentColor" /> 온라인 후원신청 바로가기
          </button>
          <button
            type="button"
            style={{
              width: '100%',
              textAlign: 'center',
              padding: '11px',
              borderRadius: '50px',
              background: '#fff8db',
              border: '1px solid #ffd54f',
              color: '#333',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
            onClick={() => handleNav('support', 'designated-deposit')}
          >
            지정기탁서 작성·안내 바로가기
          </button>
        </div>
      </div>
    </>
  );
}

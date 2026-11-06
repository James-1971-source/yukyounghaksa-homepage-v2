import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, ORG_INFO } from '../data/siteData';
import { Heart, ChevronDown, ChevronUp } from 'lucide-react';

export default function Header({ currentRoute, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileCat, setOpenMobileCat] = useState(currentRoute?.menuId || 'about');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (menuId, subId = '') => {
    onNavigate(menuId, subId);
    setMobileOpen(false);
  };

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div id="headerInner">
          {/* Shinsengwon Style 2x2 Green Grid Logo for Yukyounghaksa */}
          <div className="logo-wrap" onClick={() => handleNav('home', '')} role="button" tabIndex={0}>
            <div className="logo-grid-symbol" aria-hidden="true">
              <span className="logo-cell c1">육</span>
              <span className="logo-cell c2">영</span>
              <span className="logo-cell c3">학</span>
              <span className="logo-cell c4">사</span>
            </div>
            <div className="logo-text-group">
              <span className="logo-sub">{ORG_INFO.corporateName}</span>
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
              <Heart size={15} fill="#fff" /> 후원하기
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

      {/* Mobile Drawer */}
      {mobileOpen && <div className="gnb-m-overlay" onClick={() => setMobileOpen(false)} />}
      <div id="gnbM" className={mobileOpen ? 'open' : ''}>
        <div style={{ marginBottom: '16px', paddingBottom: '14px', borderBottom: '2px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
            {ORG_INFO.corporateName}
          </div>
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
            <Heart size={16} fill="#fff" /> 온라인 후원신청 바로가기
          </button>
          <a
            href={ORG_INFO.happybeanUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '11px',
              borderRadius: '50px',
              background: 'var(--color-primary-soft)',
              color: 'var(--color-primary-dark)',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}
          >
            네이버 해피빈 모금함 바로가기 ↗
          </a>
        </div>
      </div>
    </>
  );
}

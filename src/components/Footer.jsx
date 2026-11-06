import React from 'react';
import { ORG_INFO, PARTNER_LINKS } from '../data/siteData';
import { Lock, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer({ onNavigate, onOpenAdmin }) {
  const handleFamilySite = (e) => {
    const url = e.target.value;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      e.target.value = '';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer">
        <div className="inner">
          <div className="footer-top">
            <div className="footer-logo-info">
              {/* Shinsengwon 2x2 Green Grid Logo in Footer */}
              <div className="logo-wrap" onClick={() => onNavigate('home', '')}>
                <div className="logo-grid-symbol" aria-hidden="true">
                  <span className="logo-cell c1">육</span>
                  <span className="logo-cell c2">영</span>
                  <span className="logo-cell c3">학</span>
                  <span className="logo-cell c4">사</span>
                </div>
                <div className="logo-text-group">
                  <span className="logo-sub" style={{ color: '#7fd19e' }}>{ORG_INFO.corporateName}</span>
                  <span className="logo-main" style={{ color: '#ffffff' }}>{ORG_INFO.name}</span>
                </div>
              </div>

              <div className="footer-info">
                <p>
                  <strong>{ORG_INFO.corporateName} {ORG_INFO.name}</strong> | 시설장 : {ORG_INFO.director} | 고유번호 : {ORG_INFO.businessNumber}
                </p>
                <p>
                  주소 : ({ORG_INFO.zipcode}) {ORG_INFO.address} {ORG_INFO.addressDetail}
                </p>
                <p>
                  대표전화 : <strong>{ORG_INFO.tel}</strong> | 팩스 : {ORG_INFO.fax} | 이메일 : {ORG_INFO.email}
                </p>
                <p style={{ color: '#7fd19e' }}>
                  후원계좌 : {ORG_INFO.bank.name} {ORG_INFO.bank.account} (예금주: {ORG_INFO.bank.holder})
                </p>
              </div>
            </div>

            <div className="footer-family">
              <select onChange={handleFamilySite} defaultValue="" aria-label="유관기관 사이트 바로가기">
                <option value="" disabled>유관기관 사이트 바로가기</option>
                {PARTNER_LINKS.map((link, idx) => (
                  <option key={idx} value={link.url}>
                    {link.name} ({link.logoText})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Copyright © {new Date().getFullYear()} {ORG_INFO.corporateName} {ORG_INFO.name}. All Rights Reserved.</p>
            <div className="footer-links">
              <button
                type="button"
                className="privacy"
                onClick={() => onNavigate('community', 'privacy-policy')}
              >
                개인정보처리방침
              </button>
              <button
                type="button"
                onClick={() => onNavigate('about', 'location')}
              >
                찾아오시는 길
              </button>
              <button
                type="button"
                onClick={() => onNavigate('support', 'donation')}
              >
                후원계좌 안내
              </button>
              <a href={ORG_INFO.happybeanUrl} target="_blank" rel="noopener noreferrer">
                네이버 해피빈
              </a>
              <button
                type="button"
                onClick={onOpenAdmin}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#999' }}
              >
                <Lock size={12} /> 관리자센터
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="floating-btns">
        <a
          href={ORG_INFO.kakaoChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="kakao-float-btn"
          title="카카오톡 채널 상담"
        >
          <MessageCircle size={18} />
          <span>카톡상담</span>
        </a>
        <button
          type="button"
          className="top-btn"
          onClick={scrollToTop}
          title="맨 위로 이동"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </>
  );
}

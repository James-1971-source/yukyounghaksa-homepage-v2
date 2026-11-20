import React from 'react';
import { ORG_INFO } from '../data/siteData';
import { Lock, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer({ onNavigate, onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer">
        <div className="inner">
          <div className="footer-top">
            <div className="footer-logo-info">
              {/* 요청사항 1번: 로고에는 "육영학사"만 표기 */}
              <div className="logo-wrap" onClick={() => onNavigate('home', '')}>
                <div className="logo-grid-symbol" aria-hidden="true">
                  <span className="logo-cell c1">육</span>
                  <span className="logo-cell c2">영</span>
                  <span className="logo-cell c3">학</span>
                  <span className="logo-cell c4">사</span>
                </div>
                <div className="logo-text-group">
                  <span className="logo-main" style={{ color: '#ffffff' }}>{ORG_INFO.name}</span>
                </div>
              </div>

              <div className="footer-info">
                <p>
                  <strong>{ORG_INFO.name}</strong> | 시설장 : {ORG_INFO.director} | 고유번호 : {ORG_INFO.businessNumber}
                </p>
                <p>
                  주소 : ({ORG_INFO.zipcode}) {ORG_INFO.address} {ORG_INFO.addressDetail}
                </p>
                <p>
                  대표전화 : <strong>{ORG_INFO.tel}</strong> | 팩스 : {ORG_INFO.fax} | 이메일 : {ORG_INFO.email}
                </p>
                <p style={{ color: '#FFD54F' }}>
                  후원계좌 : {ORG_INFO.bank.name} {ORG_INFO.bank.account} (예금주: {ORG_INFO.bank.holder})
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Copyright © {new Date().getFullYear()} {ORG_INFO.name}. All Rights Reserved.</p>
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
              <button
                type="button"
                onClick={() => onNavigate('support', 'designated-deposit')}
              >
                지정기탁서
              </button>
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

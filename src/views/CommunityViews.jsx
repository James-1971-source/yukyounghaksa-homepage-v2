import React, { useState } from 'react';
import { INITIAL_NEWSLETTERS } from '../data/siteData';
import { Download, Eye, Calendar, User, BookOpen, ShieldCheck } from 'lucide-react';

// 1. 공지사항
export function NoticeListView({ notices, selectedNotice, onSelectNotice, onBackToList }) {
  if (selectedNotice) {
    return (
      <div className="view-container">
        <div style={{
          borderTop: '2px solid #1b65a5',
          borderBottom: '1px solid #dce4eb',
          padding: '20px 0',
          marginBottom: '24px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#111', marginBottom: 12 }}>
            {selectedNotice.title}
          </h2>
          <div style={{ display: 'flex', gap: 16, fontSize: '13px', color: '#777' }}>
            <span><strong>작성일:</strong> {selectedNotice.date}</span>
            <span><strong>작성자:</strong> {selectedNotice.author}</span>
            <span><strong>조회수:</strong> {selectedNotice.views}</span>
          </div>
        </div>

        <div style={{ fontSize: '15px', color: '#333', lineHeight: 1.85, minHeight: '180px', padding: '10px 0' }}>
          {selectedNotice.content}
        </div>

        <div style={{ textAlign: 'center', marginTop: 30, borderTop: '1px solid #edf1f6', paddingTop: 20 }}>
          <button
            type="button"
            onClick={onBackToList}
            className="btn-secondary-action"
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          육영학사의 새로운 소식과 주요 공지사항을 알려드립니다.
        </p>
      </div>

      <table className="custom-info-table">
        <thead>
          <tr>
            <th style={{ width: '10%' }}>번호</th>
            <th>제목</th>
            <th style={{ width: '16%' }}>작성자</th>
            <th style={{ width: '16%' }}>작성일</th>
            <th style={{ width: '12%' }}>조회</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((n, index) => (
            <tr
              key={n.id}
              style={{ cursor: 'pointer' }}
              onClick={() => onSelectNotice(n)}
            >
              <td className="center" style={{ color: '#777' }}>{notices.length - index}</td>
              <td style={{ fontWeight: 600, color: '#222' }}>{n.title}</td>
              <td className="center" style={{ color: '#555' }}>{n.author}</td>
              <td className="center" style={{ color: '#777' }}>{n.date}</td>
              <td className="center" style={{ color: '#777' }}>{n.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 2. 육영 소식지 (HWPX 추가의견 4번: 이전 소식지 아카이브 기능)
export function NewsletterView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          육영학사에서 정기적으로 발행하는 소식지입니다. 이전 호까지 지속적으로 열람하실 수 있습니다.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {INITIAL_NEWSLETTERS.map((item) => (
          <div
            key={item.id}
            style={{
              background: '#ffffff',
              border: '1px solid #dce4eb',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ height: '220px', overflow: 'hidden', background: '#edf2f7' }}>
              <img
                src={item.coverImg}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '11.5px', color: '#1b65a5', fontWeight: 800, background: '#eef6fc', padding: '2px 8px', borderRadius: '4px' }}>
                  {item.issueNumber}
                </span>
                <h4 style={{ fontSize: '15px', fontWeight: 700, margin: '8px 0 4px 0', color: '#222' }}>
                  {item.title}
                </h4>
                <div style={{ fontSize: '12px', color: '#888' }}>발행일: {item.date}</div>
              </div>

              <div style={{ marginTop: 14 }}>
                <button
                  type="button"
                  onClick={() => alert(`[${item.title}] PDF 소식지 다운로드 준비 중입니다.`)}
                  style={{
                    width: '100%',
                    padding: '8px 0',
                    borderRadius: '4px',
                    border: '1px solid #1b65a5',
                    color: '#1b65a5',
                    fontSize: '13px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    background: '#f7fbfe'
                  }}
                >
                  <BookOpen size={14} /> 소식지 열람 (PDF)
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. 육영학사 이야기 (갤러리 - 아동 인권보호 기준 준수)
export function StoryGalleryView({ stories, selectedStory, onSelectStory, onBackToList }) {
  if (selectedStory) {
    return (
      <div className="view-container">
        <div style={{ borderTop: '2px solid #59a62a', borderBottom: '1px solid #dce4eb', padding: '20px 0', marginBottom: '24px' }}>
          <div style={{ fontSize: '12px', color: '#59a62a', fontWeight: 800, marginBottom: 4 }}>
            [{selectedStory.category}]
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#111', marginBottom: 8 }}>
            {selectedStory.title}
          </h2>
          <div style={{ fontSize: '13px', color: '#777' }}>등록일: {selectedStory.date}</div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <img
            src={selectedStory.img}
            alt={selectedStory.title}
            style={{ maxWidth: '100%', maxHeight: '450px', borderRadius: '8px', objectFit: 'cover' }}
          />
        </div>

        <p style={{ fontSize: '15px', color: '#333', lineHeight: 1.8 }}>
          {selectedStory.desc}
        </p>

        <div style={{ textAlign: 'center', marginTop: 30, borderTop: '1px solid #edf1f6', paddingTop: 20 }}>
          <button type="button" onClick={onBackToList} className="btn-secondary-action">
            목록으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          아이들의 일상과 다양한 활동 소식을 전해드립니다. (아동 인권 및 개인정보 보호 지침을 준수합니다)
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {stories.map((s) => (
          <div
            key={s.id}
            onClick={() => onSelectStory(s)}
            style={{
              background: '#ffffff',
              border: '1px solid #dce4eb',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s'
            }}
          >
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img
                src={s.img}
                alt={s.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
              />
            </div>
            <div style={{ padding: '16px' }}>
              <span style={{ fontSize: '11.5px', color: '#59a62a', fontWeight: 800 }}>
                {s.category}
              </span>
              <h4 style={{ fontSize: '15.5px', fontWeight: 700, margin: '6px 0', color: '#222' }}>
                {s.title}
              </h4>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.5, maxHeight: '38px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {s.desc}
              </p>
              <div style={{ fontSize: '12px', color: '#999', marginTop: 10 }}>{s.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. 개인정보처리방침 및 아동정보보호기준 (HWPX 21, 22, 23, 24번 100% 반영)
export function PrivacyPolicyView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          육영학사는 아동의 인권과 사생활, 그리고 이용자의 개인정보를 가장 안전하고 엄격하게 보호합니다.
        </p>
      </div>

      <div style={{ fontSize: '14.5px', color: '#444', lineHeight: 1.85 }}>
        <h3 className="content-section-title">
          <ShieldCheck size={18} className="section-icon-sprout" /> 1. 아동 인권 및 개인정보·초상권 보호 원칙 (문서 기준)
        </h3>
        <p style={{ marginBottom: 12 }}>
          육영학사는 아동복지시설로서 시설 아동의 사생활 보호와 권리 증진을 최우선으로 합니다.
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <li><strong>얼굴 공개 기준:</strong> 외부 공개에 필요한 사전 동의가 명확히 확인된 사진만 사용하며, 동의 여부가 불명확한 경우 얼굴 모자이크 처리 또는 식별 불가 사진을 사용합니다.</li>
          <li><strong>민감정보 비공개 기준:</strong> 아동의 성명, 생년월일, 주민번호, 학교명/학년, 가족관계, 입소사유, 심리·의료·장애 정보 및 사례관리 내용은 일체 공개하지 않습니다.</li>
          <li><strong>퇴소 아동 게시물 관리:</strong> 등록 시점부터 특정 아동이 식별되지 않도록 프로그램 중심 사진으로 관리하며, 당사자 요청 시 즉시 비공개/삭제 조치합니다.</li>
        </ul>

        <h3 className="content-section-title">
          <ShieldCheck size={18} className="section-icon-sprout" /> 2. 홈페이지 개인정보 처리방침
        </h3>
        <p style={{ marginBottom: 12 }}>
          사회복지법인 육영복지재단 육영학사는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 관련 고충을 신속하게 처리하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
        </p>
        <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <li><strong>개인정보 수집 항목:</strong> 온라인 후원 및 자원봉사 신청 시 성명, 연락처, 이메일, 주소, VMS 아이디 등 최소한의 필수 정보.</li>
          <li><strong>처리 목적:</strong> 후원금·물품 관리, 기부금영수증 발급, 자원봉사 일정 조율 및 VMS 실적 등록.</li>
          <li><strong>보유 및 이용 기간:</strong> 관계 법령에 따른 법정 보존 기간(5년) 동안 안전하게 보관 후 파기합니다.</li>
          <li><strong>개인정보 보호책임자:</strong> 육영학사 시설장 이혜련 (문의: 053-986-1009)</li>
        </ul>
      </div>
    </div>
  );
}

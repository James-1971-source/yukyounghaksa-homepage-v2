import React from 'react';
import { ORG_INFO } from '../data/siteData';
import {
  Plus,
  ChevronRight,
  MessageCircle,
  HeartHandshake,
  PhoneCall
} from 'lucide-react';

export default function MainBottomSection({
  notices = [],
  stories = [],
  onNavigate,
  onSelectNotice,
  onSelectStory
}) {
  const featuredStory = stories[0] || null;
  const recentStories = stories.slice(1, 4);
  const topNotices = notices.slice(0, 4);

  return (
    <div className="main-content-wrap">
      {/* 1. 육영학사 이야기 (요청사항 3번: 대구SOS어린이마을 및 메인 배치 예시 반영) */}
      <section className="main-story-section">
        <div className="inner">
          <div className="main-sec-header">
            <h3>육영학사 이야기</h3>
            <button
              type="button"
              className="btn-more-link"
              onClick={() => onNavigate('community', 'story')}
            >
              전체보기 <Plus size={15} />
            </button>
          </div>

          <div className="sos-story-grid">
            {/* 좌측: 대표 활동 소식 1건 (큰 사진 + 제목 + 짧은 소개) */}
            {featuredStory && (
              <div
                className="sos-featured-card"
                onClick={() => onSelectStory(featuredStory)}
                role="button"
                tabIndex={0}
              >
                <div className="sos-featured-img">
                  <img
                    src={featuredStory.img || featuredStory.image}
                    alt={featuredStory.title}
                  />
                  <span className="sos-cat-tag">{featuredStory.category}</span>
                </div>
                <div className="sos-featured-body">
                  <h4>{featuredStory.title}</h4>
                  <p>{featuredStory.desc || featuredStory.excerpt}</p>
                  <div className="sos-meta-row">
                    <span>{featuredStory.date}</span>
                    <span className="sos-read-more">
                      자세히 보기 <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 우측: 최근 소식 3건 (작은 사진 + 제목 + 요약) */}
            <div className="sos-side-list">
              {recentStories.map((story) => (
                <div
                  key={story.id}
                  className="sos-side-item"
                  onClick={() => onSelectStory(story)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="sos-side-thumb">
                    <img src={story.img || story.image} alt={story.title} />
                  </div>
                  <div className="sos-side-txt">
                    <span className="sos-side-cat">{story.category}</span>
                    <h5>{story.title}</h5>
                    <p>{story.desc || story.excerpt}</p>
                    <span className="sos-side-date">더보기 &gt; · {story.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. 하단 3열 섹션: 공지사항 · 네이버 해피빈 · 무엇을 도와드릴까요? (요청사항 3, 4번 반영) */}
      <section className="main-triple-section">
        <div className="inner">
          <div className="main-triple-grid">
            {/* (1) 공지사항: 최근 제목 목록 바로 표시 */}
            <div className="triple-card notice-card">
              <div className="triple-card-head">
                <h4>공지사항</h4>
                <button
                  type="button"
                  className="btn-more-link"
                  onClick={() => onNavigate('community', 'notice')}
                >
                  더보기 <Plus size={14} />
                </button>
              </div>
              <ul className="triple-notice-list">
                {topNotices.map((item) => (
                  <li key={item.id} onClick={() => onSelectNotice(item)}>
                    <span className="bullet">•</span>
                    <span className="n-title">{item.title}</span>
                    <span className="n-date">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* (2) 네이버 해피빈: "해피빈 기부하기" 버튼만 육영학사 기부 페이지로 연결 */}
            <div className="triple-card happybean-card">
              <div className="triple-card-head">
                <h4>네이버 해피빈</h4>
              </div>
              <p className="triple-card-desc">
                온라인 기부 포털 네이버 해피빈을 통해 육영학사 아동들의 건강한 성장과 자립을 응원해 주세요.
              </p>
              <div className="triple-card-action">
                <a
                  href={ORG_INFO.happybeanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-happybean-donate"
                >
                  <HeartHandshake size={18} /> 해피빈 기부하기
                </a>
              </div>
            </div>

            {/* (3) 무엇을 도와드릴까요?: 문의 영역 + 카카오톡 채널 바로가기 + PC QR코드 */}
            <div className="triple-card help-card">
              <div className="triple-card-head">
                <h4>무엇을 도와드릴까요?</h4>
              </div>
              <div className="help-contact-info">
                <div className="help-tel">
                  <PhoneCall size={17} /> <strong>{ORG_INFO.tel}</strong>
                </div>
                <div className="help-sub">
                  팩스 {ORG_INFO.fax} · 이메일 {ORG_INFO.email}
                </div>
              </div>
              <div className="help-kakao-row">
                <a
                  href={ORG_INFO.kakaoChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-kakao-channel"
                >
                  <MessageCircle size={18} /> 카카오톡 채널
                </a>

                {/* PC에서는 QR코드를 함께 표시 */}
                <a
                  href={ORG_INFO.kakaoChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pc-qr-box"
                  title="카카오톡 채널 QR코드 (스마트폰 카메라로 스캔해 친구 추가)"
                >
                  <svg
                    viewBox="0 0 64 64"
                    width="48"
                    height="48"
                    aria-label="카카오톡 채널 QR코드"
                  >
                    <rect width="64" height="64" rx="6" fill="#ffffff" />
                    <path
                      d="M8 8h18v18H8V8zm4 4v10h10V12H12zm26-4h18v18H38V8zm4 4v10h10V12H42zM8 38h18v18H8V38zm4 4v10h10V42H12zm20-26h4v4h-4v-4zm0 8h4v8h-4v-8zm-8 8h12v4H24v-4zm14 6h6v6h-6v-6zm10 0h8v4h-8v-4zm-10 10h8v8h-8v-8zm12 4h6v4h-6v-4z"
                      fill="#222222"
                    />
                  </svg>
                  <span>카카오톡 QR</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

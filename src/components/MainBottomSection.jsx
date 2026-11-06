import React from 'react';
import { ORG_INFO } from '../data/siteData';
import {
  HeartHandshake,
  Users,
  MessageCircleHeart,
  PhoneCall,
  Plus
} from 'lucide-react';

export default function MainBottomSection({
  notices = [],
  stories = [],
  onNavigate,
  onSelectNotice,
  onSelectStory
}) {
  const topNotices = notices.slice(0, 5);
  const topThumbStories = stories.slice(0, 2);
  const showcaseStories = stories.slice(0, 3);

  return (
    <>
      {/* 1. Shinsengwon 2-Column Notice & Story Section */}
      <section className="notice-section">
        <div className="inner">
          <div className="notice-grid">
            {/* Left: 공지사항 */}
            <div className="notice-box">
              <div className="box-header">
                <h4>공지사항</h4>
                <button
                  type="button"
                  className="btn-more"
                  onClick={() => onNavigate('community', 'notice')}
                >
                  더보기 <Plus size={15} />
                </button>
              </div>
              <ul className="board-list">
                {topNotices.map((item) => (
                  <li key={item.id} onClick={() => onSelectNotice(item)}>
                    <div className="title-wrap">
                      <span className="board-badge">공지</span>
                      <span className="title">{item.title}</span>
                    </div>
                    <span className="date">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: 육영학사 이야기 (2-column thumbnail box) */}
            <div className="notice-box">
              <div className="box-header">
                <h4>육영학사 이야기</h4>
                <button
                  type="button"
                  className="btn-more"
                  onClick={() => onNavigate('community', 'story')}
                >
                  더보기 <Plus size={15} />
                </button>
              </div>
              <div className="thumb-list">
                {topThumbStories.map((story) => (
                  <div
                    key={story.id}
                    className="thumb-item"
                    onClick={() => onSelectStory(story)}
                  >
                    <div className="img-box">
                      <img src={story.img || story.image} alt={story.title} />
                    </div>
                    <div className="txt">{story.title}</div>
                    <div className="sub-date">
                      {story.date} · {story.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shinsengwon Gallery Showcase Section */}
      <section className="gallery-section">
        <div className="inner">
          <div className="sec-title">
            <h3>육영학사의 하루, 이야기에 담아 드립니다.</h3>
            <p>아이들의 밝은 웃음과 따뜻한 성장의 순간들을 함께 나누어 보세요.</p>
          </div>
          <div className="gallery-grid">
            {showcaseStories.map((story) => (
              <div
                key={story.id}
                className="gallery-card"
                onClick={() => onSelectStory(story)}
              >
                <div className="gallery-img">
                  <img src={story.img || story.image} alt={story.title} />
                  <span className="gallery-cat-badge">{story.category}</span>
                </div>
                <div className="gallery-info">
                  <h5>{story.title}</h5>
                  <p>{story.desc || story.excerpt}</p>
                  <div className="date">{story.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Shinsengwon Parallax CTA Band */}
      <section className="cta-band">
        <div className="inner">
          <h3>아동의 건강한 성장과 당당한 자립을 위한 10대 지원사업</h3>
          <p>
            육영학사는 일상생활·치료·학습·문화·특성화 자립프로그램 「꿈JOB끼」까지
            <br />
            아이들이 스스로 살아갈 힘을 키울 수 있도록 체계적인 양육 서비스를 실천합니다.
          </p>
          <div className="cta-btn-group">
            <button
              type="button"
              className="cta-btn solid"
              onClick={() => onNavigate('program', 'independence-program')}
            >
              특성화 자립 「꿈JOB끼」 보기
            </button>
            <button
              type="button"
              className="cta-btn"
              onClick={() => onNavigate('program', 'overview')}
            >
              10대 영역 프로그램 안내
            </button>
          </div>
        </div>
      </section>

      {/* 4. Shinsengwon 4-Column Quick Service Banner Section */}
      <section className="quick-banner-section">
        <div className="inner">
          <div className="sec-title">
            <h3>무엇을 도와드릴까요? 빠른 서비스 안내입니다.</h3>
            <p>육영학사와 함께하는 따뜻한 나눔과 소통 창구를 안내해 드립니다.</p>
          </div>
          <div className="quick-banner-grid">
            <div className="qb-box">
              <div className="qb-icon">
                <HeartHandshake size={30} />
              </div>
              <h4>사랑의 후원안내</h4>
              <p>
                정기·일시 후원 및 물품·지정기탁 후원으로
                <br />
                아이들의 내일을 응원해 주세요.
              </p>
              <button
                type="button"
                className="qb-more"
                onClick={() => onNavigate('support', 'donation')}
              >
                More +
              </button>
            </div>

            <div className="qb-box">
              <div className="qb-icon">
                <Users size={30} />
              </div>
              <h4>자원봉사 안내</h4>
              <p>
                학습지도, 정서멘토링, 재능기부, 노력봉사 등
                <br />
                VMS 연계 자원봉사에 참여하세요.
              </p>
              <button
                type="button"
                className="qb-more"
                onClick={() => onNavigate('support', 'volunteer')}
              >
                More +
              </button>
            </div>

            <div className="qb-box">
              <div className="qb-icon">
                <MessageCircleHeart size={30} />
              </div>
              <h4>해피빈 & 카카오톡</h4>
              <p>
                네이버 해피빈 모금함 참여 및
                <br />
                카카오톡 실시간 상담 채널을 운영합니다.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href={ORG_INFO.happybeanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="qb-more"
                >
                  해피빈 ↗
                </a>
                <a
                  href={ORG_INFO.kakaoChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="qb-more"
                >
                  카카오톡 ↗
                </a>
              </div>
            </div>

            <div className="qb-box">
              <div className="qb-icon">
                <PhoneCall size={30} />
              </div>
              <h4>입소 및 방문상담</h4>
              <p>
                대표전화 <strong style={{ color: 'var(--color-primary-dark)' }}>{ORG_INFO.tel}</strong>
                <br />
                {ORG_INFO.address} {ORG_INFO.addressDetail}
              </p>
              <button
                type="button"
                className="qb-more"
                onClick={() => onNavigate('about', 'location')}
              >
                오시는 길 +
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

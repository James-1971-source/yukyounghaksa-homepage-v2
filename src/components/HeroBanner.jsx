import React, { useState, useEffect } from 'react';
import {
  Building2,
  ClipboardCheck,
  Sparkles,
  HeartHandshake,
  Users,
  Compass,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    badge: '사회복지법인 육영복지재단 육영학사',
    titleMain: '함께 살아가며,',
    titleHighlight: '스스로 살아갈 힘',
    titleTail: '을 키우는 곳',
    desc: '아이들의 오늘을 따뜻하게 지켜주고, 내일을 스스로 준비할 수 있도록 함께 걸어가는 아동양육시설 육영학사입니다.',
    eng: 'Warm Care, Healthy Growth, Hopeful Tomorrow',
    bgImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80',
    primaryAction: { label: '시설장 인사말', cat: 'about', sub: 'greeting' },
    secondaryAction: { label: '온라인 후원신청', cat: 'support', sub: 'donation-apply' }
  },
  {
    id: 2,
    badge: '10대 전문 지원사업 & 특성화 프로그램',
    titleMain: '아이들의 꿈과 재능을 키우는',
    titleHighlight: '특성화 자립지원 「꿈JOB끼」',
    titleTail: '',
    desc: '일상생활·치료·학습·문화·진로탐색부터 퇴소 후 사후관리까지 아동 개개인의 눈높이에 맞춘 통합 양육 서비스를 제공합니다.',
    eng: 'Customized Growth & Self-Reliance Program',
    bgImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
    primaryAction: { label: '프로그램 안내', cat: 'program', sub: 'overview' },
    secondaryAction: { label: '자립정보센터', cat: 'independence', sub: 'info-list' }
  },
  {
    id: 3,
    badge: '따뜻한 동행 · 나눔과 섬김',
    titleMain: '작은 나눔이 모여 아이들의',
    titleHighlight: '든든한 내일과 희망',
    titleTail: '이 됩니다',
    desc: '후원자분들과 자원봉사자분들의 따뜻한 관심과 사랑은 육영학사 아동들이 건강한 사회 구성원으로 성장하는 가장 큰 힘입니다.',
    eng: 'Sharing Love & Building Hope Together',
    bgImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80',
    primaryAction: { label: '후원안내 보기', cat: 'support', sub: 'donation' },
    secondaryAction: { label: '자원봉사 신청', cat: 'support', sub: 'volunteer-apply' }
  }
];

const QUICK_MENU_ITEMS = [
  { label: '학사소개', sub: '연혁·조직·오시는길', icon: Building2, cat: 'about', page: 'corporate' },
  { label: '입소안내', sub: '대상 및 입소절차', icon: ClipboardCheck, cat: 'admission', page: 'target' },
  { label: '꿈JOB끼 프로그램', sub: '10대 영역·특성화', icon: Sparkles, cat: 'program', page: 'independence-program' },
  { label: '온라인 후원신청', sub: '정기·일시·지정기탁', icon: HeartHandshake, cat: 'support', page: 'donation-apply' },
  { label: '자원봉사 신청', sub: 'VMS 연계 봉사활동', icon: Users, cat: 'support', page: 'volunteer-apply' },
  { label: '자립정보센터', sub: '주거·금융·전담기관', icon: Compass, cat: 'independence', page: 'info-list' }
];

export default function HeroBanner({ onNavigate }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);

  return (
    <>
      {/* Shinsengwon Full-Width Hero Visual */}
      <section id="mainVisual" aria-label="메인 비주얼 배너">
        <div className="visual-slider">
          {SLIDES.map((s, idx) => (
            <div
              key={s.id}
              className={`slide ${idx === current ? 'active' : ''}`}
              style={{ backgroundImage: `url('${s.bgImage}')` }}
            >
              <div className="vis-txt">
                <span className="vis-badge">{s.badge}</span>
                <h2>
                  {s.titleMain}
                  <br />
                  <span>{s.titleHighlight}</span>
                  {s.titleTail}
                </h2>
                <p className="vis-desc">{s.desc}</p>
                <p className="eng">{s.eng}</p>
                <div className="vis-btns">
                  <button
                    type="button"
                    className="vis-btn-primary"
                    onClick={() => onNavigate(s.primaryAction.cat, s.primaryAction.sub)}
                  >
                    {s.primaryAction.label} →
                  </button>
                  <button
                    type="button"
                    className="vis-btn-outline"
                    onClick={() => onNavigate(s.secondaryAction.cat, s.secondaryAction.sub)}
                  >
                    {s.secondaryAction.label}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button type="button" className="slider-arrow prev" onClick={prevSlide} aria-label="이전 슬라이드">
          <ChevronLeft size={24} />
        </button>
        <button type="button" className="slider-arrow next" onClick={nextSlide} aria-label="다음 슬라이드">
          <ChevronRight size={24} />
        </button>

        <div className="slider-controls">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`slider-dot ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`${idx + 1}번 슬라이드`}
            />
          ))}
        </div>
      </section>

      {/* Shinsengwon Floating Quick Icon Menu Bar */}
      <div className="quick-menu">
        <div className="inner">
          <div className="quick-list">
            {QUICK_MENU_ITEMS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  className="quick-item"
                  onClick={() => onNavigate(item.cat, item.page)}
                >
                  <div className="quick-icon">
                    <IconComp size={26} />
                  </div>
                  <span>{item.label}</span>
                  <small>{item.sub}</small>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}


import React, { useState, useEffect } from 'react';
import {
  DoorOpen,
  LayoutGrid,
  Heart,
  Users,
  FileSignature,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    titleLine1: '함께 살아가며,',
    titleLine2: '스스로 살아갈 힘을 키우는 곳',
    hanjaTitle: '육영학사  育英學舍',
    meaningText: '영재를 가르치고 키우는 집',
    desc: '아이들의 오늘을 따뜻하게 지켜주고, 내일을 스스로 준비할 수 있도록 함께 걸어가는 아동양육시설 육영학사입니다.',
    bgImage: '/images/hero/hero-1.jpg'
  },
  {
    id: 2,
    titleLine1: '함께 살아가며,',
    titleLine2: '스스로 살아갈 힘을 키우는 곳',
    hanjaTitle: '육영학사  育英學舍',
    meaningText: '영재를 가르치고 키우는 집',
    desc: '아이들의 이야기를 귀 기울여 듣고, 성장 단계에 맞춰 진로를 탐색하며 스스로 생활할 힘을 기를 수 있도록 돕습니다.',
    bgImage: '/images/hero/hero-2.jpg'
  },
  {
    id: 3,
    titleLine1: '함께 살아가며,',
    titleLine2: '스스로 살아갈 힘을 키우는 곳',
    hanjaTitle: '육영학사  育英學舍',
    meaningText: '영재를 가르치고 키우는 집',
    desc: '후원자분들과 자원봉사자분들의 따뜻한 관심과 참여는 아이들이 건강한 사회 구성원으로 자라나는 든든한 힘이 됩니다.',
    bgImage: '/images/hero/hero-3.jpg'
  }
];

// 요청사항 2번: 입소안내, 프로그램, 후원신청, 자원봉사 신청, 지정기탁서, 소식지 바로가기 6종
// ("입소안내" 바로가기는 상단 "입퇴소안내"의 "입소대상 및 절차"로 연결)
const QUICK_MENU_ITEMS = [
  { label: '입소안내', icon: DoorOpen, cat: 'admission', page: 'target' },
  { label: '프로그램', icon: LayoutGrid, cat: 'program', page: 'overview' },
  { label: '후원신청', icon: Heart, cat: 'support', page: 'donation-apply' },
  { label: '자원봉사 신청', icon: Users, cat: 'support', page: 'volunteer-apply' },
  { label: '지정기탁서', icon: FileSignature, cat: 'support', page: 'designated-deposit' },
  { label: '소식지', icon: BookOpen, cat: 'community', page: 'newsletter' }
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
      {/* 대구아동복지센터 PC/모바일 참고화면처럼 상단 메뉴 뒤까지 배너 사진이 넓게 이어지는 히어로 배너 */}
      <section id="mainVisual" aria-label="메인 비주얼 배너">
        <div className="visual-slider">
          {SLIDES.map((s, idx) => (
            <div
              key={s.id}
              className={`slide ${idx === current ? 'active' : ''}`}
              style={{ backgroundImage: `url('${s.bgImage}')` }}
            >
              <div className="vis-txt">
                <h2>
                  {s.titleLine1}
                  <br />
                  {s.titleLine2}
                </h2>
                <div className="vis-hanja-block">
                  <div className="vis-hanja-title">{s.hanjaTitle}</div>
                  <div className="vis-hanja-meaning">{s.meaningText}</div>
                </div>
                <p className="vis-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button type="button" className="slider-arrow prev" onClick={prevSlide} aria-label="이전 슬라이드">
          <ChevronLeft size={26} />
        </button>
        <button type="button" className="slider-arrow next" onClick={nextSlide} aria-label="다음 슬라이드">
          <ChevronRight size={26} />
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

      {/* 메인 배너 아래 6개 아이콘 바로가기 (요청사항 2번 & 배치 예시 반영) */}
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
                    <IconComp size={24} />
                  </div>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

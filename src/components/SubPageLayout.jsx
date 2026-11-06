import React from 'react';
import { NAV_ITEMS, ORG_INFO } from '../data/siteData';
import { Home, ChevronRight } from 'lucide-react';

const CATEGORY_META = {
  about: {
    eng: 'ABOUT YUKYOUNG HAKSA',
    desc: '함께 살아가며 스스로 살아갈 힘을 키우는 따뜻한 보금자리 육영학사를 소개합니다.'
  },
  admission: {
    eng: 'ADMISSION GUIDE',
    desc: '아동의 권익과 안전한 보호를 최우선으로 생각하는 입소 절차 및 상담 안내입니다.'
  },
  program: {
    eng: 'PROGRAMS & SERVICES',
    desc: '아이들의 건강한 성장과 자립 역량을 키우는 10대 지원사업과 특성화 프로그램을 소개합니다.'
  },
  support: {
    eng: 'DONATION & VOLUNTEER',
    desc: '후원자님과 자원봉사자님의 따뜻한 나눔이 아이들의 희망찬 내일을 만듭니다.'
  },
  independence: {
    eng: 'SELF-RELIANCE CENTER',
    desc: '보호아동 및 자립준비청년을 위한 주거·금융·취업 정보와 전담기관 연계 안내입니다.'
  },
  community: {
    eng: 'COMMUNITY & NEWS',
    desc: '육영학사의 새로운 소식과 소식지, 아이들의 일상을 전해 드립니다.'
  }
};

export default function SubPageLayout({ currentRoute, onNavigate, children }) {
  const activeMenuId = currentRoute?.menuId || 'about';
  const activeSubId = currentRoute?.subId || '';

  const categoryObj = NAV_ITEMS.find((item) => item.id === activeMenuId) || NAV_ITEMS[0];
  const subObj = categoryObj.subItems.find((sub) => sub.id === activeSubId) || categoryObj.subItems[0];
  const meta = CATEGORY_META[categoryObj.id] || CATEGORY_META.about;

  return (
    <div>
      {/* 1. Shinsengwon Sub-Visual Banner */}
      <section className={`sub-visual sub-${categoryObj.id}`}>
        <h1>{categoryObj.title}</h1>
        <p>{meta.desc}</p>
        <span className="sub-eng">{meta.eng}</span>
      </section>

      {/* 2. Shinsengwon Green Breadcrumb Bar (.sub-lnb-bar) */}
      <div className="sub-lnb-bar">
        <div className="sub-lnb-inner">
          <button type="button" onClick={() => onNavigate('home', '')}>
            <Home size={14} /> 홈
          </button>
          <ChevronRight size={14} style={{ opacity: 0.7 }} />
          <button type="button" onClick={() => onNavigate(categoryObj.id, categoryObj.subItems[0].id)}>
            {categoryObj.title}
          </button>
          <ChevronRight size={14} style={{ opacity: 0.7 }} />
          <strong>{subObj.title}</strong>
        </div>
      </div>

      {/* 3. Shinsengwon 2-Column Sub-Body (.side-menu + .content) */}
      <div className="sub-body">
        <aside className="side-menu">
          <div className="side-tit">
            {categoryObj.title}
            <small>{meta.eng}</small>
          </div>
          <ul>
            {categoryObj.subItems.map((sub) => (
              <li key={sub.id} className={sub.id === subObj.id ? 'on' : ''}>
                <button type="button" onClick={() => onNavigate(categoryObj.id, sub.id)}>
                  <span>{sub.title}</span>
                  <ChevronRight size={15} />
                </button>
              </li>
            ))}
          </ul>

          {/* Side Contact Box */}
          <div className="side-contact">
            <h4>육영학사 상담·문의</h4>
            <div className="tel">{ORG_INFO.tel}</div>
            <p>
              팩스 : {ORG_INFO.fax}
              <br />
              이메일 : {ORG_INFO.email}
              <br />
              주소 : {ORG_INFO.address}
            </p>
            <div className="side-ext-links">
              <a
                href={ORG_INFO.happybeanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="side-ext-btn happybean"
              >
                <span>🌱 해피빈 모금함</span>
                <span>↗</span>
              </a>
              <a
                href={ORG_INFO.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="side-ext-btn kakao"
              >
                <span>💬 카카오톡 채널 상담</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </aside>

        <main className="content">
          <h2 className="page-tit">{subObj.title}</h2>
          {children}
        </main>
      </div>
    </div>
  );
}

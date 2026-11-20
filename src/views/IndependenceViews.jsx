import React, { useState } from 'react';
import { INITIAL_INDEPENDENCE_INFO } from '../data/siteData';
import { ExternalLink } from 'lucide-react';

// 1. 자립정보 게시판 (요청사항 9번: 관리자 화면에서 수시로 글을 올리고 수정할 수 있도록 동적 목록 연동)
export function IndependenceInfoView({ independenceList = INITIAL_INDEPENDENCE_INFO }) {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['전체', '주거지원', '금융·자산형성', '취업·직업훈련', '교육·장학금', '의료·심리지원'];

  const filteredItems = independenceList.filter((item) => {
    const matchCategory = selectedCategory === '전체' || item.category === selectedCategory;
    const matchSearch =
      (item.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.content || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          보호연장아동 및 자립준비청년의 안정적인 사회 정착과 도약을 위한 핵심 맞춤 정책 정보입니다.
        </p>
      </div>

      {/* 카테고리 필터 탭 */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '13.5px',
              fontWeight: 700,
              border: selectedCategory === cat ? '1px solid #3b8f5a' : '1px solid #d5e5db',
              background: selectedCategory === cat ? '#3b8f5a' : '#ffffff',
              color: selectedCategory === cat ? '#ffffff' : '#555',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 검색창 */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 24, maxWidth: '420px' }}>
        <input
          type="text"
          placeholder="자립 지원사업 또는 키워드 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-input-text"
        />
      </div>

      {/* 자립정보 카드 리스트 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            style={{
              background: '#ffffff',
              border: '1px solid #d5e5db',
              borderRadius: '10px',
              padding: '22px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                background: '#eaf5ee',
                color: '#254d38',
                fontSize: '12px',
                fontWeight: 800,
                padding: '4px 10px',
                borderRadius: '6px'
              }}>
                {item.category}
              </span>
              <span style={{ fontSize: '12.5px', color: '#888' }}>{item.date}</span>
            </div>

            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#222' }}>
              {item.title}
            </h3>

            <div style={{ fontSize: '13.5px', color: '#2d6a4f', fontWeight: 700 }}>
              지원 대상: {item.target}
            </div>

            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
              {item.content}
            </p>

            {item.link && (
              <div style={{ marginTop: 6, display: 'flex', justifyContent: 'flex-end' }}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#254d38',
                    padding: '7px 14px',
                    background: '#f4faf6',
                    borderRadius: '6px',
                    border: '1px solid #c5e0ce'
                  }}
                >
                  신청 및 공식 공고 확인 <ExternalLink size={13} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. 자립지원 자원 연계 (요청사항 9번: "자립지원전담기관 연계" -> "자립지원 자원 연계", 공식 기관 및 공공 지원 창구 중심 안내, 기관명 등 짧은 항목 가운데 정렬)
export function AgencyLinkView() {
  const resources = [
    {
      name: '대구자립지원전담기관\n(대구자립통합지원센터)',
      category: '자립전담기관',
      desc: '대구 지역 보호종료(자립준비) 청년 맞춤형 사후관리, 자립수당·정착금 상담 및 생활·주거·취업 통합 지원',
      url: 'https://jarip.ncrc.or.kr'
    },
    {
      name: '아동권리보장원\n(자립정보ON)',
      category: '공공 포털',
      desc: '전국 자립준비청년 대상 주거·금융·교육·취업 지원제도 안내 및 디딤씨앗통장(CDA) 정책 안내',
      url: 'https://jaripon.ncrc.or.kr'
    },
    {
      name: '한국토지주택공사\n(LH 청약플러스)',
      category: '주거 지원',
      desc: '자립준비청년 전세임대·매입임대 주택 우선 공급 및 주거안정 신청 창구',
      url: 'https://apply.lh.or.kr'
    },
    {
      name: '고용24 / 국민취업지원제도',
      category: '취업·직업훈련',
      desc: '청년 구직촉진수당, 내일배움카드 직업훈련, 일경험 프로그램 및 취업 알선',
      url: 'https://www.work24.go.kr'
    },
    {
      name: '한국장학재단',
      category: '교육·장학금',
      desc: '국가장학금, 학자금 대출, 푸른등대 기부장학금 및 대학생 연합기숙사 신청',
      url: 'https://www.kosaf.go.kr'
    },
    {
      name: '복지로 (보건복지부)',
      category: '복지·의료·심리',
      desc: '청년마음건강지원 바우처, 청년내일저축계좌 및 각종 공공 복지급여 온라인 신청',
      url: 'https://www.bokjiro.go.kr'
    }
  ];

  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          자립을 준비하는 아동·청년이 지속적으로 참고하고 활용할 수 있는 공식 기관과 공공 지원 창구를 안내합니다.
        </p>
      </div>

      <table className="custom-info-table">
        <thead>
          <tr>
            <th style={{ width: '16%' }}>분야</th>
            <th style={{ width: '25%' }}>기관명 / 지원 창구</th>
            <th>주요 역할 및 지원 내용</th>
            <th style={{ width: '16%' }}>바로가기</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((res, idx) => (
            <tr key={idx}>
              <td className="center" style={{ fontWeight: 700, color: '#254d38' }}>
                {res.category}
              </td>
              <td className="center" style={{ fontWeight: 800, color: '#222', whiteSpace: 'pre-line' }}>
                {res.name}
              </td>
              <td style={{ fontSize: '14px', lineHeight: 1.65 }}>
                {res.desc}
              </td>
              <td className="center">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#254d38',
                    fontWeight: 700,
                    background: '#eaf5ee',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '13px'
                  }}
                >
                  바로가기 <ExternalLink size={12} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

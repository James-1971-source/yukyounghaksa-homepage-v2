import React, { useState } from 'react';
import { INITIAL_INDEPENDENCE_INFO } from '../data/siteData';
import { ExternalLink, Search, Home, DollarSign, Briefcase, GraduationCap, HeartPulse, Building2 } from 'lucide-react';

export function IndependenceInfoView() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['전체', '주거지원', '금융·자산형성', '취업·직업훈련', '교육·장학금', '의료·심리지원'];

  const filteredItems = INITIAL_INDEPENDENCE_INFO.filter((item) => {
    const matchCategory = selectedCategory === '전체' || item.category === selectedCategory;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.content.toLowerCase().includes(searchTerm.toLowerCase());
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
              border: '1px solid #ccd7e2',
              background: selectedCategory === cat ? '#1b65a5' : '#ffffff',
              color: selectedCategory === cat ? '#ffffff' : '#555',
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
              border: '1px solid #dce4eb',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                background: '#eef6fc',
                color: '#1b65a5',
                fontSize: '12px',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '4px'
              }}>
                {item.category}
              </span>
              <span style={{ fontSize: '12px', color: '#888' }}>{item.date}</span>
            </div>

            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#222' }}>
              {item.title}
            </h3>

            <div style={{ fontSize: '13px', color: '#2b6f0f', fontWeight: 600 }}>
              지원 대상: {item.target}
            </div>

            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.6 }}>
              {item.content}
            </p>

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
                  color: '#1b65a5',
                  padding: '6px 12px',
                  background: '#f4f8fc',
                  borderRadius: '4px',
                  border: '1px solid #cfe0ef'
                }}
              >
                신청 및 공식 공고 확인 <ExternalLink size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 자립지원전담기관 연계
export function AgencyLinkView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          대구자립지원전담기관 및 중앙 아동권리보장원과 긴밀히 연계하여 퇴소 후에도 지속적인 안전망을 제공합니다.
        </p>
      </div>

      <table className="custom-info-table">
        <thead>
          <tr>
            <th style={{ width: '30%' }}>기관명</th>
            <th>주요 역할 및 지원 내용</th>
            <th style={{ width: '22%' }}>바로가기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontWeight: 700 }}>대구자립지원전담기관</td>
            <td>대구 지역 자립준비청년 맞춤형 사례관리, 주거·취업·생계 정착비 지원</td>
            <td className="center">
              <a href="https://jarip.ncrc.or.kr" target="_blank" rel="noopener noreferrer" style={{ color: '#1b65a5', fontWeight: 600 }}>
                웹사이트 방문 &gt;
              </a>
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: 700 }}>아동권리보장원 (청년자립포털)</td>
            <td>국가 자립정착금, 자립수당(월 50만원), 디딤씨앗통장 정책 총괄</td>
            <td className="center">
              <a href="https://www.ncrc.or.kr" target="_blank" rel="noopener noreferrer" style={{ color: '#1b65a5', fontWeight: 600 }}>
                웹사이트 방문 &gt;
              </a>
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: 700 }}>한국토지주택공사 (LH 청약플러스)</td>
            <td>청년·자립준비청년 전세임대 및 매입임대 주택 공급 공고</td>
            <td className="center">
              <a href="https://apply.lh.or.kr" target="_blank" rel="noopener noreferrer" style={{ color: '#1b65a5', fontWeight: 600 }}>
                공고 확인 &gt;
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

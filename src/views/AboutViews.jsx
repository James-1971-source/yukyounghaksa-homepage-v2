import React, { useState } from 'react';
import { ORG_INFO, HISTORY_ITEMS, JOB_ROLES } from '../data/siteData';
import { Sprout, Compass, Shield, Award, Users, CheckCircle, MapPin, Bus, Car, Phone } from 'lucide-react';

// 1. 시설장 인사말
export function GreetingView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          “아이들이 머무는 곳을 넘어, 자신의 삶을 주체적으로 만들어 가는 따뜻한 보금자리가 되겠습니다.”
        </p>
      </div>

      <div style={{ fontSize: '15px', color: '#444', lineHeight: 1.85, marginBottom: 30 }}>
        <p style={{ marginBottom: 16 }}>
          <strong>육영학사는 1958년부터 60여 년이 넘는 오랜 시간 동안</strong> 대구 지역사회와 함께 아이들의 곁을 한결같이 지켜왔습니다.
        </p>
        <p style={{ marginBottom: 16 }}>
          우리가 만나는 아이들은 저마다 다른 사연과 이야기를 가슴에 품고 이곳에 옵니다. 때로는 충분히 사랑받지 못한 아픔도, 관계 속에서 받은 깊은 상처도 가지고 있습니다. 그렇기에 우리는 아이를 현재의 모습만으로 섣불리 판단하기보다, 그 아이가 살아온 시간을 먼저 깊이 이해하고 앞으로 스스로 살아갈 소중한 시간을 함께 바라보고자 합니다.
        </p>
        <p style={{ marginBottom: 16 }}>
          따뜻한 밥을 잘 먹고, 편안히 잠들고, 학교에 다니는 일상의 돌봄에서부터 자신의 감정과 마음을 올바르게 이해하고 다른 사람과 건강하게 관계 맺는 법을 배우는 일, 그리고 언젠가 스스로 자신의 삶을 책임감 있게 꾸려갈 수 있도록 차근차근 준비하는 과정까지 육영학사는 아이들의 모든 성장의 순간에 든든한 디딤돌이 되어 함께합니다.
        </p>
        <p style={{ marginBottom: 16 }}>
          한 아이를 건강하고 온전한 사회구성원으로 성장시키는 일은 시설만의 힘으로는 결코 해낼 수 없습니다. 오랜 시간 육영학사를 변함없이 지켜봐 주시고 응원해 주신 후원자와 자원봉사자, 지역주민과 여러 유관기관의 따뜻한 관심이 아이들에게는 세상과 연결되는 가장 소중한 희망의 끈이 됩니다.
        </p>
        <p style={{ marginBottom: 24 }}>
          앞으로도 육영학사는 아이들이 단순히 보호받는 존재에 머무르지 않고 <strong>자신의 삶을 스스로 선택하고 책임질 수 있는 건강한 사람으로 성장하도록 돕는 곳</strong>, 그리고 지역사회와 아이들이 따뜻하게 만나고 함께 성장하는 열린 공간이 되겠습니다.
        </p>
        <p>
          아이들의 행복한 오늘을 함께 지켜주시고, 그 아이들이 당당하게 열어갈 내일도 함께 따뜻하게 응원해 주시기를 부탁드립니다.
        </p>
      </div>

      <div style={{ textAlign: 'right', marginTop: 40, borderTop: '1px solid #edf1f6', paddingTop: 20 }}>
        <span style={{ fontSize: '14px', color: '#666', marginRight: 10 }}>사회복지법인 육영복지재단 육영학사</span>
        <span style={{ fontSize: '17px', fontWeight: 800, color: '#174e80' }}>시설장 이 혜 련</span>
      </div>
    </div>
  );
}

// 2. 법인 및 시설소개 (미션/비전/핵심가치 - 잉아터 스타일)
export function CorporateView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          “함께 살아가며, 스스로 살아갈 힘을 키우는 곳”
        </p>
      </div>

      <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: 24 }}>
        육영학사는 <strong>사회복지법인 육영복지재단</strong>이 운영하는 아동양육시설로, 1958년 시설인가 이후 대구 지역사회와 함께 보호가 필요한 아동들의 건강한 삶과 성장을 지원해 왔습니다. 아이들에게 필요한 것은 단순히 생활할 수 있는 물리적 공간만이 아닙니다. 편안하게 하루를 보내는 일상, 마음을 터놓을 수 있는 사람, 실패해도 다시 도전할 수 있는 든든한 신뢰, 그리고 자신의 미래를 당당히 꿈꾸고 준비할 수 있는 풍성한 기회가 필요합니다.
      </p>

      {/* 미션 / 비전 / 핵심가치 박스 (잉아터 레퍼런스 스타일) */}
      <div className="vision-cards-grid">
        <div className="vision-card-item">
          <div className="vision-icon-box">
            <Compass size={28} />
          </div>
          <div className="vision-text-group">
            <div className="vision-name">미션 (MISSION)</div>
            <div className="vision-desc">
              아동 개개인의 존엄성을 바탕으로 따뜻한 돌봄을 실천하고, 주체적인 자립 역량을 길러 건강한 사회구성원으로 함께 살아간다.
            </div>
          </div>
        </div>

        <div className="vision-card-item">
          <div className="vision-icon-box">
            <Award size={28} />
          </div>
          <div className="vision-text-group">
            <div className="vision-name">비전 (VISION)</div>
            <div className="vision-desc">
              보호받는 오늘을 넘어 자신의 내일을 스스로 선택하고 책임지는 행복한 아동, 지역사회와 따뜻하게 연대하는 열린 복지공동체.
            </div>
          </div>
        </div>

        <div className="vision-card-item">
          <div className="vision-icon-box">
            <Shield size={28} />
          </div>
          <div className="vision-text-group">
            <div className="vision-name">핵심가치 (CORE VALUES)</div>
            <div className="vision-desc">
              <strong>인간존중</strong> · <strong>자립성장</strong> · <strong>진정성</strong> · <strong>지역연대</strong> · <strong>투명경영</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 법인 개요 테이블 */}
      <h3 className="content-section-title">
        <Sprout size={18} className="section-icon-sprout" /> 법인 및 시설 기본개요
      </h3>
      <table className="custom-info-table">
        <tbody>
          <tr>
            <th style={{ width: '22%' }}>운영법인</th>
            <td>사회복지법인 육영복지재단</td>
            <th style={{ width: '22%' }}>시설명칭</th>
            <td>육영학사 (아동양육시설)</td>
          </tr>
          <tr>
            <th>시설장</th>
            <td>이혜련</td>
            <th>인가연월일</th>
            <td>1958년 9월 11일</td>
          </tr>
          <tr>
            <th>소재지</th>
            <td colSpan={3}>({ORG_INFO.zipcode}) {ORG_INFO.address}</td>
          </tr>
          <tr>
            <th>대표연락처</th>
            <td>전화: {ORG_INFO.tel}</td>
            <th>팩스 / 메일</th>
            <td>{ORG_INFO.fax} / {ORG_INFO.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 3. 최신 연혁
export function HistoryView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          1958년 설립 이래 대구 지역 아동들과 함께 걸어온 60여 년의 발자취입니다.
        </p>
      </div>

      <table className="custom-info-table">
        <thead>
          <tr>
            <th style={{ width: '18%' }}>연도 / 일자</th>
            <th>주요 연혁 및 시설 발전사</th>
          </tr>
        </thead>
        <tbody>
          {HISTORY_ITEMS.map((item, idx) => (
            <tr key={idx}>
              <td className="center" style={{ fontWeight: 700, color: '#174e80' }}>
                {item.year}. {item.date}
              </td>
              <td style={{ fontSize: '14.5px' }}>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 4. 조직 및 직위별 업무 표
export function OrganizationView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          전문성과 헌신을 바탕으로 아이들의 안전한 생활과 건강한 성장을 위해 유기적으로 협력합니다.
        </p>
      </div>

      {/* 조직도 다이어그램 */}
      <h3 className="content-section-title">
        <Users size={18} className="section-icon-sprout" /> 시설 조직체계
      </h3>
      <div style={{
        background: '#f6f9fc',
        border: '1px solid #dce5ee',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '28px',
        textAlign: 'center'
      }}>
        {/* 원장 */}
        <div style={{
          display: 'inline-block',
          background: '#1b65a5',
          color: '#fff',
          fontWeight: 800,
          padding: '10px 36px',
          borderRadius: '24px',
          fontSize: '16px',
          boxShadow: '0 2px 8px rgba(27,101,165,0.3)'
        }}>
          시설장 (원장)
        </div>

        {/* 연결선 */}
        <div style={{ width: 2, height: 24, background: '#a5c0d8', margin: '0 auto' }}></div>
        <div style={{ width: '60%', height: 2, background: '#a5c0d8', margin: '0 auto' }}></div>

        {/* 팀 그리드 */}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 14, gap: 20 }}>
          {/* 생활지원팀 */}
          <div style={{
            flex: 1,
            background: '#ffffff',
            border: '1px solid #cce0f0',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <div style={{ fontWeight: 800, color: '#174e80', fontSize: '15px', marginBottom: 8 }}>
              생활지원팀
            </div>
            <div style={{ fontSize: '13.5px', color: '#555' }}>
              선임생활지도원 · 생활지도원
            </div>
          </div>

          {/* 운영지원팀 */}
          <div style={{
            flex: 1,
            background: '#ffffff',
            border: '1px solid #c8e4ba',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <div style={{ fontWeight: 800, color: '#2b6f0f', fontSize: '15px', marginBottom: 8 }}>
              운영지원팀
            </div>
            <div style={{ fontSize: '13.5px', color: '#555' }}>
              자립지원전담요원(사무국장 대행) · 사무원 · 조리원 · 운전원
            </div>
          </div>
        </div>
      </div>

      {/* 직위별 주요업무 표 (HWPX 15번 전문) */}
      <h3 className="content-section-title">
        <CheckCircle size={18} className="section-icon-sprout" /> 직위별 주요 업무 안내
      </h3>
      <table className="custom-info-table">
        <thead>
          <tr>
            <th style={{ width: '28%' }}>직위</th>
            <th>주요 담당 업무</th>
          </tr>
        </thead>
        <tbody>
          {JOB_ROLES.map((role, idx) => (
            <tr key={idx}>
              <td style={{ fontWeight: 700, color: '#222' }}>{role.role}</td>
              <td style={{ fontSize: '13.5px', lineHeight: 1.6 }}>{role.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: '12.5px', color: '#888', marginTop: -14 }}>
        * 개인정보 보호와 원활한 시설 운영을 위해 개별 직원의 성명은 공개하지 않고 직위 및 업무 중심으로 안내하고 있습니다.
      </p>
    </div>
  );
}

// 5. 시설현황 및 전경 (잉아터 '내부전경' 스타일 갤러리 뷰어)
export function FacilityView() {
  const facilityPhotos = [
    {
      title: "건물 외관 전경",
      desc: "아이들이 안전하고 쾌적하게 생활할 수 있는 남·여 아동 생활관 및 본관 전경",
      img: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "아동 생활실",
      desc: "연령별 맞춤 가구와 학습 공간이 갖추어진 아늑하고 따뜻한 보금자리",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "원내 식당 및 급식실",
      desc: "균형 잡힌 위생적인 식단을 조리하고 함께 모여 식사하는 밝고 청결한 식당",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "다목적 프로그램실 및 강당",
      desc: "아동자치회, 생일파티, 특기적성 교육 및 문화행사를 진행하는 열린 공간",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "심리상담실 및 치료실",
      desc: "아이들의 정서적 안정과 마음 치유를 돕는 전문 심리검사 및 모래놀이 치료실",
      img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "자립체험관",
      desc: "퇴소를 앞둔 청소년과 보호연장아동이 독립된 일상생활 기술(요리, 정리 등)을 직접 체험해보는 공간",
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          아이들이 편안한 휴식과 따뜻한 유대감을 느끼며 미래를 준비할 수 있는 친환경 공간입니다.
        </p>
      </div>

      {/* 시설 개요 표 */}
      <table className="custom-info-table">
        <tbody>
          <tr>
            <th style={{ width: '22%' }}>시설유형</th>
            <td>아동양육시설</td>
            <th style={{ width: '22%' }}>입소아동 정원</th>
            <td><strong>42명</strong> (공개 기준)</td>
          </tr>
          <tr>
            <th>생활공간 구성</th>
            <td>남자동 생활관, 여자동 생활관</td>
            <th>주요 부대시설</th>
            <td>생활실, 식당, 강당, 심리치료실, 상담실, 자립체험관 등</td>
          </tr>
        </tbody>
      </table>

      {/* 잉아터 스타일 내부전경 갤러리 뷰어 */}
      <h3 className="content-section-title">
        <Sprout size={18} className="section-icon-sprout" /> 시설 전경 및 주요 공간 안내
      </h3>
      
      <div className="facility-gallery-wrapper">
        <div style={{ textAlign: 'center', fontSize: '18px', fontWeight: 800, color: '#333', marginBottom: 12 }}>
          [ {facilityPhotos[activeIndex].title} ]
        </div>

        <div className="gallery-main-frame">
          <img
            src={facilityPhotos[activeIndex].img}
            alt={facilityPhotos[activeIndex].title}
            className="gallery-main-img"
          />
          <div className="gallery-caption-bar">
            {facilityPhotos[activeIndex].desc}
          </div>
        </div>

        {/* 썸네일 스트립 */}
        <div className="gallery-thumbnail-strip">
          {facilityPhotos.map((photo, idx) => (
            <div
              key={idx}
              className={`gallery-thumb-item ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <img src={photo.img} alt={photo.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 6. 오시는 길
export function LocationView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          육영학사로 오시는 길을 상세히 안내해 드립니다.
        </p>
      </div>

      {/* 주소 안내 박스 */}
      <div style={{
        background: '#f8fafc',
        border: '1px solid #dbe3eb',
        borderRadius: '8px',
        padding: '22px',
        marginBottom: '26px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '17px', fontWeight: 800, color: '#174e80', marginBottom: 8 }}>
          <MapPin size={22} color="#d9381e" /> ({ORG_INFO.zipcode}) {ORG_INFO.address}
        </div>
        <div style={{ fontSize: '14px', color: '#666', paddingLeft: 32 }}>
          지번 주소: 대구광역시 동구 신평동 11-1
        </div>
        <div style={{ display: 'flex', gap: 20, marginTop: 14, paddingLeft: 32, fontSize: '14px', color: '#444' }}>
          <div><strong>대표전화:</strong> {ORG_INFO.tel}</div>
          <div><strong>팩스번호:</strong> {ORG_INFO.fax}</div>
          <div><strong>이메일:</strong> {ORG_INFO.email}</div>
        </div>
      </div>

      {/* 가상 지도 영역 */}
      <div style={{
        height: 320,
        background: '#e9eff5',
        borderRadius: '8px',
        border: '1px solid #ccd7e2',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '26px'
      }}>
        <iframe
          title="육영학사 위치 지도"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://maps.google.com/maps?q=대구광역시%20동구%20신평로%2057&t=&z=15&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
        ></iframe>
      </div>

      {/* 교통편 안내 */}
      <h3 className="content-section-title">
        <Bus size={18} className="section-icon-sprout" /> 대중교통 이용 안내
      </h3>
      <table className="custom-info-table">
        <tbody>
          <tr>
            <th style={{ width: '22%' }}>버스 이용 시</th>
            <td>
              신평동 또는 팔공로 방면 시내버스 탑승 후 <strong>‘신평동 입구’</strong> 정류장 하차 (도보 약 3분 소요)
            </td>
          </tr>
          <tr>
            <th>자가용 이용 시</th>
            <td>
              내비게이션에 <strong>‘육영학사’</strong> 또는 <strong>‘대구 동구 신평로 57’</strong> 검색 후 원내 주차장 이용
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

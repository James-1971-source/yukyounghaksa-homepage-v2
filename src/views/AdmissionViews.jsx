import React from 'react';
import { ORG_INFO } from '../data/siteData';
import { FileCheck, PhoneCall, HelpCircle, Home, Compass, ArrowRight } from 'lucide-react';

// 1. 입소대상 및 절차 (요청사항 28-33번: 입소상담 안내를 입소대상 및 절차에 통합 + 공식 게시 문안 반영)
export function AdmissionTargetView() {
  const admissionSteps = [
    { step: '01', title: '입소 상담', desc: '관할 시·군·구 아동보호 담당 부서 문의 및 시설 생활·입소 준비 안내' },
    { step: '02', title: '아동과 가정의 상황 확인 및 보호계획 수립', desc: '아동의 상황·의견 및 가정 여건을 종합적으로 확인하고 개별 보호계획 수립' },
    { step: '03', title: '지자체의 보호조치 결정', desc: '관할 시·군·구에서 아동의 상황과 의견 등을 살펴 시설 보호를 공식 결정' },
    { step: '04', title: '입소 및 초기 적응 지원', desc: '지자체와 입소를 협의하고 아동이 새로운 생활에 안정적으로 적응하도록 지원' }
  ];

  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          육영학사는 보호자가 없거나, 보호자가 아동을 양육하기 어렵거나 적절한 보호를 제공하기 어려워 보호가 필요한 아동을 돌보는 아동양육시설입니다.
        </p>
      </div>

      <div style={{ fontSize: '15.5px', color: '#333', lineHeight: 1.85, marginBottom: '28px' }}>
        <p style={{ marginBottom: '14px' }}>
          관할 시·군·구가 아동의 상황과 의견 등을 살펴 시설 보호를 결정하면, 육영학사는 지자체와 입소를 협의하고 아동이 새로운 생활에 적응하도록 돕습니다.
        </p>
        <p style={{
          background: '#fffdf2',
          border: '1px solid #f3dc8a',
          borderLeft: '4px solid #FFD54F',
          padding: '16px 20px',
          borderRadius: '8px',
          fontWeight: 600,
          color: '#333'
        }}>
          입소 상담은 관할 시·군·구 아동보호 담당 부서에 문의해 주세요. 육영학사에서는 시설 생활과 입소 준비에 관해 안내해 드립니다.
        </p>
      </div>

      {/* 입소 절차 단계 카드 */}
      <h3 className="content-section-title">
        <FileCheck size={18} className="section-icon-sprout" /> 입소 진행 절차
      </h3>

      <div className="step-flow-banner">
        <span>입소 상담</span>
        <ArrowRight size={16} />
        <span>아동과 가정의 상황 확인 및 보호계획 수립</span>
        <ArrowRight size={16} />
        <span>지자체의 보호조치 결정</span>
        <ArrowRight size={16} />
        <span>입소 및 초기 적응 지원</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
        marginBottom: '36px'
      }}>
        {admissionSteps.map((s, idx) => (
          <div
            key={s.step}
            style={{
              background: '#ffffff',
              border: '1px solid #d5e5db',
              borderRadius: '10px',
              padding: '20px 18px',
              borderTop: idx % 2 === 0 ? '4px solid #4cab6e' : '4px solid #FFD54F',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#3b8f5a' }}>STEP {s.step}</div>
            <div style={{ fontSize: '15.5px', fontWeight: 800, margin: '8px 0', color: '#222', lineHeight: 1.4 }}>
              {s.title}
            </div>
            <div style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.6 }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>

      {/* 통합된 입소상담 안내 섹션 */}
      <h3 className="content-section-title">
        <PhoneCall size={18} className="section-icon-sprout" /> 입소 상담 및 문의 안내
      </h3>
      <div style={{
        background: '#f8fbf9',
        border: '1px solid #cce3d4',
        borderRadius: '10px',
        padding: '22px 24px',
        marginBottom: '22px'
      }}>
        <div style={{ fontSize: '15px', fontWeight: 700, color: '#254d38', marginBottom: 6 }}>
          육영학사 시설 생활 및 입소 준비 안내
        </div>
        <div style={{ fontSize: '24px', fontWeight: 800, color: '#3b8f5a', marginBottom: 6 }}>
          {ORG_INFO.tel}
        </div>
        <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.6 }}>
          운영시간: {ORG_INFO.hours} | 팩스: {ORG_INFO.fax} | 이메일: {ORG_INFO.email}
        </p>
      </div>

      <table className="custom-info-table">
        <tbody>
          <tr>
            <th style={{ width: '26%' }}>입소 상담 및 신청</th>
            <td>관할 <strong>시·군·구 아동보호 담당 부서</strong></td>
          </tr>
          <tr>
            <th>아동학대 신고 및 긴급상담</th>
            <td><strong>112</strong> (경찰청) 또는 <strong>1391</strong> (아동보호전문기관)</td>
          </tr>
          <tr>
            <th>육영학사 안내 문의</th>
            <td><strong>{ORG_INFO.tel}</strong> (시설 생활과 입소 준비에 관해 상세히 안내해 드립니다)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 2. 퇴소절차 (요청사항 34-40번: 원가정 복귀 및 자립을 위한 보호 종료 게시 문안 100% 반영)
export function DischargeProcedureView() {
  const returnSteps = [
    { step: '01', title: '가정 복귀 신청', desc: '친권자나 후견인 등이 관할 지자체에 가정 복귀 신청' },
    { step: '02', title: '아동 의견과 가정의 안전·양육 여건 확인', desc: '아동의 의견과 가정의 양육 여건, 안전, 관계기관 의견 종합 확인' },
    { step: '03', title: '지자체의 복귀 결정', desc: '관할 지자체에서 심의를 통해 원가정 복귀 여부 결정' },
    { step: '04', title: '가정 복귀와 적응 지원', desc: '복귀 후 관계기관과 협력해 아동의 적응을 살피고 필요한 지원 연계' }
  ];

  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          아동의 의사와 안전을 최우선으로 고려하여 원가정 복귀와 자립을 위한 보호 종료 과정을 세심하게 지원합니다.
        </p>
      </div>

      {/* 1. 원가정 복귀 */}
      <h3 className="content-section-title">
        <Home size={18} className="section-icon-sprout" /> 원가정 복귀
      </h3>
      <div style={{
        background: '#ffffff',
        border: '1px solid #d5e5db',
        borderRadius: '10px',
        padding: '24px',
        marginBottom: '24px',
        fontSize: '15px',
        color: '#333',
        lineHeight: 1.85
      }}>
        <p style={{ marginBottom: '14px' }}>
          육영학사는 보호 중에도 아동의 의사와 안전, 개별 보호계획을 고려해 가족과의 면접교섭을 정기적으로 지원합니다. 원가정 복귀를 준비하는 경우에는 원가정복귀 프로그램을 통해 아동과 가족이 관계를 이어가고 함께 지낼 준비를 할 수 있도록 돕습니다.
        </p>
        <p>
          친권자나 후견인 등은 관할 지자체에 가정 복귀를 신청할 수 있습니다. 지자체는 아동의 의견과 가정의 양육 여건, 안전, 관계기관 의견을 종합해 복귀 여부를 결정합니다. 복귀 후에는 관계기관과 협력해 아동의 적응을 살피고 필요한 지원을 연계합니다.
        </p>
      </div>

      <div className="step-flow-banner">
        <span>가정 복귀 신청</span>
        <ArrowRight size={16} />
        <span>아동 의견과 가정의 안전·양육 여건 확인</span>
        <ArrowRight size={16} />
        <span>지자체의 복귀 결정</span>
        <ArrowRight size={16} />
        <span>가정 복귀와 적응 지원</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
        marginBottom: '40px'
      }}>
        {returnSteps.map((s, idx) => (
          <div
            key={s.step}
            style={{
              background: '#ffffff',
              border: '1px solid #d5e5db',
              borderRadius: '10px',
              padding: '20px 18px',
              borderTop: idx % 2 === 0 ? '4px solid #4cab6e' : '4px solid #FFD54F',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#3b8f5a' }}>STEP {s.step}</div>
            <div style={{ fontSize: '15.5px', fontWeight: 800, margin: '8px 0', color: '#222', lineHeight: 1.4 }}>
              {s.title}
            </div>
            <div style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.6 }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>

      {/* 2. 자립을 위한 보호 종료 */}
      <h3 className="content-section-title">
        <Compass size={18} className="section-icon-sprout" /> 자립을 위한 보호 종료
      </h3>
      <div style={{
        background: 'linear-gradient(135deg, #f8fbf9 0%, #fffdf5 100%)',
        border: '1px solid #d5e5db',
        borderLeft: '5px solid #4cab6e',
        borderRadius: '10px',
        padding: '26px',
        fontSize: '15.5px',
        color: '#333',
        lineHeight: 1.85
      }}>
        <p>
          육영학사는 아동·청년과 함께 진학·취업, 주거, 생활비 관리 등 퇴소 후 생활을 준비합니다. <strong>18세가 되어 보호를 연장할 의사가 있는 경우 법에 따라 25세에 달할 때까지 보호기간을 연장</strong>할 수 있습니다. 보호 종료를 준비하는 경우에는 본인의 의사와 준비 상황을 확인하고 관할 지자체와 절차를 진행합니다. 퇴소 전후에는 자립지원전담기관 등과 연계해 필요한 지원을 안내합니다.
        </p>
      </div>
    </div>
  );
}

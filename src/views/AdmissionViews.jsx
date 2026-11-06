import React from 'react';
import { ORG_INFO } from '../data/siteData';
import { ShieldAlert, ArrowRight, CheckCircle2, PhoneCall, HelpCircle, FileCheck } from 'lucide-react';

// 1. 입소대상 및 절차
export function AdmissionTargetView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          아동의 안전과 권리를 최우선으로 하며, 법정 아동보호체계에 따른 공정한 절차로 입소가 이루어집니다.
        </p>
      </div>

      {/* 입소 대상 안내 */}
      <h3 className="content-section-title">
        <ShieldAlert size={18} className="section-icon-sprout" /> 입소 대상 (보호대상 아동)
      </h3>
      <div style={{
        background: '#f8fafc',
        border: '1px solid #dce4eb',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '26px'
      }}>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: '14.5px', color: '#444' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <CheckCircle2 size={18} color="#1b65a5" style={{ flexShrink: 0, marginTop: 2 }} />
            <span>보호자가 없거나 보호자로부터 이탈된 아동</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <CheckCircle2 size={18} color="#1b65a5" style={{ flexShrink: 0, marginTop: 2 }} />
            <span>학대, 방임, 유기 등으로 인해 가정 내 긴급한 분리 및 보호가 필요한 아동</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <CheckCircle2 size={18} color="#1b65a5" style={{ flexShrink: 0, marginTop: 2 }} />
            <span>보호자의 중증 질병, 수감, 실종 또는 극심한 가정사정 등으로 인하여 적절한 양육을 받기 어려운 아동</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <CheckCircle2 size={18} color="#1b65a5" style={{ flexShrink: 0, marginTop: 2 }} />
            <span>지방자치단체 아동복지심의위원회의 의결을 거쳐 시설보호조치가 결정된 아동</span>
          </li>
        </ul>
      </div>

      {/* 공식 입소 절차 프로세스 다이어그램 (HWPX 6번 반영) */}
      <h3 className="content-section-title">
        <FileCheck size={18} className="section-icon-sprout" /> 공식 입소 진행 절차
      </h3>
      <p style={{ fontSize: '14px', color: '#666', marginBottom: 16 }}>
        * 아동복지법에 의거하여, 아동양육시설 입소는 보호자나 시설이 직접 결정할 수 없으며 <strong>관할 시·군·구 지방자치단체의 심의와 보호조치 결정</strong>에 따라 정식으로 진행됩니다.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '14px',
        marginBottom: '30px'
      }}>
        {/* STEP 1 */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #cfdfea',
          borderRadius: '8px',
          padding: '18px 16px',
          borderTop: '4px solid #1b65a5'
        }}>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#1b65a5' }}>STEP 01</div>
          <div style={{ fontSize: '15px', fontWeight: 700, margin: '6px 0', color: '#222' }}>상담 신청 및 접수</div>
          <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>
            거주지 관할 시·군·구 아동보호 전담부서 또는 아동보호전문기관 접수
          </div>
        </div>

        {/* STEP 2 */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #cfdfea',
          borderRadius: '8px',
          padding: '18px 16px',
          borderTop: '4px solid #1b65a5'
        }}>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#1b65a5' }}>STEP 02</div>
          <div style={{ fontSize: '15px', fontWeight: 700, margin: '6px 0', color: '#222' }}>현장조사 및 사례판정</div>
          <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>
            지자체 아동보호전담요원의 가정환경 및 아동 심층 조사 실시
          </div>
        </div>

        {/* STEP 3 */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #cfdfea',
          borderRadius: '8px',
          padding: '18px 16px',
          borderTop: '4px solid #59a62a'
        }}>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#59a62a' }}>STEP 03</div>
          <div style={{ fontSize: '15px', fontWeight: 700, margin: '6px 0', color: '#222' }}>보호조치 결정</div>
          <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>
            아동복지심의위원회 심의를 통한 시설 보호조치 공식 의결
          </div>
        </div>

        {/* STEP 4 */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #cfdfea',
          borderRadius: '8px',
          padding: '18px 16px',
          borderTop: '4px solid #f48024'
        }}>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#f48024' }}>STEP 04</div>
          <div style={{ fontSize: '15px', fontWeight: 700, margin: '6px 0', color: '#222' }}>육영학사 입소 배정</div>
          <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>
            시설 인계, 생활실 배정, 초기적응 지원 및 개별 사례관리 착수
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. 입소상담 문의
export function AdmissionCounselingView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          입소 상담 및 아동 보호 문의는 언제든지 열려 있습니다.
        </p>
      </div>

      <div style={{
        background: '#f1f7fc',
        border: '1px solid #bfd8ec',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '28px'
      }}>
        <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#174e80', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
          <PhoneCall size={20} /> 육영학사 입소 안내 문의
        </h4>
        <div style={{ fontSize: '24px', fontWeight: 800, color: '#4a9918', marginBottom: 8 }}>
          {ORG_INFO.tel}
        </div>
        <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.6 }}>
          입소 대상 자격 및 준비 절차에 대한 일반적인 상담은 육영학사로 전화 주시면 친절하고 상세하게 안내해 드립니다.
        </p>
      </div>

      <h3 className="content-section-title">
        <HelpCircle size={18} className="section-icon-sprout" /> 담당 행정기관 안내
      </h3>
      <table className="custom-info-table">
        <tbody>
          <tr>
            <th style={{ width: '26%' }}>공식 입소 심의·신청</th>
            <td>아동의 주민등록상 거주지 관할 <strong>시·군·구청 아동보호 담당부서</strong></td>
          </tr>
          <tr>
            <th>아동학대 신고 및 긴급상담</th>
            <td><strong>112</strong> (경찰청) 또는 <strong>1391</strong> (아동보호전문기관)</td>
          </tr>
          <tr>
            <th>육영학사 대표전화</th>
            <td>{ORG_INFO.tel} (운영시간: 평일 09:00 ~ 18:00)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

import React from 'react';
import { PROGRAMS } from '../data/siteData';
import { Sparkles, Briefcase, GraduationCap, Compass, Target, CheckCircle2 } from 'lucide-react';

// 1. 프로그램 종합 안내 (10대 핵심 지원사업)
export function ProgramOverviewView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          아이들의 발달단계와 개별 특성을 존중하는 10대 맞춤형 양육 및 성장지원 프로그램입니다.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '18px',
        marginBottom: '30px'
      }}>
        {PROGRAMS.map((prog) => (
          <div
            key={prog.id}
            style={{
              background: '#ffffff',
              border: '1px solid #dce5ee',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{
                  fontSize: '11.5px',
                  fontWeight: 800,
                  color: '#1b65a5',
                  background: '#eef6fc',
                  padding: '3px 8px',
                  borderRadius: '4px'
                }}>
                  {prog.tag}
                </span>
                <span style={{ fontSize: '12px', color: '#999', fontWeight: 600 }}>
                  0{prog.id}
                </span>
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#222', marginBottom: 8 }}>
                {prog.title}
              </h3>

              <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.6, marginBottom: 14 }}>
                {prog.desc}
              </p>
            </div>

            <div style={{ borderTop: '1px dashed #edf1f6', paddingTop: 12 }}>
              <ul style={{ fontSize: '12.5px', color: '#666', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {prog.items.map((it, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#59a62a' }}></span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. 특성화 자립프로그램 「꿈JOB끼」
export function IndependenceProgramView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          특성화 자립프로그램 「꿈JOB끼」: 꿈을 찾고(JOB), 끼를 펼치는 육영학사만의 맞춤 자립 프로젝트입니다.
        </p>
      </div>

      <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: 24 }}>
        자립은 시설을 퇴소하는 시점에 갑자기 이루어지는 것이 아니라, <strong>어린 시절부터 일상 속에서 차근차근 익혀가는 성장의 과정</strong>입니다. 육영학사는 아동의 연령과 성장 단계에 맞추어 스스로 삶을 설계하고 독립할 수 있는 주도적인 자립 역량을 길러줍니다.
      </p>

      {/* 3대 핵심 추진 축 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '30px' }}>
        <div style={{ background: '#f8fafc', border: '1px solid #dbe3ea', borderRadius: '8px', padding: '20px' }}>
          <div style={{ color: '#1b65a5', marginBottom: 10 }}><Compass size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 6 }}>1. 꿈 (진로탐색)</h4>
          <p style={{ fontSize: '13.5px', color: '#666', lineHeight: 1.6 }}>
            개별 적성검사 및 전문 직업인과의 1:1 멘토링을 통해 자신의 흥미와 강점을 발견합니다.
          </p>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #dbe3ea', borderRadius: '8px', padding: '20px' }}>
          <div style={{ color: '#59a62a', marginBottom: 10 }}><Briefcase size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 6 }}>2. JOB (직업체험)</h4>
          <p style={{ fontSize: '13.5px', color: '#666', lineHeight: 1.6 }}>
            바리스타, 제과제빵, 컴퓨터, 영상제작 등 다양한 현장 실습과 자격증 취득을 집중 지원합니다.
          </p>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #dbe3ea', borderRadius: '8px', padding: '20px' }}>
          <div style={{ color: '#f48024', marginBottom: 10 }}><Target size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 6 }}>3. 끼 (실전 자립체험)</h4>
          <p style={{ fontSize: '13.5px', color: '#666', lineHeight: 1.6 }}>
            원내 자립체험관을 통한 주거생활 기술훈련(요리, 금융관리, 계약 등)을 실전처럼 체득합니다.
          </p>
        </div>
      </div>

      {/* 자립 단계별 로드맵 테이블 */}
      <h3 className="content-section-title">
        <GraduationCap size={18} className="section-icon-sprout" /> 연령별 단계적 자립지원 체계
      </h3>
      <table className="custom-info-table">
        <thead>
          <tr>
            <th style={{ width: '22%' }}>성장 단계</th>
            <th style={{ width: '28%' }}>중점 자립 역량</th>
            <th>주요 지원 프로그램</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="center" style={{ fontWeight: 700 }}>초등부 (기초기)</td>
            <td>기초 일상생활 기술 습득</td>
            <td>자기 물건 정리, 용돈 기입장 쓰기, 기초 위생 및 대인관계 예절 교육</td>
          </tr>
          <tr>
            <td className="center" style={{ fontWeight: 700 }}>중등부 (탐색기)</td>
            <td>진로 탐색 및 자기이해</td>
            <td>진로적성검사, 다양한 직업현장 견학, 동아리 활동, 특기적성 발굴</td>
          </tr>
          <tr>
            <td className="center" style={{ fontWeight: 700 }}>고등부 (준비기)</td>
            <td>실전 직업준비 및 금융이해</td>
            <td>자격증 취득 지원, 아르바이트 및 근로기준법 교육, 디딤씨앗통장 자산관리</td>
          </tr>
          <tr>
            <td className="center" style={{ fontWeight: 700, color: '#1b65a5' }}>보호연장 및 퇴소 청년 (정착기)</td>
            <td>안정적 사회정착 및 자립</td>
            <td>LH 전세임대 연계, 취업 연계, 자립지원전담기관 사후관리, 멘토링 네트워크</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

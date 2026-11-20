import React from 'react';
import { PROGRAMS } from '../data/siteData';
import {
  Briefcase,
  GraduationCap,
  Compass,
  Target,
  MessageCircleHeart,
  Link2,
  ClipboardCheck,
  Smile,
  Users,
  Sparkles,
  Calendar
} from 'lucide-react';

// 1. 기본사업 (요청사항 8번: "프로그램안내"를 "기본사업"으로 변경 및 공식 게시 문안 반영)
export function ProgramOverviewView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          육영학사는 아동이 안전하고 안정된 환경에서 생활하며 건강하게 성장하도록 돕습니다.
        </p>
      </div>

      <div style={{ fontSize: '15.5px', color: '#333', lineHeight: 1.85, marginBottom: '30px' }}>
        <p style={{ marginBottom: '12px' }}>
          육영학사는 아동이 안전하고 안정된 환경에서 생활하며 건강하게 성장하도록 돕습니다. 식사와 위생, 건강관리, 학교생활과 학습을 지원하고, 놀이·문화·체육 활동을 통해 다양한 경험을 쌓을 수 있도록 합니다.
        </p>
        <p>
          아동의 상황에 따라 가족과의 관계를 이어갈 수 있도록 지원합니다. 성장 단계에 맞춰 생활기술을 익히고 진로를 탐색하며 스스로 생활할 힘을 기를 수 있도록 돕습니다.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '18px',
        marginBottom: '30px'
      }}>
        {PROGRAMS.map((prog) => (
          <div
            key={prog.id}
            style={{
              background: '#ffffff',
              border: '1px solid #d5e5db',
              borderRadius: '10px',
              padding: '22px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#254d38',
                  background: '#eaf5ee',
                  padding: '4px 10px',
                  borderRadius: '6px'
                }}>
                  {prog.tag}
                </span>
                <span style={{ fontSize: '12px', color: '#888', fontWeight: 700 }}>
                  {String(prog.id).padStart(2, '0')}
                </span>
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#222', marginBottom: 8 }}>
                {prog.title}
              </h3>

              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65, marginBottom: 14 }}>
                {prog.desc}
              </p>
            </div>

            <div style={{ borderTop: '1px dashed #e2ebe5', paddingTop: 12 }}>
              <ul style={{ fontSize: '13px', color: '#555', display: 'flex', flexDirection: 'column', gap: 5 }}>
                {prog.items.map((it, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4cab6e' }}></span>
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

// 2. 맞춤형서비스 (요청사항 8번: 꿈JOB끼 화면처럼 핵심 문구, 단계별 카드 3개, 하단 표로 구성)
export function CustomizedServiceView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          아이의 이야기를 듣고, 아이와 함께 지원을 계획합니다.
        </p>
      </div>

      <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.85, marginBottom: 26 }}>
        육영학사의 맞춤형서비스는 아동 한 사람 한 사람의 생활 모습과 발달 단계, 강점과 관심을 살피는 데서 시작합니다. 담당 선생님은 아동과 정기적으로 만나 올해 해 보고 싶은 일과 필요한 도움을 함께 이야기합니다. 학교생활이나 가족관계에 지원이 필요할 때는 학교와 가족·연고자, 지역 전문기관과 협력합니다.
      </p>

      {/* 단계별 카드 3개 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '34px' }}>
        <div style={{ background: '#f8fbf9', border: '1px solid #d5e5db', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#3b8f5a', marginBottom: 12 }}><MessageCircleHeart size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 8 }}>1. 아이의 이야기를 듣습니다</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
            개별상담에서 아이가 잘하는 일, 해 보고 싶은 활동, 생활 속 어려움을 듣습니다. 연초에는 한 해의 활동과 지원계획을 아동과 함께 살펴보고, 어떤 도움을 받고 싶은지 의견을 나눕니다.
          </p>
        </div>

        <div style={{ background: '#f8fbf9', border: '1px solid #d5e5db', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#4cab6e', marginBottom: 12 }}><Link2 size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 8 }}>2. 필요한 도움을 연결합니다</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
            아동별로 지원 목표와 방법을 정하고, 일상생활 지도부터 학습, 건강, 심리·정서, 치료·재활, 진로까지 필요한 지원을 연결합니다. 아동이 어떤 지원을 받는지 이해하고 의견을 낼 수 있도록 안내합니다.
          </p>
        </div>

        <div style={{ background: '#fffdf5', border: '1px solid #f0df9c', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#d99b00', marginBottom: 12 }}><ClipboardCheck size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 8 }}>3. 함께 점검하고 계획을 조정합니다</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
            개별상담과 사례회의에서 아동이 느낀 변화와 지원 경과를 살핍니다. 외부전문가의 자문을 받아 지원 방향을 점검하고, 아동의 의견과 평가 결과를 다음 계획에 반영합니다.
          </p>
        </div>
      </div>

      {/* 하단 표: 한 해의 지원 흐름 */}
      <h3 className="content-section-title">
        <Calendar size={18} className="section-icon-sprout" /> 한 해의 지원 흐름
      </h3>
      <table className="custom-info-table">
        <thead>
          <tr>
            <th style={{ width: '22%' }}>시기</th>
            <th>주요 내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="center" style={{ fontWeight: 700, color: '#254d38' }}>연초</td>
            <td>개별상담을 통해 연간 활동과 지원계획을 아동과 공유하고 의견을 듣습니다.</td>
          </tr>
          <tr>
            <td className="center" style={{ fontWeight: 700, color: '#254d38' }}>연중</td>
            <td>정기 상담으로 생활과 학교 적응을 살피고, 사례회의와 전문가 자문을 통해 지원 방향을 조정합니다.</td>
          </tr>
          <tr>
            <td className="center" style={{ fontWeight: 700, color: '#254d38' }}>연말</td>
            <td>한 해의 지원을 평가하고, 평가 결과를 다음 해 계획에 반영합니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 3. 특성화 자립프로그램 「꿈JOB끼」 (요청사항 8번: 기존 꿈JOB끼 화면 유지, 색상 테마만 그린·햇살노랑으로 조화)
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '34px' }}>
        <div style={{ background: '#f8fbf9', border: '1px solid #d5e5db', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#3b8f5a', marginBottom: 10 }}><Compass size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 6 }}>1. 꿈 (진로탐색)</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
            개별 적성검사 및 전문 직업인과의 1:1 멘토링을 통해 자신의 흥미와 강점을 발견합니다.
          </p>
        </div>

        <div style={{ background: '#f8fbf9', border: '1px solid #d5e5db', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#4cab6e', marginBottom: 10 }}><Briefcase size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 6 }}>2. JOB (직업체험)</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
            바리스타, 제과제빵, 컴퓨터, 영상제작 등 다양한 현장 실습과 자격증 취득을 집중 지원합니다.
          </p>
        </div>

        <div style={{ background: '#fffdf5', border: '1px solid #f0df9c', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#d99b00', marginBottom: 10 }}><Target size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 6 }}>3. 끼 (실전 자립체험)</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
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
            <td className="center" style={{ fontWeight: 700, color: '#254d38' }}>보호연장 및 퇴소 청년 (정착기)</td>
            <td>안정적 사회정착 및 자립</td>
            <td>LH 전세임대 연계, 취업 연계, 자립지원전담기관 사후관리, 멘토링 네트워크</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 4. 유닛나들이 (요청사항 8번: 핵심 문구, 단계별 카드 3개, 하단 표로 구성)
export function UnitOutingView() {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          가까운 곳에 나가고, 함께 밥을 먹는 평범한 하루
        </p>
      </div>

      <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.85, marginBottom: 26 }}>
        유닛나들이는 가족이나 연고자와 함께 외출하거나 외박할 기회가 적은 아이들도 생활시설 밖에서 가족과 나들이를 가듯 일상적인 여가를 경험할 수 있도록 마련한 육영학사의 특성화 양육프로그램입니다. 아이들이 가 보고 싶은 곳과 해 보고 싶은 일을 이야기하면, 담당 선생님과 작은 모둠으로 나들이를 준비합니다.
      </p>

      {/* 단계별 카드 3개 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '34px' }}>
        <div style={{ background: '#f8fbf9', border: '1px solid #d5e5db', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#3b8f5a', marginBottom: 12 }}><Smile size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 8 }}>1. 아이의 제안에서 시작합니다</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
            어디에 가 보고 싶은지, 무엇을 해 보고 싶은지 아이들에게 먼저 묻습니다. 아이들의 관심과 연령, 생활실 여건을 살피고 함께할 활동과 일정을 정합니다.
          </p>
        </div>

        <div style={{ background: '#f8fbf9', border: '1px solid #d5e5db', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#4cab6e', marginBottom: 12 }}><Users size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 8 }}>2. 작은 모둠으로 일상 속 나들이를 즐깁니다</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
            보육사 한 명과 아동 세 명 안팎이 함께 나갑니다. 방학이나 계절에 맞춰 가까운 곳을 둘러보고, 아이들이 관심 있는 활동을 하거나 함께 밥을 먹습니다. 작은 모둠이라 아이들의 관심과 속도에 맞춰 움직이고, 선생님도 아이 한 사람 한 사람의 이야기를 들을 수 있습니다.
          </p>
        </div>

        <div style={{ background: '#fffdf5', border: '1px solid #f0df9c', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#d99b00', marginBottom: 12 }}><Sparkles size={32} /></div>
          <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: 8 }}>3. 다음 나들이에 아이의 의견을 담습니다</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
            돌아와서는 무엇이 가장 재미있었는지, 아쉬운 점이나 다음에 해 보고 싶은 일은 무엇인지 함께 나눕니다. 그 이야기를 다음 나들이의 활동과 일정에 반영합니다.
          </p>
        </div>
      </div>

      {/* 하단 표: 나들이에서 경험하는 활동 */}
      <h3 className="content-section-title">
        <Sparkles size={18} className="section-icon-sprout" /> 나들이에서 경험하는 활동
      </h3>
      <table className="custom-info-table">
        <thead>
          <tr>
            <th style={{ width: '22%' }}>활동</th>
            <th>주요 경험</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="center" style={{ fontWeight: 700, color: '#254d38' }}>문화·체험</td>
            <td>아이들이 관심을 보인 문화 활동이나 체험에 참여하며 새로운 경험을 쌓습니다.</td>
          </tr>
          <tr>
            <td className="center" style={{ fontWeight: 700, color: '#254d38' }}>여가·식사</td>
            <td>선생님과 함께 외출하고 식사하며, 소규모로 편하게 대화하고 일상을 나눕니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

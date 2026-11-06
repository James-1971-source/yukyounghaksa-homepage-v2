import React, { useState } from 'react';
import { ORG_INFO } from '../data/siteData';
import { Heart, Gift, FileText, CheckCircle, ExternalLink, Users, AlertCircle } from 'lucide-react';

// 1. 후원 안내 (계좌, 물품, 영수증)
export function DonationGuideView({ onNavigate }) {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          보내주시는 소중한 정성은 아이들의 건강한 성장과 희망찬 자립을 위해 투명하게 사용됩니다.
        </p>
      </div>

      {/* 후원 계좌 안내 박스 */}
      <div style={{
        background: 'linear-gradient(135deg, #f0f7fd 0%, #e3eff9 100%)',
        border: '1px solid #b8d7ef',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16
      }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#175288', marginBottom: 4 }}>
            정기후원 / 일시후원 공식 계좌
          </div>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#113458' }}>
            {ORG_INFO.bank.name} : <span style={{ color: '#d9381e' }}>{ORG_INFO.bank.account}</span>
          </div>
          <div style={{ fontSize: '14px', color: '#555', marginTop: 4 }}>
            예금주: <strong>{ORG_INFO.bank.holder}</strong>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('support', 'donation-apply')}
          className="btn-primary-action"
          style={{ padding: '12px 24px', fontSize: '14px' }}
        >
          온라인 후원신청서 작성하기 &gt;
        </button>
      </div>

      {/* 후원 종류 안내 */}
      <h3 className="content-section-title">
        <Heart size={18} className="section-icon-sprout" /> 후원 종류 안내
      </h3>
      <table className="custom-info-table">
        <tbody>
          <tr>
            <th style={{ width: '22%' }}>정기 후원</th>
            <td>매월 일정 금액을 후원계좌를 통해 지속적으로 후원하여 아동들의 안정적인 생활과 자립을 지원합니다.</td>
          </tr>
          <tr>
            <th>일시 후원</th>
            <td>특별한 기념일, 명절, 행사 등에 자유롭게 원하는 금액을 일시적으로 후원합니다.</td>
          </tr>
          <tr>
            <th>결연 후원</th>
            <td>특정 아동과 1:1 결연을 맺고 아동의 생활비, 학비, 디딤씨앗통장 적립 등을 정기적으로 지원합니다.</td>
          </tr>
          <tr>
            <th>물품 후원</th>
            <td>
              식품, 생활용품, 의류, 학용품 등 아동들의 생활에 꼭 필요한 물품을 지원합니다.<br />
              <span style={{ fontSize: '12.5px', color: '#666' }}>
                * 시기별로 시설에 필요한 물품이 다를 수 있으므로 사전 전화(053-986-1009) 문의 후 보내주시면 더욱 유용하게 전달됩니다. (투명한 관리를 위해 물품 영수증 증빙을 요청드릴 수 있습니다.)
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 기부금영수증 발급 안내 (HWPX 9번 전문) */}
      <h3 className="content-section-title">
        <FileText size={18} className="section-icon-sprout" /> 기부금영수증 발급 안내
      </h3>
      <div style={{ background: '#fcfdfa', border: '1px solid #dce8d2', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
        <p style={{ fontSize: '14px', color: '#444', lineHeight: 1.7, marginBottom: 14 }}>
          육영학사는 지정기부금 단체로서 후원해 주신 모든 기부금에 대해 연말정산 소득공제용 법정 기부금영수증을 발급해 드립니다. 후원 내역을 확인하여 후원 시마다 전산 등록하며, <strong>다음 해 연초(1월)에 우편 또는 국세청 간소화 서비스를 통해 일괄 발송</strong>됩니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ background: '#fff', border: '1px solid #e2ebd8', padding: '14px', borderRadius: '6px' }}>
            <div style={{ fontWeight: 800, color: '#317311', marginBottom: 6, fontSize: '14.5px' }}>① 개인 명의 신청 시</div>
            <div style={{ fontSize: '13px', color: '#555' }}>
              • 성함, 주민등록번호, 연락처, 우편물 수령 주소
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid #e2ebd8', padding: '14px', borderRadius: '6px' }}>
            <div style={{ fontWeight: 800, color: '#317311', marginBottom: 6, fontSize: '14.5px' }}>② 사업자(법인/단체) 명의 신청 시</div>
            <div style={{ fontSize: '13px', color: '#555' }}>
              • 사업자등록증 사본, 대표자명, 담당자 연락처, 주소
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. 온라인 후원신청 및 지정기탁서 (HWPX 추가의견 2번, 9번 반영)
export function DonationApplyView({ onSubmitDonation }) {
  const [donorType, setDonorType] = useState('개인');
  const [category, setCategory] = useState('정기후원');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [amountOrItems, setAmountOrItems] = useState('매월 30,000원');
  const [isDesignated, setIsDesignated] = useState(false);
  const [designatedPurpose, setDesignatedPurpose] = useState('');
  const [receiptNeeded, setReceiptNeeded] = useState(true);
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('성함(단체명)과 연락처를 입력해 주세요.');
      return;
    }
    if (!privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해 주셔야 신청이 완료됩니다.');
      return;
    }

    const newDonation = {
      id: Date.now(),
      donorType,
      category,
      name,
      phone,
      email,
      donationType: category,
      amountOrItems,
      isDesignated,
      designatedPurpose,
      receiptNeeded,
      address,
      message,
      date: new Date().toISOString().split('T')[0]
    };

    onSubmitDonation(newDonation);
    alert('온라인 후원신청이 성공적으로 접수되었습니다. 육영학사 담당자가 확인 후 연락드리겠습니다. 감사합니다!');
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setMessage('');
  };

  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          별도의 서류 다운로드 없이 홈페이지에서 간편하게 온라인 후원신청서 및 지정기탁서를 작성하실 수 있습니다.
        </p>
      </div>

      <div className="online-form-container">
        <div className="form-guide-notice">
          <strong>※ 개인정보 보안 안내:</strong> 주민등록번호 등 민감한 고유식별정보는 홈페이지에서 직접 입력받지 않으며, 기부금영수증 발급 시 담당자가 안전한 유선 확인을 통해 처리해 드립니다.
        </div>

        <form onSubmit={handleSubmit}>
          {/* 구분 */}
          <div className="form-group-grid">
            <label className="form-label required">후원자 구분</label>
            <div className="form-radio-group">
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="donorType"
                  value="개인"
                  checked={donorType === '개인'}
                  onChange={() => setDonorType('개인')}
                /> 개인 후원자
              </label>
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="donorType"
                  value="단체/기업"
                  checked={donorType === '단체/기업'}
                  onChange={() => setDonorType('단체/기업')}
                /> 단체 / 기업 후원
              </label>
            </div>
          </div>

          {/* 성함 / 단체명 */}
          <div className="form-group-grid">
            <label className="form-label required">
              {donorType === '개인' ? '후원자 성함' : '단체 / 기업명'}
            </label>
            <input
              type="text"
              className="form-input-text"
              placeholder={donorType === '개인' ? '예: 홍길동' : '예: (주)희망나눔'}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* 연락처 */}
          <div className="form-group-grid">
            <label className="form-label required">연락처</label>
            <input
              type="tel"
              className="form-input-text"
              placeholder="예: 010-1234-5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* 이메일 */}
          <div className="form-group-grid">
            <label className="form-label">이메일</label>
            <input
              type="email"
              className="form-input-text"
              placeholder="예: yukyoung@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* 후원 유형 */}
          <div className="form-group-grid">
            <label className="form-label required">후원 방식</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="정기후원">정기후원 (매월 자동이체/계좌송금)</option>
              <option value="일시후원">일시후원 (계좌 입금)</option>
              <option value="결연후원">아동 1:1 결연후원</option>
              <option value="물품후원">물품후원 (식품, 의류, 생활용품 등)</option>
            </select>
          </div>

          {/* 금액 또는 물품 내역 */}
          <div className="form-group-grid">
            <label className="form-label required">후원 내용 / 금액</label>
            <input
              type="text"
              className="form-input-text"
              placeholder="예: 매월 30,000원 또는 지원 희망 물품명"
              value={amountOrItems}
              onChange={(e) => setAmountOrItems(e.target.value)}
              required
            />
          </div>

          {/* 온라인 지정기탁서 작성 여부 (HWPX 추가의견 2번 반영) */}
          <div className="form-group-grid">
            <label className="form-label">지정기탁 여부</label>
            <div>
              <label className="form-radio-label" style={{ marginBottom: 6 }}>
                <input
                  type="checkbox"
                  checked={isDesignated}
                  onChange={(e) => setIsDesignated(e.target.checked)}
                /> 특정 목적 또는 특정 아동 지정기탁 희망
              </label>
              {isDesignated && (
                <input
                  type="text"
                  className="form-input-text"
                  placeholder="지정 용도 기재 (예: 자립준비청년 주거정착금, 대학 입학 장학금, 특정 결연아동 지정 등)"
                  value={designatedPurpose}
                  onChange={(e) => setDesignatedPurpose(e.target.value)}
                  style={{ marginTop: 6, borderColor: '#1b65a5' }}
                />
              )}
            </div>
          </div>

          {/* 기부금 영수증 신청 여부 */}
          <div className="form-group-grid">
            <label className="form-label">기부금영수증</label>
            <div>
              <label className="form-radio-label" style={{ marginBottom: 6 }}>
                <input
                  type="checkbox"
                  checked={receiptNeeded}
                  onChange={(e) => setReceiptNeeded(e.target.checked)}
                /> 연말정산용 기부금영수증 신청
              </label>
              {receiptNeeded && (
                <input
                  type="text"
                  className="form-input-text"
                  placeholder="영수증 수령 주소 (예: 대구 동구 ...)"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ marginTop: 6 }}
                />
              )}
            </div>
          </div>

          {/* 전하고 싶은 말씀 */}
          <div className="form-group-grid">
            <label className="form-label">응원 메시지</label>
            <textarea
              className="form-textarea"
              rows={3}
              placeholder="아이들에게 전하고 싶은 따뜻한 응원의 한마디를 남겨주세요."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* 개인정보 수집 및 이용 동의 */}
          <div className="privacy-consent-box">
            <div style={{ fontWeight: 700, fontSize: '13.5px', marginBottom: 6, color: '#333' }}>
              [필수] 개인정보 수집 및 이용에 대한 동의
            </div>
            <div className="privacy-scroll-area">
              1. 수집 항목: 성명(단체명), 연락처, 이메일, 주소(영수증 신청 시)<br />
              2. 수집 목적: 후원 신청 접수, 후원금 관리, 기부금영수증 발급 및 시설 소식지 발송<br />
              3. 보유 기간: 후원 종료 및 법정 세무 회계보존 의무 기간(5년) 경과 시 즉시 파기<br />
              * 귀하는 개인정보 수집 동의를 거부할 권리가 있으나, 거부 시 후원신청 및 영수증 발급이 제한될 수 있습니다.
            </div>
            <div style={{ marginTop: 10 }}>
              <label className="form-radio-label" style={{ fontWeight: 600, color: '#1b65a5' }}>
                <input
                  type="checkbox"
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                /> 개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>
          </div>

          <div className="form-submit-row">
            <button type="submit" className="btn-primary-action">
              온라인 후원신청서 제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// 3. 자원봉사 안내 (VMS 안내 포함)
export function VolunteerGuideView({ onNavigate }) {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          아이들의 따뜻한 벗이 되어줄 여러분의 따뜻한 손길을 기다립니다.
        </p>
      </div>

      {/* 봉사 분야 안내 */}
      <h3 className="content-section-title">
        <Users size={18} className="section-icon-sprout" /> 자원봉사 활동 분야
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '28px' }}>
        <div style={{ background: '#f8fafc', border: '1px solid #dce5ee', borderRadius: '8px', padding: '18px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#174e80', marginBottom: 6 }}>1. 학습·재능기부 봉사</h4>
          <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.6 }}>
            국어·영어·수학 기초학습 지도, 악기, 미술, 체육, 컴퓨터, 영상 등 특기 교육
          </p>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #dce5ee', borderRadius: '8px', padding: '18px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#174e80', marginBottom: 6 }}>2. 친교 및 멘토링 봉사</h4>
          <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.6 }}>
            아동과 1:1 또는 소그룹 멘토링, 문화체험 동행, 보드게임 및 상담 말벗 활동
          </p>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #dce5ee', borderRadius: '8px', padding: '18px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#174e80', marginBottom: 6 }}>3. 시설 환경정비 봉사</h4>
          <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.6 }}>
            생활관 및 식당 청결 유지, 화단 가꾸기, 도색 및 시설 안전 점검 보조
          </p>
        </div>
      </div>

      {/* VMS 인증 안내 (HWPX 10번 및 추가의견 3번 문구 100% 반영) */}
      <div style={{
        background: '#eef8eb',
        border: '1px solid #b7e2a8',
        borderRadius: '8px',
        padding: '22px',
        marginBottom: '28px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '16px', fontWeight: 800, color: '#27620a', marginBottom: 8 }}>
          <CheckCircle size={20} /> VMS(사회복지자원봉사인증관리) 시간 등록 안내
        </div>
        <p style={{ fontSize: '14.5px', color: '#333', lineHeight: 1.7, marginBottom: 12 }}>
          <strong>「육영학사는 봉사활동 시간을 VMS를 통해 공식 등록하고 있으며, 봉사활동 전 VMS 회원가입이 필수적으로 필요합니다.」</strong>
        </p>
        <p style={{ fontSize: '13.5px', color: '#555', marginBottom: 14 }}>
          인증된 시간은 1365 자원봉사포털 및 나이스(NEIS) 학생생활기록부와 자동으로 연계됩니다.
        </p>
        <a
          href={ORG_INFO.vmsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-action"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 18px', fontSize: '13px', background: '#59a62a' }}
        >
          <ExternalLink size={14} /> VMS 공식 홈페이지 회원가입 바로가기
        </a>
      </div>

      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <button
          type="button"
          onClick={() => onNavigate('support', 'volunteer-apply')}
          className="btn-primary-action"
          style={{ padding: '12px 32px' }}
        >
          온라인 자원봉사 신청하기 &gt;
        </button>
      </div>
    </div>
  );
}

// 4. 온라인 자원봉사 신청 폼 (HWPX 추가의견 3번 반영)
export function VolunteerApplyView({ onSubmitVolunteer }) {
  const [type, setType] = useState('개인');
  const [field, setField] = useState('학습·재능기부');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [desiredSchedule, setDesiredSchedule] = useState('주 1회 (주말 희망)');
  const [vmsId, setVmsId] = useState('');
  const [headcount, setHeadcount] = useState(1);
  const [intro, setIntro] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('성함(단체명)과 연락처를 입력해 주세요.');
      return;
    }
    if (!privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    const newVolunteer = {
      id: Date.now(),
      type,
      field,
      name,
      phone,
      desiredSchedule,
      vmsId,
      headcount,
      intro,
      date: new Date().toISOString().split('T')[0]
    };

    onSubmitVolunteer(newVolunteer);
    alert('자원봉사 신청이 완료되었습니다. 시설 담당자가 일정 협의를 위해 안내 연락드리겠습니다.');
    setName('');
    setPhone('');
    setVmsId('');
    setIntro('');
  };

  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          육영학사와 함께 따뜻한 나눔을 실천할 봉사자 여러분의 신청을 받습니다.
        </p>
      </div>

      <div className="online-form-container">
        <div className="form-guide-notice">
          <strong>※ 중요 안내:</strong> 육영학사는 봉사활동 시간을 VMS를 통해 등록하고 있습니다. 원활한 봉사 시간 인증을 위해 <strong>봉사활동 전 반드시 VMS 회원가입</strong>을 완료해 주시기 바랍니다.
        </div>

        <form onSubmit={handleSubmit}>
          {/* 신청 구분 */}
          <div className="form-group-grid">
            <label className="form-label required">신청 구분</label>
            <div className="form-radio-group">
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="vType"
                  value="개인"
                  checked={type === '개인'}
                  onChange={() => setType('개인')}
                /> 개인 봉사자
              </label>
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="vType"
                  value="단체/동아리"
                  checked={type === '단체/동아리'}
                  onChange={() => setType('단체/동아리')}
                /> 단체 / 동아리 / 기업
              </label>
            </div>
          </div>

          {/* 성함 / 대표자명 */}
          <div className="form-group-grid">
            <label className="form-label required">
              {type === '개인' ? '봉사자 성함' : '단체명 및 대표자'}
            </label>
            <input
              type="text"
              className="form-input-text"
              placeholder="예: 홍길동"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* 연락처 */}
          <div className="form-group-grid">
            <label className="form-label required">연락처</label>
            <input
              type="tel"
              className="form-input-text"
              placeholder="예: 010-1234-5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* 희망 분야 */}
          <div className="form-group-grid">
            <label className="form-label required">희망 봉사분야</label>
            <select
              className="form-select"
              value={field}
              onChange={(e) => setField(e.target.value)}
            >
              <option value="학습·재능기부">학습지도 및 재능기부 (학습, 악기, 미술, 체육 등)</option>
              <option value="친교·멘토링">친교 및 멘토링 활동 (놀이, 나들이, 정서지원)</option>
              <option value="환경정비">시설 환경정비 및 청결 지원</option>
              <option value="행사보조">원내 특별행사 및 프로그램 보조</option>
            </select>
          </div>

          {/* 희망 일정 */}
          <div className="form-group-grid">
            <label className="form-label required">희망 일정 및 시간</label>
            <input
              type="text"
              className="form-input-text"
              placeholder="예: 매주 토요일 오후 2시~4시 또는 특정 희망일"
              value={desiredSchedule}
              onChange={(e) => setDesiredSchedule(e.target.value)}
              required
            />
          </div>

          {/* VMS 아이디 */}
          <div className="form-group-grid">
            <label className="form-label">VMS 아이디</label>
            <input
              type="text"
              className="form-input-text"
              placeholder="VMS 가입 아이디 (미가입 시 추후 제출 가능)"
              value={vmsId}
              onChange={(e) => setVmsId(e.target.value)}
            />
          </div>

          {/* 참여 인원 */}
          <div className="form-group-grid">
            <label className="form-label">참여 인원</label>
            <input
              type="number"
              min={1}
              className="form-input-text"
              value={headcount}
              onChange={(e) => setHeadcount(Number(e.target.value))}
            />
          </div>

          {/* 간단한 소개 */}
          <div className="form-group-grid">
            <label className="form-label">소개 및 특기</label>
            <textarea
              className="form-textarea"
              rows={3}
              placeholder="봉사 지원 동기 또는 보유하신 특기(전공, 자격 등)를 편하게 적어주세요."
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
            />
          </div>

          {/* 개인정보 동의 */}
          <div className="privacy-consent-box">
            <div style={{ fontWeight: 700, fontSize: '13.5px', marginBottom: 6, color: '#333' }}>
              [필수] 개인정보 수집 및 이용 동의
            </div>
            <div className="privacy-scroll-area">
              1. 수집 항목: 성명, 연락처, VMS 아이디, 참여 인원수<br />
              2. 수집 목적: 자원봉사 접수, 일정 조율 및 VMS 자원봉사 시간 등록<br />
              3. 보유 기간: 자원봉사 활동 종료 시까지 (VMS 등록 기록은 법정 보존 기준 준수)
            </div>
            <div style={{ marginTop: 10 }}>
              <label className="form-radio-label" style={{ fontWeight: 600, color: '#1b65a5' }}>
                <input
                  type="checkbox"
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                /> 개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>
          </div>

          <div className="form-submit-row">
            <button type="submit" className="btn-primary-action">
              자원봉사 신청서 제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

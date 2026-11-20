import React, { useState, useRef, useEffect } from 'react';
import { ORG_INFO } from '../data/siteData';
import {
  Heart,
  FileText,
  CheckCircle,
  ExternalLink,
  Users,
  FileSignature,
  Download,
  Printer,
  RotateCcw,
  Handshake,
  PhoneCall,
  HeartHandshake
} from 'lucide-react';

// 1. 후원안내 (요청사항 10번: 지정기탁서 안내 문구 및 지정기탁서 바로가기 버튼 반영)
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
        background: 'linear-gradient(135deg, #eaf5ee 0%, #fffdf2 100%)',
        border: '1px solid #cce3d4',
        borderRadius: '10px',
        padding: '24px',
        marginBottom: '26px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16
      }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#254d38', marginBottom: 4 }}>
            정기후원 / 일시후원 공식 계좌
          </div>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#1b3526' }}>
            {ORG_INFO.bank.name} : <span style={{ color: '#2d6a4f' }}>{ORG_INFO.bank.account}</span>
          </div>
          <div style={{ fontSize: '14px', color: '#555', marginTop: 4 }}>
            예금주: <strong>{ORG_INFO.bank.holder}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => onNavigate('support', 'donation-apply')}
            className="btn-primary-action"
            style={{ padding: '12px 22px', fontSize: '14px' }}
          >
            온라인 후원신청 &gt;
          </button>
          <button
            type="button"
            onClick={() => onNavigate('support', 'designated-deposit')}
            style={{
              background: '#FFD54F',
              color: '#222',
              padding: '12px 22px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            지정기탁서 작성·안내 &gt;
          </button>
        </div>
      </div>

      {/* 지정기탁서 필수 안내 문구 (요청사항 10번 문구 100% 반영) */}
      <div style={{
        background: '#fffdf2',
        border: '1px solid #f0df9c',
        borderLeft: '5px solid #FFD54F',
        borderRadius: '10px',
        padding: '20px 24px',
        marginBottom: '28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ flex: 1, minWidth: '260px' }}>
          <div style={{ fontSize: '16px', fontWeight: 800, color: '#222', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileSignature size={19} color="#d99b00" /> 지정기탁서 작성 안내
          </div>
          <p style={{ fontSize: '14.5px', color: '#333', lineHeight: 1.75 }}>
            후원금이나 후원물품의 사용 용도를 정해 후원하시는 경우에는 <strong>지정기탁서</strong>를 작성해 주세요. 지정기탁서는 후원자님이 정하신 사용 용도를 확인하고 그에 따라 후원금을 집행·관리하는 데 필요한 서류입니다. 작성 및 제출 방법은 아래 <strong>“지정기탁서”</strong>에서 확인하실 수 있습니다.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('support', 'designated-deposit')}
          className="btn-primary-action"
          style={{ padding: '11px 22px', fontSize: '14px', flexShrink: 0 }}
        >
          지정기탁서 바로가기 &gt;
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
            <td>아동의 성장 단계와 생활 여건을 살펴 학습, 문화체험, 진로·자립 준비 등에 필요한 지원을 꾸준히 연결합니다.</td>
          </tr>
          <tr>
            <th>물품 후원</th>
            <td>
              식품, 생활용품, 의류, 학용품 등 아동들의 생활에 꼭 필요한 물품을 지원합니다.<br />
              <span style={{ fontSize: '12.5px', color: '#666' }}>
                * 시기별로 시설에 필요한 물품이 다를 수 있으므로 사전 전화({ORG_INFO.tel}) 문의 후 보내주시면 더욱 유용하게 전달됩니다.
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 기부금영수증 발급 안내 */}
      <h3 className="content-section-title">
        <FileText size={18} className="section-icon-sprout" /> 기부금영수증 발급 안내
      </h3>
      <div style={{ background: '#f8fbf9', border: '1px solid #d5e5db', borderRadius: '10px', padding: '20px', marginBottom: '24px' }}>
        <p style={{ fontSize: '14px', color: '#444', lineHeight: 1.7, marginBottom: 14 }}>
          육영학사는 지정기부금 단체로서 후원해 주신 모든 기부금에 대해 연말정산 소득공제용 법정 기부금영수증을 발급해 드립니다. 후원 내역을 확인하여 후원 시마다 전산 등록하며, <strong>다음 해 연초(1월)에 우편 또는 국세청 연말정산간소화 서비스를 통해 일괄 등록·발송</strong>됩니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          <div style={{ background: '#fff', border: '1px solid #d5e5db', padding: '14px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 800, color: '#254d38', marginBottom: 6, fontSize: '14.5px' }}>① 개인 명의 신청 시</div>
            <div style={{ fontSize: '13px', color: '#555' }}>
              • 성함, 주민등록번호, 연락처, 주소
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid #d5e5db', padding: '14px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 800, color: '#254d38', marginBottom: 6, fontSize: '14.5px' }}>② 사업자(법인/단체) 명의 신청 시</div>
            <div style={{ fontSize: '13px', color: '#555' }}>
              • 사업자등록번호(사본), 대표자명, 연락처, 주소
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. 온라인 후원신청
export function DonationApplyView({ onSubmitDonation, onNavigate }) {
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
      sponsorType: `${donorType} / ${category}`,
      name,
      phone,
      email,
      donationType: category,
      amount: amountOrItems,
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
          홈페이지에서 간편하게 온라인 후원신청서를 작성하실 수 있습니다. 사용 용도를 지정해 후원하시는 경우에는 ‘지정기탁서’ 메뉴를 이용해 주세요.
        </p>
      </div>

      <div className="online-form-container">
        <div className="form-guide-notice" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <strong>※ 지정기탁 안내:</strong> 후원금·물품의 사용 목적을 지정하여 기탁하시는 경우 지정기탁서 작성이 필요합니다.
          </div>
          {onNavigate && (
            <button
              type="button"
              onClick={() => onNavigate('support', 'designated-deposit')}
              style={{
                background: '#FFD54F',
                color: '#222',
                padding: '7px 14px',
                borderRadius: '6px',
                fontWeight: 800,
                fontSize: '13px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              지정기탁서 메뉴 이동 &gt;
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group-grid">
            <label className="form-label required">후원자 구분</label>
            <div className="form-radio-group">
              {['개인', '개인사업자', '법인', '단체'].map((t) => (
                <label key={t} className="form-radio-label">
                  <input
                    type="radio"
                    name="donorType"
                    value={t}
                    checked={donorType === t}
                    onChange={() => setDonorType(t)}
                  /> {t}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group-grid">
            <label className="form-label required">
              {donorType === '개인' ? '후원자 성함' : '법인 / 단체명'}
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

          <div className="form-group-grid">
            <label className="form-label required">후원 방식</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="정기후원">정기후원 (매월 자동이체/계좌송금)</option>
              <option value="일시후원">일시후원 (계좌 입금)</option>
              <option value="결연후원">아동 결연후원</option>
              <option value="물품후원">물품후원 (식품, 의류, 생활용품 등)</option>
            </select>
          </div>

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

          <div className="form-group-grid">
            <label className="form-label">지정기탁 희망</label>
            <div>
              <label className="form-radio-label" style={{ marginBottom: 6 }}>
                <input
                  type="checkbox"
                  checked={isDesignated}
                  onChange={(e) => setIsDesignated(e.target.checked)}
                /> 특정 사용 목적 지정기탁 희망
              </label>
              {isDesignated && (
                <input
                  type="text"
                  className="form-input-text"
                  placeholder="사용목적·용도 기재 (예: 아동 학습지원, 문화체험, 자립정착금 등)"
                  value={designatedPurpose}
                  onChange={(e) => setDesignatedPurpose(e.target.value)}
                  style={{ marginTop: 6 }}
                />
              )}
            </div>
          </div>

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
                  placeholder="주소 기재 (예: 대구 동구 ...)"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ marginTop: 6 }}
                />
              )}
            </div>
          </div>

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

          <div className="privacy-consent-box">
            <div style={{ fontWeight: 700, fontSize: '13.5px', marginBottom: 6, color: '#333' }}>
              [필수] 개인정보 수집 및 이용에 대한 동의
            </div>
            <div className="privacy-scroll-area">
              1. 수집 항목: 성명(단체명), 연락처, 이메일, 주소(영수증 신청 시)<br />
              2. 수집 목적: 후원 신청 접수, 후원금 관리, 기부금영수증 발급 및 시설 소식지 발송<br />
              3. 보유 기간: 수집·이용 동의일로부터 재단이 정한 보존기간 및 기부금영수증 발급일로부터 5년
            </div>
            <div style={{ marginTop: 10 }}>
              <label className="form-radio-label" style={{ fontWeight: 700, color: '#254d38' }}>
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

// 3. 지정기탁서 (요청사항 10, 11번 및 '기탁서 양식.jpg' 100% 반영: 서식 내려받기 + 원본 제출 안내 + 온라인 작성 및 직접 전자서명 제출/인쇄)
export function DesignatedDepositView({ onSubmitDesignated }) {
  const today = new Date();
  const [form, setForm] = useState({
    amountKor: '',
    amountNum: '',
    periodType: '일시기탁',
    startYear: String(today.getFullYear()),
    startMonth: String(today.getMonth() + 1).padStart(2, '0'),
    endYear: String(today.getFullYear() + 1),
    endMonth: String(today.getMonth() + 1).padStart(2, '0'),
    purpose: '',
    donorCategory: '개인',
    donorName: '',
    idOrBizNum: '',
    address: '',
    repName: '',
    phone: '',
    signYear: String(today.getFullYear()),
    signMonth: String(today.getMonth() + 1).padStart(2, '0'),
    signDay: String(today.getDate()).padStart(2, '0'),
    agreeCollect: '동의함',
    agreeThirdParty: '동의함'
  });

  const [showOriginalImage, setShowOriginalImage] = useState(false);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 2.4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: ((clientX - rect.left) * canvas.width) / rect.width,
      y: ((clientY - rect.top) * canvas.height) / rect.height
    };
  };

  const startDraw = (e) => {
    e.preventDefault();
    const ctx = canvasRef.current.getContext('2d');
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setIsDrawing(true);
    setHasSignature(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const ctx = canvasRef.current.getContext('2d');
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const endDraw = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.donorName.trim() || !form.phone.trim() || !form.purpose.trim()) {
      alert('기부자 성명(법인/단체명), 연락처, 사용목적·용도를 모두 입력해 주세요.');
      return;
    }
    if (form.agreeCollect !== '동의함' || form.agreeThirdParty !== '동의함') {
      alert('기부금영수증 발행 및 지정기탁 처리를 위해 개인정보 수집·이용 및 제3자 제공에 동의해 주세요.');
      return;
    }
    if (!hasSignature) {
      alert('하단 서명란에 마우스 또는 손가락(터치)으로 서명을 해 주세요.');
      return;
    }

    const signatureDataUrl = canvasRef.current.toDataURL('image/png');
    const payload = {
      id: Date.now(),
      ...form,
      signatureDataUrl,
      createdAt: new Date().toISOString().slice(0, 10)
    };

    if (onSubmitDesignated) {
      onSubmitDesignated(payload);
    }
    alert('전자서명된 지정기탁서가 성공적으로 제출되었습니다. 관리자센터에 보관되었으며, 인쇄 버튼으로 사본을 출력하실 수도 있습니다.');
  };

  const handlePrintForm = () => {
    window.print();
  };

  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          후원금이나 후원물품의 사용 용도를 정해 후원하시는 경우 지정기탁서를 작성·제출하실 수 있습니다.
        </p>
      </div>

      {/* 1. 서식 내려받기 및 원본 제출 안내 (요청사항 11번: 구청 확인 전에도 서식 내려받기와 서명한 원본 제출 안내 게시) */}
      <div style={{
        background: '#f8fbf9',
        border: '1px solid #cce3d4',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '30px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#254d38', marginBottom: '6px' }}>
              ① 지정기탁서 양식 내려받기 및 서명 원본 제출 안내
            </h3>
            <p style={{ fontSize: '14px', color: '#444', lineHeight: 1.7 }}>
              육영학사 공식 지정기탁서 서식을 내려받아 작성·자필 서명하신 후 방문, 우편, 팩스 또는 이메일로 제출하실 수 있습니다.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="/images/designated-deposit-form.jpg"
              download="육영학사_지정기탁서_양식.jpg"
              className="btn-primary-action"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 18px', fontSize: '13.5px' }}
            >
              <Download size={16} /> 지정기탁서 서식 내려받기
            </a>
            <button
              type="button"
              onClick={() => setShowOriginalImage(!showOriginalImage)}
              className="btn-secondary-action"
              style={{ padding: '10px 16px', fontSize: '13.5px' }}
            >
              {showOriginalImage ? '원본 서식 미리보기 닫기' : '원본 서식 이미지 보기'}
            </button>
          </div>
        </div>

        <table className="custom-info-table" style={{ marginBottom: showOriginalImage ? '18px' : 0 }}>
          <tbody>
            <tr>
              <th style={{ width: '20%' }}>제출 방법</th>
              <td>
                • <strong>우편/방문:</strong> ({ORG_INFO.zipcode}) {ORG_INFO.address} {ORG_INFO.addressDetail} 육영학사 사무실<br />
                • <strong>팩스 제출:</strong> {ORG_INFO.fax} &nbsp;|&nbsp; <strong>이메일 제출:</strong> {ORG_INFO.email} (스캔본 또는 사진 전송 후 원본 우편 발송)
              </td>
            </tr>
            <tr>
              <th>문의처</th>
              <td>육영학사 후원담당 ({ORG_INFO.tel})</td>
            </tr>
          </tbody>
        </table>

        {showOriginalImage && (
          <div style={{ textAlign: 'center', background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #d5e5db' }}>
            <img
              src="/images/designated-deposit-form.jpg"
              alt="육영학사 지정기탁서 공식 양식"
              style={{ maxWidth: '680px', width: '100%', margin: '0 auto', border: '1px solid #ddd' }}
            />
          </div>
        )}
      </div>

      {/* 2. 온라인 지정기탁서 작성 및 전자서명 제출 (기탁서 양식.jpg 레이아웃 100% 구현) */}
      <div className="designated-form-sheet" id="printable-designated-form">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }} className="no-print">
          <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#254d38' }}>
            ② 홈페이지에서 지정기탁서 직접 작성 및 전자서명 제출
          </h3>
          <button
            type="button"
            onClick={handlePrintForm}
            className="btn-secondary-action"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', fontSize: '13px' }}
          >
            <Printer size={15} /> 작성한 기탁서 인쇄 / PDF 저장
          </button>
        </div>

        <form onSubmit={handleSubmit} className="official-paper-box">
          <h2 className="official-paper-title">지 정 기 탁 서</h2>

          <table className="official-paper-table">
            <tbody>
              <tr>
                <th>기탁금액</th>
                <td colSpan={3}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span>금</span>
                    <input
                      type="text"
                      className="paper-inline-input"
                      placeholder="예: 일백만 (또는 물품명)"
                      value={form.amountKor}
                      onChange={(e) => setForm({ ...form, amountKor: e.target.value })}
                      style={{ width: '170px' }}
                      required
                    />
                    <span>원 (₩</span>
                    <input
                      type="text"
                      className="paper-inline-input"
                      placeholder="예: 1,000,000"
                      value={form.amountNum}
                      onChange={(e) => setForm({ ...form, amountNum: e.target.value })}
                      style={{ width: '150px' }}
                      required
                    />
                    <span>)</span>
                  </div>
                </td>
              </tr>

              <tr>
                <th rowSpan={2}>기탁기간</th>
                <td colSpan={3}>
                  <label className="form-radio-label">
                    <input
                      type="radio"
                      name="periodType"
                      checked={form.periodType === '일시기탁'}
                      onChange={() => setForm({ ...form, periodType: '일시기탁' })}
                    /> 일시기탁
                  </label>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                    <label className="form-radio-label" style={{ marginRight: '10px' }}>
                      <input
                        type="radio"
                        name="periodType"
                        checked={form.periodType === '정기기탁'}
                        onChange={() => setForm({ ...form, periodType: '정기기탁' })}
                      /> 정기기탁
                    </label>
                    <input
                      type="text"
                      className="paper-inline-input"
                      style={{ width: '62px', textAlign: 'center' }}
                      value={form.startYear}
                      onChange={(e) => setForm({ ...form, startYear: e.target.value })}
                    /> 년
                    <input
                      type="text"
                      className="paper-inline-input"
                      style={{ width: '44px', textAlign: 'center' }}
                      value={form.startMonth}
                      onChange={(e) => setForm({ ...form, startMonth: e.target.value })}
                    /> 월 ~
                    <input
                      type="text"
                      className="paper-inline-input"
                      style={{ width: '62px', textAlign: 'center' }}
                      value={form.endYear}
                      onChange={(e) => setForm({ ...form, endYear: e.target.value })}
                    /> 년
                    <input
                      type="text"
                      className="paper-inline-input"
                      style={{ width: '44px', textAlign: 'center' }}
                      value={form.endMonth}
                      onChange={(e) => setForm({ ...form, endMonth: e.target.value })}
                    /> 월 까지
                  </div>
                </td>
              </tr>

              <tr>
                <th>사용목적 · 용도</th>
                <td colSpan={3}>
                  <input
                    type="text"
                    className="paper-full-input"
                    placeholder="예: 아동 교육·학습 지원, 문화체험 활동비, 자립정착 지원금 등"
                    value={form.purpose}
                    onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td colSpan={4} style={{ background: '#fcfdfc', padding: '12px 18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <div className="form-radio-group">
                      {['개인', '개인사업자', '법인', '단체'].map((cat) => (
                        <label key={cat} className="form-radio-label" style={{ fontWeight: 700 }}>
                          <input
                            type="radio"
                            name="donorCategory"
                            checked={form.donorCategory === cat}
                            onChange={() => setForm({ ...form, donorCategory: cat })}
                          /> {cat}
                        </label>
                      ))}
                    </div>
                    <span style={{ fontSize: '12.5px', color: '#666' }}>(※ 체크√ 해주세요)</span>
                  </div>
                </td>
              </tr>

              <tr>
                <th style={{ width: '20%' }}>
                  기부자 성명<br />
                  <small style={{ fontWeight: 500 }}>(법인/단체명)</small>
                </th>
                <td style={{ width: '30%' }}>
                  <input
                    type="text"
                    className="paper-full-input"
                    placeholder="성명 또는 법인/단체명"
                    value={form.donorName}
                    onChange={(e) => setForm({ ...form, donorName: e.target.value })}
                    required
                  />
                </td>
                <th style={{ width: '20%' }}>
                  주민등록번호<br />
                  <small style={{ fontWeight: 500 }}>(사업자등록번호)</small>
                </th>
                <td style={{ width: '30%' }}>
                  <input
                    type="text"
                    className="paper-full-input"
                    placeholder="생년월일 또는 사업자등록번호"
                    value={form.idOrBizNum}
                    onChange={(e) => setForm({ ...form, idOrBizNum: e.target.value })}
                  />
                </td>
              </tr>

              <tr>
                <th>주 소</th>
                <td colSpan={3}>
                  <input
                    type="text"
                    className="paper-full-input"
                    placeholder="주소를 입력해 주세요"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    required
                  />
                </td>
              </tr>

              <tr>
                <th>
                  대표자 성명<br />
                  <small style={{ fontWeight: 500 }}>(법인일 경우)</small>
                </th>
                <td>
                  <input
                    type="text"
                    className="paper-full-input"
                    placeholder="법인/단체 대표자 성명"
                    value={form.repName}
                    onChange={(e) => setForm({ ...form, repName: e.target.value })}
                  />
                </td>
                <th>연락처</th>
                <td>
                  <input
                    type="tel"
                    className="paper-full-input"
                    placeholder="예: 010-1234-5678"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ textAlign: 'right', fontSize: '12.5px', color: '#555', marginTop: '6px', marginBottom: '18px' }}>
            ※ 성명, 주민등록번호(사업자등록번호), 주소, 연락처(유선전화·핸드폰) 필히 기재바랍니다
          </div>

          <div style={{ textAlign: 'center', margin: '22px 0', lineHeight: 1.9, fontSize: '15px', color: '#111', fontWeight: 600 }}>
            위와 같이 기부(약정)하며, 「기부금품의 모집 및 사용에 관한 법률」 제5조 제2항 단서에 따라<br />
            상기 금품을 지정기탁하려고 합니다.

            <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
              <input
                type="text"
                className="paper-inline-input"
                style={{ width: '64px', textAlign: 'center', fontWeight: 700 }}
                value={form.signYear}
                onChange={(e) => setForm({ ...form, signYear: e.target.value })}
              /> 년
              <input
                type="text"
                className="paper-inline-input"
                style={{ width: '44px', textAlign: 'center', fontWeight: 700 }}
                value={form.signMonth}
                onChange={(e) => setForm({ ...form, signMonth: e.target.value })}
              /> 월
              <input
                type="text"
                className="paper-inline-input"
                style={{ width: '44px', textAlign: 'center', fontWeight: 700 }}
                value={form.signDay}
                onChange={(e) => setForm({ ...form, signDay: e.target.value })}
              /> 일
            </div>
          </div>

          {/* 전자서명 입력 패드 */}
          <div className="signature-pad-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#222' }}>
                기부자(법인/단체명/성명) : <span style={{ color: '#254d38', textDecoration: 'underline' }}>{form.donorName || '________________'}</span> &nbsp;(인 또는 서명)
              </div>
              <button
                type="button"
                onClick={clearSignature}
                className="no-print"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12.5px',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  background: '#fff',
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={13} /> 서명 다시 쓰기
              </button>
            </div>
            <div style={{ position: 'relative', border: '2px dashed #4cab6e', borderRadius: '8px', background: '#fff', overflow: 'hidden' }}>
              <canvas
                ref={canvasRef}
                width={520}
                height={130}
                style={{ width: '100%', height: '130px', display: 'block', touchAction: 'none', cursor: 'crosshair' }}
                onMouseDown={startDraw}
                onMouseMove={draw}
                onMouseUp={endDraw}
                onMouseLeave={endDraw}
                onTouchStart={startDraw}
                onTouchMove={draw}
                onTouchEnd={endDraw}
              />
              {!hasSignature && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#999',
                    fontSize: '13.5px',
                    pointerEvents: 'none'
                  }}
                >
                  이곳에 마우스 또는 손가락(터치)으로 직접 서명해 주세요
                </div>
              )}
            </div>
          </div>

          {/* 【개인정보 수집·이용·제공 동의서】 (기탁서 양식.jpg 하단 박스 100% 반영) */}
          <div className="official-consent-box">
            <div style={{ textAlign: 'center', fontWeight: 800, fontSize: '15px', marginBottom: '10px', color: '#111' }}>
              【개인정보 수집·이용·제공 동의서】
            </div>
            <p style={{ fontSize: '13px', color: '#333', lineHeight: 1.65, marginBottom: '10px' }}>
              육영복지재단 육영학사는 기부 및 소득공제 등과 관련하여 본인의 개인정보를 수집·이용하거나 제3자에게 제공하고자 하는 경우에는 「개인정보 보호법」 제15조, 제17조, 제24조의2에 따라 본인의 동의를 얻어야 합니다. 이에 아래와 같이 개인정보를 수집·이용·제공하는 것에 동의합니다.
            </p>

            <div style={{ fontSize: '12.8px', color: '#333', lineHeight: 1.65, marginBottom: '8px' }}>
              <strong>【수집·이용에 관한 사항】</strong><br />
              1. 개인정보 수집·이용 목적 : 기부금 영수증 발행, 국세청 연말정산간소화 자료제출<br />
              2. 수집하려는 개인정보의 항목 : 성명, 생년월일, 주민등록번호, 주소, 연락처 등<br />
              3. 개인정보의 보유 및 이용 기간 : 수집·이용에 관한 동의일로부터 재단이 정한 보존기간 및 기부금 영수증 발급한 날부터 5년<br />
              4. 개인정보 수집·이용 동의거부의 권리 : 위 개인정보의 수집·이용에 관한 동의는 거부하실 수 있으며, 동의하지 않으시는 경우 기부금영수증 발행 및 연말정산관련 등과 관련하여 불이익을 받으실 수 있습니다.
            </div>

            <div className="official-consent-check-row">
              <span>위와 같이 본인의 개인정보를 수집·이용하는 것에 동의합니다.</span>
              <div className="form-radio-group">
                <label className="form-radio-label">
                  <input
                    type="radio"
                    name="agreeCollect"
                    checked={form.agreeCollect === '동의함'}
                    onChange={() => setForm({ ...form, agreeCollect: '동의함' })}
                  /> 동의함
                </label>
                <label className="form-radio-label">
                  <input
                    type="radio"
                    name="agreeCollect"
                    checked={form.agreeCollect === '동의하지 않음'}
                    onChange={() => setForm({ ...form, agreeCollect: '동의하지 않음' })}
                  /> 동의하지 않음
                </label>
              </div>
            </div>

            <div style={{ fontSize: '12.8px', color: '#333', lineHeight: 1.65, margin: '12px 0 8px' }}>
              <strong>【제3자 제공에 관한 사항】</strong><br />
              1. 개인정보를 제공받는 자 : 관계 행정기관<br />
              2. 개인정보를 제공받는 자의 이용 목적 : 기부금 심사·승인처리 및 업무처리, 기부금 소득·세액공제<br />
              3. 제공하는 개인정보의 항목 : 성명, 생년월일, 주민등록번호, 주소, 연락처, 계좌번호 등<br />
              4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간 : 수집·이용에 관한 동의일로부터 관계 행정기관이 정한 보존기간 동안<br />
              5. 개인정보 제공 동의거부의 권리 : 위 개인정보의 제공에 관한 동의는 거부하실 수 있으며, 동의하지 않으시는 경우 기부금 처리 및 기부금영수증 발행, 연말정산관련 등과 관련하여 불이익을 받으실 수 있습니다.
            </div>

            <div className="official-consent-check-row">
              <span>위와 같이 본인의 개인정보를 제3자에게 제공하는 것에 동의합니다.</span>
              <div className="form-radio-group">
                <label className="form-radio-label">
                  <input
                    type="radio"
                    name="agreeThirdParty"
                    checked={form.agreeThirdParty === '동의함'}
                    onChange={() => setForm({ ...form, agreeThirdParty: '동의함' })}
                  /> 동의함
                </label>
                <label className="form-radio-label">
                  <input
                    type="radio"
                    name="agreeThirdParty"
                    checked={form.agreeThirdParty === '동의하지 않음'}
                    onChange={() => setForm({ ...form, agreeThirdParty: '동의하지 않음' })}
                  /> 동의하지 않음
                </label>
              </div>
            </div>

            <div style={{ textAlign: 'center', fontSize: '13px', color: '#333', marginTop: '10px', fontWeight: 600 }}>
              본인은 본 동의서의 내용과 개인정보 수집·이용·제공에 관한 본인의 권리에 관하여 이해하고 서명합니다.
            </div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: 800, color: '#111', marginTop: '22px' }}>
            육영학사 귀중
          </div>

          <div className="form-submit-row no-print">
            <button type="submit" className="btn-primary-action" style={{ padding: '14px 40px', fontSize: '16px' }}>
              전자서명 지정기탁서 제출하기
            </button>
            <button type="button" onClick={handlePrintForm} className="btn-secondary-action">
              인쇄 / PDF 저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// 4. 자원봉사 안내 (요청사항 10번: 자원봉사 안내 안에 멘토링 문안 소개)
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
        <div style={{ background: '#f8fbf9', border: '1px solid #d5e5db', borderRadius: '10px', padding: '20px' }}>
          <h4 style={{ fontSize: '15.5px', fontWeight: 800, color: '#254d38', marginBottom: 8 }}>1. 학습·재능기부 봉사</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
            국어·영어·수학 기초학습 지도, 악기, 미술, 체육, 컴퓨터, 영상 등 특기 교육
          </p>
        </div>

        <div style={{ background: '#f8fbf9', border: '1px solid #d5e5db', borderRadius: '10px', padding: '20px' }}>
          <h4 style={{ fontSize: '15.5px', fontWeight: 800, color: '#254d38', marginBottom: 8 }}>2. 일상 및 프로그램 지원 봉사</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
            원내 문화·체험 프로그램 보조, 아동 놀이 및 독서 지도, 특별행사 지원
          </p>
        </div>

        <div style={{ background: '#f8fbf9', border: '1px solid #d5e5db', borderRadius: '10px', padding: '20px' }}>
          <h4 style={{ fontSize: '15.5px', fontWeight: 800, color: '#254d38', marginBottom: 8 }}>3. 시설 환경정비 봉사</h4>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>
            생활관 및 식당 청결 유지, 화단 가꾸기, 도색 및 시설 안전 점검 보조
          </p>
        </div>
      </div>

      {/* 멘토링 안내 섹션 (요청사항 10번 & 126-127행 멘토링 문안 100% 반영) */}
      <h3 className="content-section-title">
        <HeartHandshake size={18} className="section-icon-sprout" /> 멘토링 안내
      </h3>
      <div style={{
        background: '#fffdf2',
        border: '1px solid #f0df9c',
        borderLeft: '5px solid #FFD54F',
        borderRadius: '10px',
        padding: '24px',
        marginBottom: '28px',
        fontSize: '15px',
        color: '#333',
        lineHeight: 1.85
      }}>
        <p>
          <strong>멘토링은 아동이 믿고 이야기할 수 있는 어른과 꾸준히 교류하는 활동입니다.</strong> 안부를 나누고 관심사나 진로에 대해 이야기하며 아동의 성장을 응원합니다. 육영학사에서 <strong>1년 이상 봉사하며 신뢰관계가 형성된 분을 대상</strong>으로, 아동의 참여 의사와 활동을 꾸준히 이어갈 수 있는지를 살펴 멘토 연결을 검토합니다. 연결된 뒤에는 만남, 전화, 편지 등 아동에게 맞는 방식으로 <strong>연 2회 이상 교류</strong>할 수 있도록 담당자가 돕습니다.
        </p>
      </div>

      {/* VMS 인증 안내 */}
      <div style={{
        background: '#eaf5ee',
        border: '1px solid #cce3d4',
        borderRadius: '10px',
        padding: '22px',
        marginBottom: '28px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '16px', fontWeight: 800, color: '#254d38', marginBottom: 8 }}>
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
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 18px', fontSize: '13.5px' }}
        >
          <ExternalLink size={14} /> VMS 공식 홈페이지 회원가입 바로가기
        </a>
      </div>

      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <button
          type="button"
          onClick={() => onNavigate('support', 'volunteer-apply')}
          className="btn-primary-action"
          style={{ padding: '13px 34px' }}
        >
          온라인 자원봉사 신청하기 &gt;
        </button>
      </div>
    </div>
  );
}

// 5. 온라인 자원봉사 신청 폼
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
      area: field,
      name,
      phone,
      desiredSchedule,
      wishDate: desiredSchedule,
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

          <div className="form-group-grid">
            <label className="form-label required">희망 봉사분야</label>
            <select
              className="form-select"
              value={field}
              onChange={(e) => setField(e.target.value)}
            >
              <option value="학습·재능기부">학습지도 및 재능기부 (학습, 악기, 미술, 체육 등)</option>
              <option value="친교·멘토링">친교 및 정서지원 활동 (놀이, 독서, 프로그램 보조)</option>
              <option value="환경정비">시설 환경정비 및 청결 지원</option>
              <option value="행사보조">원내 특별행사 및 프로그램 보조</option>
            </select>
          </div>

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
              <label className="form-radio-label" style={{ fontWeight: 700, color: '#254d38' }}>
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

// 6. 협약·결연 (요청사항 10번 & 117-125행 게시 문안 100% 반영)
export function PartnershipView({ onNavigate }) {
  return (
    <div className="view-container">
      <div className="subpage-highlight-banner">
        <p className="subpage-highlight-text">
          아이에게 필요한 도움을 지역사회와 함께 이어갑니다.
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#333', lineHeight: 1.85, marginBottom: '28px' }}>
        육영학사는 개인·단체의 꾸준한 결연 지원과 지역 기관·단체의 전문성을 아동의 일상과 성장에 연결합니다.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px', marginBottom: '34px' }}>
        {/* 결연 카드 */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #d5e5db',
          borderTop: '4px solid #4cab6e',
          borderRadius: '12px',
          padding: '26px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#eaf5ee',
              color: '#3b8f5a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Heart size={22} />
            </div>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#3b8f5a' }}>결연 (SPONSORSHIP)</span>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#222' }}>아동의 성장을 꾸준히 지원합니다</h3>
            </div>
          </div>
          <p style={{ fontSize: '14.5px', color: '#444', lineHeight: 1.8 }}>
            아이의 성장 단계와 생활 여건을 살펴 학습, 문화체험, 진로·자립 준비 등에 필요한 지원을 연결합니다. 개인이나 단체가 관심 있는 분야와 참여 가능한 기간을 알려주시면, 담당자가 아동에게 필요한 도움과 후원자의 참여 여건을 함께 살펴 지원 방법을 상의합니다.
          </p>
        </div>

        {/* 협약 카드 */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #f0df9c',
          borderTop: '4px solid #FFD54F',
          borderRadius: '12px',
          padding: '26px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#fff8db',
              color: '#b8860b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Handshake size={22} />
            </div>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#b8860b' }}>협약 (MOU & PARTNERSHIP)</span>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#222' }}>지역 기관과 실제 활동을 함께합니다</h3>
            </div>
          </div>
          <p style={{ fontSize: '14.5px', color: '#444', lineHeight: 1.8 }}>
            육영학사는 지역 기관·단체와 교육, 상담·치료, 문화체험, 직업체험 등 함께할 분야를 정합니다. 지원 내용과 각 기관의 역할을 협의한 뒤 협약식을 진행합니다. 협약 이후에는 아동에게 필요한 서비스를 연계하거나 공동 프로그램을 연 2회 이상 진행할 수 있도록 일정을 함께 계획합니다.
          </p>
        </div>
      </div>

      {/* 협약·결연 문의 */}
      <h3 className="content-section-title">
        <PhoneCall size={18} className="section-icon-sprout" /> 협약·결연 문의
      </h3>
      <div style={{
        background: 'linear-gradient(135deg, #f8fbf9 0%, #fffdf5 100%)',
        border: '1px solid #cce3d4',
        borderRadius: '12px',
        padding: '26px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '18px'
      }}>
        <div style={{ flex: 1, minWidth: '260px' }}>
          <p style={{ fontSize: '15px', color: '#333', lineHeight: 1.8, marginBottom: '10px', fontWeight: 600 }}>
            결연에 관심 있는 개인·단체나 협약을 제안하실 기관은 육영학사에 문의해 주세요. 관심 분야 또는 제공 가능한 지원, 참여 가능 시기를 알려주시면 담당자가 진행 방법을 안내합니다.
          </p>
          <div style={{ fontSize: '15px', color: '#254d38', fontWeight: 800 }}>
            대표전화 : {ORG_INFO.tel} &nbsp;|&nbsp; 이메일 : {ORG_INFO.email}
          </div>
        </div>
        {onNavigate && (
          <button
            type="button"
            onClick={() => onNavigate('support', 'donation-apply')}
            className="btn-primary-action"
            style={{ padding: '12px 24px', fontSize: '14px' }}
          >
            결연·후원 신청하기 &gt;
          </button>
        )}
      </div>
    </div>
  );
}

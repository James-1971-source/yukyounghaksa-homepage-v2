import React, { useState } from 'react';
import {
  X,
  Lock,
  Plus,
  Trash2,
  Edit3,
  Bell,
  Heart,
  Users,
  Image as ImageIcon,
  Database,
  Compass,
  FileSignature,
  Printer
} from 'lucide-react';

export default function AdminModal({
  isOpen,
  onClose,
  notices = [],
  onAddNotice,
  onDeleteNotice,
  stories = [],
  onAddStory,
  onDeleteStory,
  independenceList = [],
  onSaveIndependence,
  onDeleteIndependence,
  donations = [],
  designatedDeposits = [],
  onDeleteDesignated,
  volunteers = []
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('notices');

  // 공지사항 폼
  const [newNotice, setNewNotice] = useState({
    title: '',
    author: '관리자',
    content: ''
  });

  // 육영학사 이야기 폼
  const [newStory, setNewStory] = useState({
    category: '문화·여가',
    title: '',
    img: '/images/sub/story-1.jpg',
    desc: ''
  });

  // 자립정보 게시판 등록/수정 폼 (요청사항 9번: 담당자가 수시로 글을 올리고 수정 가능)
  const [editingIndepId, setEditingIndepId] = useState(null);
  const [indepForm, setIndepForm] = useState({
    category: '주거지원',
    title: '',
    target: '보호연장 및 자립준비청년',
    link: '',
    content: ''
  });

  // 지정기탁서 상세 열람 모달 상태
  const [selectedDeposit, setSelectedDeposit] = useState(null);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '1009' || password === 'admin') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('비밀번호가 올바르지 않습니다. (초기 비밀번호: 1009)');
    }
  };

  const handleCreateNotice = (e) => {
    e.preventDefault();
    if (!newNotice.title.trim()) return;
    const today = new Date().toISOString().slice(0, 10);
    onAddNotice({
      id: Date.now(),
      title: newNotice.title,
      author: newNotice.author || '관리자',
      content: newNotice.content,
      date: today,
      views: 1
    });
    setNewNotice({ title: '', author: '관리자', content: '' });
  };

  const handleCreateStory = (e) => {
    e.preventDefault();
    if (!newStory.title.trim()) return;
    const today = new Date().toISOString().slice(0, 10);
    if (onAddStory) {
      onAddStory({
        id: Date.now(),
        ...newStory,
        date: today
      });
    }
    setNewStory({
      category: '문화·여가',
      title: '',
      img: '/images/sub/story-1.jpg',
      desc: ''
    });
  };

  const handleSubmitIndependence = (e) => {
    e.preventDefault();
    if (!indepForm.title.trim()) return;
    const today = new Date().toISOString().slice(0, 10);
    if (onSaveIndependence) {
      onSaveIndependence({
        id: editingIndepId || Date.now(),
        ...indepForm,
        date: today
      });
    }
    setEditingIndepId(null);
    setIndepForm({
      category: '주거지원',
      title: '',
      target: '보호연장 및 자립준비청년',
      link: '',
      content: ''
    });
  };

  const handleStartEditIndependence = (item) => {
    setEditingIndepId(item.id);
    setIndepForm({
      category: item.category || '주거지원',
      title: item.title || '',
      target: item.target || '',
      link: item.link || '',
      content: item.content || ''
    });
  };

  const handlePrintSelectedDeposit = (dep) => {
    const win = window.open('', '_blank', 'width=820,height=960');
    if (!win) return;
    const periodText =
      dep.periodType === '정기기탁'
        ? `☑ 정기기탁 (${dep.startYear}년 ${dep.startMonth}월 ~ ${dep.endYear}년 ${dep.endMonth}월 까지)`
        : '☑ 일시기탁';
    win.document.write(`
      <!doctype html>
      <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <title>지정기탁서 - ${dep.donorName}</title>
        <style>
          body { font-family: 'Malgun Gothic', sans-serif; padding: 30px; color: #111; }
          h1 { text-align: center; letter-spacing: 10px; font-size: 28px; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; border: 2px solid #111; }
          th, td { border: 1px solid #333; padding: 10px 14px; font-size: 14px; }
          th { background: #e9ecea; width: 20%; text-align: center; }
          .consent { border: 1px solid #555; padding: 14px; margin-top: 16px; font-size: 12px; line-height: 1.55; }
          .consent-bar { border: 1px solid #333; padding: 6px 12px; margin: 6px 0; font-weight: bold; display: flex; justify-content: space-between; }
          .sig-box { text-align: center; margin: 18px 0; font-size: 15px; line-height: 1.8; }
          .sig-img { max-height: 70px; vertical-align: middle; border-bottom: 1px solid #333; }
          .footer-org { text-align: center; font-size: 22px; font-weight: bold; margin-top: 20px; }
        </style>
      </head>
      <body>
        <h1>지 정 기 탁 서</h1>
        <table>
          <tr>
            <th>기탁금액</th>
            <td colspan="3">금 ${dep.amountKor || ''} 원 (₩ ${dep.amountNum || ''})</td>
          </tr>
          <tr>
            <th>기탁기간</th>
            <td colspan="3">${periodText}</td>
          </tr>
          <tr>
            <th>사용목적 · 용도</th>
            <td colspan="3">${dep.purpose || ''}</td>
          </tr>
          <tr>
            <th>기부자 구분</th>
            <td colspan="3">☑ ${dep.donorCategory || '개인'}</td>
          </tr>
          <tr>
            <th>기부자 성명<br/>(법인/단체명)</th>
            <td>${dep.donorName || ''}</td>
            <th>주민등록번호<br/>(사업자등록번호)</th>
            <td>${dep.idOrBizNum || ''}</td>
          </tr>
          <tr>
            <th>주 소</th>
            <td colspan="3">${dep.address || ''}</td>
          </tr>
          <tr>
            <th>대표자 성명<br/>(법인일 경우)</th>
            <td>${dep.repName || ''}</td>
            <th>연락처</th>
            <td>${dep.phone || ''}</td>
          </tr>
        </table>
        <div class="sig-box">
          위와 같이 기부(약정)하며, 「기부금품의 모집 및 사용에 관한 법률」 제5조 제2항 단서에 따라<br/>
          상기 금품을 지정기탁하려고 합니다.<br/>
          <strong>${dep.signYear}년 ${dep.signMonth}월 ${dep.signDay}일</strong><br/>
          기부자(법인/단체명/성명) : <strong>${dep.donorName}</strong> &nbsp;
          ${dep.signatureDataUrl ? `<img src="${dep.signatureDataUrl}" class="sig-img" alt="서명" />` : '(서명)'}
        </div>
        <div class="consent">
          <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:6px;">【개인정보 수집·이용·제공 동의서】</div>
          <div><strong>【수집·이용에 관한 사항】</strong> 1. 목적: 기부금 영수증 발행, 국세청 연말정산간소화 자료제출 / 2. 항목: 성명, 생년월일, 주민등록번호, 주소, 연락처 등 / 3. 보유기간: 동의일로부터 재단이 정한 보존기간 및 기부금 영수증 발급일로부터 5년</div>
          <div class="consent-bar"><span>위와 같이 본인의 개인정보를 수집·이용하는 것에 동의합니다.</span><span>[${dep.agreeCollect || '동의함'}]</span></div>
          <div><strong>【제3자 제공에 관한 사항】</strong> 1. 제공받는 자: 관계 행정기관 / 2. 목적: 기부금 심사·승인처리 및 업무처리, 기부금 소득·세액공제 / 3. 항목: 성명, 생년월일, 주민등록번호, 주소, 연락처, 계좌번호 등</div>
          <div class="consent-bar"><span>위와 같이 본인의 개인정보를 제3자에게 제공하는 것에 동의합니다.</span><span>[${dep.agreeThirdParty || '동의함'}]</span></div>
        </div>
        <div class="footer-org">육영학사 귀중</div>
        <script>window.onload = function() { window.print(); };</script>
      </body>
      </html>
    `);
    win.document.close();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '940px' }}>
        <div
          style={{
            padding: '20px 26px',
            background: 'var(--color-primary-dark)',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Lock size={18} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>육영학사 관리자 센터 (Firebase DB 연동)</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={22} />
          </button>
        </div>

        <div style={{ padding: '26px' }}>
          {!authenticated ? (
            <form onSubmit={handleLogin} style={{ maxWidth: '380px', margin: '24px auto', textAlign: 'center' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--color-primary-soft)',
                  color: 'var(--color-primary-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}
              >
                <Lock size={24} />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px' }}>관리자 인증</h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                공지사항·이야기·자립정보 관리 및 지정기탁서·후원·봉사 신청내역 열람을 위해 비밀번호를 입력해주세요. (초기번호: 1009)
              </p>
              <input
                type="password"
                className="form-control"
                placeholder="관리자 비밀번호 입력"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: '12px', textAlign: 'center' }}
              />
              {error && <div style={{ color: '#dc2626', fontSize: '0.82rem', marginBottom: '12px' }}>{error}</div>}
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                로그인
              </button>
            </form>
          ) : (
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--color-primary-soft)',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  marginBottom: '18px',
                  fontSize: '0.84rem',
                  color: 'var(--color-primary-dark)',
                  fontWeight: 600
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Database size={15} /> Firebase Firestore (yukyounghaksa-official) 실시간 연동 중 (게시글 등록 시 메인화면 자동 반영)
                </span>
                <span>관리자 모드</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '22px',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '12px',
                  flexWrap: 'wrap'
                }}
              >
                <button
                  type="button"
                  className={`btn ${activeTab === 'notices' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setActiveTab('notices')}
                >
                  <Bell size={15} /> 공지사항 ({notices.length})
                </button>
                <button
                  type="button"
                  className={`btn ${activeTab === 'stories' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setActiveTab('stories')}
                >
                  <ImageIcon size={15} /> 육영학사 이야기 ({stories.length})
                </button>
                <button
                  type="button"
                  className={`btn ${activeTab === 'independence' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setActiveTab('independence')}
                >
                  <Compass size={15} /> 자립정보 게시판 ({independenceList.length})
                </button>
                <button
                  type="button"
                  className={`btn ${activeTab === 'designated' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setActiveTab('designated')}
                >
                  <FileSignature size={15} /> 지정기탁서 ({designatedDeposits.length})
                </button>
                <button
                  type="button"
                  className={`btn ${activeTab === 'donations' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setActiveTab('donations')}
                >
                  <Heart size={15} /> 후원신청 ({donations.length})
                </button>
                <button
                  type="button"
                  className={`btn ${activeTab === 'volunteers' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setActiveTab('volunteers')}
                >
                  <Users size={15} /> 자원봉사 ({volunteers.length})
                </button>
              </div>

              {/* 1. 공지사항 관리 */}
              {activeTab === 'notices' && (
                <div>
                  <form
                    onSubmit={handleCreateNotice}
                    style={{
                      background: 'var(--bg-light)',
                      padding: '18px',
                      borderRadius: '12px',
                      marginBottom: '20px'
                    }}
                  >
                    <h4 style={{ fontSize: '0.96rem', fontWeight: 800, marginBottom: '12px' }}>새 공지사항 등록</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 160px', gap: '10px', marginBottom: '10px' }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="공지 제목을 입력하세요 (예: [공지] ...)"
                        value={newNotice.title}
                        onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                        required
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="작성자 (예: 관리자)"
                        value={newNotice.author}
                        onChange={(e) => setNewNotice({ ...newNotice, author: e.target.value })}
                      />
                    </div>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="공지 내용을 입력하세요"
                      value={newNotice.content}
                      onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                      required
                      style={{ marginBottom: '10px' }}
                    />
                    <button type="submit" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
                      <Plus size={16} /> 공지 등록
                    </button>
                  </form>

                  <div style={{ maxHeight: '280px', overflowY: 'auto' }}>
                    {notices.map((n) => (
                      <div
                        key={n.id}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '10px 12px',
                          borderBottom: '1px solid var(--border-light)'
                        }}
                      >
                        <div>
                          <span className="badge badge-green" style={{ marginRight: '8px' }}>
                            {n.author || '관리자'}
                          </span>
                          <strong style={{ fontSize: '0.9rem' }}>{n.title}</strong>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginLeft: '10px' }}>
                            {n.date}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onDeleteNotice(n.id)}
                          style={{ color: '#dc2626', padding: '4px 8px', background: 'none', border: 'none', cursor: 'pointer' }}
                          title="삭제"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. 육영학사 이야기 관리 (요청사항 3번: 한 번 올리면 메인에도 자동 표시) */}
              {activeTab === 'stories' && (
                <div>
                  <form
                    onSubmit={handleCreateStory}
                    style={{
                      background: 'var(--bg-light)',
                      padding: '18px',
                      borderRadius: '12px',
                      marginBottom: '20px'
                    }}
                  >
                    <h4 style={{ fontSize: '0.96rem', fontWeight: 800, marginBottom: '12px' }}>
                      새 육영학사 이야기 등록 (등록 시 메인 화면 ‘육영학사 이야기’ 영역에 자동 반영)
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '10px', marginBottom: '10px' }}>
                      <select
                        className="form-control"
                        value={newStory.category}
                        onChange={(e) => setNewStory({ ...newStory, category: e.target.value })}
                      >
                        <option value="문화·여가">문화·여가</option>
                        <option value="학습·멘토링">학습·멘토링</option>
                        <option value="진로·직업">진로·직업</option>
                        <option value="생활·체육">생활·체육</option>
                        <option value="후원·나눔">후원·나눔</option>
                      </select>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="이야기 제목을 입력하세요"
                        value={newStory.title}
                        onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
                        required
                      />
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="대표 이미지 URL (예: /images/sub/story-1.jpg 또는 이미지 주소)"
                      value={newStory.img}
                      onChange={(e) => setNewStory({ ...newStory, img: e.target.value })}
                      style={{ marginBottom: '10px' }}
                    />
                    <textarea
                      className="form-control"
                      rows={2}
                      placeholder="이야기 본문 설명을 입력하세요"
                      value={newStory.desc}
                      onChange={(e) => setNewStory({ ...newStory, desc: e.target.value })}
                      required
                      style={{ marginBottom: '10px' }}
                    />
                    <button type="submit" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
                      <Plus size={16} /> 이야기 등록
                    </button>
                  </form>

                  <div style={{ maxHeight: '260px', overflowY: 'auto' }}>
                    {stories.map((s) => (
                      <div
                        key={s.id}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '10px 12px',
                          borderBottom: '1px solid var(--border-light)'
                        }}
                      >
                        <div>
                          <span className="badge badge-green" style={{ marginRight: '8px' }}>
                            {s.category}
                          </span>
                          <strong style={{ fontSize: '0.9rem' }}>{s.title}</strong>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginLeft: '10px' }}>
                            {s.date}
                          </span>
                        </div>
                        {onDeleteStory && (
                          <button
                            type="button"
                            onClick={() => onDeleteStory(s.id)}
                            style={{ color: '#dc2626', padding: '4px 8px', background: 'none', border: 'none', cursor: 'pointer' }}
                            title="삭제"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. 자립정보 게시판 등록·수정·삭제 관리 (요청사항 9번 반영) */}
              {activeTab === 'independence' && (
                <div>
                  <form
                    onSubmit={handleSubmitIndependence}
                    style={{
                      background: 'var(--bg-light)',
                      padding: '18px',
                      borderRadius: '12px',
                      marginBottom: '20px'
                    }}
                  >
                    <h4 style={{ fontSize: '0.96rem', fontWeight: 800, marginBottom: '12px' }}>
                      {editingIndepId ? '자립정보 게시글 수정' : '새 자립정보 게시글 등록'}
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '10px', marginBottom: '10px' }}>
                      <select
                        className="form-control"
                        value={indepForm.category}
                        onChange={(e) => setIndepForm({ ...indepForm, category: e.target.value })}
                      >
                        <option value="주거지원">주거지원</option>
                        <option value="금융·자산형성">금융·자산형성</option>
                        <option value="취업·직업훈련">취업·직업훈련</option>
                        <option value="교육·장학금">교육·장학금</option>
                        <option value="의료·심리지원">의료·심리지원</option>
                      </select>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="자립정보 제목을 입력하세요"
                        value={indepForm.title}
                        onChange={(e) => setIndepForm({ ...indepForm, title: e.target.value })}
                        required
                      />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="지원 대상 (예: 보호연장 및 퇴소 5년 이내 청년)"
                        value={indepForm.target}
                        onChange={(e) => setIndepForm({ ...indepForm, target: e.target.value })}
                        required
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="공고/신청 링크 URL (예: https://apply.lh.or.kr)"
                        value={indepForm.link}
                        onChange={(e) => setIndepForm({ ...indepForm, link: e.target.value })}
                      />
                    </div>
                    <textarea
                      className="form-control"
                      rows={2}
                      placeholder="지원 내용 및 신청 방법 설명을 입력하세요"
                      value={indepForm.content}
                      onChange={(e) => setIndepForm({ ...indepForm, content: e.target.value })}
                      required
                      style={{ marginBottom: '10px' }}
                    />
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button type="submit" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
                        <Plus size={16} /> {editingIndepId ? '수정 저장' : '자립정보 등록'}
                      </button>
                      {editingIndepId && (
                        <button
                          type="button"
                          className="btn btn-outline"
                          onClick={() => {
                            setEditingIndepId(null);
                            setIndepForm({ category: '주거지원', title: '', target: '보호연장 및 자립준비청년', link: '', content: '' });
                          }}
                          style={{ padding: '8px 14px', fontSize: '0.88rem' }}
                        >
                          취소
                        </button>
                      )}
                    </div>
                  </form>

                  <div style={{ maxHeight: '260px', overflowY: 'auto' }}>
                    {independenceList.map((item) => (
                      <div
                        key={item.id}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '10px 12px',
                          borderBottom: '1px solid var(--border-light)'
                        }}
                      >
                        <div>
                          <span className="badge badge-green" style={{ marginRight: '8px' }}>
                            {item.category}
                          </span>
                          <strong style={{ fontSize: '0.9rem' }}>{item.title}</strong>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginLeft: '10px' }}>
                            {item.date}
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button
                            type="button"
                            onClick={() => handleStartEditIndependence(item)}
                            style={{ color: '#254d38', padding: '4px 8px', background: 'none', border: 'none', cursor: 'pointer' }}
                            title="수정"
                          >
                            <Edit3 size={16} />
                          </button>
                          {onDeleteIndependence && (
                            <button
                              type="button"
                              onClick={() => onDeleteIndependence(item.id)}
                              style={{ color: '#dc2626', padding: '4px 8px', background: 'none', border: 'none', cursor: 'pointer' }}
                              title="삭제"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. 지정기탁서 제출내역 조회 및 서명본 인쇄/다운로드 (요청사항 11번 반영) */}
              {activeTab === 'designated' && (
                <div>
                  {designatedDeposits.length === 0 ? (
                    <p style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                      온라인으로 제출된 전자서명 지정기탁서 내역이 없습니다.
                    </p>
                  ) : (
                    <div className="table-responsive">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>제출일</th>
                            <th>기부자(구분)</th>
                            <th>기탁금액/기간</th>
                            <th>사용목적·용도</th>
                            <th>연락처</th>
                            <th>서명본 출력/관리</th>
                          </tr>
                        </thead>
                        <tbody>
                          {designatedDeposits.map((dep) => (
                            <tr key={dep.id}>
                              <td>{dep.createdAt || `${dep.signYear}-${dep.signMonth}-${dep.signDay}`}</td>
                              <td style={{ fontWeight: 700 }}>
                                {dep.donorName} <small>({dep.donorCategory})</small>
                              </td>
                              <td>
                                ₩{dep.amountNum} ({dep.periodType})
                              </td>
                              <td>{dep.purpose}</td>
                              <td>{dep.phone}</td>
                              <td>
                                <div style={{ display: 'flex', gap: '6px' }}>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    style={{ padding: '5px 10px', fontSize: '0.78rem' }}
                                    onClick={() => handlePrintSelectedDeposit(dep)}
                                  >
                                    <Printer size={13} /> 서명본 인쇄/PDF
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline"
                                    style={{ padding: '5px 10px', fontSize: '0.78rem' }}
                                    onClick={() => setSelectedDeposit(dep)}
                                  >
                                    서명보기
                                  </button>
                                  {onDeleteDesignated && (
                                    <button
                                      type="button"
                                      onClick={() => onDeleteDesignated(dep.id)}
                                      style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer' }}
                                      title="삭제"
                                    >
                                      <Trash2 size={15} />
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {selectedDeposit && (
                    <div
                      style={{
                        marginTop: '18px',
                        padding: '18px',
                        background: '#f8fbf9',
                        border: '1px solid #cce3d4',
                        borderRadius: '10px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <strong>{selectedDeposit.donorName} 님의 전자서명 지정기탁서 상세</strong>
                        <button
                          type="button"
                          onClick={() => setSelectedDeposit(null)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 700 }}
                        >
                          닫기 ✕
                        </button>
                      </div>
                      <p style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>
                        • 기탁금액: 금 {selectedDeposit.amountKor} 원 (₩ {selectedDeposit.amountNum}) / {selectedDeposit.periodType}<br />
                        • 사용목적·용도: {selectedDeposit.purpose}<br />
                        • 주소: {selectedDeposit.address} / 연락처: {selectedDeposit.phone}
                      </p>
                      {selectedDeposit.signatureDataUrl && (
                        <div style={{ marginTop: '10px', background: '#fff', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', display: 'inline-block' }}>
                          <div style={{ fontSize: '0.78rem', color: '#666', marginBottom: '4px' }}>제출된 전자서명:</div>
                          <img src={selectedDeposit.signatureDataUrl} alt="기부자 전자서명" style={{ maxHeight: '80px' }} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 5. 온라인 후원신청 내역 */}
              {activeTab === 'donations' && (
                <div>
                  {donations.length === 0 ? (
                    <p style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                      접수된 온라인 후원신청 내역이 없습니다.
                    </p>
                  ) : (
                    <div className="table-responsive">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>신청일</th>
                            <th>성함/단체명</th>
                            <th>연락처</th>
                            <th>후원구분</th>
                            <th>금액/품목</th>
                          </tr>
                        </thead>
                        <tbody>
                          {donations.map((d, i) => (
                            <tr key={i}>
                              <td>{d.date || d.createdAt}</td>
                              <td style={{ fontWeight: 700 }}>{d.name}</td>
                              <td>{d.phone}</td>
                              <td>{d.sponsorType || d.type}</td>
                              <td style={{ color: 'var(--color-primary-dark)', fontWeight: 700 }}>{d.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* 6. 자원봉사 신청내역 */}
              {activeTab === 'volunteers' && (
                <div>
                  {volunteers.length === 0 ? (
                    <p style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                      접수된 온라인 자원봉사 신청내역이 없습니다.
                    </p>
                  ) : (
                    <div className="table-responsive">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>신청일</th>
                            <th>신청자</th>
                            <th>연락처</th>
                            <th>희망분야</th>
                            <th>희망일자</th>
                          </tr>
                        </thead>
                        <tbody>
                          {volunteers.map((v, i) => (
                            <tr key={i}>
                              <td>{v.date || v.createdAt}</td>
                              <td style={{ fontWeight: 700 }}>{v.name}</td>
                              <td>{v.phone}</td>
                              <td>{v.area || v.field}</td>
                              <td>{v.wishDate || v.preferredDate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

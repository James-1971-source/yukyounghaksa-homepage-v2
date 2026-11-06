import React, { useState } from 'react';
import { X, Lock, Plus, Trash2, Bell, Heart, Users, Image as ImageIcon, Database } from 'lucide-react';

export default function AdminModal({
  isOpen,
  onClose,
  notices = [],
  onAddNotice,
  onDeleteNotice,
  stories = [],
  onAddStory,
  onDeleteStory,
  donations = [],
  volunteers = []
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('notices');

  const [newNotice, setNewNotice] = useState({
    title: '',
    author: '관리자',
    content: ''
  });

  const [newStory, setNewStory] = useState({
    category: '문화·여가',
    title: '',
    img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    desc: ''
  });

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
      img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
      desc: ''
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '860px' }}>
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
                공지사항·갤러리 관리 및 온라인 신청내역 열람을 위해 비밀번호를 입력해주세요. (초기번호: 1009)
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
                  <Database size={15} /> Firebase Firestore (yukyounghaksa-official) 실시간 연동 중
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
                  <Bell size={16} /> 공지사항 관리 ({notices.length})
                </button>
                <button
                  type="button"
                  className={`btn ${activeTab === 'stories' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setActiveTab('stories')}
                >
                  <ImageIcon size={16} /> 육영학사 이야기 ({stories.length})
                </button>
                <button
                  type="button"
                  className={`btn ${activeTab === 'donations' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setActiveTab('donations')}
                >
                  <Heart size={16} /> 후원신청 내역 ({donations.length})
                </button>
                <button
                  type="button"
                  className={`btn ${activeTab === 'volunteers' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setActiveTab('volunteers')}
                >
                  <Users size={16} /> 자원봉사 신청내역 ({volunteers.length})
                </button>
              </div>

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
                    <h4 style={{ fontSize: '0.96rem', fontWeight: 800, marginBottom: '12px' }}>새 육영학사 이야기 등록</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '10px', marginBottom: '10px' }}>
                      <select
                        className="form-control"
                        value={newStory.category}
                        onChange={(e) => setNewStory({ ...newStory, category: e.target.value })}
                      >
                        <option value="문화·여가">문화·여가</option>
                        <option value="진로·직업">진로·직업</option>
                        <option value="사회성·참여">사회성·참여</option>
                        <option value="생활환경">생활환경</option>
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
                      type="url"
                      className="form-control"
                      placeholder="대표 이미지 URL"
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

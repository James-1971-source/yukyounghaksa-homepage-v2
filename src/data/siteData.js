// 육영학사 종합 데이터 모델 (HWPX 문서 및 공식 정보 100% 반영)

export const ORG_INFO = {
  name: "육영학사",
  corporateName: "사회복지법인 육영복지재단",
  englishName: "YUK YOUNG HAK SA",
  director: "이혜련",
  type: "아동양육시설",
  capacity: "42명",
  zipcode: "41134",
  address: "대구광역시 동구 신평로 57",
  addressDetail: "(신평동 11-1)",
  tel: "053-986-1009",
  fax: "053-986-2009",
  email: "yukyoung1009@hanmail.net",
  businessNumber: "504-82-02685", // 표기용
  domain: "yukyoung1009.or.kr",
  bank: {
    name: "iM뱅크 (대구은행)",
    account: "504-10-371780-0",
    holder: "육영복지재단 육영학사"
  },
  hours: "평일 09:00 ~ 18:00 (아동 생활관 24시간 운영)",
  kakaoChannelUrl: "https://pf.kakao.com",
  happybeanUrl: "https://happybean.naver.com",
  vmsUrl: "https://www.vms.or.kr"
};

// 상단 네비게이션 메뉴 구조
export const NAV_ITEMS = [
  {
    id: "about",
    title: "학사소개",
    subItems: [
      { id: "greeting", title: "시설장 인사말" },
      { id: "corporate", title: "법인 및 시설소개" },
      { id: "history", title: "최신 연혁" },
      { id: "organization", title: "조직 및 업무" },
      { id: "facility", title: "시설현황 및 전경" },
      { id: "location", title: "오시는 길" }
    ]
  },
  {
    id: "admission",
    title: "입소안내",
    subItems: [
      { id: "target", title: "입소대상 및 절차" },
      { id: "counseling", title: "입소상담 안내" }
    ]
  },
  {
    id: "program",
    title: "사업 및 프로그램",
    subItems: [
      { id: "overview", title: "프로그램 안내" },
      { id: "independence-program", title: "특성화 자립프로그램 「꿈JOB끼」" }
    ]
  },
  {
    id: "support",
    title: "후원 및 자원봉사",
    subItems: [
      { id: "donation", title: "후원안내" },
      { id: "donation-apply", title: "온라인 후원신청" },
      { id: "volunteer", title: "자원봉사 안내" },
      { id: "volunteer-apply", title: "온라인 자원봉사신청" }
    ]
  },
  {
    id: "independence",
    title: "자립정보센터",
    subItems: [
      { id: "info-list", title: "자립정보 게시판" },
      { id: "agency-link", title: "자립지원전담기관 연계" }
    ]
  },
  {
    id: "community",
    title: "알림마당",
    subItems: [
      { id: "notice", title: "공지사항" },
      { id: "newsletter", title: "육영 소식지" },
      { id: "story", title: "육영학사 이야기" },
      { id: "privacy-policy", title: "개인정보처리방침" }
    ]
  }
];

// 연혁 데이터
export const HISTORY_ITEMS = [
  { year: "1958", date: "07. 25", title: "재단법인 육영학사 설립" },
  { year: "1958", date: "09. 11", title: "아동복지시설 인가" },
  { year: "1980", date: "05. 02", title: "재단법인에서 사회복지법인으로 조직 및 명칭 변경" },
  { year: "1993", date: "07. 10", title: "현사 신축 및 아동 생활관 증축" },
  { year: "2004", date: "11. 08", title: "원사 증축 및 다목적 프로그램실 확충" },
  { year: "2012", date: "03. 19", title: "사회복지법인명을 「육영복지재단」으로 변경" },
  { year: "2024", date: "현재", title: "아동 맞춤형 양육 및 자립특화 프로그램 「꿈JOB끼」 운영" }
];

// 직위별 주요 업무 표 데이터
export const JOB_ROLES = [
  {
    role: "원장",
    task: "시설 운영 총괄, 운영방향 수립, 주요 의사결정 및 대외협력"
  },
  {
    role: "자립지원전담요원 (사무국장 대행)",
    task: "시설 운영 및 사업 총괄 지원, 사업계획 및 결과관리, 직원교육·인권 및 고충관리, 외부자원 및 지역사회 연계, 시설아동 및 보호연장아동 자립지원, 퇴소아동 사후관리 및 자립지원전담기관 연계"
  },
  {
    role: "선임생활지도원",
    task: "사례관리 및 양육지원, 아동의 초기적응·가족관계·건강·학교생활 지원, 생활지원 업무 조정 및 생활지도원 업무지원"
  },
  {
    role: "생활지도원",
    task: "아동의 일상생활 보호·양육, 생활지도, 상담, 교육 및 프로그램 지원"
  },
  {
    role: "사무원",
    task: "회계·행정 및 시설 운영에 필요한 사무업무 지원"
  },
  {
    role: "조리원",
    task: "아동 급식 조리, 식생활 및 급식위생 관리"
  },
  {
    role: "운전원",
    task: "아동 및 시설 차량 운행, 차량관리 및 시설 운영 지원"
  }
];

// 10대 지원 프로그램
export const PROGRAMS = [
  {
    id: 1,
    title: "생활·양육지원",
    tag: "기본돌봄",
    desc: "아동의 연령과 개별 특성을 고려한 일상생활 지도 및 건강하고 균형 잡힌 생활습관 형성 지원",
    items: ["맞춤형 영양급식 제공", "개인 위생 및 건강검진", "연령별 일상생활 자율훈련"]
  },
  {
    id: 2,
    title: "학습·교육지원",
    tag: "성장발달",
    desc: "기초 학습능력 향상과 개인별 학업 성취를 돕기 위한 1:1 맞춤 학습 및 교육지원",
    items: ["수준별 학습지도", "방과후 특별활동 지원", "입학 및 진학 컨설팅"]
  },
  {
    id: 3,
    title: "정서·심리지원",
    tag: "마음돌봄",
    desc: "전문 심리상담과 미술·음악·놀이치료를 통해 심리적 안정과 자존감 회복 지원",
    items: ["전문 심리검사 및 상담", "모래놀이 및 미술치료", "멘토링 정서안정 연계"]
  },
  {
    id: 4,
    title: "문화·여가지원",
    tag: "체험활동",
    desc: "다채로운 문화·예술·레저활동과 여행을 통해 폭넓은 시야와 풍부한 감수성 함양",
    items: ["계절별 테마 여행", "공연·영화·스포츠 관람", "동아리 및 특기적성 활동"]
  },
  {
    id: 5,
    title: "가족관계지원",
    tag: "유대관계",
    desc: "면접교섭, 가정생활체험 등 가족 및 연고자와의 긍정적 유대관계 유지 지원",
    items: ["부모·연고자 정기면접 지원", "가정생활체험(가정방문)", "가족기능 회복 상담"]
  },
  {
    id: 6,
    title: "인권·안전교육",
    tag: "권리보호",
    desc: "아동인권 보호, 안전의식 고취 및 각종 위험 상황 대처 역량 강화 교육",
    items: ["아동권리 및 학대예방 교육", "성폭력·실종유괴 예방교육", "소방재난·교통안전·약물오남용 예방"]
  },
  {
    id: 7,
    title: "자립지원",
    tag: "자립역량",
    desc: "어린 시절부터 체계적인 일상생활기술 습득 및 자립체험을 통한 주도적 자립역량 배양",
    items: ["일상생활 기술훈련(요리, 정리 등)", "자립체험관 체험", "보호연장아동 자립준비 심화"]
  },
  {
    id: 8,
    title: "진로·직업지원",
    tag: "미래설계",
    desc: "특성화 자립프로그램 「꿈JOB끼」를 통한 적성 탐색 및 실질적 직업체험 지원",
    items: ["진로적성 검사 및 직업인 멘토링", "자격증 취득 및 실습 연계", "취업준비 포트폴리오 코칭"]
  },
  {
    id: 9,
    title: "사회성·참여지원",
    tag: "공동체",
    desc: "아동자치회 운영 및 지역사회 참여를 통해 책임감과 민주시민 의식 고취",
    items: ["아동자치회(학사 의회)", "또래 생일파티 및 친교활동", "지역 나눔봉사 참여"]
  },
  {
    id: 10,
    title: "지역사회 연계",
    tag: "나눔연계",
    desc: "자원봉사자, 후원자 및 유관기관과의 지속적인 협력을 통한 든든한 사회적 안전망 구축",
    items: ["자원봉사자 및 멘토 연계", "기업 및 단체 결연후원", "지역사회 복지기관 협력망"]
  }
];

// 초기 공지사항 데이터
export const INITIAL_NOTICES = [
  {
    id: 1,
    title: "[공지] 육영학사 2026년 운영위원회 정기회의 결과 공고",
    date: "2026-09-15",
    author: "관리자",
    views: 128,
    content: "2026년도 육영학사 제3분기 운영위원회 정기회의가 아동 복지 및 생활환경 개선을 안건으로 성황리에 개최되었습니다. 언제나 아이들의 건강한 성장을 위해 함께해 주시는 위원님들께 감사드립니다."
  },
  {
    id: 2,
    title: "[안내] 2026년 가을학기 아동 안전 및 인권교육 실시",
    date: "2026-09-08",
    author: "생활지원팀",
    views: 94,
    content: "동구 소방서 및 전문기관과 연계하여 지진·화재 대피 훈련과 아동 권리 지킴이 교육을 진행하였습니다. 아이들이 안전한 환경에서 스스로를 지키는 법을 익혔습니다."
  },
  {
    id: 3,
    title: "[소식] iM뱅크(대구은행) 임직원 사랑나눔 봉사활동",
    date: "2026-08-25",
    author: "운영지원팀",
    views: 215,
    content: "iM뱅크 임직원 봉사단에서 육영학사를 방문하여 시설 환경정비와 아이들을 위한 학용품 및 도서 기증을 실천해 주셨습니다. 깊은 감사를 드립니다."
  },
  {
    id: 4,
    title: "[모집] 하반기 아동 학습 멘토링 대학생 자원봉사자 모집",
    date: "2026-08-10",
    author: "사무실",
    views: 312,
    content: "육영학사 초·중·고 아동들과 함께 1:1 맞춤 학습과 따뜻한 정서적 교감을 나눌 대학생 멘토 자원봉사자를 모집합니다. (VMS 시간 등록 가능)"
  },
  {
    id: 5,
    title: "[안내] 기부금영수증 발급 절차 및 신청 방법 안내",
    date: "2026-07-20",
    author: "회계담당",
    views: 450,
    content: "소중한 후원금을 보내주신 후원자님들께 감사드리며, 연말정산용 기부금영수증 신청 방법(개인 및 사업자)을 상세히 안내해 드립니다."
  }
];

// 육영학사 이야기 (갤러리/활동소식)
export const INITIAL_STORIES = [
  {
    id: 1,
    title: "아이들과 함께한 가을맞이 힐링 나들이",
    date: "2026-09-18",
    category: "문화·여가",
    img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=600&q=80",
    desc: "맑고 푸른 가을 하늘 아래, 아이들과 함께 자연 속에서 웃음꽃을 피우며 소중한 추억을 만들었습니다."
  },
  {
    id: 2,
    title: "특성화 자립프로그램 「꿈JOB끼」 바리스타 직업체험",
    date: "2026-09-02",
    category: "진로·직업",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    desc: "전문 바리스타 강사님과 함께 핸드드립과 라떼아트를 직접 실습해보며 자신의 미래 직업을 탐색하는 뜻깊은 시간이었습니다."
  },
  {
    id: 3,
    title: "달콤하고 행복한 9월 아동 생일 축하 파티",
    date: "2026-08-28",
    category: "사회성·참여",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
    desc: "생일을 맞은 원생들을 위해 온 식구가 둘러앉아 축하 노래를 부르고 맛있는 음식을 함께 나누었습니다."
  },
  {
    id: 4,
    title: "깨끗하고 아늑한 보금자리, 생활실 새 단장",
    date: "2026-08-15",
    category: "생활환경",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    desc: "아이들이 편안하게 휴식하고 꿈을 키워나갈 수 있도록 생활공간을 정비하고 친환경 가구를 교체했습니다."
  }
];

// 자립정보 게시판 초기 데이터 (HWPX 의견 완벽 반영: 주거, 취업, 금융, 장학금 등)
export const INITIAL_INDEPENDENCE_INFO = [
  {
    id: 1,
    category: "주거지원",
    title: "2026년 한국토지주택공사(LH) 자립준비청년 전세임대 청약 안내",
    date: "2026-09-12",
    target: "보호연장 및 퇴소 5년 이내 청년",
    link: "https://apply.lh.or.kr",
    content: "자립준비청년의 안정적인 주거 정착을 위해 수도권 및 광역시 전세보증금 지원(최대 1억 2천만원 한도 무이자 지원) 상세 신청 공고입니다."
  },
  {
    id: 2,
    category: "금융·자산형성",
    title: "디딤씨앗통장(CDA) 만기 해지 및 적립금 매칭지원금 수령 가이드",
    date: "2026-08-30",
    target: "만 18세 이상 퇴소 및 자립준비 청년",
    link: "https://www.adopcenter.or.kr",
    content: "정부 1:2 매칭으로 모인 디딤씨앗 적립금을 학자금, 주거비, 취업훈련비 용도로 신청하는 방법과 제출 서류 안내입니다."
  },
  {
    id: 3,
    category: "취업·직업훈련",
    title: "국민취업지원제도 1유형 자립준비청년 특화 취업수당 및 훈련비 지원",
    date: "2026-08-19",
    target: "구직 활동 중인 자립준비청년",
    link: "https://www.kua.go.kr",
    content: "월 50만원씩 최대 6개월 구직촉진수당 지급 및 무료 직업훈련 바우처 제공 프로그램 안내입니다."
  },
  {
    id: 4,
    category: "교육·장학금",
    title: "한국장학재단 푸른등대 삼성SOS 드림장학금 신청 요강",
    date: "2026-07-28",
    target: "대학 진학 아동 및 보호연장아동",
    link: "https://www.kosaf.go.kr",
    content: "생활비 및 등록금 전액 지원이 가능한 드림장학생 선발 안내입니다."
  },
  {
    id: 5,
    category: "의료·심리지원",
    title: "청년마음건강지원 바우처 및 마음건강 힐링 상담 안내",
    date: "2026-07-05",
    target: "심리상담이 필요한 자립청년 누구나",
    link: "https://www.bokjiro.go.kr",
    content: "전문 심리상담 10회 바우처 전액 지원 및 스트레스 완화 케어 지원사업입니다."
  }
];

// 육영 소식지 데이터
export const INITIAL_NEWSLETTERS = [
  {
    id: 1,
    title: "육영학사 소식지 2026년 가을호 (제58호)",
    date: "2026-09-01",
    issueNumber: "제58호",
    coverImg: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "육영학사 소식지 2026년 여름호 (제57호)",
    date: "2026-06-01",
    issueNumber: "제57호",
    coverImg: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=500&q=80",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "육영학사 소식지 2026년 봄호 (제56호)",
    date: "2026-03-01",
    issueNumber: "제56호",
    coverImg: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=500&q=80",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "육영학사 소식지 2025년 겨울호 (제55호)",
    date: "2025-12-01",
    issueNumber: "제55호",
    coverImg: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
    downloadUrl: "#"
  }
];

// 유관기관 링크 모음 (잉아터 하단 배너 스타일)
export const PARTNER_LINKS = [
  { name: "대구광역시", url: "https://www.daegu.go.kr", logoText: "대구광역시" },
  { name: "대구동구청", url: "https://www.dong.daegu.kr", logoText: "대구광역시 동구" },
  { name: "아동권리보장원", url: "https://www.ncrc.or.kr", logoText: "아동권리보장원" },
  { name: "대구아동복지협회", url: "http://www.daeguchild.org", logoText: "대구아동복지협회" },
  { name: "자립지원전담기관", url: "https://jarip.ncrc.or.kr", logoText: "청년자립지원플랫폼" },
  { name: "VMS 사회복지인증", url: "https://www.vms.or.kr", logoText: "사회복지자원봉사 VMS" },
  { name: "네이버 해피빈", url: "https://happybean.naver.com", logoText: "해피빈 HAPPYBEAN" }
];

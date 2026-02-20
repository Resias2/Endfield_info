const { useMemo, useState } = React;

const integratedPosts = [
  {
    title: 'DC 명일방주 갤러리 공지 목록',
    url: 'https://gall.dcinside.com/mgallery/board/lists/?id=arknightsendfield',
    description: '공지 탭에서 최신 통합 정보글을 가장 먼저 확인하세요.',
    badge: '공식 출발점'
  },
  {
    title: '통합 정보글 검색 링크(키워드 고정)',
    url: 'https://gall.dcinside.com/mgallery/board/lists/?id=arknightsendfield&s_type=search_name&s_keyword=%ED%86%B5%ED%95%A9%20%EC%A0%95%EB%B3%B4',
    description: '공지 갱신으로 제목이 바뀌어도 "통합 정보" 키워드로 빠르게 재탐색할 수 있습니다.',
    badge: '백업 동선'
  }
];

const dailyTasks = [
  {
    id: 'attendance',
    category: '이벤트',
    name: '출석 체크 보상 수령',
    detail: '출석 UI 진입 후 일일 보상과 누적 보상 칸을 모두 확인',
    reward: '가챠 재화/강화 소재',
    reset: '매일 04:00'
  },
  {
    id: 'mail',
    category: '이벤트',
    name: '우편함 한정 보상 확인',
    detail: '기간제 쿠폰/운영 보상이 우편함에 들어오는지 체크',
    reward: '행동력 아이템/재화',
    reset: '매일 04:00'
  },
  {
    id: 'factory-route',
    category: '자원 수급',
    name: '맵별 공업 부품 루트 1회 이상 클리어',
    detail: '당일 필요한 부품 타입(전기/합금/연산)을 우선으로 루트 선택',
    reward: '장비 제작 재료',
    reset: '매일 04:00'
  },
  {
    id: 'stamina-burn',
    category: '자원 수급',
    name: '행동력 자연회복 소모',
    detail: '오버캡 방지를 위해 최소 1회 이상 스테이지 소모',
    reward: '경험치/재료 누적',
    reset: '상시'
  },
  {
    id: 'market-buy',
    category: '거래소',
    name: '변동물자 저가 매수 품목 확인',
    detail: '시세 대비 낮은 품목을 우선 매수해 일일 차익 구조 만들기',
    reward: '골드 절약/차익',
    reset: '매일 04:00'
  },
  {
    id: 'market-sell',
    category: '거래소',
    name: '변동물자 고가 매도 품목 정리',
    detail: '전일 확보한 품목 중 고점 구간 물량부터 분할 매도',
    reward: '골드 확보',
    reset: '매일 04:00'
  },
  {
    id: 'shop-refresh',
    category: '거래소',
    name: '일일 상점 갱신/할인팩 확인',
    detail: '무료 갱신 횟수 및 기간 한정 할인 패키지 확인',
    reward: '효율 구매 기회',
    reset: '매일 04:00'
  },
  {
    id: 'friend-support',
    category: '커뮤니티',
    name: '친구 지원 사용 및 포인트 수령',
    detail: '지원 캐릭터 1회 이상 사용 후 우정 포인트 수급',
    reward: '우정 포인트',
    reset: '매일 04:00'
  },
  {
    id: 'base-collect',
    category: '기지 운영',
    name: '기지 생산/의뢰 보상 회수',
    detail: '생산 완료 슬롯, 파견 완료 의뢰, 작업 배치 상태 점검',
    reward: '제작 재료/크레딧',
    reset: '매일 04:00'
  },
  {
    id: 'weekly-prep',
    category: '주간 준비',
    name: '주간 목표 진행도 점검',
    detail: '주간 미션 잔량을 확인해 오늘 처리 가능한 항목 선반영',
    reward: '주간 보상 안정화',
    reset: '매주 월요일'
  }
];

const characters = [
  { name: '엔드민 (시작 캐릭터)', rarity: '특수', role: '주인공/지휘', favoriteGift: '스토리 연관 기념품', customGear: '지휘 보조 모듈 (임시 데이터)' },
  { name: '페리카', rarity: '5성', role: '근거리 딜러', favoriteGift: '정비 키트', customGear: '고출력 블레이드 프레임' },
  { name: '첸크로스', rarity: '6성', role: '범위 제어', favoriteGift: '전술 지도 세트', customGear: '광역 연산 증폭기' },
  { name: '아스카', rarity: '4성', role: '지원/버프', favoriteGift: '고급 커피 원두', customGear: '지원 드론 연계 모듈' }
];

const storageKey = 'endfield-daily-checklist';

function App() {
  const [checked, setChecked] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) ?? '{}');
    } catch {
      return {};
    }
  });

  const completedCount = useMemo(() => dailyTasks.filter((task) => checked[task.id]).length, [checked]);
  const progressPercent = Math.round((completedCount / dailyTasks.length) * 100);

  const toggleTask = (id) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  };

  const resetChecklist = () => {
    const cleared = {};
    setChecked(cleared);
    localStorage.setItem(storageKey, JSON.stringify(cleared));
  };

  return (
    <main className="container">
      <header className="hero">
        <h1>명일방주 엔드필드 정보 허브</h1>
        <p>공지 통합글, 세부 일일 숙제, 캐릭터 데이터를 한 화면에서 빠르게 관리하는 대시보드입니다.</p>
      </header>

      <section className="card">
        <div className="section-title-row">
          <h2>1) 통합 정보글 빠른 접근</h2>
          <span className="pill">업데이트 추적</span>
        </div>
        <ul className="link-grid">
          {integratedPosts.map((post) => (
            <li key={post.url} className="link-card">
              <span className="badge">{post.badge}</span>
              <a href={post.url} target="_blank" rel="noreferrer">{post.title}</a>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <div className="checklist-header">
          <div>
            <h2>2) 매일 숙제 체크리스트 (상세)</h2>
            <p className="sub">체크 상태는 브라우저에 저장되며, 다음 접속에도 유지됩니다.</p>
          </div>
          <button type="button" onClick={resetChecklist}>전체 초기화</button>
        </div>

        <div className="progress-panel" role="status" aria-live="polite">
          <div className="progress-meta">
            <strong>전체 진행도</strong>
            <span>{completedCount} / {dailyTasks.length} 완료 · {progressPercent}%</span>
          </div>
          <div className="progress-track" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <ul className="checklist">
          {dailyTasks.map((task) => (
            <li key={task.id} className={checked[task.id] ? 'is-done' : ''}>
              <label>
                <input type="checkbox" checked={Boolean(checked[task.id])} onChange={() => toggleTask(task.id)} />
                <span>
                  <strong>[{task.category}] {task.name}</strong>
                  <small>{task.detail}</small>
                  <em>보상/목적: {task.reward} · 리셋: {task.reset}</em>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>3) 엔드필드 캐릭터 정보 정리</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>캐릭터</th><th>등급</th><th>역할</th><th>선호 선물</th><th>맞춤형 장비</th>
              </tr>
            </thead>
            <tbody>
              {characters.map((char) => (
                <tr key={char.name}>
                  <td>{char.name}</td><td>{char.rarity}</td><td>{char.role}</td><td>{char.favoriteGift}</td><td>{char.customGear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

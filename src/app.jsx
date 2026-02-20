const { useMemo, useState } = React;

const integratedPost = {
  title: '엔드필드 마이너 갤러리 통합 정보글 바로가기',
  url: 'https://gall.dcinside.com/mgallery/board/lists/?id=arknightsendfield&s_type=search_subject_memo&s_keyword=%ED%86%B5%ED%95%A9%EC%A0%95%EB%B3%B4%EA%B8%80',
  description: '공지 내 통합정보글 검색 결과로 바로 이동합니다.'
};

const dailyTasks = [
  { id: 'attendance', category: '이벤트', name: '출석 체크 및 누적 보상 수령', detail: '출석 페이지에서 일일/누적 탭 모두 확인', reward: '재화·소재', reset: '매일 04:00' },
  { id: 'mail', category: '이벤트', name: '우편함 한정 지급 보상 회수', detail: '운영 보상/쿠폰 아이템 만료 시간 체크', reward: '행동력·재화', reset: '매일 04:00' },
  { id: 'commissions', category: '임무', name: '일일 임무 전 항목 완료', detail: '남은 미션 수량을 먼저 확인하고 루트 설계', reward: '임무 포인트', reset: '매일 04:00' },
  { id: 'factory-route', category: '자원', name: '공업 부품 수급 루트 1~2회', detail: '부족한 부품 타입 중심으로 우선 파밍', reward: '제작 부품', reset: '매일 04:00' },
  { id: 'stamina-burn', category: '자원', name: '행동력 오버캡 방지 소모', detail: '자연 회복 상한 전 최소 1회 소모', reward: '경험치·재료', reset: '상시' },
  { id: 'market-buy', category: '거래', name: '변동물자 저가 매수 체크', detail: '시세 하단 품목 먼저 확보', reward: '차익 기반', reset: '매일 04:00' },
  { id: 'market-sell', category: '거래', name: '변동물자 고가 매도 체크', detail: '고점 구간 품목 분할 매도', reward: '골드 수급', reset: '매일 04:00' },
  { id: 'shop-refresh', category: '거래', name: '일일 상점 무료 갱신/할인팩 확인', detail: '무료 갱신 횟수와 한정 구매 횟수 소진', reward: '구매 효율', reset: '매일 04:00' },
  { id: 'support', category: '커뮤니티', name: '지원 캐릭터 사용 + 우정 포인트', detail: '지원 사용 횟수 조건 달성 후 포인트 회수', reward: '우정 포인트', reset: '매일 04:00' },
  { id: 'base', category: '기지', name: '기지 생산/의뢰 보상 정리', detail: '생산 슬롯·파견·배치 상태 동시 점검', reward: '크레딧·재료', reset: '매일 04:00' }
];

const storageKey = 'endfield-daily-checklist';

function App() {
  const [checked, setChecked] = React.useState(() => {
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
    setChecked({});
    localStorage.setItem(storageKey, JSON.stringify({}));
  };

  return (
    <main className="container">
      <header className="hero">
        <div className="top-nav">
          <a className="nav-link" href="./index.html">대시보드</a>
          <a className="nav-link" href="./characters.html">캐릭터 아카이브</a>
        </div>
        <h1>명일방주 엔드필드 정보 허브</h1>
        <p>통합정보글 접근 + 일일 숙제 체크를 한 페이지에서 관리합니다.</p>
      </header>

      <section className="card">
        <h2>1) 통합 정보글 링크</h2>
        <div className="link-card single">
          <a href={integratedPost.url} target="_blank" rel="noreferrer">{integratedPost.title}</a>
          <p>{integratedPost.description}</p>
        </div>
      </section>

      <section className="card">
        <div className="checklist-header">
          <div>
            <h2>2) 일일 숙제 체크리스트</h2>
            <p className="sub">체크 시 즉시 진행도가 반영되며 브라우저에 저장됩니다.</p>
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
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

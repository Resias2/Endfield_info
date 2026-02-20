const { useMemo, useState } = React;

const integratedPosts = [
  {
    title: 'DC 명일방주 갤러리 통합 정보글(공지)',
    url: 'https://gall.dcinside.com/mgallery/board/lists?id=arknightsendfield',
    description:
      '공략/시스템/육성 자료를 한 곳에서 찾기 위한 출발점입니다. 공지에 올라오는 최신 통합 링크를 주기적으로 확인하세요.'
  }
];

const dailyTasks = [
  { id: 'attendance', category: '이벤트', name: '출석 체크 이벤트 수령', reset: '매일 04:00' },
  { id: 'factory-parts', category: '자원', name: '맵별 공업 부품 수급 루트 수행', reset: '매일 04:00' },
  { id: 'market-buy', category: '상점', name: '변동물자 저가 매수 품목 확인', reset: '매일 04:00' },
  { id: 'market-sell', category: '상점', name: '변동물자 고가 매도 품목 확인', reset: '매일 04:00' },
  { id: 'stamina', category: '성장', name: '행동력 소모 및 재료 파밍', reset: '매일 04:00' },
  { id: 'friend', category: '커뮤니티', name: '지원/친구 관련 일일 보상 획득', reset: '매일 04:00' }
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
        <p>공지 통합글 + 일일 체크리스트 + 캐릭터 데이터 정리를 한 페이지에서 관리할 수 있도록 구성한 MVP입니다.</p>
      </header>

      <section className="card">
        <h2>1) 통합 정보글 바로가기</h2>
        <ul className="link-list">
          {integratedPosts.map((post) => (
            <li key={post.url}>
              <a href={post.url} target="_blank" rel="noreferrer">{post.title}</a>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <div className="checklist-header">
          <h2>2) 매일 수행 체크리스트</h2>
          <button type="button" onClick={resetChecklist}>전체 초기화</button>
        </div>
        <p className="progress">진행도: {completedCount} / {dailyTasks.length}</p>
        <ul className="checklist">
          {dailyTasks.map((task) => (
            <li key={task.id}>
              <label>
                <input type="checkbox" checked={Boolean(checked[task.id])} onChange={() => toggleTask(task.id)} />
                <span>
                  <strong>[{task.category}]</strong> {task.name}
                  <em>리셋: {task.reset}</em>
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

const characters = [
  { name: 'Endministrator', korean: '엔드민', rarity: '특수', role: '주인공/지휘', image: './assets/characters/endministrator.jpg' },
  { name: 'Perlica', korean: '페리카', rarity: '5성', role: '근거리 딜러', image: './assets/characters/perlica.jpg' },
  { name: 'Chen Qianyu', korean: '첸 치엔위', rarity: '6성', role: '제어', image: './assets/characters/chenqianyu.jpg' },
  { name: 'Wulfgard', korean: '울프가드', rarity: '5성', role: '근접', image: './assets/characters/wulfgard.jpg' },
  { name: 'Ember', korean: '엠버', rarity: '5성', role: '원거리', image: './assets/characters/ember.jpg' },
  { name: 'Fjall', korean: '피얄', rarity: '5성', role: '서포트', image: './assets/characters/fjall.jpg' },
  { name: 'Avywenna', korean: '아비웬나', rarity: '5성', role: '보조', image: './assets/characters/avywenna.jpg' },
  { name: 'Da Pan', korean: '다판', rarity: '4성', role: '탱커', image: './assets/characters/dapan.jpg' },
  { name: 'Yvonne', korean: '이본', rarity: '4성', role: '지원', image: './assets/characters/yvonne.jpg' },
  { name: 'Xaihi', korean: '자이히', rarity: '4성', role: '원거리', image: './assets/characters/xaihi.jpg' }
];

function CharacterArchive() {
  return (
    <main className="container">
      <header className="hero">
        <div className="top-nav">
          <a className="nav-link" href="./index.html">대시보드</a>
          <a className="nav-link" href="./characters.html">캐릭터 아카이브</a>
        </div>
        <h1>엔드필드 캐릭터 아카이브</h1>
        <p>공식 일러스트 파일을 `assets/characters`에 배치하면 전체 캐릭터를 카드형으로 표시합니다.</p>
      </header>

      <section className="card">
        <h2>전체 캐릭터 아카이브</h2>
        <p className="sub">이미지가 없으면 자리표시 이미지가 보입니다.</p>
        <div className="character-grid">
          {characters.map((char) => (
            <article key={char.name} className="character-card">
              <img
                src={char.image}
                alt={`${char.korean} 공식 이미지`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="520" height="760"><rect width="100%" height="100%" fill="%23141b2a"/><text x="50%" y="45%" text-anchor="middle" fill="%23a9bad9" font-size="24" font-family="sans-serif">Official Image Needed</text><text x="50%" y="52%" text-anchor="middle" fill="%237f94ba" font-size="16" font-family="sans-serif">assets/characters에 파일 추가</text></svg>';
                }}
              />
              <div className="character-meta">
                <h3>{char.korean}</h3>
                <p>{char.name}</p>
                <p>{char.rarity} · {char.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CharacterArchive />);

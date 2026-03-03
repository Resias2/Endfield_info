const characters = [
  { key: 'endministrator', name: 'Endministrator', korean: '엔드민', rarity: '특수', role: '주인공/지휘' },
  { key: 'perlica', name: 'Perlica', korean: '페리카', rarity: '5성', role: '근거리 딜러' },
  { key: 'chenqianyu', name: 'Chen Qianyu', korean: '첸첸위', rarity: '6성', role: '범위 제어' },
  { key: 'wulfgard', name: 'Wulfgard', korean: '울프가드', rarity: '5성', role: '근거리/브루저' },
  { key: 'ember', name: 'Ember', korean: '엠버', rarity: '5성', role: '원거리 딜러' },
  { key: 'fjall', name: 'Fjall', korean: '피얄', rarity: '5성', role: '서포터' },
  { key: 'avywenna', name: 'Avywenna', korean: '아비웬나', rarity: '5성', role: '서포터/제어' },
  { key: 'xaihi', name: 'Xaihi', korean: '샤이', rarity: '4성', role: '근거리' },
  { key: 'yvonne', name: 'Yvonne', korean: '이본', rarity: '4성', role: '서포터' },
  { key: 'da-pan', name: 'Da Pan', korean: '다판', rarity: '4성', role: '방어' },
  { key: 'gilberta', name: 'Gilberta', korean: '길베르타', rarity: '5성', role: '원거리' },
  { key: 'nicoly', name: 'Nicoly', korean: '니콜리', rarity: '4성', role: '보조' }
].map((char) => ({ ...char, image: `./assets/characters/${char.key}.jpg` }));

function CharacterArchive() {
  return (
    <main className="container">
      <header className="hero">
        <div className="top-nav">
          <a className="nav-link" href="./index.html">대시보드</a>
          <a className="nav-link" href="./characters.html">캐릭터 아카이브</a>
        </div>
        <h1>엔드필드 캐릭터 아카이브</h1>
        <p>공식 캐릭터 이미지를 카드형으로 한눈에 확인할 수 있는 페이지입니다.</p>
      </header>

      <section className="card">
        <h2>전체 캐릭터 아카이브</h2>
        <p className="sub">아래 캐릭터들의 공식 이미지를 `assets/characters/*.jpg`로 배치하면 자동 반영됩니다.</p>
        <div className="character-grid">
          {characters.map((char) => (
            <article key={char.key} className="character-card">
              <img
                src={char.image}
                alt={`${char.korean} 공식 이미지`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="520" height="760"><rect width="100%" height="100%" fill="%23141b2a"/><text x="50%" y="45%" text-anchor="middle" fill="%23a9bad9" font-size="24" font-family="sans-serif">Image Missing</text><text x="50%" y="52%" text-anchor="middle" fill="%237f94ba" font-size="16" font-family="sans-serif">assets/characters/' + char.key + '.jpg</text></svg>';
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

const characters = [
  {
    name: 'Endministrator',
    korean: '엔드민',
    rarity: '특수',
    role: '주인공/지휘',
    image: './assets/characters/endministrator.jpg'
  },
  {
    name: 'Perlica',
    korean: '페리카',
    rarity: '5성',
    role: '근거리 딜러',
    image: './assets/characters/perlica.jpg'
  },
  {
    name: 'Chen Qianyu',
    korean: '첸크로스',
    rarity: '6성',
    role: '범위 제어',
    image: './assets/characters/chenqianyu.jpg'
  },
  {
    name: 'Asuka',
    korean: '아스카',
    rarity: '4성',
    role: '지원/버프',
    image: './assets/characters/asuka.jpg'
  }
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
        <p>캐릭터를 카드형으로 한눈에 확인할 수 있는 전용 페이지입니다.</p>
      </header>

      <section className="card">
        <h2>캐릭터 목록</h2>
        <p className="sub">공식 이미지 파일이 없을 경우 자리표시 이미지가 표시됩니다.</p>
        <div className="character-grid">
          {characters.map((char) => (
            <article key={char.name} className="character-card">
              <img
                src={char.image}
                alt={`${char.korean} 공식 이미지`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="520" height="760"><rect width="100%" height="100%" fill="%23141b2a"/><text x="50%" y="45%" text-anchor="middle" fill="%23a9bad9" font-size="26" font-family="sans-serif">Official Image Needed</text><text x="50%" y="52%" text-anchor="middle" fill="%237f94ba" font-size="18" font-family="sans-serif">assets/characters 폴더에 이미지 추가</text></svg>';
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

# Endfield Info

명일방주 엔드필드 정보를 빠르게 확인하기 위한 정적 React 기반 사이트입니다.

## 페이지 구성

- `index.html` : 통합 정보글 단일 링크 + 일일 숙제 체크리스트
- `characters.html` : 전체 캐릭터 아카이브(공식 이미지 카드형)

## 실행 방법

```bash
git clone <이 저장소 URL>
cd Endfield_info
python3 -m http.server 4173 --bind 127.0.0.1
```

- 대시보드: http://127.0.0.1:4173/index.html
- 캐릭터 아카이브: http://127.0.0.1:4173/characters.html

## 통합 정보글 링크

메인 페이지는 아래 단일 링크를 사용합니다.

- `https://gall.dcinside.com/mgallery/board/lists/?id=arknightsendfield&s_type=search_subject_memo&s_keyword=%ED%86%B5%ED%95%A9%EC%A0%95%EB%B3%B4%EA%B8%80`

## 캐릭터 공식 이미지 적용

`assets/characters` 폴더에 파일명을 맞춰 이미지(`.jpg`)를 넣으면 자동 반영됩니다.

자세한 파일명 목록은 `assets/characters/README.md`를 참고하세요.

# Endfield Info

명일방주 엔드필드 정보를 빠르게 확인하기 위한 정적 React 기반 사이트입니다.

## 페이지 구성

- `index.html` : 통합정보글 링크 + 일일 숙제 체크리스트
- `characters.html` : 캐릭터 전용 아카이브 페이지(이미지 카드형)

## 실행 방법

```bash
git clone <이 저장소 URL>
cd Endfield_info
python3 -m http.server 4173 --bind 127.0.0.1
```

접속 주소:

- http://127.0.0.1:4173/index.html
- http://127.0.0.1:4173/characters.html

## 통합정보글 링크

메인 페이지에는 통합정보글 접근 링크를 **1개만** 제공합니다.

- 엔드필드 마이너 갤러리 통합정보글 검색 링크

## 캐릭터 공식 이미지 적용

아래 경로에 공식 이미지를 넣으면 캐릭터 아카이브에 반영됩니다.

- `assets/characters/*.jpg`

필요 파일명 목록은 `assets/characters/README.md`를 참고하세요.

# Endfield Info

명일방주 엔드필드 정보를 빠르게 확인하기 위한 정적 React 기반 사이트입니다.

## 페이지 구성

- `index.html` : 통합정보글 링크 + 일일 숙제 체크리스트
- `characters.html` : 캐릭터 전용 아카이브 페이지(이미지 카드형)

## 실행 전 준비

- Git
- Python 3

확인 명령:

```bash
git --version
python3 --version
```

## 실행 방법

```bash
git clone <이 저장소 URL>
cd Endfield_info
python3 -m http.server 4173 --bind 127.0.0.1
```

접속 주소:

- http://127.0.0.1:4173/index.html
- http://127.0.0.1:4173/characters.html

## 캐릭터 이미지 적용 방법

`characters.html`은 아래 로컬 파일을 읽습니다.

- `assets/characters/endministrator.jpg`
- `assets/characters/perlica.jpg`
- `assets/characters/chenqianyu.jpg`
- `assets/characters/asuka.jpg`

이미지가 없으면 자리표시(placeholder) 이미지가 표시됩니다.

> 참고: 현재 이 실행 환경에서는 외부 사이트 접근 제한(HTTP 403)으로 인해 공식 이미지를 자동 다운로드할 수 없습니다.
> 따라서 실제 운영 시에는 공식 이미지 파일을 위 경로에 직접 배치해 주세요.

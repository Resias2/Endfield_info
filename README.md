# Endfield Info

명일방주 엔드필드 정보를 효율적으로 확인하기 위한 **엔드필드 정보 허브**입니다.

이 프로젝트는 번들러 설치 없이 실행할 수 있도록, 브라우저에서 React CDN을 불러오는 정적 페이지 구조로 되어 있습니다.

---

## 1) 기능 요약

- DC 명일방주 갤러리 통합 정보글 바로가기
- 매일 수행 가능한 루틴 체크리스트 (브라우저 `localStorage` 저장)
- 캐릭터 핵심 정보 표 (등급/역할/선호 선물/맞춤 장비)

---

## 2) 실행 전 준비(필수 환경)

아래 2가지만 있으면 실행 가능합니다.

1. **Git** (저장소 클론용)
2. **Python 3** (로컬 정적 서버 실행용)

### 2-1. 설치 확인

터미널에서 아래 명령으로 설치 여부를 먼저 확인하세요.

```bash
git --version
python3 --version
```

- 둘 다 버전이 출력되면 다음 단계로 진행
- `python3`가 없다면:
  - Ubuntu/Debian: `sudo apt install python3`
  - macOS(Homebrew): `brew install python`
  - Windows: Python 공식 설치 프로그램 설치 후 `py -3 --version` 확인

> Windows 환경에서 `python3` 명령이 동작하지 않으면 아래 명령을 사용하세요.
>
> ```powershell
> py -3 -m http.server 4173
> ```

---

## 3) 프로젝트 받기

```bash
git clone <이 저장소 URL>
cd Endfield_info
```

---

## 4) 로컬 실행(정적 서버)

프로젝트 루트(`index.html`이 있는 위치)에서 실행하세요.

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

브라우저 접속:

- http://127.0.0.1:4173
- 또는 http://localhost:4173

서버 종료는 터미널에서 `Ctrl + C` 입니다.

---

## 5) 실행 확인 체크리스트

1. 브라우저에서 페이지 제목 **"명일방주 엔드필드 정보 허브"**가 보인다.
2. "매일 수행 체크리스트"에서 체크/해제가 된다.
3. 새로고침 후에도 체크 상태가 유지된다 (`localStorage`).
4. "전체 초기화" 버튼 클릭 시 체크 상태가 모두 해제된다.

---

## 6) 자주 발생하는 문제 및 해결

### Q1. 페이지가 흰 화면으로 보입니다.
- 브라우저 개발자도구(F12) 콘솔에서 오류 확인
- 회사망/보안망에서 CDN(`unpkg.com`) 차단 시 React 스크립트 로딩 실패 가능
- 이 경우 네트워크 허용 환경에서 실행하거나, 사내 프록시 허용 정책을 확인하세요.

### Q2. `python3: command not found`가 나옵니다.
- Python 3 미설치 또는 PATH 미설정 상태입니다.
- 위 "2) 실행 전 준비" 항목의 OS별 설치 방법대로 설치 후 다시 실행하세요.

### Q3. 포트 충돌(`Address already in use`)이 납니다.
- 다른 포트로 실행하세요.

```bash
python3 -m http.server 5173 --bind 127.0.0.1
```

접속 주소도 `http://127.0.0.1:5173`로 변경하면 됩니다.

---

## 7) 프로젝트 구조

```text
.
├─ index.html        # 앱 진입점 (React CDN + app.jsx 로드)
└─ src
   ├─ app.jsx        # UI/데이터/체크리스트 로직
   └─ styles.css     # 반응형 스타일
```


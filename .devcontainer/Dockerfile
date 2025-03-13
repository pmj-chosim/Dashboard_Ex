  # Node.js 22 사용
  FROM mcr.microsoft.com/devcontainers/javascript-node:22

  # 작업 디렉토리 설정 (루트 디렉토리로 설정)
  WORKDIR /workspaces/Dashboard_Ex

  # app 디렉토리 생성
  RUN mkdir -p app

  # package.json과 package-lock.json을 app 디렉토리로 복사
  COPY ./app/package*.json ./app/

  # 의존성 설치
  RUN npm ci

  # app 폴더의 나머지 파일들을 app 디렉토리로 복사
  COPY ./app/ ./app/

  # app 폴더로 이동
  WORKDIR /workspaces/Dashboard_Ex/app

  # 기본 명령어
  CMD ["npm", "run", "dev"]

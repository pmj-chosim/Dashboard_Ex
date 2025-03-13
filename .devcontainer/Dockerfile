# Node.js 22 사용
FROM mcr.microsoft.com/devcontainers/javascript-node:22

# 작업 디렉토리 설정 (app 폴더로 직접 이동)
WORKDIR /workspaces/Dashboard_Ex

# package.json과 package-lock.json만 먼저 복사 후 의존성 설치
COPY app/package.json app/package-lock.json ./
RUN npm ci


# 프로젝트 코드 전체 복사
COPY ./ ./

# app 폴더로 이동
WORKDIR /workspaces/Dashboard_Ex/app

# 기본 명령어 (src 이동 X)
CMD ["npm", "run", "dev"]

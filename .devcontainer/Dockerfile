# Node.js 22 사용
FROM mcr.microsoft.com/devcontainers/javascript-node:22

# 작업 디렉토리 설정 (루트 디렉토리로 설정)
WORKDIR /workspaces/Dashboard_Ex

# package.json과 package-lock.json을 app 폴더에서 루트로 복사 후 의존성 설치
COPY ./app/package.json ./app/package-lock.json ./
RUN npm ci

# 전체 프로젝트 코드 복사
COPY ./ ./ 

# app 폴더로 이동
WORKDIR /workspaces/Dashboard_Ex/app

# 기본 명령어
CMD ["npm", "run", "dev"]

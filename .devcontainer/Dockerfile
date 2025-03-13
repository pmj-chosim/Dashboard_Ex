# Node.js 22 사용
FROM mcr.microsoft.com/devcontainers/javascript-node:22

# 작업 디렉토리 설정 (루트 디렉토리로 설정)
WORKDIR /workspaces/Dashboard_Ex


COPY ./ ./

# app 폴더로 이동
WORKDIR /workspaces/Dashboard_Ex/app

RUN npm install

# 기본 명령어
CMD ["npm", "run", "dev"]

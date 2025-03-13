# Node.js 22 사용
FROM mcr.microsoft.com/devcontainers/javascript-node:22

# 작업 디렉토리 설정
WORKDIR /workspace

# 패키지 설치
COPY package.json package-lock.json ./
RUN npm install

# 프로젝트 코드 복사
COPY . .

# 기본 명령어
CMD ["npm", "run", "dev"]


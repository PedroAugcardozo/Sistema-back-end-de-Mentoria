# Usa a imagem do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json para instalar as dependências primeiro
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todos os arquivos para o diretório de trabalho
COPY . .

# Expõe a porta que o servidor vai rodar
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "src/index.ts"]

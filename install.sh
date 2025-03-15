#!/bin/bash
echo "🚀 Устанавливаем Multi-Server Dashdot..."

# Устанавливаем Docker и Git
sudo apt update && sudo apt install -y docker.io docker-compose git

# Клонируем репозиторий
git clone https://github.com/vsdkk/dashdot-multi.git
cd dashdot-multi

# Запускаем контейнеры
docker-compose up -d

echo "✅ Dashdot установлен! Открывай в браузере: http://<IP>:3001"

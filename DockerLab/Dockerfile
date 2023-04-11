# Base image
FROM node:16
# Imaj içinde çalışacağımız dizin
WORKDIR /app
# Mevcut dizindeki tüm dosyaları (.) imaj içindeki "/app" dizinine kopyala
COPY . /app 
# Gerekli dependency'leri kur
RUN npm install 
# Konteyner'i dış dünyaya 3000 portundan aç
EXPOSE 3000 
# Imajdan konteyner oluşturulup ayağa kaldırılırken çalışacak komutlar
CMD ["node", "server.js"]
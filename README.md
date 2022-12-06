# PERN-Stack-dockrize-and-nginx:

Kullanılan Teknolojiler:
- Node.js
- React
- Nginx
- PostgreSql

Amaçlanan: Bir PERN projesine ilk başlanıldığında direk olarak bu templateyi indirerek docker yardımı ile projeye hızlı bir başlangıç yapılması.

Her bir Proje kendi template içinde verilmiş olup direk olarak docker-compose başlatılarak template içinde geliştirme yapılabilir.

Geliştirmek için başlatılacak docker-compose:
-> docker-compose -f "docker-compose.dev.yml" up

Yayınlamak için başlatılacak docker-compose:
-> docker-compose -f "docker-compose.prod.yml" up

----------------------------------------------------------------------------------------
The technologies used:

- Node.js
- React
- Nginx
- PostgreSql

The purpose: When starting a PERN project, you can quickly start the project with the help of docker by downloading this template directly.

Each project is given in its own template and development can be done directly in the template with the docker-compose start.

To start docker-compose for development: 
-> docker-compose -f "docker-compose.dev.yml" up

To start docker-compose for publishing: 
-> docker-compose -f "docker-compose.prod.yml" up

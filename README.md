# PERN-Stack-dockrize-and-nginx:

Kullanılan Teknolojiler:
- Node.js
- React
- nginx
- postgreSql

Amaçlanan: Bir PERN projesine ilk başlanıldığında direk olarak bu templateyi indirerek docker yardımı ile projeye hızlı bir başlangıç yapılması.

Her bir Proje kendi template içinde verilmiş olup direk olarak docker-compose başlatılarak template içinde geliştirme yapılabilir.

Geliştirmek için başlatılacak docker-compose:
-> docker-compose -f "docker-compose.dev.yml" up

Yayınlamak için başlatılacak docker-compose:
-> docker-compose -f "docker-compose.prod.yml" up

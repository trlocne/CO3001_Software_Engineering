# SPSS

## Cài đặt

### 1 Tải docker desktop + Dbeaver
Sau đó mở `terminal` trong thư mục `be`:

```bash
docker-compose up -d
```
Lệnh này sẽ chạy file `docker-compose` tạo 1 container và tạo schema `spss`.

### 2. Build và Chạy ứng dụng
Mở `terminal` trong thư mục `be`:
#### 2.1 Build
```bash
./mvnw clean install
```
#### 2.2 Run
```bash
./mvnw spring-boot:run
```

### 3. Kiểm tra API
Ứng dụng sẽ chạy trên `http://localhost:8080`. Bạn có thể kiểm tra các API bằng cách sử dụng [Postman](https://www.postman.com/).
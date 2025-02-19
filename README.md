<a id="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/trlocne/CO3001_Software_Engineering/">
    <img src="logo.png" alt="Logo"  height="160">
  </a>

<h3 align="center">Student Smart Printing Service</h3>
  
  <p align="center">
    Ứng dụng cung cấp dịch vụ in ấn tiện lợi dành cho sinh viên Trường Đại học bách khoa, ĐHQG TPHCM.
    <br />
    <a href="#getting-started"><strong>Xem hướng dẫn</strong></a>
    <br />
    <br />
    <a href="https://github.com/trlocne/CO3001_Software_Engineering/releases">Tải xuống</a>
    ·
    <a href="mailto:loc.tran04@hcmut.edu.vn">Báo lỗi</a>
    ·
    <a href="mailto:loc.tran04@hcmut.edu.vn">Đề xuất tính năng</a>
    .
    <a href="https://drive.google.com/file/d/1ztr3jyhYPAWcAbje8h9KZjjdMJX4nlFT/view?usp=sharing">Report</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
<a id="about-the-project"></a>

## Về dự án này

![Main page](/image/Homepage.png)

Ứng dụng này được hiện thực để phục vụ cho môn học Công nghệ phần mềm, thuộc về Trường Đại học Bách khoa, ĐHQG TP.HCM. Dự án hướng đến mục tiêu xây dựng nên một trang web cung cấp dịch vụ in ấn tiện lợi cho sinh viên của trường.

Thành viên phát triển dự án:

- Trần Văn Lộc - 2211937
- Trần Duy Phương - 2212703
- Trần Thanh Phong - 2212571
- Nguyễn Lê Hoàng Phúc - 2212629
- Nguyễn Khắc Duy - 2210517
- Nguyễn Thành Đạt - 2210700
- Nguyễn Tuấn Phong - 2212561

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Công nghệ sử dụng
<a id="built-with"></a>

- [React](https://react.dev/)
- [Tailwind](https://github.com/tailwindlabs/tailwindcss)
- [React Router](https://reactrouter.com/en/main)
- [Spring](https://spring.io/projects/spring-framework)
- [Spring Boot](https://spring.io/projects/spring-boot/)
- [Spring JPA](https://spring.io/projects/spring-data-jpa)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
<a id="getting-started"></a>

## Bắt đầu

<a id="prerequisites"></a>
### Điều kiện

Trước khi sử dụng ứng dụng, bạn cần cài đặt trước một số phần mềm sau:

- [Node.js](https://nodejs.org/en)
- [Java](https://www.oracle.com/java/technologies/downloads/)
- [Docker](https://dev.mysql.com/downloads/installer/)
- [Dbeaver](https://dbeaver.io/)

<a id="installation"></a>
### Cài đặt

Vì ứng dụng chưa được triển khai tên miền, bạn có thể sử dụng nó bằng localhost với các bước sau:

1. Truy cập đường dẫn [link](https://github.com/trlocne/CO3001_Software_Engineering)

2. Tải về source code.

3. Mở một chương trình shell (Command Prompt, Powershell, Bash...).

4. Thay đổi đường dẫn tới thư mục của ứng dụng (CO3001_Software_Engineering) bằng lệnh `cd <dir>`

5. Tại thư mục gốc, chạy các lệnh sau để khởi động chương trình phía frontend (giao diện ứng dụng sẽ tự động hiển thị sau bước này)

```bash
cd frontend
npm install
npm start
```
6. Giao diện web sẽ được chạy trên `http://localhost:5173`.

7. Sai đó sử dụng `cd ..` để quay lại thư mục chính và thay đổi đường dẫn đến thư mục `be`:
```bash
docker-compose up -d
```
Lệnh này sẽ chạy file `docker-compose` tạo 1 container và tạo schema `spss`.

8. Build và Chạy ứng dụng
Mở `terminal` trong thư mục `be`:

- 8.1 Build
  
```bash
./mvnw clean install
```

- 8.2 Run
  
```bash
./mvnw spring-boot:run
```

9. Kiểm tra API
Ứng dụng sẽ chạy trên `http://localhost:8080`. Bạn có thể kiểm tra các API bằng cách sử dụng [Postman](https://www.postman.com/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- USAGE -->
<a id="usage"></a>

## Hướng dẫn sử dụng

<p align="right">(<a href="#readme-top">back to top</a>)</p>

__Lưu ý__: vì ứng dụng vẫn đang trong giai đoạn phát triển nên một số chức năng sẽ không được đầy đủ như mong muốn, mong mọi người thông cảm.

### Tài khoản để sử dụng ứng dụng

Các tài khoản có sẵn trong dữ liệu mẫu:

- Tài khoản sinh viên:

    - Username: user1
    - Password: touiuhcmut

- Tài khoản SPSO:

    - Username: user2
    - Password: touiuhcmut
 
- Tài khoản ADMIN:
    - Username: user3
    - Password: touiuhcmut

- Các tài khoản được đăng nhập tại:

![Main page](/image/Login.png)
  

### Nhóm chức năng của sinh viên

__Chú ý__: Đăng nhập với username `user1` và password `touiuhcmut` để sử dụng nhóm chức năng này

- Giao diện chính của trang sinh viên nơi lưu lại lịch sử cấu hình in của sinh viên.
  
![Main page](/image/homepageuser.png)

- Cấu hình in và in file
  
![Main page](/image/Upload1.png)
![Main page](/image/upload2.png)
![Main page](/image/upload3.png)
![Main page](/image/config1.png)

- Mua trang in
  
![Main page](/image/buyprintpage.png)
![Main page](/image/buyprintpage1.png)

__Lưu ý__: Ngoài ra còn một vài chức năng khác

### Nhóm chức năng của SPSO

__Chú ý__: Đăng nhập với username `user2` và password `touiuhcmut` để sử dụng nhóm chức năng này

- Trang chính của SPSO
  
![Main page](/image/hompageSPSO.png)

- Cấu hình máy in

![Main page](/image/configprinter.png)
![Main page](/image/configprinter2.png)

- Cấu hình số mã giảm giá và coupon:

![Main page](/image/Configupload.png)
![Main page](/image/configcounpon.png)


#### Nhóm chức năng của Admin

__Chú ý__: Đăng nhập với username `user3` và password `touiuhcmut` để sử dụng nhóm chức năng này

<!-- CONTACT -->
<a id="contact"></a>

## Liên hệ

Mọi thắc mắc, báo lỗi, đề xuất tính năng cho ứng dụng xin hay liên hệ qua địa chỉ email:

- Trần Văn Lộc - loc.tran04@hcmut.edu.vn
- Trần Duy Phuong - phuong.tranduy@hcmut.edu.vn

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
<a id="acknowledgments"></a>

## Tài liệu tham khảo

1. Slide Công nghệ phầm mềm, Trường đại học Bách Khoa ĐHQG TP.HCM.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


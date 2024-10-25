import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import classes from './style.module.css';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

export const HomePageSPSO = () => {
  const barData = {
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
    datasets: [
      {
        label: 'Tổng số lượt in trong tuần',
        data: [500, 800, 600, 1000, 750, 1200, 900],
        backgroundColor: 'rgba(250, 190, 125, 0.7)',
        hoverBackgroundColor: 'rgba(250, 190, 122, 1)',
        borderColor: 'rgba(200, 150, 120, 1)',
        borderWidth: 0,
        hoverBorderWidth: 2,
        borderRadius: 6,
        barPercentage: 1,
        categoryPercentage: 0.7,
      },
    ],
  };

  const lineData = {
    labels: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022'],
    datasets: [
      {
        label: 'Doanh thu (triệu VND)',
        data: [4, 1, 3, 7, 6, 5],
        fill: true,
        backgroundColor: 'rgba(105, 155, 255, 1)',
        borderColor: 'rgba(105, 155, 255, 1)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(105, 155, 255, 1)',
        pointBorderColor: '#fff',
        tension: 0.9,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        text: 'Biểu đồ Doanh thu trong 7 ngày',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    aspectRatio: 2,
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        text: 'Biểu đồ Doanh thu hàng tuần, hàng tháng, hàng năm',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    aspectRatio: 2,
  };


  return (
    <div className={classes.HomePageSPSO}>
      <header className={classes.header}>
        <h1 className={classes.headerTitle}>Hi, Nguyen Van A</h1>
        <p className={classes.headerSubtitle}>Hope you have a good day</p>
      </header>

      <div className={classes.wholeContent}>
        <div className={`${classes.AreaGrid} ${classes.TongLuotInTrongTuan}`}>
          <header className={classes.DivHeader}>
            <h2>Tổng lượt in trong tuần</h2>
          </header>
          <div className={classes.Graph1}>
            {barData && <Bar id="BarChart" data={barData} options={barOptions} />}
          </div>
        </div>

        <div className={`${classes.AreaGrid} ${classes.DoanhThu}`}>
          <header className={classes.DivHeader}>
            <h2>Doanh thu</h2>
          </header>
          <div className={classes.Graph2}>
            {lineData && <Line id="LineChart" data={lineData} options={lineOptions} />}
          </div>
        </div>

        <div className={`${classes.AreaGrid} ${classes.ThongKe}`}>
          <div className={classes.Area1}>
            <div className={`${classes.LuotTruyCap} ${classes.box}`}>
              <h2 className={classes.numberArea1}>128</h2>
              <p className={classes.MoTa}>Lượt truy cập</p>
              <p className={classes.HomQua}>Hôm qua: 20</p>
            </div>
            <div className={`${classes.SoTrangGiayDaDuocIn} ${classes.box}`}>
              <h2 className={classes.numberArea1}>1000</h2>
              <p className={classes.MoTa}>Số trang giấy đã được in</p>
              <p className={classes.HomQua}>Hôm qua: 200</p>
            </div>
            <div className={`${classes.SoTrangGiayDaDuocMua} ${classes.box}`}>
              <h2 className={classes.numberArea1}>300</h2>
              <p className={classes.MoTa}>Số trang giấy đã được mua</p>
              <p className={classes.HomQua}>Hôm qua: 30</p>
            </div>
          </div>
        </div>

        <div className={`${classes.AreaGrid} ${classes.ThongBao}`}>
          <header className={`${classes.DivHeader}`}>
            <h2>Thông báo</h2>
            <h3 className={classes.ViewAll}>Xem tất cả</h3>
          </header>
          <div className={classes.Area2}>
            {/* Loại thông báo từ người dùng - báo cáo vấn đề tài liệu*/}
            <div className={classes.Notification}>
              <svg className={classes.NotificationIcon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26 26" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2382 4.39453C10.5049 4.92285 5.41669 8.81767 5.41669 15.1661C5.41669 16.162 5.61284 17.1481 5.99393 18.0681C6.37503 18.9882 6.93362 19.8242 7.63779 20.5283C8.34197 21.2325 9.17795 21.7911 10.098 22.1722C10.9915 22.5423 11.9472 22.738 12.9137 22.749C10.5603 22.703 8.66669 20.7809 8.66669 18.4165C8.66669 18.2177 8.68006 18.0221 8.70597 17.8305C8.70696 17.8205 8.70814 17.8105 8.70952 17.8005C9.05346 15.3039 11.38 13.1853 12.4561 12.3263C12.7775 12.0697 13.2227 12.0697 13.5441 12.3263C14.6202 13.1853 16.9466 15.3039 17.2905 17.8005C17.2919 17.8105 17.2931 17.8206 17.2941 17.8305C17.32 18.0222 17.3334 18.2178 17.3334 18.4165C17.3334 20.7809 15.4397 22.703 13.0863 22.749C14.0528 22.738 15.0086 22.5423 15.902 22.1722C16.8221 21.7911 17.6581 21.2325 18.3622 20.5283C19.0664 19.8242 19.625 18.9882 20.0061 18.0681C20.3704 17.1886 20.5657 16.2487 20.5822 15.2976C20.583 15.2817 20.5834 15.2656 20.5834 15.2494V15.2298L20.5833 15.1956L20.5834 15.1662L20.5833 15.1661L20.5832 15.166C20.5544 10.5508 17.4178 8.04185 16.8721 7.6402C16.823 7.60404 16.7591 7.60494 16.71 7.64111C16.4876 7.80488 15.8418 8.31358 15.1501 9.16719C15.0787 9.25526 14.9379 9.23847 14.8896 9.13591C13.6042 6.40576 11.814 4.75525 11.4093 4.40363C11.3595 4.36033 11.2917 4.35594 11.2382 4.39453Z" fill="#222222" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70952 17.8007C9.05346 15.3041 11.38 13.1855 12.4561 12.3265C12.7775 12.0699 13.2227 12.0699 13.5441 12.3265C14.6202 13.1855 16.9466 15.3041 17.2905 17.8007C17.2919 17.8107 17.2931 17.8208 17.2941 17.8307C17.32 18.0224 17.3334 18.2179 17.3334 18.4167C17.3334 20.8099 15.3933 22.75 13 22.75C10.6068 22.75 8.66669 20.8099 8.66669 18.4167C8.66669 18.2179 8.68006 18.0223 8.70597 17.8307C8.70696 17.8207 8.70814 17.8107 8.70952 17.8007Z" fill="#7E869E" fill-opacity="0.25" />
              </svg>
              <div class={classes.NotificationDetails}>
                <p class={classes.NotificationContent}>Máy in A đang bị hỏng</p>
                <p class={classes.NotificationTime}>04 April, 2021 | 04:00 PM</p>
              </div>
            </div>
            {/* Loại thông báo từ máy in - máy in gửi báo cáo lỗi*/}
            <div className={classes.Notification}>
              <svg className={classes.NotificationIcon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 34 34" fill="none">
                <circle cx="17" cy="11.3334" r="5.66667" fill="#222222" />
                <path d="M8.08848 22.6768C8.98236 19.9486 11.6884 18.4167 14.5592 18.4167H19.4407C22.3116 18.4167 25.0176 19.9486 25.9115 22.6768C26.3673 24.068 26.7609 25.6824 26.8799 27.3342C26.9196 27.885 26.4689 28.3334 25.9166 28.3334H8.08331C7.53103 28.3334 7.08038 27.885 7.12006 27.3342C7.23905 25.6824 7.63265 24.068 8.08848 22.6768Z" fill="#7E869E" fill-opacity="0.25" />
              </svg>
              <div class={classes.NotificationDetails}>
                <p class={classes.NotificationContent}>Nam Cao đã báo cáo tài liệu</p>
                <p class={classes.NotificationTime}>04 April, 2021 | 04:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

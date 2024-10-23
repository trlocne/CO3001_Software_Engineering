import React,{useEffect} from 'react';
import './stylemodule.css'

  export const BuyPrintingPages = () => {
  const tongTienGiayEl = document.getElementById('tong-tien-giay');
  const giamGiaEl = document.getElementById('giam-gia');
  const tongThanhToanEl = document.getElementById('tong-thanh-toan');
  const optionButtons = document.querySelectorAll('.option-btn');
  const inputSoTrang = document.getElementById('so-trang');

  // Tính tổng tiền dựa trên số trang in
  function updateTotal() {
    const soTrang = inputSoTrang.value || 100; // Mặc định là 100 nếu không nhập
    const giaTrang = 1000; // 1 tờ = 1000 vnd
    const tongTienGiay = soTrang * giaTrang;
    const giamGia = 9000; // Giảm giá cố định là 9.000 vnd

    tongTienGiayEl.textContent = `${tongTienGiay} vnd`;
    tongThanhToanEl.textContent = `${tongTienGiay - giamGia} vnd`;
  }

  // Lắng nghe sự kiện khi chọn số trang in từ các nút
  optionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const value = e.target.getAttribute('data-value');
      inputSoTrang.value = value;
      updateTotal();
    });
  });

  // Lắng nghe khi người dùng nhập số trang
  inputSoTrang?.addEventListener('input', updateTotal);

  return (
    <div>
      <div className="hello">
        <div className="name">Hi, Nguyen Van A</div>
        <p className="text">Hope you have a good day</p>
      </div>
      <div className="buying">
        <div class="form-group">
          <p className="so-trang">Số trang in cần mua</p>
          <input type="number" id="so-trang" placeholder="100 tờ" max="100"></input>
          <div className="have-section">
            <p className= "text having">Số trang in đang có</p>
            <p className="number text">100 tờ</p>
          </div>
        </div>
        <div class="form-group">
          <div class="options">
            <button class="option-btn" data-value="20">20 tờ</button>
            <button class="option-btn" data-value="50">50 tờ</button>
            <button class="option-btn" data-value="100">100 tờ</button>
            <button class="option-btn" data-value="200">200 tờ</button>
          </div>
        </div>
          <div class="form-group">
          <p className="ma-giam-gia">Mã giảm giá</p>
          <input type="text" id="ma-giam-gia" placeholder="Nhập mã giảm giá"></input>
        </div>

        <div class="summary">
          <p>Tổng tiền giấy: <span id="tong-tien-giay">0 vnd</span></p>
          <p>Giảm giá: <span id="giam-gia">0 vnd</span></p>
          <p>Tổng tiền thanh toán: <span id="tong-thanh-toan">0 vnd</span></p>
        </div>
        <button class="btn-thanh-toan">Thanh toán</button>
      </div>
    </div>
    
  )
}

import React,{useEffect} from 'react';
import './stylemodule.css'

export const BuyPrintingPages = () => {
  
  
  // Tính tổng tiền dựa trên số trang in
  function updateTotal() {
    let tongTienGiayEl = document.getElementById('tong-tien-giay');
    let giamGiaEl = document.getElementById('giam-gia');
    let tongThanhToanEl = document.getElementById('tong-thanh-toan');
    var soTrang =  inputSoTrang?.value; // Mặc định là 100 nếu không nhập
    var giaTrang = 1000; // 1 tờ = 1000 vnd
    var tongTienGiay = soTrang * giaTrang;
    var giamGia = 9000; // Giảm giá cố định là 9.000 vnd

    tongTienGiayEl.textContent = tongTienGiay ? `${tongTienGiay} vnd` : '0 vnd';
    tongThanhToanEl.textContent = (tongTienGiay - giamGia) ? `${tongTienGiay - giamGia} vnd` : '0 vnd';
  }

  // Lắng nghe sự kiện khi chọn số trang in từ các nút

  function onClickNumber(e) {
      let inputSoTrang = document.getElementById('so-trang');
      var value = e.target.getAttribute('data-value');
      if (inputSoTrang) {
          inputSoTrang.value = parseInt(value);
          updateTotal();
          console.log(inputSoTrang.value);
      }
  };
  // inputSoTrang?.addEventListener('input', updateTotal);

  return (
    <div>
      <div className="hello">
        <div className="name">Hi, Nguyen Van A</div>
        <p className="text">Hope you have a good day</p>
      </div>
      <div className="buying">
        <div class="form-group">
          <p className="so-trang">Số trang in cần mua</p>
          <input type="number" id="so-trang" placeholder="0 tờ" max="100" defaultValue="0" onInput={updateTotal}></input>
          <div className="have-section">
            <p className= "text having">Số trang in đang có</p>
            <p className="number text">100 tờ</p>
          </div>
        </div>
        <div class="form-group">
          <div class="options">
            <button class="option-btn" data-value="20" onClick={onClickNumber}>20 tờ</button>
            <button class="option-btn" data-value="50" onClick={onClickNumber}>50 tờ</button>
            <button class="option-btn" data-value="100" onClick={onClickNumber}>100 tờ</button>
            <button class="option-btn" data-value="200" onClick={onClickNumber}>200 tờ</button>
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

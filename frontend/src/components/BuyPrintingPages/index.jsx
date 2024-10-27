import React, { useState, useEffect } from 'react';
import './stylemodule.css';
import momo from './img/momo.png';
import bk from './img/bk.jpg';
export const BuyPrintingPages = () => {
  const [soTrang, setSoTrang] = useState(100); // Default to 100 pages
  const [tongTienGiay, setTongTienGiay] = useState(0);
  const [giamGia] = useState(9000); // Fixed discount
  const [tongThanhToan, setTongThanhToan] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false); // Control modal visibility

<<<<<<< HEAD
  // Calculate total price when `soTrang` changes
  useEffect(() => {
    let giaTrang = 1000; // Price per page: 1000 vnd
    let tongTienGiay = soTrang * giaTrang;
    setTongTienGiay(tongTienGiay);
    setTongThanhToan(tongTienGiay - giamGia); // Total after discount
  }, [soTrang, giamGia]);

  // Handle button click to set number of pages
  const handleOptionClick = (value) => {
    setSoTrang(parseInt(value));
  };

  // Handle input change for the number of pages
  const handleInputChange = (e) => {
    const value = e.target.value ? parseInt(e.target.value) : 0;
    setSoTrang(value);
  };

  // Handle "Thanh toán" button to show modal
  const handleThanhToan = () => {
    setShowPaymentModal(true);
  };

  // Close modal when "Hủy" button is clicked or outside is clicked
  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };
=======
export const BuyPrintingPages = () => {
  
  // Tính tổng tiền dựa trên số trang in
  function updateTotal() {
    let tongTienGiayEl = document.getElementById('tong-tien-giay');
    let giamGiaEl = document.getElementById('giam-gia');
    let tongThanhToanEl = document.getElementById('tong-thanh-toan');
    let inputSoTrang = document.getElementById('so-trang');
    var soTrang =  inputSoTrang?.value; // Mặc định là 100 nếu không nhập
    var giaTrang = 1000; // 1 tờ = 1000 vnd
    var tongTienGiay = soTrang * giaTrang;
    var giamGia = 9000; // Giảm giá cố định là 9.000 vnd

    tongTienGiayEl.textContent = tongTienGiay ? `${tongTienGiay} vnd` : '0 vnd';
    console.log(tongTienGiay)
    giamGiaEl.textContent = giamGia ? `${giamGia} vnd` : '0 vnd';
    console.log(giamGia)
    tongThanhToanEl.textContent = (tongTienGiay - giamGia) ? `${tongTienGiay - giamGia} vnd` : '0 vnd';
    console.log(tongTienGiay - giamGia)
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
>>>>>>> 9b621ffc2e42acedde77b7812f61e0285f58bcfe

  return (
    <div>
      {/* Main Content */}
      <div className="hello">
        <div className="name">Hi, Nguyen Van A</div>
        <p className="text">Hope you have a good day</p>
      </div>

      <div className="buying">
        <div className="form-group">
          <p className="so-trang">Số trang in cần mua</p>
<<<<<<< HEAD
          <input
            type="number"
            id="so-trang"
            placeholder="100 tờ"
            value={soTrang}
            onChange={handleInputChange}
            max="1000"
          />
          <div className="have-section">
            <p className="text having">Số trang in đang có</p>
            <p className="number text">100 tờ</p>
          </div>
        </div>

        <div className="form-group">
          <div className="options">
            <button className="option-btn" onClick={() => handleOptionClick(20)}>
              20 tờ
            </button>
            <button className="option-btn" onClick={() => handleOptionClick(50)}>
              50 tờ
            </button>
            <button className="option-btn" onClick={() => handleOptionClick(100)}>
              100 tờ
            </button>
            <button className="option-btn" onClick={() => handleOptionClick(200)}>
              200 tờ
            </button>
=======
          <input type="number" id="so-trang" placeholder="0 tờ" defaultValue="0" onInput={updateTotal} className="text-center text-[20px] font-bold text-[#515151] outline-none"></input>
          <div className="have-section">
            <p className= "text having font-normal">Số trang in đang có</p>
            <p className="number text font-normal">100 tờ</p>
          </div>
        </div>
        <div class="form-group">
          <div class="options">
            <button class="option-btn" data-value="20" onClick={onClickNumber}>20 tờ</button>
            <button class="option-btn" data-value="50" onClick={onClickNumber}>50 tờ</button>
            <button class="option-btn" data-value="100" onClick={onClickNumber}>100 tờ</button>
            <button class="option-btn" data-value="200" onClick={onClickNumber}>200 tờ</button>
>>>>>>> 9b621ffc2e42acedde77b7812f61e0285f58bcfe
          </div>
        </div>

        <div className="form-group">
          <p className="ma-giam-gia">Mã giảm giá</p>
<<<<<<< HEAD
          <input type="text" id="ma-giam-gia" placeholder="Nhập mã giảm giá" />
        </div>

        <div className="summary">
          <p>Tổng tiền giấy: <span id="tong-tien-giay">{tongTienGiay} vnd</span></p>
          <p>Giảm giá: <span id="giam-gia">{giamGia} vnd</span></p>
          <p>Tổng tiền thanh toán: <span id="tong-thanh-toan">{tongThanhToan} vnd</span></p>
=======
          <input type="text" id="ma-giam-gia" placeholder="Nhập mã giảm giá" className="outline-none"></input>
        </div>

        <div class="summary">
          <p>Tổng tiền giấy: <span id="tong-tien-giay">0 vnd</span></p>
          <p>Giảm giá: <span id="giam-gia">0 vnd</span></p>
          <p className="font-bold">Tổng tiền thanh toán: <span id="tong-thanh-toan" className="font-bold">0 vnd</span></p>
>>>>>>> 9b621ffc2e42acedde77b7812f61e0285f58bcfe
        </div>

        <button className="btn-thanh-toan" onClick={handleThanhToan}>Thanh toán</button>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Phương thức thanh toán</h2>
            <button className="payment-option">
              <img src={momo} alt="Momo" />
              Momo
            </button>
            <button className="payment-option">
              <img src={bk} alt="BK Pay" />
              BK Pay
            </button>
            <button className="cancel-btn" onClick={handleCloseModal}>Hủy</button>
          </div>
        </div>
      )}
    </div>
  );
};

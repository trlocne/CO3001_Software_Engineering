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
          </div>
        </div>

        <div className="form-group">
          <p className="ma-giam-gia">Mã giảm giá</p>
          <input type="text" id="ma-giam-gia" placeholder="Nhập mã giảm giá" />
        </div>

        <div className="summary">
          <p>Tổng tiền giấy: <span id="tong-tien-giay">{tongTienGiay} vnd</span></p>
          <p>Giảm giá: <span id="giam-gia">{giamGia} vnd</span></p>
          <p>Tổng tiền thanh toán: <span id="tong-thanh-toan">{tongThanhToan} vnd</span></p>
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

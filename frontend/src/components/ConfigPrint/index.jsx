import React, { useState, useCallback, useEffect, useRef } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import classes from './style.module.css';


/////////////////////////////////// GENERAL /////////////////////////////////////////////////////////////////////////////////////////
//----------Filter----------------------------------------------------
const FilterMenu = ({ onFilter, onReset }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [inkRange, setInkRange] = useState({ min: '', max: '' });
  const [paperRange, setPaperRange] = useState({ min: '', max: '' });
  const [status, setStatus] = useState('');
  const filterRef = useRef(null);

  const toggleMenu = () => setShowMenu(!showMenu);

  const applyFilter = () => {
    onFilter({
      inkRange,
      paperRange,
      status
    });
    setShowMenu(false);
  };

  const resetFilters = () => {
    setInkRange({ min: '', max: '' });
    setPaperRange({ min: '', max: '' });
    setStatus('');
    onReset(); // Reset all filters in parent component
  };

  const hasFilterData = () => {
    return (
      inkRange.min || inkRange.max || paperRange.min || paperRange.max || status
    );
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      if (hasFilterData()) {
        const confirmExit = window.confirm(
          'Bạn có muốn giữ lại các dữ liệu đã nhập để tiếp tục lọc không?'
        );
        if (!confirmExit) {
          resetFilters();
        } else {
          setShowMenu(true); // Keep menu open
          return;
        }
      }
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);


  return (
    <div className={classes.filterContainer} ref={filterRef}>
      <button onClick={toggleMenu} className={classes.filterButton}>
        <svg className={classes.filterIcon1} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3.60006 1H12.4001C13.1334 1 13.7334 1.6 13.7334 2.33333V3.8C13.7334 4.33333 13.4001 5 13.0667 5.33333L10.2001 7.86667C9.80006 8.2 9.53339 8.86667 9.53339 9.4V12.2667C9.53339 12.6667 9.26672 13.2 8.93339 13.4L8.00006 14C7.13339 14.5333 5.93339 13.9333 5.93339 12.8667V9.33333C5.93339 8.86667 5.66672 8.26667 5.40006 7.93333L2.86672 5.26667C2.53339 4.93333 2.26672 4.33333 2.26672 3.93333V2.4C2.26672 1.6 2.86672 1 3.60006 1Z" stroke="#787486" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Filter
        <svg className={classes.filterIcon2} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8.00001 11.1999C7.53335 11.1999 7.06668 11.0199 6.71335 10.6666L2.36668 6.31993C2.17335 6.12659 2.17335 5.8066 2.36668 5.61326C2.56001 5.41993 2.88001 5.41993 3.07335 5.61326L7.42001 9.95993C7.74001 10.2799 8.26001 10.2799 8.58001 9.95993L12.9267 5.61326C13.12 5.41993 13.44 5.41993 13.6333 5.61326C13.8267 5.8066 13.8267 6.12659 13.6333 6.31993L9.28668 10.6666C8.93335 11.0199 8.46668 11.1999 8.00001 11.1999Z" fill="#787486" />
        </svg>
      </button>
      {showMenu && (
        <div className={classes.filterMenu}>
          <div className={classes.filterOption}>
            <label>Lọc theo % giấy in:</label>
            <input
              type="number"
              placeholder="Min (mặc định: không áp dụng)"
              value={paperRange.min}
              onChange={(e) => setPaperRange({ ...paperRange, min: e.target.value })}
              className={classes.filterInput}
            />
            <input
              type="number"
              placeholder="Max (mặc định: không áp dụng)"
              value={paperRange.max}
              onChange={(e) => setPaperRange({ ...paperRange, max: e.target.value })}
              className={classes.filterInput}
            />
          </div>
          <div className={classes.filterOption}>
            <label>Lọc theo % mực in:</label>
            <input
              type="number"
              placeholder="Min (mặc định: không áp dụng)"
              value={inkRange.min}
              onChange={(e) => setInkRange({ ...inkRange, min: e.target.value })}
              className={classes.filterInput}
            />
            <input
              type="number"
              placeholder="Max (mặc định: không áp dụng)"
              value={inkRange.max}
              onChange={(e) => setInkRange({ ...inkRange, max: e.target.value })}
              className={classes.filterInput}
            />
          </div>
          <div className={classes.filterOption}>
            <label>Lọc theo trạng thái:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={classes.filterInput}
            >
              <option value="">Tất cả</option>
              <option value="active">Hoạt động</option>
              <option value="inactive">Không hoạt động</option>
            </select>
          </div>
          <div className={classes.applyresetButton}>
            <button onClick={resetFilters} className={`${classes.resetButton} ${classes.applyReset}`}>Bỏ lọc</button>
            <button onClick={applyFilter} className={`${classes.applyButton} ${classes.applyReset}`}>Áp dụng</button>
          </div>
        </div>
      )}
    </div>
  );
};

//--------- PrinterCard template -------------------------------------
const PrinterCard = ({ title, onDelete, processingPages, pageProgress, inkProgress, status, onUpdate }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef(null);

  // Form data sẽ chứa giá trị mặc định của các biến trong PrinterCard
  const [formData, setFormData] = useState({
    name: title,
    status: status,
    paperUsage: pageProgress, // phần trăm giấy in
    inkUsage: inkProgress // phần trăm mực in
  });

  const toggleOverlay = () => setShowOverlay(!showOverlay);

  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      setShowOverlay(false);
    }
  };

  useEffect(() => {
    if (showOverlay) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOverlay]);

  // Cập nhật form data khi có thay đổi từ người dùng
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Khi nhấn "Save", cập nhật PrinterCard và đóng overlay
  const handleSave = (e) => {
    e.preventDefault();
    onUpdate(formData); // Cập nhật dữ liệu lên PrinterCard cha
    setShowOverlay(false);
  };

  return (
    <div className={classes.printerCard}>
      <div className={classes.printerCardHeader}>
        <div className={classes.printerCardDots} onClick={toggleOverlay}>. . .</div>
        <h2 className={classes.printerCardTitle}>{formData.name}</h2>
        <div className={classes.printerStatusIndicator} onClick={onDelete} title="Xóa máy in" style={{ cursor: "pointer" }}></div>
      </div>

      <div className={classes.printerCardDetails}>
        <svg className={classes.printerIcon} xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
          {<svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
            <path d="M14 25C14 23.1144 14 22.1716 14.5858 21.5858C15.1716 21 16.1144 21 18 21H66C67.8856 21 68.8284 21 69.4142 21.5858C70 22.1716 70 23.1144 70 25V47C70 47.9428 70 48.4142 69.7071 48.7071C69.4142 49 68.9428 49 68 49H59.8C59.6586 49 59.5879 49 59.5439 48.9561C59.5 48.9121 59.5 48.8414 59.5 48.7V40.5C59.5 39.5572 59.5 39.0858 59.2071 38.7929C58.9142 38.5 58.4428 38.5 57.5 38.5H26.5C25.5572 38.5 25.0858 38.5 24.7929 38.7929C24.5 39.0858 24.5 39.5572 24.5 40.5V48.7C24.5 48.8414 24.5 48.9121 24.4561 48.9561C24.4121 49 24.3414 49 24.2 49H15C14.5286 49 14.2929 49 14.1464 48.8536C14 48.7071 14 48.4714 14 48V25Z" fill="#222222" />
            <path d="M24.5 72.7615L24.5 40.5C24.5 39.5572 24.5 39.0858 24.7929 38.7929C25.0858 38.5 25.5572 38.5 26.5 38.5L57.5 38.5C58.4428 38.5 58.9142 38.5 59.2071 38.7929C59.5 39.0858 59.5 39.5572 59.5 40.5L59.5 72.7615C59.5 73.0961 59.5 73.2634 59.3902 73.3378C59.2803 73.4121 59.125 73.35 58.8143 73.2257L50.9357 70.0743C50.844 70.0376 50.7981 70.0193 50.75 70.0193C50.7019 70.0193 50.656 70.0376 50.5643 70.0743L42.1857 73.4257C42.094 73.4624 42.0481 73.4807 42 73.4807C41.9519 73.4807 41.906 73.4624 41.8143 73.4257L33.4357 70.0743C33.344 70.0376 33.2981 70.0193 33.25 70.0193C33.2019 70.0193 33.156 70.0376 33.0643 70.0743L25.1857 73.2257C24.875 73.35 24.7197 73.4121 24.6098 73.3378C24.5 73.2634 24.5 73.0961 24.5 72.7615Z" fill="#7E869E" fill-opacity="0.25" />
            <path d="M33.25 50.75L47.25 50.75" stroke="#222222" stroke-linecap="round" />
            <path d="M33.25 61.25L50.75 61.25" stroke="#222222" stroke-linecap="round" />
            <path d="M24.5 12.5C24.5 11.5572 24.5 11.0858 24.7929 10.7929C25.0858 10.5 25.5572 10.5 26.5 10.5H57.5C58.4428 10.5 58.9142 10.5 59.2071 10.7929C59.5 11.0858 59.5 11.5572 59.5 12.5V17.2C59.5 17.3414 59.5 17.4121 59.4561 17.4561C59.4121 17.5 59.3414 17.5 59.2 17.5H24.8C24.6586 17.5 24.5879 17.5 24.5439 17.4561C24.5 17.4121 24.5 17.3414 24.5 17.2V12.5Z" fill="#222222" />
          </svg>}
        </svg>

        <div className={classes.printerProcessing}>Số trang giấy đang được xử lý:</div>
        <div className={classes.printerProcessingNumber}>{processingPages}</div>

        <div className={classes.printerProgress}>
          <div className={classes.printerPages}>
            <p className={classes.NumberOfPages}>Số giấy in:</p>
            <CustomProgressBar
              className={`${classes.PagesProgressBar} ${classes.ProgressBar}`}
              completed={formData.paperUsage}
              bgColor="#5CFF66"
              label={`${formData.paperUsage}%`}
              labelAlignment="center"
            />
          </div>
          <div className={classes.printerInk}>
            <p className={classes.AmountOfInk}>Số mực in:</p>
            <CustomProgressBar
              className={`${classes.InkProgressBar} ${classes.ProgressBar}`}
              completed={formData.inkUsage}
              bgColor="#FF665C"
              label={`${formData.inkUsage}%`}
            />
          </div>
        </div>
      </div>

      {/* Overlay để chỉnh sửa PrinterCard */}
      {showOverlay && (
        <div className={classes.overlay}>
          <div className={classes.overlayContent} ref={overlayRef}>
            <form className={classes.printerForm} onSubmit={handleSave}>
              <label htmlFor="name">Tên:</label>
              <input
                className={classes.printerInput}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <label htmlFor="status">Trạng thái:</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className={classes.printerInput}
              >
                <option value="active">Hoạt động</option>
                <option value="inactive">Không hoạt động</option>
              </select>

              <label htmlFor="paperUsage">Số giấy in (%):</label>
              <input
                className={classes.printerInput}
                type="number"
                name="paperUsage"
                value={formData.paperUsage}
                onChange={handleInputChange}
              />

              <label htmlFor="inkUsage">Số mực in (%):</label>
              <input
                className={classes.printerInput}
                type="number"
                name="inkUsage"
                value={formData.inkUsage}
                onChange={handleInputChange}
              />

              <button type="submit" className={classes.printerSubmit}>Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

//----------Progress Bar template-------------------------------------
const CustomProgressBar = ({
  completed = 90,
  maxCompleted = 100,
  className = '', // Class mặc định
  bgColor = "#5CFF66", // Màu nền mặc định
  baseBgColor = "#f2f2f2",
  height = "10px",
  width = "95%",
  borderRadius = "50px",
  labelAlignment = "center",
  isLabelVisible = true,
  labelColor = "#555",
  labelSize = "0.8rem",
  transitionDuration = "2s",
  transitionTimingFunction = "ease",
  animateOnRender = true,
}) => {
  return (
    <ProgressBar
      className={`custom-progress-bar ${className}`} // Kết hợp class
      completed={completed}
      maxCompleted={maxCompleted}
      bgColor={bgColor}
      baseBgColor={baseBgColor}
      height={height}
      width={width}
      borderRadius={borderRadius}
      labelAlignment={labelAlignment}
      isLabelVisible={isLabelVisible}
      labelColor={labelColor}
      labelSize={labelSize}
      transitionDuration={transitionDuration}
      transitionTimingFunction={transitionTimingFunction}
      animateOnRender={animateOnRender}
    />
  );
};




/////////////////////////////////// MAIN CODE /////////////////////////////////////////////////////////////////////////////////////////
export const ConfigPrint = () => {
  const [printers, setPrinters] = useState([
    { id: 1, title: 'H1-101', processingPages: 100, pageProgress: 70, inkProgress: 35, status: 'active' },
    { id: 2, title: 'H1-102', processingPages: 50, pageProgress: 50, inkProgress: 80, status: 'inactive' },
    { id: 3, title: 'H1-123', processingPages: 75, pageProgress: 60, inkProgress: 50, status: 'active' },
    { id: 4, title: 'H2-104', processingPages: 90, pageProgress: 3, inkProgress: 40, status: 'inactive' },
    { id: 5, title: 'H4-504', processingPages: 23, pageProgress: 80, inkProgress: 5, status: 'inactive' },
    { id: 6, title: 'H3-164', processingPages: 90, pageProgress: 80, inkProgress: 100, status: 'active' },
    { id: 7, title: 'H1-504', processingPages: 568, pageProgress: 80, inkProgress: 40, status: 'inactive' },
    { id: 8, title: 'H5-124', processingPages: 2367, pageProgress: 81, inkProgress: 75, status: 'active' },
    { id: 9, title: 'H3-164', processingPages: 90, pageProgress: 42, inkProgress: 40, status: 'active' },
    { id: 10, title: 'H5-214', processingPages: 90, pageProgress: 89, inkProgress: 32, status: 'active' },
    { id: 11, title: 'H1-604', processingPages: 32, pageProgress: 9, inkProgress: 47, status: 'active' },
    { id: 12, title: 'H2-304', processingPages: 32, pageProgress: 54, inkProgress: 86, status: 'active' },
    { id: 13, title: 'H3-154', processingPages: 12, pageProgress: 5, inkProgress: 5, status: 'active' },
    { id: 14, title: 'H5-154', processingPages: 76, pageProgress: 52, inkProgress: 78, status: 'active' },
  ]);

  const [filters, setFilters] = useState({
    inkRange: { min: '', max: '' },
    paperRange: { min: '', max: '' },
    status: ''
  });

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters({
      inkRange: { min: '', max: '' },
      paperRange: { min: '', max: '' },
      status: ''
    });
    setSearchTerm('');
  };

  const applyFilters = (printer) => {
    const { inkRange, paperRange, status } = filters;

    const inkInRange = (!inkRange.min || printer.inkUsage >= inkRange.min) &&
      (!inkRange.max || printer.inkUsage <= inkRange.max);
    const paperInRange = (!paperRange.min || printer.paperUsage >= paperRange.min) &&
      (!paperRange.max || printer.paperUsage <= paperRange.max);
    const statusMatch = !status || printer.status === status;
    const titleMatch = !searchTerm || printer.title.toLowerCase().includes(searchTerm.toLowerCase());

    return inkInRange && paperInRange && statusMatch && titleMatch;
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUpdatePrinter = (id, updatedData) => {
    setPrinters((prevPrinters) =>
      prevPrinters.map((printer) =>
        printer.id === id ? { ...printer, ...updatedData } : printer
      )
    );
  };

  const handleDeletePrinter = useCallback((id) => {
    console.log(`Deleting printer with ID: ${id}`);
    setPrinters((prevPrinters) => prevPrinters.filter((printer) => printer.id !== id));
  }, []);





  return (
    <div className={classes.configPrint}>
      {/* Header section */}
      <header className={classes.header}>
        <h1 className={classes.headerTitle}>Hi, Nguyen Van A</h1>
        <p className={classes.headerSubtitle}>Hope you have a good day</p>
        <div className={classes.filterAndSearch}>
          {/* Filter button */}
          <div className={classes.filterSection}>
            <FilterMenu onFilter={handleFilter} onReset={resetFilters} />
          </div>
          {/* Search tool */}
          <div className={classes.headerSearch}>
            <svg className={classes.searchIcon} xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none"> <path d="M11.3416 19.2499C16.1511 19.2499 20.05 15.3511 20.05 10.5416C20.05 5.73211 16.1511 1.83325 11.3416 1.83325C6.53215 1.83325 2.6333 5.73211 2.6333 10.5416C2.6333 15.3511 6.53215 19.2499 11.3416 19.2499Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M20.9666 20.1666L19.1333 18.3333" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <input
              type="text"
              className={classes.headerSearchInput}
              placeholder="Search for Library..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </header>

      {/* Main content section (grid of printer cards) */}
      <main className={classes.printerDashboard}>
        <div className={classes.printerGrid}>
          {printers
            .filter(applyFilters) // Áp dụng bộ lọc trước khi hiển thị PrinterCard
            .map((printer) => (
              <PrinterCard
                key={printer.id}
                title={printer.title}
                processingPages={printer.processingPages}
                pageProgress={printer.pageProgress}
                inkProgress={printer.inkProgress}
                status={printer.status}
                onDelete={() => handleDeletePrinter(printer.id)}
                onUpdate={(updatedData) => handleUpdatePrinter(printer.id, updatedData)}
              />
            ))}
        </div>
      </main>

    </div>
  );
};

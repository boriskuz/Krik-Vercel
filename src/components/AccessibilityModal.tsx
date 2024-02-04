import React, { useState, useRef, useEffect } from 'react';

const AccessibilityModal = () => {
  const [xlSize, setXlSize] = useState(false);
  const [cursorChange, setCursorChange] = useState(false);
  const [changeContrast, setChangeContrast] = useState(false);
  const [changeSaturation, setChangeSaturation] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleXLChange = () => {
    setXlSize((prevState) => !prevState);
    const root = document.documentElement;
    if (!xlSize) {
      root.style.setProperty('--base-font-size', '70%');
    } else {
      root.style.setProperty('--base-font-size', '62.5%');
    }
  };

  const handleCursor = () => {
    setCursorChange((prevState) => !prevState);
    const root = document.documentElement;
    if (!cursorChange) {
      root.style.setProperty('--cursor-url', 'url("/images/icons/cursorXL.svg")');
      root.style.setProperty('--cursor-position', '10 10');
      root.style.setProperty('--cursor-type', 'auto');
    } else {
      root.style.setProperty('--cursor-url', 'auto');
      root.style.setProperty('--cursor-position', 'auto');
      root.style.setProperty('--cursor-type', 'auto');
    }
  };

  const handleContrastChange = () => {
    setChangeContrast((prevState) => !prevState);
    const root = document.documentElement;
    if (!changeContrast) {
      root.style.setProperty('--yellow-color', '#ff9c00');
      root.style.setProperty('--orange-color', '#f82d00');
      root.style.setProperty('--violet-color', '#785edd');
    } else {
      root.style.setProperty('--yellow-color', '#f8ac2e');
      root.style.setProperty('--orange-color', '#fb5e3c');
      root.style.setProperty('--violet-color', '#b8afda');
    }
  };

  const handleSaturationChange = () => {
    setChangeSaturation((prevState) => !prevState);
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      if (!changeSaturation) {
        image.style.filter = 'saturate(200%)';
      } else {
        image.style.filter = 'none';
      }
    });
  };

  return (
    <>
      <button type="button" className="button orange accessibility-btn" onClick={openModal}>
        Пристапност
      </button>

      {isOpen && (
        <div className="widget-box-background">
          <div className="widget-box-content" ref={modalRef}>
            <div className="widget-box-header">
              <h4 className="m-0 text-center">Пристапност</h4>
            </div>
            <div className="container-fluid widget-box-body">
              <div className="row">
                <div className="col">
                  <div className="row align-items-center xl-row">
                    <div className="col">
                      <h3>XL</h3>
                    </div>
                    <div className="col-7">
                      <h3 className="text-center">Oversized Widget</h3>
                    </div>
                    <div className="col">
                      <div className="form-check form-switch">
                        <input className="form-check-input input-xl " type="checkbox" role="switch" id="xlSwitch" checked={xlSize} onChange={handleXLChange} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col mb-4">
                      <div className="icon">
                        <input type="checkbox" className="btn-check" id="cursor-check" autoComplete="off" checked={cursorChange} onChange={handleCursor} />
                        <label htmlFor="cursor-check">
                          <img src="/images/icons/widget/cursor.svg" alt="Cursor icon" />
                          <h4>Cursor Size</h4>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-4">
                      <div className="icon">
                        <input type="checkbox" className="btn-check" id="contrast-check" autoComplete="off" checked={changeContrast} onChange={handleContrastChange} />
                        <label htmlFor="contrast-check">
                          <img src="/images/icons/widget/contrast.svg" alt="Contrast icon" />
                          <h4>Contrast</h4>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="icon">
                        <input type="checkbox" className="btn-check" id="pause-animation-check" autoComplete="off" />
                        <label htmlFor="pause-animation-check">
                          <img src="/images/icons/widget/pause-animation.svg" alt="Pause animation icon" />
                          <h4>Pause Animation</h4>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col mb-4">
                      <div className="icon">
                        <input type="checkbox" className="btn-check" id="screen-reader-check" autoComplete="off" />
                        <label htmlFor="screen-reader-check">
                          <img className="screen-reader" src="/images/icons/widget/screen-reader.svg" alt="Screen reader icon" />
                          <h4>Screen Reader</h4>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-4">
                      <div className="icon">
                        <input type="checkbox" className="btn-check" id="reading-mask-check" autoComplete="off" />
                        <label htmlFor="reading-mask-check">
                          <img className="reading-mask" src="/images/icons/widget/reading-mask.svg" alt="Reading mask icon" />
                          <h4>Reading Mask</h4>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-4">
                      <div className="icon">
                        <input type="checkbox" className="btn-check" id="saturation-check" autoComplete="off" checked={changeSaturation} onChange={handleSaturationChange} />
                        <label htmlFor="saturation-check">
                          <img className="saturation" src="/images/icons/widget/saturation.svg" alt="Saturation icon" />
                          <h4>Saturation</h4>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityModal;

import React, { useEffect, useRef } from 'react'

const TimerScroll = ({ data, selectedValue, onChange }) => {
  const pickerRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const selectedElement = pickerRef.current.querySelector('.selected');
    const containerHeight = pickerRef.current.clientHeight;
    const elementHeight = selectedElement.clientHeight;
    const scrollTop = selectedElement.offsetTop - (containerHeight  / 2 - elementHeight / 2);
    pickerRef.current.scrollTo({top: scrollTop, behavior: 'smooth'});
  }, [selectedValue]);

  const handleScroll = () => {
    if (isScrolling.current) return;

    isScrolling.current = true;

    setTimeout(() => {
      const container = pickerRef.current;
      const containerHeight = container.clientHeight;
      const elementHeight = container.querySelector('.picker-item').clientHeight;
      const scrollTop = container.scrollTop;
      const middlePosition = scrollTop + containerHeight / 2;
      const selectedIndex = Math.round(middlePosition / elementHeight) - 1;

      if (selectedIndex >= 0 && selectedIndex < data.length) {
        
        const newValue = data[selectedIndex];
        if (newValue !== selectedValue) {
          onChange(newValue);
        }
      }
      
      isScrolling.current = false;
    }, 700);
  };

  return (
    <div className='picker-wrapper'>
    <div className="picker-container" ref={pickerRef} onScroll={handleScroll}>
      {data.map((value, index) => (
        <div
          key={index}
          className={`picker-item ${value === selectedValue ? 'selected' : ''}`}
          onClick={() => onChange(value)}
        >
          {value}
        </div>
      ))}
      </div>
      <div className="gradient gradient-top"></div>
      <div className="gradient gradient-bottom"></div>
    </div>
  );
}

export default TimerScroll

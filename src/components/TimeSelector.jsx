import React, { useEffect, useState } from 'react'
import TimerScroll from './TimerScroll'
import "./TimeSelectorStyles.css"

const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart('0'));
const seconds = Array.from({ length: 60 }, (_, i) => i.toString().padStart('0'));

const TimeSelector = ({ mins, setMinutes, secs, setSeconds }) => {
    return (
        <div className='time-selector'>
            <TimerScroll data={minutes} selectedValue={mins} onChange={setMinutes} />
            <span>мин</span>
            <TimerScroll data={seconds} selectedValue={secs} onChange={setSeconds} />
            <span>сек</span>

        </div>
    )
}

export default TimeSelector

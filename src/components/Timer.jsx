import React, { useEffect, useState } from 'react'
import PlayButton from '../ui/PlayButton'
import formatTime, { formatFulltime } from '../helpers/formatTime'
import "./TimerStyles.css"
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'

const Timer = ({ timer, edit, setTimers }) => {
    const [timeLeft, setTimeLeft] = useState(timer.timeLeft)
    const [mode, setMode] = useState(timer.mode)
    let time = formatTime(timeLeft)
    let navigate = useNavigate()

    useEffect(() => {
        let interval;
        if (mode === 'play'){
            if(!timeLeft) setTimeLeft(timer.fulltime)
            interval = setInterval(() => setTimeLeft(timeLeft => timeLeft - 1), 1000);
        }
        else {
            clearInterval(interval)
            let timers = JSON.parse(localStorage.getItem("timers"))
            timers.forEach((t) => { if (t.id === timer.id) { t.timeLeft = timeLeft; t.mode = mode } })
            localStorage.setItem("timers", JSON.stringify(timers))
        }

        time = formatTime(timeLeft);
        return () => clearInterval(interval);
    }, [mode])

    useEffect(() => {
        if (!timeLeft) {
            setMode("pause")
            handleUpdateLocalStorage()
        }
    }, [timeLeft])

    const handleUpdateLocalStorage = () => {
        let timers = JSON.parse(localStorage.getItem("timers"))
        timers.forEach((t) => { if (t.id === timer.id) { t.timeLeft = timeLeft; t.mode = mode } })
        localStorage.setItem("timers", JSON.stringify(timers))
    }

    const removeTimer = (e) => {
        e.stopPropagation()
        let timers = JSON.parse(localStorage.getItem("timers"))
        timers = timers.filter((t) => t.id!==timer.id)
        localStorage.setItem("timers", JSON.stringify(timers))
        setTimers(timers)
    }

    const handleTimerSelect = () => {
        if(!edit){
            handleUpdateLocalStorage()
        navigate("/timer-display?id=" + timer.id)
        } else {
            handleUpdateLocalStorage()
        navigate("/timer-setup?id=" + timer.id)
        }
        
    }
    return (
        <div className='timer' onClick={handleTimerSelect}>
            <div className='edit-on'>
                {edit && <Button onClick={removeTimer}><img src="./Remove.svg" alt="remove" /></Button>}
                <div className='time'>
                    <span className='time-left'>{time.replaceAll(" ", "")}</span>
                    <span className='full-time'>{formatFulltime(timer.fulltime)}</span>
                </div>
            </div>

            {!edit && <PlayButton mode={mode} setMode={setMode} />}
            {edit && <img src="./Arrow.svg" />}

        </div>
    )
}

export default Timer

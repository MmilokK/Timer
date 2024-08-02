import React, { useEffect, useState, useLayoutEffect } from 'react'
import "./TimerDisplayPageStyles.css"
import HeaderButton from '../ui/HeaderButton'
import Button from '../ui/Button'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
import formatTime from '../helpers/formatTime'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'

const TimerDisplayPage = () => {
    let id = Number(useLocation().search.slice(4))

    let timers = JSON.parse(localStorage.getItem("timers"))
    let timer = timers.find((timer) => timer.id === id);
    const [mode, setMode] = useState(timer.mode)
    const [timeLeft, setTimeLeft] = useState(timer.timeLeft)
    const navigate = useNavigate()

    useEffect(() => {
        let interval;
        if (mode === 'play'){
            if(!timeLeft) setTimeLeft(timer.fulltime)
            interval = setInterval(() => setTimeLeft(timeLeft => timeLeft - 1), 1000);
        } 
        else { clearInterval(interval) }
        return () => clearInterval(interval);
    }, [mode])

    useEffect(() => {
        if (!timeLeft) {
            setMode("pause")
            
            timers.forEach((timer)=>{if(timer.id===id){timer.timeLeft=timeLeft; timer.mode=mode}})
            localStorage.setItem("timers", JSON.stringify(timers))
        }
    }, [timeLeft])

    const handlePause = () => {
        if (mode === "pause") {
            setMode("play")
        } else {
            setMode("pause")
        }
    }

    const handleCancel = () => {
        setMode("pause")
        setTimeLeft(timer.fulltime)
        timers.forEach((timer)=>{if(timer.id===id){timer.timeLeft=timer.fulltime; timer.mode="pause"}})
        localStorage.setItem("timers", JSON.stringify(timers))
    }

    const handleTimers = () => {
        timers.forEach((timer)=>{if(timer.id===id){timer.timeLeft=timeLeft; timer.mode=mode}})
        localStorage.setItem("timers", JSON.stringify(timers))
        navigate("/")
    }

    return (
        <div className='timer-display-page'>
            <Header buttonTitle="Таймеры" onClick={handleTimers}></Header>
            <CircularProgressbar
                className='progressbar'
                value={timeLeft / timer?.fulltime * 100}
                text={`${formatTime(timeLeft)}`}
                strokeWidth={3}
                styles={buildStyles({
                    textColor: "white",
                    textSize: 15,
                    strokeLinecap: "butt",
                    pathColor: "#29A354",
                    trailColor: "#1A1F23",

                })}
            />
            <div className='buttons'>
                <Button onClick={handlePause} type="pause-continue">{mode === "pause" ? "Возобновить" : "Пауза"}</Button>
                <Button onClick={handleCancel} type="cancel">Отмена</Button>
            </div>
        </div>
    )
}

export default TimerDisplayPage

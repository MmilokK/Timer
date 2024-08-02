import React, { useState } from 'react'
import Header from '../components/Header'
import "./TimerSetupPageStyles.css"
import Button from '../ui/Button'
import TimeSelector from '../components/TimeSelector'
import { useLocation, useNavigate } from 'react-router-dom'

const TimerSetupPage = () => {
  const [seconds, setSeconds] = useState("0")
  const [minutes, setMinutes] = useState("0")
  const navigate = useNavigate()
  let id = Number(useLocation().search?.slice(4))

  const handleAdd = () => {
    if(minutes>0 || seconds>0){
      let timers = JSON.parse(localStorage.getItem("timers"))
    if (!timers) timers = []
    if (!id){
      id = Date.now()
      timers.push({ id: id, fulltime: minutes * 60 + Number(seconds), timeLeft: minutes * 60 + Number(seconds), mode: "play" })
    } else{
      timers.forEach((t)=>{
        if(t.id===id){
          t.fulltime = minutes * 60 + Number(seconds)
          t.timeLeft = minutes * 60 + Number(seconds)
          t.mode = "play"
        }
      })
    }
    localStorage.setItem("timers", JSON.stringify(timers))
    navigate("/timer-display?id=" + id)
    }
  }
  return (
    <div className='timer-setup-page'>
      <Header buttonTitle="Отменить" onClick={() => navigate("/")}></Header>
      <h1>Таймер</h1>
      <TimeSelector secs={seconds} setSeconds={setSeconds} mins={minutes} setMinutes={setMinutes} />

      <Button onClick={handleAdd} type="start">Старт</Button>
    </div>
  )
}

export default TimerSetupPage

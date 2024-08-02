import React, { useEffect, useState } from 'react'
import "./TimersPageStyles.css"
import Header from '../components/Header'
import Timer from '../components/Timer'

const TimersPage = () => {
    const [timers, setTimers] = useState([])
    const [edit, setEdit] = useState(false)
    
    useEffect(() => {
        const t = JSON.parse(localStorage.getItem("timers"))
        if(!t)setTimers([])
        else setTimers(t)
    }, [])


    return (
        <div className='timers-page'>
            <Header onClick={() => setEdit(!edit)} showAddButton={true} buttonTitle="Править"></Header>
            <h1>Таймеры</h1>
            <div className='timers-list'>
                {timers.map((timer) => {
                    return (
                            <Timer key={timer.id} timer={timer} edit={edit} setTimers = {setTimers} />
                    )
                })}
            </div>
        </div>
    )
}

export default TimersPage

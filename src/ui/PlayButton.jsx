import React, { useState } from 'react'

const PlayButton = ({mode, setMode}) => {
    const handlePlay = (e) => {
        e.stopPropagation()
        mode==="play" ? setMode("pause") : setMode("play")
    }
  return (
    <button onClick={handlePlay}><img alt="play-button" src={mode==="play" ? "./Pause.svg" : "./Play.svg"}/></button>
  )
}

export default PlayButton

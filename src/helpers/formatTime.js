export default function formatTime (time) {
    let minutes = Math.floor(time/60)
    let seconds = time - minutes*60
    if(minutes<10) minutes = "0" + minutes
    if(seconds<10) seconds = "0" + seconds
    return `${minutes} : ${seconds}` 
}

export function formatFulltime(time) {
    let minutes ="", seconds=""
    if(Math.floor(time/60)>0) minutes = Math.floor(time/60)+" мин "
    if(time%60>0) seconds = time%60 + " сек"
    return minutes+seconds
}
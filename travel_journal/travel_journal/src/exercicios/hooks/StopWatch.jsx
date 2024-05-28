import { useRef, useState } from "react"

export function StopWatch() {

    const [startTime, setStartTime] = useState(null)
    const [currentTime, setCurrentTime] = useState(null)
    const intervalHandler = useRef(null)
    // const [intervalHandler, setIntervalHandler] = useState(null)

    // exercicio 12 - 2ª parte Uso de useRef:


    const handlingTime = () => {
        //O Date.now() retorna o número de milissegundos desde 1 de janeiro de 1970, 00:00:00 UTC.
        setStartTime(Date.now())
        console.log(startTime)
        setCurrentTime(Date.now())
        console.log(currentTime)

        // 1º Exercicio
        // setCurrentTime(setInterval(() => {
        //     setCurrentTime(Date.now())
        // },10))

        //O valor 10 passado como segundo argumento para setInterval representa o intervalo de tempo em milissegundos entre cada execução da função de callback.



        // Exercicio 12 - 1a parte:
//         setIntervalHandler(setInterval(() => {
//             setCurrentTime(Date.now())
//    },10))

        // Exercicio 12 - 2ª parte
        clearInterval(intervalHandler.current);

        intervalHandler.current=setInterval(() => {
                 setCurrentTime(Date.now())
        },10)
     }



    //Exercicio 12:

    const onStop = () => {

        // Exercicio 12 - 1ª parte
        //  clearInterval(intervalHandler)


        // Exercicio 12 - 2ª parte
        clearInterval(intervalHandler.current)
    }

    let elapsedSeconds = 0;
    if (startTime != null && currentTime != null) {
      elapsedSeconds = (currentTime - startTime) / 1000;
    }
  

    return (
        <>
        
        <p>startTime: {startTime}</p>
        <p>currentTime: {currentTime}</p>
        <p>{elapsedSeconds}</p>
        <button onClick={handlingTime}>Start</button>
        <button onClick={onStop}>Stop</button>
        </>
    )
}
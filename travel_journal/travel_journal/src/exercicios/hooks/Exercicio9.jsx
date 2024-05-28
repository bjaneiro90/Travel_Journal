import { useState } from "react"

export function Exercicio9() {

    const [texto, setTexto] = useState("Ola Mundo")

    const handleText = () => {
        if (texto === "Ola, Mundo") {
             setTexto("Adeus, Mundo")
        } else {
            setTexto("Ola, Mundo")
        }
    }

    //Ou em ternário
    // const handleText = () => {
    //     setTexto(texto === "Ola, Mundo" ? "Adeus, Mundo" : "Ola, Mundo");
    // }

    return (
        <>
            <div>
                <h1>{texto}</h1>
                <button onClick={handleText}>alterar texto</button>
            </div>
        </>
    )
}
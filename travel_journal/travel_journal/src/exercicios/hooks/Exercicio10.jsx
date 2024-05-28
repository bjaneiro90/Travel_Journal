import { useState } from "react"

export function Exercicio10() {

    const [visivel, setVisivel] = useState(true)

    const handleHidden = () => {
        setVisivel(!visivel)
    }

    let buttonText;
    let variavelText;

    if (visivel) {
        buttonText = "Ocultar Texto";
        variavelText = "Este é um texto vísivel"
    } else if (!visivel) {
        buttonText = "Mostrar Texto";
        variavelText = null;
    }


    return(
        <div>
            <button onClick={handleHidden}>{buttonText}</button>
            <p>{variavelText}</p>
        </div>
    )
}
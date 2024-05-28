import { useEffect, useState } from "react";

export function Counter() {

    // count - valor inicial
    // setCount - função para mudar o estado
    // (0) - valor inicial do qual vai começar a função
    const [count, setCount] = useState(0)

    //3º exemplo
    const [count2, setCount2] = useState(0)


    // //1º exemplo
    // // renderiza sempre o console.log 
    useEffect(() => {
        console.log("executa sempre")
    })


    // //2º exemplo
    // // renderiza ao iniciar. a [] é uma array de dependencias. No caso de estar vazio indica que vai ser carregado uma unica vez
    useEffect(() => {
        console.log("executa uma única vez")
    }, [])


    //3º exemplo
    // renderiza sempre que um estado expecífico é alterado
    useEffect(() => {
        console.log("executa sempre que um estado expecífico é alterado")
    }, [count2])


    // 4º exemplo
    // nº de counts que se executam ao longo de um período de tempo
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`o count foi executado ${count2} vezes`)
        }, 1000)

        // limpa os console.log constantes dos cliques
        return () => {
            clearTimeout(timer)
        }
    }, [count2])


    // Caso Real







    // console.log(`o 3º valor de count é ${count}`)
    const increment = () => {
    //    console.log("clicámos no botão")
       setCount(count + 1)
     
       // quando clicamos no botão, esta parte do código é renderizada, mas o return não. Temos que dar ordem ao React para passar a informação de q temos nova informação para ser renderizada. e isso é o Hook const [count, setCount] = useState(0)
    //    console.log(`o 1º valor de count é ${count +1}`)


        //2º caso
       //Se quisermos aumentar em vez de 1, dois, em dois momentos diferentes, como fazemos?
       // No caso abaixo, a função recebe como o parametro o VALOR ANTERIOR de count recebe e soma-lhe um
    //    setCount( count + 1)
    //    console.log(`o 1º valor de count é ${count+1}`)
    //    setCount((count) => count + 1)
    //    console.log(`o 2º valor de count é ${count+1}`)
    }


    const incrementB = () => {
        setCount2((count) => count + 1)
    }
    // console.log(`o 3º valor de count é ${count}`)
    return (
        <>
            <div style={{margin: "9rem"}}>
                <h2>Counter</h2>
                <p>{count}</p>
                <button onClick={increment}>Increment</button>
                <p>{count2}</p>
                <button onClick={incrementB}>Increment B</button>
            </div>
        </>
    )
}
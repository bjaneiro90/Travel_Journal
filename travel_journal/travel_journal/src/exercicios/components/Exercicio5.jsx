import { Botao } from "./botao";

export function ButtonGroup() {

    return(
        <>
            <Botao clase={"botao1"} conteudo={"click me"}/>
            <Botao clase={"botao2"} conteudo={"log in"}/>
            <Botao clase={"botao3"} conteudo={"log out"}/>
        </>
    )
}
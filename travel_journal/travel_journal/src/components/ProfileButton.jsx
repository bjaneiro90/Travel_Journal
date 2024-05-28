import { NavMenu } from "../exercicios/components/Exercicio2"
import goku from "../imagens/songoku.png"
import { AvatarImage } from "./AvatarImage"
import { Botao } from "./botao"

export function ProfileButton({onClick}) {
    
    return (
        <>
            <div className="goku-div">

                <Botao clase={"goku-button"} onClick={onClick}>
                    <AvatarImage clase={"goku-picture"} source={goku}/>
                </Botao>
           
            </div>
        </>
    )
}
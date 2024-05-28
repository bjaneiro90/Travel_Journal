import { useState } from "react"
import hamburguer from "../imagens/hamburguer.png"
import { Botao } from "./botao"
import { Icon } from "./icon"

export function HamburguerButton({onClick, isMenuOpen}) {


    return(
        <>
        <div className="div-ham">
            <Botao clase={"ham-button"} onClick={onClick}>
                {isMenuOpen ? <Icon name={"close"} size={"2rem"}/>
                :
                <Icon name={"menu"} size={"2rem"}/>
            }
            </Botao>
      
        </div>
        </>
    )
}
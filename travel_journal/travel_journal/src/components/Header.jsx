import { useState } from "react";
import { NavMenu } from "../exercicios/components/Exercicio2";
import { HamburguerButton } from "./HamburguerButton";
import { ProfileButton } from "./ProfileButton";
import { ProfileNav } from "./ProfileNav";

export function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)

    const onMenuToogle = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen)
        setIsProfileOpen(false)
    }

    
    const onProfileToogle= () => {
        setIsProfileOpen((isProfileOpen) => !isProfileOpen)
        setIsMenuOpen(false)
    } 

    return (
        <>
            <header className="main-header">
                <HamburguerButton onClick={onMenuToogle} isMenuOpen={isMenuOpen}/>
                <ProfileButton onClick={onProfileToogle} isProfileOpen={isProfileOpen}/>
            </header>
            {isMenuOpen && <NavMenu clase={"ham-li"} classeNav={"ham-menu"} classeUl={"ham-list"}/> }
            {isProfileOpen && <ProfileNav clase={"ham-li"} classeNav={"ham-prof-menu"} classeUl={"ham-list-prof"}/> }
              
        </>
    )
}
import { Exercicio4 } from "./Exercicio4"
import links from "../../data/nav-links.json"

export function NavMenu({ classeNav, classeUl, clase}) {

  
    return(
        <>
            <nav className={classeNav}>
                <ul className={classeUl}>
                {links.map((link, index) => {
                    return (
                        <Exercicio4 clase={clase}key={index} url={link.url} name={link.name}/>
                    )
                })}
                    
                </ul>
            </nav>
        </>
    )
}
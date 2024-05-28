import links from "../data/profile-links.json"
import { Exercicio4 } from "../exercicios/components/Exercicio4"


export function ProfileNav({classeNav, classeUl, clase}) {

    return (
        <nav className={classeNav}>
        <ul className={classeUl}>
        {links.map((link, index) => {
            return (
                <Exercicio4 clase={clase}key={index} url={link.url} name={link.name}/>
            )
        })}
            
        </ul>
    </nav>
    )
}
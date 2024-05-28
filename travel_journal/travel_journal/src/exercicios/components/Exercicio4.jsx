export function Exercicio4({url, name, clase}) {
     return (
        <>
            <li className={clase}><a href={url}>{name}</a></li>
        </>
     )
}
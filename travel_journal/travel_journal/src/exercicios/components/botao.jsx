export function Botao({clase, conteudo}) {
    
    return(
        <>
            <button className={clase} type="submit">{conteudo}</button>
        </>
    )
}
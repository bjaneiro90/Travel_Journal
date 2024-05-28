export function AvatarImage({clase, source, description}) {
    
    return (
        <>
            <img className={clase} src={source} alt={description} />
        </>
    )
}
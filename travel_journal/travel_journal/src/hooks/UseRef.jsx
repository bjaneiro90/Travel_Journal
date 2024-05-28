import { useRef } from "react"

export function UseRef() {
    let ref = useRef(18)

    const handleClick = () => {
        ref.current = ref.current + 1
        alert("You clicked" + ref.current + "times!")
    }

    return (
    <>
    <button onClick={handleClick}>Click me!</button>
    <p>{ref.current}</p>
    </>)
}
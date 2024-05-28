import { Footer } from "./Footer";
import { Main } from "./Main";

export function Card({color}) {

    return (
        <>
        <div className="card-div">
            <Main color={color}/>
            <Footer color={color}/>
        </div>
        </>
    )
}
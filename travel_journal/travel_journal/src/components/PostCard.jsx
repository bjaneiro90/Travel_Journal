import { useState } from "react";
import { AvatarImage } from "./AvatarImage";
import { Botao } from "./botao";
import { Icon } from "./icon";

export function PostCard({post}) {

    const [likes, setLikes] = useState(post.likes)

    let isNotLiked = likes === post.likes
    console.log(isNotLiked)

    const handleLike = () => {

    //    setLikes(likes +1)

        if (isNotLiked) {
            setLikes((gosto) => gosto + 1)
            console.log("like!!")
        } else {
            setLikes((gosto) => gosto - 1)
        }
    }

    return(
        <>
              <article className="lp-article" key={post.id}>
                        <section className="lp-section-header">
                            {/* <img className="lp-profile" src={post.user.avatarURL} alt="" /> */}
                            <AvatarImage clase={"lp-profile"} key={post.user.id} source={post.user.avatarURL} description={"perfil_photo"}/>
                            <h2>{post.title}</h2>
                        </section> 
                        <img className="lp-img" src={post.mainImage} alt={"imagem de" + post.title} />
                        <section className="lp-section-bottom">
                            <div className="lp-div">
                                <Botao onClick={handleLike}clase={"lp-button"}>
                                    <span>{likes}</span>
                                    { isNotLiked ? <Icon name={"heart_plus"}/> :<Icon color={"red"} name={"heart_check"}/>}
                                </Botao>
                            </div>
                            <div>
                                <Botao  clase={"lp-button"}>
                                    <span>{post.comments}</span>
                                    <Icon name={"comment"}/>
                                </Botao>
                           </div>
                        </section> 
                    </article>
        </>
    )
}
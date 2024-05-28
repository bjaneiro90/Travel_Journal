
import { PostCard } from "../components/PostCard"
import "../css/landingPage.css"
import posts from "../data/posts.json"


export function LandingPage() {
    return(
        <main>
        {
            posts.map((post) => {
                return <PostCard key={post.id}  post={post}/>
                
                    {/* o argumento key serve para efeitos de otimização de renderização em React. Se tivermos uma lista muito grande, ele teria que renderizar sempre tudo no caso de não ter uma key atribuida, o que atrasaria o processo. Ao fornecer a key, React saberá exactamente o que alterou e renderiza somente esse campo */}
                
                
            })
        }  
        </main>
    
    )
}
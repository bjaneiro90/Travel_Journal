import { useEffect, useState } from "react";

// A partir do React 18, o Strict Mode foi aprimorado para ajudar os desenvolvedores a identificar efeitos colaterais e bugs potenciais. Uma dessas melhorias faz com que certos hooks, como useEffect, sejam executados duas vezes em desenvolvimento para verificar se há efeitos colaterais não intencionais.

export function HookEffect() {

    const [click, setClick] = useState(0);
    const [clickB, setClickB] = useState(10);
    const [users, setUsers] = useState([]);

    // 1 - Utilização
    useEffect(() => {
        console.log("aparece em cada renderização");
    });

    // 2 - array de dependências
    useEffect(() => {
        console.log("Só roda ao incrementar o click ");
    }, [click]);

    useEffect(() => {
        console.log("Só roda ao incrementar o click B");
    }, [clickB]);

    // // 3 - array de dependências vazio
    useEffect(() => {
        console.log("Executa uma única vez");
    }, []);

    // // 4 - clean up function (limpar a memória do frontend)
    useEffect(() => {
        //deixa um rasto de vezes que o botão foi clicado
        const timer = setTimeout(() => {
            console.log(`O Incrementador foi alterado ${click} vezes.`);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };

    }, [clickB]);

    // // 5 - fetch à api
    useEffect(() => {
        const showDetails = async () => {
            try {
                const response = await fetch("http://localhost:8000/perfils");
                const data = await response.json();
                setUsers(data);  // Atualiza o estado 'users' com os dados da API
                console.log(data);
            } catch (error) {
                console.log("erro ao verificar o e mail:", error);
            }
        };
        showDetails();
    }, []);

    const handleClick = () => {
        setClick((prevClick) => prevClick + 1);
    };

    const handleClickB = () => {
        setClickB((prevClick) => prevClick + 1);
    };

    return (
        <>
            <div style={{ marginTop: "8rem" }}>
                <button onClick={handleClick}>click me</button>
                <p>{click}</p>
            </div>
            <div style={{ marginTop: "8rem" }}>
                <button onClick={handleClickB}>click me</button>
                <p>{clickB}</p>

                {users && (
                    <div>
                        {users.map(user => (
                            <div key={user.id}>
                                <h1>{user.name}</h1>
                                <p>{user.email}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

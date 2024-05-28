document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('counterButton');
    let count = 0;

    button.addEventListener("click", () => {
        count++
        button.textContent=`Clique aqui: ${count}`
    })
})
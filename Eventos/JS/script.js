const campo = document.getElementById("campo");
campo.addEventListener("change", function(){
    document.getElementById("saida").textContent= "Você digitou: " + campo.value;
});
function saudar(nome){
    alert("Olá," + nome + "!");
}
document.getElementById("btn").addEventListener("click",()=> {
    alert("Você clicou!");
});
function mudarTexto() {
    const msg = document.getElementById("mensagem");
    msg.textContent = "Texto alterado dinamicamente!";
    msg.style.color = "blue";
    msg.style.fontWeight = "bold";
}
const texto= document.getElementById("texto");

texto.addEventListener("mouseover",()=>{
    texto.classList.add("destaque");
});

texto.addEventListener("mouseout",()=>{
    texto.classList.remove("destaque");
});

document.getElementById("enviar").addEventListener("click", ()=>{
    const nome= document.getElementById("nome").value;
    document.getElementById("resultado").textContent='Olá, ${nome}!';
})
document.getElementById("adicionar").addEventListener("cick",()=>{
    const novoItem = document.createElement("li");
    novoItem.textContent= "Item adicionado dinamicamente";
    document.getElementById("lista").appendChild(novoItem);
})

function somar(a, b){
    return a + b;
}

function calcular(){
    const h1= parseFloat(document.getElementById("num1").value);
    const h2= parseFloat(document.getElementById("num2").value);
    const resultado= somar(h1, h2);
    document.getElementById("resultado").textContent= "Resultado: " + resultado;
}
document.getElementById("enviar").addEventListener("click", ()=>{
    const msg= document.getElementById("msg");
    msg.textContent = "Salvando...";

    setTimeout(() => {
        msg.textContent="Dados salvos com sucesso";
}, 2000);

});
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data=>{
    console.log("Dados recebidos: ", data);
    document.body.innerHTML += 
    `<h2>${data.tittle}</h2><p>${data.body}</p>`;
})
.catch(error => console.error("Erro na requisição", error));
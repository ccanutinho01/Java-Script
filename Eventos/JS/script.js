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
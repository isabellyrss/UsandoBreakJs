const ferramentas=["Martelo", "Fita Isolante", "Chave", "Alicate", "Trena", "Chave de Fenda"]
for(let i=0; i<ferramentas.length; i++){
console.log("Verificando: "+ ferramentas[i]);
if(ferramentas[i]==="Chave"){
    console.log("***Achei a ferramenta! Parando a busca");
    break;
}
}
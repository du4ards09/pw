//alert("achou?");
document.write("<h1>Sua Tabuada</h1>");

var n,i;
n = parseInt(prompt("Digite um número desejado"))
for(i=1;i<11;i++){
    document.write(n+" x "+i+" = "+(n*i)+"<br>");
}
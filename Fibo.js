//alert("oi ");
document.write("<h1>Exercício de Fibonacci</h1>")

var n,i = 1 , atual = 1 ,anterior = 0 , exibir = 0;
n = parseInt(prompt("Digite o valor"));
do{
    exibir = atual + anterior;
     anterior = atual;
     atual = exibir;

     i++;
     document.write(exibir+(""));
}while(i<=n);
 
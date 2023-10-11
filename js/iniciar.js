// Seleciona o elemento com o ID 'iniciar'
var init = document.getElementById('iniciar');
document.getElementById('jogar').disabled = true;
document.getElementById('passar').disabled = true;



// Define a função Iniciar
function Iniciar(){
   let num1 =  Math.floor(Math.random() * 100);
   let num2 =  Math.floor(Math.random() * 100);
   let num3 =  Math.floor(Math.random() * 100);

   var n1 = document.getElementById('one');   
   let n3 = document.getElementById('one2');
   let n4 = document.getElementById('two2');
   
   n1.innerHTML = num1
   n3.innerHTML = num2
   n4.innerHTML = num3
   console.log(num1);
}

// Adiciona um event listener ao elemento 'iniciar' para escutar cliques e chamar a função Iniciar
init.addEventListener('click', Iniciar);

document.getElementById('iniciar').addEventListener('click', function() {
    document.getElementById('jogar').disabled = false;
    document.getElementById('passar').disabled = false;
    document.getElementById('iniciar').disabled = true;
});


 function Jogar(){
    let num1 =  Math.floor(Math.random() * 100);
    var n2 = document.getElementById('two');
    n2.innerHTML = num1;
    setTimeout(function() {
        alert("Reiniciando as jogadas do computador!");
        n2.innerHTML = '00';
        Iniciar();
    }, 2000);

    
}




function Passar(){

}


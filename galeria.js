public class Caneta {
        String modelo;
        String cor;
        float ponta;
        int carga;
        boolean tampada;
        void status() { 
            System.out.println("carga" + this.carga);
            System.out.println("Uma caneta " + this.cor);
            System.out.println(" está tampada? " + this.tampada);
            System.out.println("modelo" + this.modelo);
            System.out.println("ponta" + this.ponta);
            
        }        
          void rabiscar() {      
           if (this.tampada == true) {
               System.out.println("ERRO! não posso rabiscar");
           } else {
               System.out.println("Estou Rabiscando");
           }      
        }
          void tampar() {
            this.tampada = true
              
          } 
          void destampar() {
            this.tampada = false
              
          }
    
    }

var intervalo = 2500;

function slide1() {
    document.getElementById("slide").src = "_imagens/img-2.jpg";
 setTimeout("slide2()",intervalo);
}

function slide2() {
    document.getElementById("slide").src = "_imagens/img-3.jpg";
    setTimeout("slide3()",intervalo);

}
function slide3() {
    document.getElementById("slide").src = "_imagens/img-5.jpg";
    setTimeout("slide1()",intervalo);

}


      var name =prompt("qual é o seu nome ?"); 
        alert('bem vindo' + name);
      

      var idade =prompt("qual é a sua idade ?"); 
        alert(idade > 18)

        if(idade > 18){
alert("acesso permitido")
        }
        else {
          alert("acesso negado")
        }

  

var valor_anterior=0;
var cambio_operacion=0;
/* var mas;
var menos;
var por;*/
var operacion_anterior=0;


function AddNumber(Num){
    let pantalla=document.getElementById("screen");

    if (cambio_operacion==0){        
        pantalla.value=pantalla.value+Num;
    
    } else if (cambio_operacion==1){
        pantalla.value=Num;
        cambio_operacion=0;
    }
    
}

function Operation(op){
    let pantalla=document.getElementById ("screen");
    /* let valor=Number(pantalla.value);*/

    /*parte de operaciones: 
    - 0=nada (indica que es la primera vez que se pulsa una operacion)
    - 1= sumar
    - 2= restar
    - 3= multiplicar
    - 99= "="*/
    if(operacion_anterior==0){
        
    }else if(operacion_anterior==1){
        pantalla.value=valor_anterior + Number(pantalla.value);
    }
    else if(operacion_anterior==2){
        pantalla.value=valor_anterior - Number(pantalla.value);
    }
    else if(operacion_anterior==3){
        pantalla.value=valor_anterior * Number(pantalla.value);
    }

    /* parte de "=". Si op = 99, significa que finalizamos. Mostramos resultado pro las variables operación anterior y valor anterior las inicializamos para el siguiente calculo. 
    Si la op es cualquier otra, nos guardamos tanto la operación como el valor anteriores (los actuales en ese momento)*/
    if(op==99){
        operacion_anterior=0;
        valor_anterior=0;
    } else{
        valor_anterior=Number(pantalla.value);
        operacion_anterior=op;
    }
    /*sirve para indicar que se ha pulsado un botón de operación, por lo que al pulsar el siguiente número, se borrará automáticamente la pantalla */

    cambio_operacion=1;
}       

function Erase_last_number(){
    let pantalla=document.getElementById ("screen");
    pantalla.value=pantalla.value.slice(0,-1);
}
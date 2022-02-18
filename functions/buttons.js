/*funciones a ejecutar dependiendo el boton que se utilice en capture*/
const eventClickOne = () => {
    let price = document.getElementById('imp1').innerHTML;
    importe1.push(parseInt(price)); 
    sumasDelDia.push(parseInt(price));
}
const eventClicknegOne = () => {
    importe1.pop();
    sumasDelDia.pop();
    if(sumasDelDia.length===0){
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : ${sumasDelDia} </p>`
    }else if(sumasDelDia.length>0){
        let importeActualNeg = sumasDelDia.reduce(reducer);
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : ${importeActualNeg}</p>`
    }
} 
const eventClickTwo = () => {
    let price = document.getElementById('imp2').innerHTML;
    importe2.push(parseInt(price));
    sumasDelDia.push(parseInt(price));
} 
const eventClicknegTwo = () => {
    importe2.pop();
    sumasDelDia.pop();
    if(sumasDelDia.length===0){
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : ${sumasDelDia} </p>`
    }else if(sumasDelDia.length>0){
        let importeActualNeg = sumasDelDia.reduce(reducer);
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : ${importeActualNeg}</p>`
    } 
}
const eventClickThree = () => {
    let price = document.getElementById('imp3').innerHTML;
    importe3.push(parseInt(price));
    sumasDelDia.push(parseInt(price));
} 
const eventClicknegThree = () => {
    importe3.pop();
    sumasDelDia.pop();
    if(sumasDelDia.length===0){
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : ${sumasDelDia} </p>`
    }else if(sumasDelDia.length>0){
        let importeActualNeg = sumasDelDia.reduce(reducer);
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : ${importeActualNeg}</p>`
    }  
} 
const eventClickFour = () => {
    let price = document.getElementById('imp4').innerHTML;
    importe4.push(parseInt(price));
    sumasDelDia.push(parseInt(price));
} 
const eventClicknegFour = () => {
    importe4.pop();
    sumasDelDia.pop();    
    if(sumasDelDia.length===0){
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : 0</p>`
    }else if(sumasDelDia.length>0){
        let importeActualNeg = sumasDelDia.reduce(reducer);
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : ${importeActualNeg}</p>`
    }
} 
const eventClickFive = () => {
    let price = document.getElementById('imp5').innerHTML;
    importe5.push(parseInt(price));
    sumasDelDia.push(parseInt(price));
} 
const eventClicknegFive = () => {
    importe5.pop();
    sumasDelDia.pop(); 
    if(sumasDelDia.length===0){
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : 0</p>`
    }else if(sumasDelDia.length>0){
        let importeActualNeg = sumasDelDia.reduce(reducer);
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : ${importeActualNeg}</p>`
    }
} 
const eventClickSix = () => {
    let price = document.getElementById('imp6').innerHTML;
    importe6.push(parseInt(price)); 
    sumasDelDia.push(parseInt(price));
}
const eventClicknegSix = () => {
    importe6.pop();
    sumasDelDia.pop();
    if(sumasDelDia.length===0){
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : 0</p>`
    }else if(sumasDelDia.length>0){
        let importeActualNeg = sumasDelDia.reduce(reducer);
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : ${importeActualNeg}</p>`
    }
} 
const clickExtra = () => { 
    let price = document.getElementById('ingresoExtra').value; 
    if (price){
        importeExtra.push(parseInt(price));
        sumasDelDia.push(parseInt(price));
    }else if(typeof price === 'string'||isNaN||undefined||null){
        alert ("No ingreso un numero en el ingreso extra, por favor reingrese un numero.")
    }
}
const eventClicknegExtra = () => {
    importeExtra.pop();
    sumasDelDia.pop(); 
    if(sumasDelDia.length===0){
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : 0</p>`
    }else if(sumasDelDia.length>0){
        let importeActualNeg = sumasDelDia.reduce(reducer);
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : ${importeActualNeg}</p>`
    }
}

/*Totaldeldia guardado mediante boton y reestablecer valor de sumadeldia a cero (0)*/ 
const daySave = () => {
    totalDia.push(sumasDelDia.reduce(reducer));
    document.getElementById("ingresoDiario").innerText = `Ingresos actuales : 0`;
} 
/*elimiar ultimo dia ingresado*/
const unSave = () => {
    totalDia.pop();
    document.getElementById("ingresoSemana").innerText = `Ingresos de la semana actual : ${totalDia}`;
} 


/*HASTA DIA ESTA BIEN, SOLO FALTA CORREGIR EL LA SEMANA Y MES Y SU VISTA POR DOM */


/*Guardado de semana con boton*/
/*en guardado de semana agregar el reinicio de lo que se ve en el DOM a cero en dia*/
const saveWeek = () => {
    totalSemana.push(sumasDelDia.reduce(reducer))
    document.getElementById("ingresoSemana").innerText = `Ingresos actuales : ${totalSemana} `; 
}
/*eliminar ultima semana*/
/*total ingresos de la semana mostrado en DOM en ingresosSemana, eliminando el ultimo ingreso de semana , parece funcionar*/
const unSaveWeek = () => {
    totalSemana.pop();
    document.getElementById("ingresoSemana").innerText = `Ingresos de la semana actual : ${totalSemana}`;
} 
/*guardado de mes con boton*/
/*en guardado de mes agregar el reinicio de lo que se ve en el DOM a cero en semana y dia*/
/*al guardar todo, debo sumar todas las operaciones que se encuentren tomadas (tanto dia como semana, utilizar reduce y mostrarlo (eliminando como esta mencionado arriba))
const saveMonth = () => {
    totalMes.push(totalSemana+totalDia+sumasDelDia.reduce(reducer))
    document.getElementById("ingresoMes").innerText = `Ingresos del mes : ${totalMes} `;
} 
const unSaveMonth = () => {
    totalMes.pop();
    document.getElementById("ingresoMes").innerText = `Ingresos los meses : ${totalMes}`
}*/
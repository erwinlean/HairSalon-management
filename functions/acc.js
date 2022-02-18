/*acumulador del dia (cuenta)*/
const reducer = (accumulator, acumulador1) => accumulator + acumulador1; 
/*suma del dia acc*/
const sumadorImportesClickeados = () => {
        sumatot = sumasDelDia.reduce(reducer);
        document.getElementById("ingresoDiario").innerHTML = `<p>Ingresos actuales : ${sumatot}</p>`;
} 
/*llegar a 7 dias pasa a semana y al llegar a 4 semanas pasa a mes, conjuntamentel limpiamos los arreglos a cero*/
/*hacer mediante boton de guardado, y no de forma automatica*/
const totalDiaASemana = () =>{
    document.getElementById("ingresoSemana").innerHTML = `<p>Ingresos de la semana actual : ${totalDia}</p>`;
    if (totalDia.length===6){ 
        let reduceTotDia = totalDia.reduce(reducer);
        totalSemana.push(reduceTotDia); 
        if(totalDia.length!=1){
            while (totalDia.length!=0){
                totalDia.pop();
                document.getElementById("ingresoSemana").innerHTML = `<p>Ingresos de la semana actual :  ${totalDia}</p>`;
            }
        }
    }
    if (sumasDelDia.length!=0){
        while(sumasDelDia.length!=0){
            sumasDelDia.pop();
        }
    } 
    document.getElementById("ingresoSemanaPasada").innerHTML = `<p>Ingresos de las semanas pasadas : ${totalSemana}</p>`; 
}
/*Muestra del mes y limpieza de semana*/
/*llegar el array semanal al total de 4 muestra equivalencia a un mes y elimina el total de las semanas*/
const mesTotales = () => {
    if (totalSemana.length===4){
        sumatot = totalSemana.reduce(reducer);       
        totalMes.push(sumatot);
        while(totalSemana.length!=0){
            totalSemana.pop();
        }
        document.getElementById("ingresoSemanaPasada").innerHTML = `<p>Ingresos de las semanas pasadas : ${totalSemana} </p>`; 
        document.getElementById("ingresoMes").innerHTML = `<p>Ingresos por mes : ${totalMes}</p>`;
    }
}
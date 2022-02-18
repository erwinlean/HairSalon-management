/*capturar botones y adjuntarle el evento que utilizara, segun el valor*/
let suma1 = document.getElementById("suma1"); 
suma1.addEventListener("click",eventClickOne);
suma1.addEventListener("click",sumadorImportesClickeados)
let resta1 = document.getElementById("resta1");
resta1.onclick = eventClicknegOne;

let suma2 = document.getElementById("suma2");
suma2.addEventListener("click",eventClickTwo);
suma2.addEventListener("click",sumadorImportesClickeados)
let resta2 = document.getElementById("resta2");
resta2.onclick = eventClicknegTwo;

let suma3 = document.getElementById("suma3");
suma3.addEventListener("click",eventClickThree);
suma3.addEventListener("click",sumadorImportesClickeados)
let resta3 = document.getElementById("resta3");
resta3.onclick = eventClicknegThree;

let suma4 = document.getElementById("suma4");
suma4.addEventListener("click",eventClickFour);
suma4.addEventListener("click",sumadorImportesClickeados)
let resta4 = document.getElementById("resta4");
resta4.onclick = eventClicknegFour;

let suma5 = document.getElementById("suma5");
suma5.addEventListener("click",eventClickFive);
suma5.addEventListener("click",sumadorImportesClickeados)
let resta5 = document.getElementById("resta5");
resta5.onclick = eventClicknegFive; 

let suma6 = document.getElementById("suma6");
suma6.addEventListener("click",eventClickSix);
suma6.addEventListener("click",sumadorImportesClickeados)
let resta6 = document.getElementById("resta6");
resta6.onclick = eventClicknegSix;

let sumaExtra = document.getElementById("sumaExtra");
sumaExtra.addEventListener("click",clickExtra);
sumaExtra.addEventListener("click",sumadorImportesClickeados) 
let restaExtra = document.getElementById("restaExtra");
restaExtra.onclick = eventClicknegExtra; 

/*guardar ingresos del dia*/
let saveDay = document.getElementById("guardarCuentaDia");
saveDay.onclick= daySave;
/*EventListener, automatico de dia a semana y de semana a mes*/
saveDay.addEventListener("click",totalDiaASemana); 
saveDay.addEventListener("click",mesTotales);
let deleteDay = document.getElementById("unSave"); 
deleteDay.onclick = unSave;
/*guardado de semana*/
let weekSave = document.getElementById("saveWeek");
weekSave.onclick = saveWeek;
weekSave.addEventListener("click",totalDiaASemana); 
weekSave.addEventListener("click",mesTotales);
let unWeekSave = document.getElementById("unSaveWeek");
unWeekSave.onclick = unSaveWeek;
/*guardado de mes*/
let monthSave = document.getElementById("saveMonth");
monthSave.onclick = saveMonth;
monthSave.addEventListener("click",totalDiaASemana); 
monthSave.addEventListener("click",mesTotales);
let unmonthSave = document.getElementById("unSaveMonth");
unmonthSave.onclick = unSaveMonth;
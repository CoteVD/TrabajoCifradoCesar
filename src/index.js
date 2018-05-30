/* Acá va tu código */
window.onload = function() {

const btnS = document.getElementById('sendShifts');
btnS.addEventListener("click", function(){
  let shifts = document.getElementById("shiftNumber").value;
  return console.log(shifts);    
});

const btnC = document.getElementById('btnC');
btnC.addEventListener("click", function (encode){})

const btnT = document.getElementById('btnT');
btnT.addEventListener("click", function (decode){})
}
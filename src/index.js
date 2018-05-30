/* Acá va tu código */
window.onload = function() {

const btnS = document.getElementById('sendShifts');
btnS.addEventListener("click", function(encode){
  let shifts = document.getElementById("shiftNumber").value;    
});

const btnC = document.getElementById('btnC');
btnC.addEventListener("click", function (encode){
  let text = document.getElementById("source-text").value;
});

const btnT = document.getElementById('btnT');
btnT.addEventListener("click", function (decode){
  let text = document.getElementById("source-text").value;
});
}
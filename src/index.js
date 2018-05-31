/* Acá va tu código */
window.onload = function() {

const btnC = document.getElementById('btnC');
btnC.addEventListener("click", function (){
  let text = document.getElementById("source-text").value;
  let shifts = document.getElementById("shiftNumber").value;
  window.cipher.encode(text, shifts);
});

const btnT = document.getElementById('btnT');
btnT.addEventListener("click", function (){
  let text = document.getElementById("source-text").value;
  let shifts = document.getElementById("shiftNumber").value;
  window.cipher.decode(text, shifts);
});
}
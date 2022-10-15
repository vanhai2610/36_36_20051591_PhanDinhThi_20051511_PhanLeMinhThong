
 
//Giỏ hàng
function giohangOn(){
    document.getElementById('myModal-giohang').style.display=('block');
    document.getElementById('myModal-giohang').style.display=('flex');
    document.getElementById('myModal-giohang').style.alignItems=('center');
    document.getElementById('myModal-giohang').style.justifyContent=('center');
}
function giohangClose(){
    document.getElementById('myModal-giohang').style.display=('none');
}
var modal = document.getElementById("myModal-giohang");
window.onclick = function (event) {
if (event.target === modal) {
    modal.style.display = "none";
}
}
 
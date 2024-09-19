let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let imgtext = document.getElementById("imgtext");


function generateQR(){
    if(imgtext.value.length > 0){
        qrimg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + imgtext.value;
        imgbox.classList.add("show-img");
    }
    else{
        imgtext.classList.add("error");
        setTimeout(()=>{
            imgtext.classList.remove("error");
        },1000);
    }
}
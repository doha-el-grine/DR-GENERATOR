let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let imgtext = document.getElementById("imgtext");
let downloadBtn = document.getElementById("downloadBtn");
let generateAnotherBtn = document.getElementById("generateAnotherBtn");
let generateBtn = document.getElementById("generateBtn");

function generateQR() {
    if (imgtext.value.trim().length > 0) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(imgtext.value);
        imgbox.classList.add("show-img");
        
        // Show the buttons and hide the generate button
        downloadBtn.style.display = "inline-block";
        generateAnotherBtn.style.display = "inline-block";
        generateBtn.style.display = "none"; // Hide the generate button
    } else {
        imgtext.classList.add("error");
        setTimeout(() => {
            imgtext.classList.remove("error");
        }, 1000);
    }
}

function downloadQR() {
    const link = document.createElement('a');
    link.href = qrimg.src;
    link.download = 'qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function resetQR() {
    imgtext.value = '';
    qrimg.src = '';
    imgbox.classList.remove("show-img");
    
    // Reset button visibility
    downloadBtn.style.display = "none";
    generateAnotherBtn.style.display = "none";
    generateBtn.style.display = "inline-block"; // Show the generate button again
}

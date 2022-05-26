
const extensionBody = document.querySelector('.extensionBody');
urlInput = extensionBody.querySelector('#urlInput');
generateBtn = extensionBody.querySelector('#generateBtn');
qrContainer = extensionBody.querySelector('.qrContainer');
qrCode = extensionBody.querySelector('#qrCode');
downloadBtn = extensionBody.querySelector('#downloadBtn');

// Script For Generate QR Code Button.
generateBtn.addEventListener('click', ()=> {

    let urlValue = urlInput.value.trim();

    if(!urlValue) {

        return
    }
    else {
        let url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${urlValue}`;

        generateBtn.innerText = 'Generating QR Code...';

        qrCode.src = url;

        qrCode.addEventListener('load', ()=> {

            qrContainer.style.display = 'block';

            generateBtn.innerText = 'Generate QR Code';
        });

    }
});

urlInput.addEventListener('keyup', ()=> {

    if(!urlInput.value) {

        qrContainer.style.display = 'none';
    }
});



// Script For Download Button.
downloadBtn.addEventListener('click', ()=> {

    let imgPath = qrCode.getAttribute('src');
    // let fileName = getFileName(imgPath + '.jpg');
    let fileName = 'QR_Code.jpg';

    saveAs(imgPath, fileName);
});

// function getFileName(str) {

//     return str.substring(str.lastIndexOf('=') + 1);
// };

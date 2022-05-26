console.log('JavaScript');

const dropBtn = document.getElementById('dropBtn');
const myDropdown = document.getElementById('myDropdown');

dropBtn.addEventListener('click', ()=> {
    myDropdown.classList.toggle('show');
    dropBtn.classList.toggle('qrExtension-Focus');

    if(!myDropdown.classList.contains('show')) {
        document.getElementById('urlInput').value = '';
        document.getElementById('qrContainer').style.display = 'none';
    }
});

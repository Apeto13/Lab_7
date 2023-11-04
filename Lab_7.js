document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('form').onsubmit = function(){
        document.querySelector('#hello').style.color = document.querySelector('#color').value;
        return false;
    }
})
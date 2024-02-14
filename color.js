document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('select').onchange=function(){
        document.querySelector('#style').style.color=this.value;
    }
})
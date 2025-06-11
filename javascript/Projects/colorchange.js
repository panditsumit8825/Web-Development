const buttom = document.querySelectorAll('.buttom');
const body = document.querySelector('body');

buttom.forEach(function (buttom){
    console.log(buttom);
        buttom.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='pink'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='purple'){
        body.style.backgroundColor=e.target.id;
    }
});
});
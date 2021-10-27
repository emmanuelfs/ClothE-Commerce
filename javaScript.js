let headerMain = document.getElementsByClassName('headerMain');

window.addEventListener('scroll', function (){
    if (window.scrollY > 25) {
        headerMain[0].style.setProperty('opacity', '.5');
    }
    if (window.scrollY < 25) {
        headerMain[0].style.setProperty('opacity', '1');
    }
});
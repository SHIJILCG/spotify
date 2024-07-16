function changeimg(){
    const value1=document.getElementById('header-spotify-svg');
    if(window.innerWidth > 369){
        value1.src='img/Spotify (2).svg';
    } else{
          value1.src='img/Spotify (1).svg'
    }
}
window.addEventListener('resize', changeimg);
changeimg();
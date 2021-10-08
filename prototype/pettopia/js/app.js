const navSlide = () =>{
    const hamburger = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-links');
    

    hamburger.addEventListener('click', () =>{
        navList.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle')
      
        
    })
}

navSlide();

function a (){
    alert("currently not in stocks");
}

//adding the adoption site link with a 2s delay
document.querySelector('#adopt')
.addEventListener('click',()=>{
    setTimeout(function(){
 window.open('https://www.adoptapet.com/');

    },2000);
alert("redirecting you to a real adoption site please allow the pop-up site");
});

function buy (){
    alert("😥😥 we are empty now");
};






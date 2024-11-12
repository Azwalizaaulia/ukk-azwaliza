document.queryselectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollinttoView({
          behavior: 'smooth' 
        });
    });
});
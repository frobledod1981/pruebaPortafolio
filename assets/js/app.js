
//Escuchar el HTML
document.addEventListener('DOMContentLoaded',() => {
    crearGaleria();
    scrollNav();
    darkMode();
})

let imagenes = [
    {id:"showImg1",numImagen:1,url:"https://market-dev-prueba.netlify.app/",titulo:"Front End Store",parrafo:"Pagina Dedicada a la venta de Poleras con diseños de Logos de Tecnolgias Web del FRONT-END"},
    {id:"showImg2",numImagen:2,url:"https://blog-cafe-pruebas.netlify.app/",titulo:"Blog de Cafe",parrafo:"Blog dedicado a cursos y recetas de cafe"},
    {id:"showImg3",numImagen:3,url:"https://freelancer-fernando.netlify.app/",titulo:"Diseño Y Desarrollo web Freelancer",parrafo:"Sitio FreeLancer"},
    {id:"showImg4",numImagen:4,url:"https://festival-musica-tech.netlify.app/",titulo:"Techno & Festival de Musica",parrafo:"Sitio que muestra sobre festival de musica Techno que se realizara en santiago"},
    {id:"showImg5",numImagen:5,url:"https://pagos-mov.netlify.app/",titulo:"Nucleus",parrafo:"Sitio que muestra una aplicacion que promueve el pago seguro ,mediante aplicacion Nucleus"},
    {id:"showImg6",numImagen:6,url:"https://sitearquitecturas.netlify.app/",titulo:"Tu casa en el Bosque",parrafo:"Sitio de venta de casas en modelos rusticos en el bosque"},
]


const crearGaleria = () => {
    const CANTIDAD_IMAGENES = 6;
    const galeria = document.querySelector('.galeria');
    for(let i = 1 ; i <= CANTIDAD_IMAGENES ; i++){

        const link = document.createElement('a');
        link.href = `#showImg${i}`;
        link.classList.add('galeria__link');


        const imagen = document.createElement('IMG');
        imagen.src = `./assets/img/${i}.jpg`;
        imagen.href = `#showImg${i}`
        imagen.alt = 'Imagen Galeria';
        imagen.classList.add('galeria__img');

     
        link.onclick = () => {
            console.log(`Diste click en la imagen: ${i}`);
            mostrarImagen();
            
        }
       
        galeria.appendChild(link);
        link.appendChild(imagen);

      
  
    }
}


const mostrarImagen = () => {
   let modal = document.querySelector('#modal');
   let campo = "";
   imagenes.forEach(imagen => {
      campo += `
        <div class="modal" id="${imagen.id}">
                    <div class="modal__container">
                             <a href="#" class="modal__close">X</a>
                        <img src="assets/img/${imagen.numImagen}.jpg" class="modal__img">
 
                        <div class="modal__texts">
                           <h2 class="modal__title">${imagen.titulo}</h2>
                           <p class="modal__paragraph">${imagen.parrafo}</p>
                           <a href="${imagen.url}"  class="modal__cta">Entra Aquí</a>
                        </div>
                    </div>
         </div>
      
         `
   })
   modal.innerHTML = campo;
}



const scrollNav = () => {
    const navLinks = document.querySelectorAll('.navegacion a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({behavior: 'smooth'});


        })
    })
}

const darkMode = () =>{
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');//para saber preferencia del sistema
    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode');//si sistema esta oscuro dejar este modo por defecto
    }else{
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change',()=>{//cuando uno cambia del sistema no hace falta recargar sistema detecta los cambios
        if(prefiereDarkMode.matches){
            document.body.classList.add('dark-mode');//y si my sistema esta oscuro dejar este modo por defecto
           
            
        }else{
            document.body.classList.remove('dark-mode');
        }
    });

    const botonDarkMode = document.querySelector(".dark-mode-boton");
    botonDarkMode.addEventListener('click',() =>{//diferente a la de arriba por que ejecuto el codigo aqui es lo mismo al final
        document.body.classList.toggle('dark-mode');//switch entre modo oscuro y normal
    });
};


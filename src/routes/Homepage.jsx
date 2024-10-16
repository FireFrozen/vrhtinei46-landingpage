import React, { useRef, useEffect } from 'react';
import NavBar from '../components/NavBar'

import VisionComp from '../imagenes/visiOn-compartida.jpg'

import CardEquipoDirectivo from "../components/CardEquipoDirectivo"
import FooterApp from '../components/FooterApp'

import BtnScrollUp from '../components/BtnScrollUp'

import CardImgMariaca from '../imagenes/director_baja.png'
import CardImgBaltazar from '../imagenes/subdirector-alexander_b.jpg'
import CardImgTapahausco from '../imagenes/subdirectora-vilma-tapahuasco_b.jpg'
import CardImgSilva from '../imagenes/subdirectora_elva-silva_b.jpg'
import CardImgGutierrez from '../imagenes/subdirecttor-hugo_b.png'



const Homepage = () => {

    //btn scroll up
    const initRef = useRef(null);

    const scrollToTop = () => {
        // document.getElementById('inicio-pag').scrollIntoView({
        //   behavior: 'smooth',
        // });

        initRef.current.scrollIntoView({
        behavior: 'smooth',
        });
    };


    let slideIndex = 1;

    const slidesRef = useRef([]); 
    const dotsRef = useRef([]);  

    useEffect(() => {
        // Ahora se puede acceder a todos los elementos referenciados en slidesRef.current
        slidesRef.current.forEach((slide, index) => {


        });
    }, []);

    const addToSlidesRefs = (elem) => {
        if (elem && !slidesRef.current.includes(elem)) {
          slidesRef.current.push(elem);
        }
    };

    const addToDotsRefs = (elem) => {
        if (elem && !dotsRef.current.includes(elem)) {
            dotsRef.current.push(elem);
        }
    };


    function plusSlides(n){
        showSlides(slideIndex += n);

    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        //let slides = document.getElementsByClassName("mySlides");
        //let dots = document.getElementsByClassName("dot");
        if (n > slidesRef.current.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slidesRef.current.length
        }
        for (i = 0; i < slidesRef.current.length; i++) {
            slidesRef.current[i].style.display = "none";
        }
        for (i = 0; i < dotsRef.current.length; i++) {
            dotsRef.current[i].className = dotsRef.current[i].className.replace(" active", "");
        }
        slidesRef.current[slideIndex-1].style.display = "flex";
        dotsRef.current[slideIndex-1].className += " active";
    }

    async function showSlidesAuto(){
    //let slidesAuto = document.getElementsByClassName("mySlidesAuto");
    slideIndex = 0;
    
        function showSlidesAutoLoop(){

            slideIndex++;
            
            if (slideIndex > slidesRef.current.length) {
                slideIndex = 1
            }

            console.log("slide: " + slideIndex)
            showSlides(slideIndex);
            
            setTimeout(showSlidesAutoLoop, 10000); // Change image every 10 seconds
        }
        
        try{showSlidesAutoLoop();} catch(e){}

    }  


    //Activate automatic carrousel
    // useEffect(()=>{
    //     showSlidesAuto();
    // }, []);
    

  return (
    <div className='w-screen max-w-full	'>
        <NavBar/>
        <div id="inicio-pag" ref={initRef}></div>

        <div className='carrusel relative w-full '>
            <div ref={addToSlidesRefs} className="slides slide-1 bg-[url('./imagenes/inei01.jpg')] bg-center bg-cover relative h-[700px] w-full flex justify-center" >
                <div className=' bg-[#08329a] opacity-60 w-full h-full  absolute inset-0'>
                </div>

                <div className='relative z-20 text-center px-5 h-full flex flex-col justify-center max-w-screen-lg gap-y-9'>
                    <p className='text-3xl font-bold'>I.E. "Víctor Raúl Haya de la Torre"</p>
                    <h1 className='text-red-600 font-bold text-5xl'>INEI 46</h1>
                    <p className='border border-[#449edd] px-5	py-1 text-[18px] text-left'>
                        Reciban cordiales saludos 
                        en este nuevo año académico 2024, a nombre del Equipo Directivo y 
                        docente de nuestra comunidad ineína y hacemos votos porque como cada año 
                        sigamos acompañándonos y trabajando en equipo con ese mismo deseo de superación
                        y éxito continuo en pro del logro de nuestros objetivos.
                    </p>

                </div>
                
            </div>

            <div ref={addToSlidesRefs}  className="slides slide-2 hidden bg-cover relative h-[700px] w-full">
                Slide 2
            </div>

            <div ref={addToSlidesRefs}  className="slides slide-3 hidden bg-cover relative h-[700px] w-full">
                Slide 3
            </div>

            {/* Next and previous buttons &#10094;  &#10095; */}
            <a onClick={()=>plusSlides(-1)} className="prev z-40 absolute left-4 flex justify-center items-center cursor-pointer top-1/2 w-12 h-12 text-white bg-[#114488] hover:opacity-80 opacity-40 text-4xl" > 
                &#10094; 
            </a>
            <a onClick={()=>plusSlides(1)} className="next z-40 absolute right-4 flex justify-center items-center cursor-pointer top-1/2 w-12 h-12 text-white bg-[#114488] hover:opacity-80 opacity-40 text-4xl" >
                &#10095; 
            </a>

            {/* The dots/circles */}
            <div className="dots-container" >
                <div ref={addToDotsRefs} onClick={()=>currentSlide(1)} className="dot active" ></div>
                <div ref={addToDotsRefs} onClick={()=>currentSlide(2)} className="dot" ></div>
                <div ref={addToDotsRefs} onClick={()=>currentSlide(3)} className="dot" ></div>
            </div>

        </div>

        <section className='text-black bg-white'>
            <div className='px-4 mx-auto flex flex-col justify-center items-center'>

                <h1 className='text-4xl font-bold pt-20 pb-8'>
                    VISIÓN <span className='text-[#449edd]'>COMPARTIDA</span>
                </h1>

                <img src={VisionComp} alt="vision-compartida.jpg" 
                    className='w-[413px]'/>

            </div>

        </section>

        <section className='text-black bg-white'>
            <div className='px-4 mx-auto flex flex-col justify-center items-center 
             max-w-[85%] md:max-w-[690px] lg:max-w-[960px] xl:max-w-[89%] 2xl:max-w-[1400px]
            '>

                <h1 className='text-4xl font-bold pt-20 pb-8'>
                    RESEÑA HISTÓRICA
                </h1>

                <div className='text-justify text-[#363636] text-[14px] leading-loose'>
                    <p>
                        La Institución Educativa se creó mediante RM N° 5225 el 06 de abril de 1961 
                        con el nombre de INSTITUTO EDUCATIVO INDUSTRIAL DE VARONES Nº 46. 
                        Funcionó en el pabellón del centro educativo "Domingo Faustino Sarmiento" 
                        con la especialidad de electrónica.
                    </p>
                    <br />
                    <p>
                        En 1964 el alcalde distrital de turno, el señor Gustavo Martini Chutti donó 
                        el terreno que hoy ocupa iniciándose la construcción del centro educativo con 
                        la activa participación de los padres de familia, se inauguró el 03 de abril 
                        ampliándose el servicio a cuatro especialidades. Posteriormente fue denominado 
                        como CECAT Nº 46 de ATE VITARTE Por gestión de un grupo de docentes, directivos, 
                        padres de familia y ex alumnos en 1986 es cambiado de nombre por RD N° 3310 siendo 
                        denominado como colegio nacional "Víctor Raúl Haya de la Torre" Actualmente funciona 
                        con 42 secciones y 7 especialidades: mecánica automotriz, mecánica de producción, 
                        electricidad, carpintería, soldadura, electrónica y computación ofrecidas 
                        a la comunidad vitartina y alrededores en dos turnos: mañana y tarde.
                    </p>
                    <br />
                    <p>
                        En el turno noche funciona el centro de educación ocupacional CEO INEI Nº 46, 
                        además fue centro piloto de bachillerato y fiscales escolares. 
                        Actualmente es dirigida por Nuestro Director Einer Mariaca Peña y 
                        los Sub Directores: Abner Hugo Gutiérrez Dueñas – Área Administrativa, Elva Silva Pérez 
                        y Vilma Tapahuasco Saldaña – Formación General y Alexander Baltazar López – Áreas Técnicas. 
                        Nuestros estudiantes egresan con una Formación Técnica Científico Humanista, 
                        su formación técnica se da en especialidades definidas las cuales les permiten desempeñarse y 
                        laborar en el ámbito Productivo con eficiencia y profesionalismo, asimismo en 
                        la incursión de la Formación de pequeñas empresas acondicionando sus propios talleres 
                        brindando un servicio de calidad.
                    </p>
                </div>

            </div>

        </section>

        <section className='text-black bg-white py-[50px] flex flex-col items-center gap-y-10 px-[15px]'>
            <div>
                
            </div>
            <h1 className='text-4xl font-bold'> 
                EQUIPO DIRECTIVO
            </h1>

            <div className='flex flex-row flex-wrap justify-center gap-x-[30px] gap-y-[60px]
                max-w-[85%] md:max-w-[690px] lg:justify-between lg:max-w-[960px] xl:max-w-[89%] 2xl:max-w-[1400px]
            '>

                <CardEquipoDirectivo 
                    nombre="Einer Mariaca"
                    cargo="Director"
                    img={CardImgMariaca}
                />

                <CardEquipoDirectivo 
                    nombre="Alexander Baltazar"
                    cargo="Sub Director de Área Técnica"
                    img={CardImgBaltazar}
                />

                <CardEquipoDirectivo 
                    nombre="Vilma Tapahuasco"
                    cargo="Sub Directora"
                    img={CardImgTapahausco}
                />

                <CardEquipoDirectivo 
                    nombre="Elva Silva"
                    cargo="Sub Directora"
                    img={CardImgSilva}
                />

                <CardEquipoDirectivo 
                    nombre="Hugo Gutierrez"
                    cargo="Sub Director Administrativo"
                    img={CardImgGutierrez}
                />

            </div>

        
        </section>

        {/* <BtnScrollUp scrollToTop={scrollToTop}/> */}

        <FooterApp/>


    </div>

  )
}

export default Homepage
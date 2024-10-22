import React, { useRef, useEffect } from "react";

const HomeSlider = () => {
    let slideIndex = 1;

    const slidesRef = useRef([]);
    const dotsRef = useRef([]);

    useEffect(() => {
      // Ahora se puede acceder a todos los elementos referenciados en slidesRef.current
      slidesRef.current.forEach((slide, index) => {});
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

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      let i;
      //let slides = document.getElementsByClassName("mySlides");
      //let dots = document.getElementsByClassName("dot");
      if (n > slidesRef.current.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slidesRef.current.length;
      }
      for (i = 0; i < slidesRef.current.length; i++) {
        slidesRef.current[i].style.display = "none";
      }
      for (i = 0; i < dotsRef.current.length; i++) {
        dotsRef.current[i].className = dotsRef.current[i].className.replace(
          " active",
          ""
        );
      }
      slidesRef.current[slideIndex - 1].style.display = "flex";
      dotsRef.current[slideIndex - 1].className += " active";
    }

    async function showSlidesAuto() {
      //let slidesAuto = document.getElementsByClassName("mySlidesAuto");
      slideIndex = 0;

      function showSlidesAutoLoop() {
        slideIndex++;

        if (slideIndex > slidesRef.current.length) {
          slideIndex = 1;
        }

        console.log("slide: " + slideIndex);
        showSlides(slideIndex);

        setTimeout(showSlidesAutoLoop, 10000); // Change image every 10 seconds
      }

      try {
        showSlidesAutoLoop();
      } catch (e) {}
    }

    //Activate automatic carrousel
    // useEffect(()=>{
    //     showSlidesAuto();
    // }, []);

    return (
      <div className="carrusel relative w-full ">
        <div
          ref={addToSlidesRefs}
          className="slides slide-1 bg-[url('./imagenes/inei01.jpg')] bg-center bg-cover relative h-[700px] w-full flex justify-center"
        >
          <div className=" bg-primary opacity-60 w-full h-full  absolute inset-0"></div>

          <div className="relative z-20 text-center px-5 h-full flex flex-col justify-center max-w-screen-lg gap-y-9">
            <p className="text-3xl font-bold">
              I.E. "Víctor Raúl Haya de la Torre"
            </p>
            <h1 className="text-red-600 font-bold text-5xl">INEI 46</h1>
            <p className="border border-secondary px-5	py-1 text-[18px] text-left">
              Reciban cordiales saludos en este nuevo año académico 2024, a
              nombre del Equipo Directivo y docente de nuestra comunidad ineína
              y hacemos votos porque como cada año sigamos acompañándonos y
              trabajando en equipo con ese mismo deseo de superación y éxito
              continuo en pro del logro de nuestros objetivos.
            </p>
          </div>
        </div>

        <div
          ref={addToSlidesRefs}
          className="slides slide-2 hidden bg-[url('./imagenes/img_20220919_143245.jpg')] bg-center bg-cover relative h-[700px] w-full justify-center"
        >
          <div className=" bg-[#08329a] opacity-60 w-full h-full  absolute inset-0"></div>
          <div className="relative z-20 text-center px-5 h-full flex flex-col justify-center max-w-screen-lg gap-y-9">
            <p className="text-3xl font-bold">
              ESTUDIO, TRABAJO Y{" "}
              <span className="text-[#449edd]">DISCIPLINA</span>
            </p>
            <h1 className="text-white font-bold text-lg">
              BIENVENIDA A NUESTROS ESTUDIANTES INEINOS AL AÑO ACADÉMICO 2023
            </h1>
            <p className="border border-[#449edd] px-5	py-1 text-[18px] text-left">
              La Institución Educativa “Víctor Raúl haya de la Torre” Nº 046,
              legendariamente conocida como INEI 46, lidera la formación de los
              adolescentes en valores éticos, morales y ambientales con
              conocimientos científicos, humanísticos y tecnológicos para su
              desenvolvimiento eficiente en la sociedad en una infraestructura
              moderna, segura y con altos estándares internacionales.
            </p>
          </div>
        </div>

        <div
          ref={addToSlidesRefs}
          className="slides slide-3 hidden bg-[url('./imagenes/img_2.jpg')] bg-center bg-cover relative h-[700px] w-full justify-center"
        >
          <div className=" bg-primary opacity-60 w-full h-full  absolute inset-0"></div>
          <div className="relative z-20 text-center px-5 h-full flex flex-col justify-center max-w-screen-lg gap-y-9">
            <p className="text-3xl font-bold">EQUIPO DIRECTIVO</p>
            <p className="border border-secondary px-5	py-1 text-[18px] text-left">
              El director de la I.E. "Víctor Raúl Haya de la Torre" ex INEI 46
              mg. Einer Mariaca Peña saluda a la comunidad educativa de nuestra
              gloriosa institución y insta a seguir forjando en equipo y
              colegiadamente la mejora permanente de nuestro servicio educativo.
            </p>
          </div>
        </div>

        {/* Next and previous buttons &#10094;  &#10095; */}
        <a
          onClick={() => plusSlides(-1)}
          className="prev z-40 absolute left-4 flex justify-center items-center cursor-pointer top-1/2 w-12 h-12 text-white bg-[#114488] hover:opacity-80 opacity-40 text-4xl"
        >
          &#10094;
        </a>
        <a
          onClick={() => plusSlides(1)}
          className="next z-40 absolute right-4 flex justify-center items-center cursor-pointer top-1/2 w-12 h-12 text-white bg-[#114488] hover:opacity-80 opacity-40 text-4xl"
        >
          &#10095;
        </a>

        {/* The dots/circles */}
        <div className="dots-container">
          <div
            ref={addToDotsRefs}
            onClick={() => currentSlide(1)}
            className="dot active"
          ></div>
          <div
            ref={addToDotsRefs}
            onClick={() => currentSlide(2)}
            className="dot"
          ></div>
          <div
            ref={addToDotsRefs}
            onClick={() => currentSlide(3)}
            className="dot"
          ></div>
        </div>
      </div>
    );
}

export default HomeSlider
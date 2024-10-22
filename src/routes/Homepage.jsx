import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import SideMenu from '../components/SideMenu';
import VisionComp from "../imagenes/visiOn-compartida.jpg";

import CardEquipoDirectivo from "../components/CardEquipoDirectivo";
import FooterApp from "../components/FooterApp";

import CardImgMariaca from "../imagenes/director_baja.png";
import CardImgBaltazar from "../imagenes/subdirector-alexander_b.jpg";
import CardImgTapahausco from "../imagenes/subdirectora-vilma-tapahuasco_b.jpg";
import CardImgSilva from "../imagenes/subdirectora_elva-silva_b.jpg";
import CardImgGutierrez from "../imagenes/subdirecttor-hugo_b.png";
import HomeSlider from "../components/HomeSlider";

const Homepage = () => {
  //btn scroll up
  const initRef = useRef(null);

  const scrollToTop = () => {
    // document.getElementById('inicio-pag').scrollIntoView({
    //   behavior: 'smooth',
    // });

    initRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };


  return (
    <div className="w-screen max-w-full	">
      <NavBar />
      <SideMenu/>
      <div id="inicio-pag" ref={initRef}></div>
      <HomeSlider/>

      <section className="text-black bg-white">
        <div className="px-4 mx-auto flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold pt-20 pb-8">
            VISIÓN <span className="text-secondary">COMPARTIDA</span>
          </h1>

          <img
            src={VisionComp}
            alt="vision-compartida.jpg"
            className="w-[413px]"
          />
        </div>
      </section>

      <section className="text-black bg-white">
        <div
          className="px-4 mx-auto flex flex-col justify-center items-center 
             max-w-[85%] md:max-w-[690px] lg:max-w-[960px] xl:max-w-[89%] 2xl:max-w-[1400px]
            "
        >
          <h1 className="text-4xl font-bold pt-20 pb-8">RESEÑA HISTÓRICA</h1>

          <div className="text-justify text-[#363636] text-[14px] leading-loose">
            <p>
              La Institución Educativa se creó mediante RM N° 5225 el 06 de
              abril de 1961 con el nombre de INSTITUTO EDUCATIVO INDUSTRIAL DE
              VARONES Nº 46. Funcionó en el pabellón del centro educativo
              "Domingo Faustino Sarmiento" con la especialidad de electrónica.
            </p>
            <br />
            <p>
              En 1964 el alcalde distrital de turno, el señor Gustavo Martini
              Chutti donó el terreno que hoy ocupa iniciándose la construcción
              del centro educativo con la activa participación de los padres de
              familia, se inauguró el 03 de abril ampliándose el servicio a
              cuatro especialidades. Posteriormente fue denominado como CECAT Nº
              46 de ATE VITARTE Por gestión de un grupo de docentes, directivos,
              padres de familia y ex alumnos en 1986 es cambiado de nombre por
              RD N° 3310 siendo denominado como colegio nacional "Víctor Raúl
              Haya de la Torre" Actualmente funciona con 42 secciones y 7
              especialidades: mecánica automotriz, mecánica de producción,
              electricidad, carpintería, soldadura, electrónica y computación
              ofrecidas a la comunidad vitartina y alrededores en dos turnos:
              mañana y tarde.
            </p>
            <br />
            <p>
              En el turno noche funciona el centro de educación ocupacional CEO
              INEI Nº 46, además fue centro piloto de bachillerato y fiscales
              escolares. Actualmente es dirigida por Nuestro Director Einer
              Mariaca Peña y los Sub Directores: Abner Hugo Gutiérrez Dueñas –
              Área Administrativa, Elva Silva Pérez y Vilma Tapahuasco Saldaña –
              Formación General y Alexander Baltazar López – Áreas Técnicas.
              Nuestros estudiantes egresan con una Formación Técnica Científico
              Humanista, su formación técnica se da en especialidades definidas
              las cuales les permiten desempeñarse y laborar en el ámbito
              Productivo con eficiencia y profesionalismo, asimismo en la
              incursión de la Formación de pequeñas empresas acondicionando sus
              propios talleres brindando un servicio de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="text-black bg-white py-[50px] flex flex-col items-center gap-y-10 px-[15px]">
        <div></div>
        <h1 className="text-4xl font-bold">EQUIPO DIRECTIVO</h1>

        <div
          className="flex flex-row flex-wrap justify-center gap-x-[30px] gap-y-[60px]
                max-w-[85%] md:max-w-[690px] lg:justify-between lg:max-w-[960px] xl:max-w-[89%] 2xl:max-w-[1400px]
            "
        >
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

      <FooterApp />
    </div>
  );
};

export default Homepage;

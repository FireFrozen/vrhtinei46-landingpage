import React from 'react'

const CardEquipoDirectivo = (props) => {

    


  return (
    <div className='flex justify-center items-center 
    w-[100%] md:w-[652px] lg:w-[290px]  xl:w-[410px]'>
        <div className='card-equipo-directivo w-[100%] relative
          md:w-[652px] lg:w-[290px]  xl:w-[410px]
        '>
            <img src={props.img} alt="" className='rounded-[30px] w-full max-w-full '/>
            <div className='card-text-container absolute text-white bottom-0 flex flex-col justify-center
                  w-full h-1/3 sm:h-1/4 md:h-1/6  lg:h-1/3
            '>
                <h2>{props.nombre}</h2>
                <p>{props.cargo}</p>
            </div>

        </div>
    </div>
  )
}

export default CardEquipoDirectivo
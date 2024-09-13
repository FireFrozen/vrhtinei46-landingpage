import React from 'react'

const CardEquipoDirectivo = (props) => {

    


  return (
    <div>
        <div className='card-equipo-directivo w-[290px] relative'>
            <img src={props.img} alt="" className='rounded-[30px] max-w-full	'/>
                <div className='card-text-container absolute text-white bottom-0 w-full h-1/3 flex flex-col justify-center'>
                    <h2>{props.nombre}</h2>
                    <p>{props.cargo}</p>
                </div>

        </div>
    </div>
  )
}

export default CardEquipoDirectivo
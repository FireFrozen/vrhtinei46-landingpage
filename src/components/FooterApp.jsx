import React from 'react'

const FooterApp = () => {
  return (
    <div className='bg-[#114488] text-[#DDDDDD] '>
        <section className='flex flex-wrap flex-row justify-center gap-y-[30px] gap-x-[280px] pt-[80px] pb-[40px] px-[15px] text-left mx-auto 
         max-w-[590px]   md:max-w-[720px]
         xl:max-w-[95%] 
         lg:max-w-[960px]'>
                <div className='w-full lg:w-[320px] flex flex-col gap-y-5'>
                    <h1 className='text-[24px] font-bold'>MESA DE PARTE</h1>
                    <p className='text-[14px]'>
                        Ponemos a disposición de los estudiantes y público en general el formulario 
                        único de trámite (FUT) de la Institución Educativa VRHT INEI 46, 
                        para realizar de manera virtual, los trámites que requiera mediante los siguientes 
                        canales de atención.
                    </p>
                </div>

                <div className='w-full lg:w-[320px] flex flex-col gap-y-5'>
                    <h1 className='text-[24px] font-bold'>COMUNICADOS</h1>

                    <div className='flex flex-col gap-y-[15px] text-[14px]'>
                        <div className='flex flex-col gap-y-[5px]'>
                            <a href="" className='font-bold'>Área de EPT Educación Técnica</a>
                            <p>
                                El área de Educación para el Trabajo adquiere vital importancia en la...
                            </p>
                        </div>
                        <div className='flex flex-col gap-y-[5px]'>
                            <a href="" className='font-bold'>Área de Inglés</a>
                            <p>
                                El Área de Inglés, en el glorioso INEI 46 cuenta con 3 docentes Aurora Pacheco...
                            </p>
                        </div>
                    </div>

                </div>

        </section>

        <footer className='box-border py-[40px] text-sm border-t-2 border-white border-opacity-25'>
            © 2024 vrhtinei46.edu.pe
        </footer>

    </div>
  )
}

export default FooterApp
import React from 'react'

const BtnScrollUp = (props) => {


  return (
    <>
        <a href="" onClick={props.scrollToTop}>
          <div className='scroll-up fixed flex justify-center items-center w-10 h-10 font-bold right-[30px] bottom-[60px]'>
            v
          </div>
        </a>
    </>
  )
}

export default BtnScrollUp
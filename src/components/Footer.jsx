import React, { useEffect, useState } from 'react'
import logo from '../assets/diaLogo.png'
import { getContentApi } from '../services/commonApi'


function Footer() {
    const [content, setContent] = useState([])

    const getData = async () => {
        const result = await getContentApi()
        setContent(result.data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="bg-[#DCEBF8] py-[40px] ">
                <div className=' container'>
                    <div className='flex items-center justify-center'>
                        <img src={logo} className='dialogo' alt="logo" />
                    </div>
    
                    <p className='text-[16px] sm:text-[20px] leading-[25px] text-center mt-3 lg:px-40'>
                        {content[8]?.text}
                    </p>
                </div>
            </div>
            <div className='bg-[#2867B4] '>
                <div className="container  py-[15px] sm:py-[20px]  text-center text-[13px] sm:text-[15px] leading-[20px] flex flex-col sm:flex-row justify-between">
                    <p className='text-white'>© 2025, Dia - Vet Biotech Pvt Ltd. #All rights reserved.</p>
                    <a href='http://www.penoft.com'> <p className='text-[#60D669]'>Designed and Developed by Penoft</p></a>
    
                </div>
            </div>
        </>
    )
}

export default Footer
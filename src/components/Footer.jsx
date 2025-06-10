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
            <div className="bg-[#DCEBF8] px-[64px] sm:px-[205px] lg:px-[300px] py-[40px] ">
                <div className='flex items-center justify-center'>
                    <img src={logo} className='w-[50%] lg:w-[40%]' alt="logo" />
                </div>

                <p className='text-[16px] leading-[25px] text-center mt-3'>
                    {content[8]?.text}
                </p>
            </div>
            <div className="bg-[#2867B4] px-[29px] sm:px-[39px] lg:px-[200px]  py-[15px] sm:py-[20px]  text-center text-[13px] sm:text-[15px] leading-[20px] flex flex-col sm:flex-row justify-between">
                <p className='text-white'>© 2025, Dia - Vet Biotech Pvt Ltd. #All rights reserved.</p>
                <a href='http://www.penoft.com'> <p className='text-[#60D669]'>Designed and Developed by Penoft</p></a>

            </div>
        </>
    )
}

export default Footer
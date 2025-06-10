import React, { useEffect, useState } from 'react'
import { getContentApi, getImageApi } from '../services/commonApi'

function Main() {
     const [content, setContent] = useState([])
     const [image,setImage]=useState([])
    
        const getData = async () => {
            const result = await getContentApi()
            setContent(result.data)
            const res = await getImageApi()
            setImage(res.data)
        }
        
        useEffect(() => {
            getData()
        }, [])
    return (
        <>
            <div className="bg-[#DCEBF8] relative">
                <div className="lg:px-[200px] sm:px-[70px] px-12 py-8">
                    <div className="flex flex-col md:flex-row gap-2 lg:gap-8">
                        <div className="flex-1">
                            <p className="text-[28px] sm:text-[36px] lg:text-[40px] leading-[35px] sm:leading-[43px] lg:leading-[50px] font-bold bg-[#753899] bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-[#753899] hover:to-[#2867B4]">
                                Transforming Lives <br />Through Science
                            </p>
                            <p className="mt-7 text-[16px] sm:text-[18px] leading-[31px] sm:leading-[36px] max-w-[282px] sm:max-w-[414px]  lg:max-w-[600px]">
                                {content[0]?.text}
                            </p>
                            <div className="mt-7 text-[16px] sm:text-[18px] leading-[36px] text-center flex flex-col sm:flex-row sm:justify-start gap-4 w-[100%]">
                                <a href="#Testimonials" className=" w-full ">
                                    <button className="bg-[#2867B4] w-full rounded-sm text-white hover:bg-[#1FAF38]">
                                        Who We Are
                                    </button>
                                </a>
                                <a href="#Contact" className=" w-full ">
                                    <button className="border-black border w-full rounded-sm hover:bg-[#1FAF38] hover:text-white hover:border-0">
                                        Contact Us
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="flex-1 mt-7 md:mt-0">
                            <img
                                className="w-[247px] sm:w-[431px] lg:w-[540px]"
                                src={image[0]?.picture}
                                alt="Home Image"
                            />

                        </div>
                    </div>
                </div>
                {/* whatsapp logo */}
                <a href='https://api.whatsapp.com/send?phone=+91%209111116483'  target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-[47px] lg:w-[60px] fixed  top-[80%] right-3 sm:top-[85%] sm:right-[5%]"
                        src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
                        alt=""
                    />
                </a>
            </div>
        </>
    )
}

export default Main
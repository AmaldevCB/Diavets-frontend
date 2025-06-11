import React, { useEffect, useState } from 'react'
import { getContentApi, getImageApi } from '../services/commonApi'

function About() {
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
            <div id='About' className="bg-[#F9F9F9] px-[45px] sm:px-12 lg:px-[10%] py-12 scroll-mt-20">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row lg:gap-10 items-center">
                    <div className="sm:w-1/2">
                        <h1 className="text-[24px] sm:text-[36px] lg:text-[52px] font-bold leading-tight">
                            <span className="text-[#1FAF38]">About</span> <span className="text-[#2867B4] font-normal">Us</span>
                        </h1>
                        <div className="w-[100px] sm:w-[169px] h-[3px] bg-[#1FAF38] mt-2 mb-6"></div>
                        <p className="text-[16px] sm:text-[18px] lg:text-[21px] leading-[31px] sm:leading-[36px]">{content[3]?.text}
                        </p>
                    </div>

                    <div className="sm:w-1/2 flex justify-center">
                        <img
                            src={image[1]?.picture}
                            alt="About Dia-Vets"
                            className="w-[296px] sm:w-[432px] lg:w-[742px]"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
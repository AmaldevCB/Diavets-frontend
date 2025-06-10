import React, { useEffect, useState } from 'react'
import { getContentApi, getImageApi } from '../services/commonApi'

function Testimonials() {
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
            <div id='Testimonials' className="scroll-mt-25 my-10 px-[45px] lg:px-[10%] lg:mt-20">
                <div className='text-[24px] leading-[30px] sm:text-[36px] sm:leading-[63px] lg:text-[52px] lg:leading-[63px] sm:text-center'>
                    <h1 className='font-bold text-[#1FAF38]'>
                        What
                        <span className='text-[#2867B4] inline'> Others Say</span>
                    </h1>
                    <div className="w-[100px] sm:w-[169px] h-[3px] bg-[#1FAF38] mt-1 lg:mt-4 sm:mx-auto"></div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    {/* card 1 */}
                    <div className="bg-[#F8E2FF] border border-[#F8E2FF] hover:bg-[#E9FFEB] hover:border-[#2867B4] transition-all duration-500 px-[30px] h-auto  pb-8 sm:w-[276px]  lg:w-1/3">
                        <div className='text-right'><i class="fa-solid fa-quote-right text-[50px] mt-[18px]"></i></div>
                        <p className='text-[18px] sm:text-[20px] lg:text-[21px]  font-bold text-[#2867B4]'>
                            Dr. Ramesh Varma
                        </p>
                        <p className='text-[14px] sm:text-[16px] text-[#1FAF38]'>
                            Senior Veterinarian
                        </p>
                        <p className="text-[16px] sm:text-[18px] lg:text-[21px] leading-[31px] mt-[20px]">
                            {content[4]?.text}
                        </p>
                    </div>
                    {/* card 2 */}
                    <div className="bg-[#FFE6DD] border border-[#FFE6DD] hover:bg-[#E9FFEB] hover:border-[#2867B4] transition-all duration-500 px-[30px] h-auto  pb-8 sm:w-[276px] sm:my-0 lg:w-1/3">
                        <div className='text-right'><i class="fa-solid fa-quote-right text-[50px] mt-[18px]"></i></div>
                        <p className='text-[18px] sm:text-[20px] lg:text-[21px] font-bold text-[#2867B4]'>
                            Mr. Joseph Mathew
                        </p>
                        <p className='text-[14px] sm:text-[16px] text-[#1FAF38]'>
                            Medicine Supplier
                        </p>
                        <p className="text-[16px]  sm:text-[18px] lg:text-[21px] leading-[31px] mt-[20px]">
                            {content[5]?.text}
                        </p>
                    </div>
                    {/* card 3 */}
                    <div className="bg-[#DEE8FF] border border-[#DEE8FF] hover:bg-[#E9FFEB] hover:border-[#2867B4] transition-all duration-500 px-[30px] h-auto pb-8 sm:w-[276px]  lg:w-1/3">
                        <div className='text-right'><i class="fa-solid fa-quote-right text-[50px] mt-[18px]"></i></div>
                        <p className='text-[18px] sm:text-[20px] lg:text-[21px] font-bold text-[#2867B4]'>
                            Dr. Shahira Salim
                        </p>
                        <p className='text-[14px]  sm:text-[16px] text-[#1FAF38]'>
                            Veterinary Consultant & Researcher
                        </p>
                        <p className="text-[16px]  sm:text-[18px] lg:text-[21px] leading-[31px] mt-[20px]">
                             {content[6]?.text}
                        </p>
                    </div>
                </div>
            </div>

            {/* partners */}
            <div className="bg-[#F9F9F9] pb-15">
                {/* heading */}
                <div className='text-[24px] leading-[30px] sm:text-[36px] sm:leading-[63px] lg:text-[52px] lg:leading-[63px] sm:text-center mt-10 px-[45px] lg:px-[200px] lg:mt-20'>
                    <h1 className='font-bold text-[#2867B4] pt-10'>
                        We Partner With
                    </h1>
                    <div className="w-[100px] sm:w-[169px] h-[3px] bg-[#1FAF38] mt-1 lg:mt-4 sm:mx-auto"></div>
                </div>
                
                {/* logos */}
                <div className="px-[86px] lg:px-[370px] mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <img src={image[2]?.picture} className='object-contain sm:h-[100px] lg:h-[150px] w-auto' alt="logo 1" />
                    <img src={image[3]?.picture} className='object-contain sm:h-[100px] lg:h-[150px] sm:w-auto w-60' alt="logo 2" />
                    <img src={image[4]?.picture} className='object-contain sm:h-[100px] lg:h-[150px] w-auto' alt="logo 3" />
                </div>
            </div>
        </>
    )
}

export default Testimonials
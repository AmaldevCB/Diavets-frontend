import React, { useEffect, useState } from 'react'
import { getContentApi } from '../services/commonApi'

function Product() {
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
            <div id='Products' className="scroll-mt-25 my-10 px-[45px] lg:px-[10%] lg:mt-20">
                <div className='text-[24px] leading-[30px] sm:text-[36px] sm:leading-[63px] lg:text-[52px] lg:leading-[63px] sm:text-center'>
                    <span className='font-bold text-[#1FAF38]'>Our Product</span>
                    <span className='text-[#2867B4] block sm:inline sm:ms-4'>Categories</span>
                    <div className="w-[100px] sm:w-[169px] h-[3px] bg-[#1FAF38] mt-1 lg:mt-4 sm:mx-auto"></div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-[32px] lg:mt-[50px] items-stretch">
                    {/* card 1 */}
                    <div className="flex-1 flex">
                        <div className="group p-6 lg:p-10 bg-[#DCEBF8] border border-[#DCEBF8] hover:bg-[#F8E2FF] hover:border-[#2867B4] transition-all duration-500 flex flex-col h-full">
                            <i className="group-hover:text-[#2867B4] transition-all duration-500 fa-solid fa-prescription-bottle-medical text-[35px] sm:text-[40px] lg:text-[50px]"></i>
                            <p className="text-[#2867B4] mt-8 font-bold text-[18px] leading-[36px] sm:text-[20px] lg:text-[23px]">
                                Veterinary Healthcare
                            </p>
                            <p className="text-[16px] mt-5 leading-[31px] sm:text-[18px] sm:leading-[36px] lg:text-[21px] flex-1">
                                {content[1]?.text}
                            </p>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="flex-1 flex">
                        <div className="group p-6 lg:p-10 bg-[#FFE6DD] border border-[#FFE6DD] hover:bg-[#F8E2FF] hover:border-[#2867B4] transition-all duration-500 flex flex-col h-full">
                            <i className="group-hover:text-[#2867B4] transition-all duration-500 fa-solid fa-magnifying-glass text-[35px] sm:text-[40px] lg:text-[50px]"></i>
                            <p className="text-[#2867B4] mt-8  font-bold text-[18px] leading-[36px] sm:text-[20px] lg:text-[23px]">
                                Specialized Products
                            </p>
                            <p className="text-[16px] mt-5 leading-[31px] sm:text-[18px] lg:text-[21px] sm:leading-[36px] flex-1">
                                {content[2]?.text}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product
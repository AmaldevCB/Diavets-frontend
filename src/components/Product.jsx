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
            <div  id='Products' className="scroll-mt-25 my-10 px-[45px] lg:px-[200px] lg:mt-20">
                <div className='text-[24px] leading-[30px] sm:text-[36px] sm:leading-[63px] lg:text-[52px] lg:leading-[63px] sm:text-center'>
                    <span className='font-bold text-[#1FAF38]'>Our Product</span>
                    <span className='text-[#2867B4] block sm:inline sm:ms-4'>Categories</span>
                    <div className="w-[100px] sm:w-[169px] h-[3px] bg-[#1FAF38] mt-1 lg:mt-4 sm:mx-auto"></div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-[32px] lg:mt-[50px]">
                    {/* card 1 */}
                    <div className="flex-1 ">
                        <div className="group bg-[#DCEBF8] border border-[#DCEBF8] hover:bg-[#F8E2FF] hover:border-[#2867B4] transition-all duration-500	 h-[327px] sm:h-[370px] lg:h-[400px] relative">
                            <i className="group-hover:text-[#2867B4] transition-all duration-500 fa-solid fa-prescription-bottle-medical absolute top-[29px] sm:top-[35px] lg:top-[60px] left-[31px] lg:left-[50px] text-[35px] sm:text-[40px] lg:text-[50px]"></i>
                            <p className="text-[#2867B4] font-bold text-[18px] leading-[36px] sm:text-[20px] lg:text-[23px]  absolute top-[70px] sm:top-[85px] lg:top-[125px] left-[31px] lg:left-[50px]">
                                Veterinary Healthcare
                            </p>
                            <p className="text-[16px] leading-[31px] sm:text-[18px] sm:leading-[36px] lg:text-[21px] absolute top-[115px] sm:top-[130px] lg:top-[170px] left-[31px] right-[31px] lg:left-[50px] w-[228px] sm:w-[300px] lg:w-fit">
                               {content[1]?.text}
                            </p>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="flex-1 mt-[15px] sm:mt-0">
                        <div className="group bg-[#FFE6DD] border border-[#FFE6DD] hover:bg-[#F8E2FF] hover:border-[#2867B4] transition-all duration-500  h-[327px] sm:h-[370px] lg:h-[400px] relative">
                            <i className="group-hover:text-[#2867B4] transition-all duration-500 fa-solid fa-magnifying-glass absolute top-[29px] sm:top-[35px] lg:top-[60px] left-[31px] lg:left-[50px] text-[35px] sm:text-[40px] lg:text-[50px]"></i>
                            <p className="text-[#2867B4] font-bold text-[18px] leading-[36px] sm:text-[20px] lg:text-[23px] absolute top-[70px] sm:top-[85px] lg:top-[125px] left-[31px] lg:left-[50px]">
                                Specialized Products
                            </p>
                            <p className="text-[16px] leading-[31px] sm:text-[18px] lg:text-[21px] sm:leading-[36px] absolute top-[115px] sm:top-[130px] lg:top-[170px] left-[31px] right-[31px] lg:left-[50px] w-[228px] sm:w-[300px] lg:w-fit">
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
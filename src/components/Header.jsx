import { faEnvelope, faPhoneVolume, faSquareXmark, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
    return (
        <>

            <div className="lg:px-[200px] sm:px-[30px] px-5  text-white font-normal text-[15px] leading-[36px]  font-[Tahoma] content-center" style={{ backgroundColor: "#2867B4" }}>
                <div className="flex justify-between">
                    <div className="">
                       <a href='tel:+919111116483'> <span><FontAwesomeIcon icon={faPhoneVolume} /> +91 9111116483</span></a>
                        <a href='mailto:info@diavets.com'><span className='ms-5 hidden sm:inline'><FontAwesomeIcon icon={faEnvelope} /> info@diavets.com</span></a>
                    </div>
                    <div className='flex  flex-row gap-2 justify-center content-center '>
                        <a href="https://www.facebook.com/diavets" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-square-facebook fa-sm content-center" style={{ color: "#ffffff" }}></i>
                        </a>

                        <a href="https://www.instagram.com/diavets" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram fa-sm content-center" style={{ color: "#ffffff" }}></i>
                        </a>

                        <a href="https://www.youtube.com/@diavets" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-youtube fa-sm content-center" style={{ color: "#ffffff" }}></i>
                        </a>

                        <a href="https://www.linkedin.com/company/diavets" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in fa-sm content-center" style={{ color: "#ffffff" }}></i>
                        </a>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
import React, { useEffect, useState } from 'react'
import { getContentApi, postContactFormApi } from '../services/commonApi'
import { toast } from 'react-toastify'

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    })
    const [content, setContent] = useState([])

    const getData = async () => {
        const result = await getContentApi()
        setContent(result.data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, phone, email, message } = formData;

        if (!name || !phone || !email || !message) {
            toast.warning('Complete the form before submitting');
            return;
        }
        if (phone.length !== 10) {
            toast.warning('Phone number must be exactly 10 digits');
            return;
        }
        const result = await postContactFormApi(formData);
        if (result.status === 200) {
            toast.success('Message sent successfully');
            setFormData({ name: '', phone: '', email: '', message: '' });
        } else {
            toast.error('Something went wrong');
        }
    };

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div id='Contact' className="scroll-mt-30 my-10 px-[45px] sm:px-[90px] lg:px-[10%] lg:mt-20 flex flex-col sm:flex-row gap-20 lg:gap-10">
                <div className='sm:w-1/2 lg:mt-10'>
                    <div className='text-[24px] leading-[30px] sm:text-[36px] sm:leading-[63px] lg:text-[45px] lg:leading-[63px] '>
                        <h1 className='font-bold text-[#1FAF38]'>
                            Contact
                            <span className='text-[#2867B4] inline font-normal'> Us</span>
                        </h1>
                    </div>
                    <div className="text-[16px] sm:text-[18px] lg:text-[21px] leading-[31px] lg:leading-[36px] mt-3">
                        <div>
                            <p>{content[7]?.text}</p>
                            <ul className='mt-4 lg:mt-10 space-y-4 lg:space-y-10'>
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-phone text-[#2867B4] text-[18px]"></i>
                                    <a href='tel:+919111116483'><span className='hover:text-[#1FAF38]'>+91 9111116483</span></a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-envelope text-[#2867B4] text-[18px]"></i>
                                    <a href='mailto:info@diavets.com'><span className='hover:text-[#1FAF38]'>info@diavets.com</span></a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <i className="fa-solid fa-location-dot text-[#2867B4] text-[18px] mt-1"></i>
                                    <span className="leading-[24px] lg:leading-[36px] hover:text-[#1FAF38]">
                                        Door no:201, Sukh Apartment,<br />
                                        188 Anoop Nagar, Indore,<br />
                                        Madhya Pradesh - 452008.
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                {/* form */}
                <div className="sm:w-1/2 bg-[#EAF5FF] border rounded-lg p-10 lg:pt-6 mt-10 sm:mt-3 lg:mt-0">
                    <h2 className="text-[24px] leading-[30px] sm:text-[36px] sm:leading-[36px] lg:text-[45px] lg:leading-[63px] font-bold">
                        <span className="text-[#1FAF38]">We're here to <br /></span>
                        <span className="text-[#2867B4] font-medium">assist </span>
                        <span className="text-[#1FAF38]">you!</span>
                    </h2>

                    <p className="text-[16px] sm:text-[18px] lg:text-[21px] lg:leading-[36px] mt-4 leading-[31px]">
                        Fill out the form below, and
                        we'll get back to you at the
                        earliest.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-4 lg:mt-8 space-y-3 lg:space-y-[40px] text-[16px] sm:text-[18px] lg:text-[21px] lg:leading-[36px]">
                        <input
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            value={formData.name}

                            type="text"
                            placeholder="Full Name"
                            className="w-full border-b lg:text-[21px] border-gray-400 bg-transparent focus:outline-none py-1 text-sm"
                        />
                        <input
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            value={formData.phone}
                            type="tel"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                            }}
                            placeholder="Phone No."
                            className="w-full border-b lg:text-[21px] border-gray-400 bg-transparent focus:outline-none py-1 text-sm"
                        />
                        <input
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            value={formData.email}
                            type="email"
                            placeholder="Email Address"
                            className="w-full border-b lg:text-[21px] border-gray-400 bg-transparent focus:outline-none py-1 text-sm"
                        />
                        <input
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            value={formData.message}
                            type="text"
                            placeholder="How Can we Help You*"
                            className="w-full border-b lg:text-[21px] border-gray-400 bg-transparent focus:outline-none py-1 text-sm"
                        />

                        <button
                            type="submit"
                            className="bg-[#2867B4] lg:text-[21px] text-white text-sm px-4 py-1 rounded mt-2 hover:bg-[#1FAF38]"
                        >
                            Send Messege
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
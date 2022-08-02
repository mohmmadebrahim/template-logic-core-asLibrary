import React from 'react';
import { BtnLoaderDark, MultiUnderDash } from '../../components';
import { sendContact } from "core-landing"
import { toast } from 'react-toastify';

interface IContactUsProps {
}

const ContactUs: React.FunctionComponent<IContactUsProps> = ({ }) => {
    const [isReq, setIsReq] = React.useState<boolean>(false)

    return (
        <>
            <div className=' flex w-full max-w-screen-lg mx-auto mt-10 flex-wrap items-center mb-16 px-6 lg:px-4'>
                <div className=' w-6/12 flex flex-col '>
                    <h1 className=' text-[40px]'>Contact Us</h1>
                    <MultiUnderDash />
                    <p className=' mt-6'>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <form onSubmit={async (e) => { await sendContact(e).then((val) => toast(val.message, { type: val.status ? "success" : "error" })) }} id="contactForm" className=' w-full  flex flex-col pt-10' >
                        <div className='w-full md:w-10/12 mb-6 flex flex-col mx-2 group'>
                            <span className=' text-gray-500 group-hover:text-landing-bar bg-white px-1 absolute text-xs mt-[-7px] transition-all duration-300 mr-[10px]'>Your Name</span>
                            <input type={"text"} placeholder="Enter Your Name" className=" w-full rounded-main border focus:border-landing-bar transition-all duration-300 px-3 py-2 focus:outline-none bg-white" required />
                        </div>
                        <div className='w-full md:w-10/12 mb-6 flex flex-col mx-2 group'>
                            <span className=' text-gray-500 group-hover:text-landing-bar bg-white px-1 absolute text-xs mt-[-7px] transition-all duration-300 mr-[10px]'>Your Email</span>
                            <input type={"text"} placeholder="Enter Your Email" className=" w-full rounded-main border focus:border-landing-bar transition-all duration-300 px-3 py-2 focus:outline-none bg-white" required />
                        </div>
                        <div className='w-full md:w-10/12 mb-6 flex flex-col mx-2 group'>
                            <span className=' text-gray-500 group-hover:text-landing-bar bg-white px-1 absolute text-xs mt-[-7px] transition-all duration-300 mr-[10px]'>Your Message</span>
                            <textarea placeholder="Enter Your Name" className=" w-full rounded-main border focus:border-landing-bar transition-all duration-300 px-3 py-2 focus:outline-none bg-white min-h-[200px] pt-4" required />
                        </div>
                        <div className=' flex w-full md:w-10/12 justify-end'>
                            <button className={` bg-landing-bar text-landing-text-dark rounded-main py-1 hover:bg-landing-bar transition-all duration-300 relative h-[40px] flex justify-center items-center ${isReq ? "w-[120px] " : "w-[100px] "}`}>
                                {isReq ? <BtnLoaderDark /> : "Send"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className=' w-6/12 flex flex-col '>
                    <img className=' w-full ' src='/assets/media/ils/contact.svg' />
                </div>
            </div>
        </>
    );
};

export default ContactUs;

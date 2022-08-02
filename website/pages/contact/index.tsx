import React from 'react';
import { sendContact } from "core-landing"
import { MultiUnderDash } from '../../components';
import { toast } from 'react-toastify';
import CButton from '../../components/ui/button';

interface IContactUsProps {

}

const ContactUs: React.FunctionComponent<IContactUsProps> = ({ }) => {
    const [isReq, setIsReq] = React.useState<boolean>(false)

    return (
        <>
            <div className=' flex w-full max-w-screen-lg mx-auto mt-10 flex-wrap items-center mb-16 px-6 lg:px-4'>
                <div className=' w-6/12 flex flex-col '>
                    <h1 onClick={() => { setIsReq(!isReq) }} className=' text-[40px]'>Contact Us</h1>
                    <MultiUnderDash />
                    <p className=' mt-6'>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <form onSubmit={async (e) => {
                        e.preventDefault()
                        setIsReq(true)
                        setTimeout(async () => { await sendContact(e).then((val) => toast(val.message, { type: val.status ? "success" : "error" })).then(()=>setIsReq(false)) }, 2000)
                    }} id="contactForm" className=' w-full  flex flex-col pt-10' >
                        <div className='w-full md:w-10/12 mb-6 flex flex-col mx-2 group'>
                            <span className=' text-landing-text-dark group-hover:text-landing-bar bg-landing-text-light px-1 absolute text-xs mt-[-7px] transition-all duration-300 mr-[10px]'>Your Name</span>
                            <input type={"text"} placeholder="Enter Your Name" className=" w-full rounded-main border focus:border-landing-bar transition-all duration-300 px-3 py-2 focus:outline-none bg-landing-text-light" required />
                        </div>
                        <div className='w-full md:w-10/12 mb-6 flex flex-col mx-2 group'>
                            <span className=' text-landing-text-dark group-hover:text-landing-bar bg-landing-text-light px-1 absolute text-xs mt-[-7px] transition-all duration-300 mr-[10px]'>Your Email</span>
                            <input type={"text"} placeholder="Enter Your Email" className=" w-full rounded-main border focus:border-landing-bar transition-all duration-300 px-3 py-2 focus:outline-none bg-landing-text-light" required />
                        </div>
                        <div className='w-full md:w-10/12 mb-6 flex flex-col mx-2 group'>
                            <span className=' text-landing-text-dark group-hover:text-landing-bar bg-landing-text-light px-1 absolute text-xs mt-[-7px] transition-all duration-300 mr-[10px]'>Your Message</span>
                            <textarea placeholder="Enter Your Name" className=" w-full rounded-main border focus:border-landing-bar transition-all duration-300 px-3 py-2 focus:outline-none bg-landing-text-light min-h-[200px] pt-4" required />
                        </div>
                        <div className=' flex w-full md:w-10/12 justify-end'>
                            <CButton text='Send' isLoading={isReq} loaderType="dark" />
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

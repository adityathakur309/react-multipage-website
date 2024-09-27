import { useState } from "react";

// get form data 
// end 

export const ContactForm = () => {

    const handleFormSubmit = (formData) => {
        let formInputData = Object.fromEntries(formData.entries());
        if(formInputData){
            Swal.fire({
                title: "submitted",
                text:   ` hey, ${formInputData.name} form has been sent successfully`,
                icon: "success"
              });
        }

    }


    // end 
    return (
        <div className=" flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 bg-mutedColor p-4 rounded-lg">
                <h2 className="text-3xl font-extrabold text-center" style={{ color: '#fff' }}>
                    Contact Us
                </h2>
                <form className="mt-8 space-y-6" action={handleFormSubmit} >
                    <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete='off'
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-400 text-[#fff] placeholder-gray-300 bg-[#1C1C1C] rounded-md focus:outline-none focus:ring-[#00BCD4] focus:border-[#00BCD4] focus:z-10 sm:text-sm"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="off"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-400 text-[#fff] placeholder-gray-300 bg-[#1C1C1C] rounded-md focus:outline-none focus:ring-[#00BCD4] focus:border-[#00BCD4] focus:z-10 sm:text-sm"
                                placeholder="Email Address"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                autoComplete="off"
                                rows="4"
                                required

                                className="appearance-none resize-none relative block w-full px-3 py-2 border border-gray-400 text-[#fff] placeholder-gray-300 bg-[#1C1C1C] rounded-md focus:outline-none focus:ring-[#00BCD4] focus:border-[#00BCD4] focus:z-10 sm:text-sm"
                                placeholder="Your Message"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="relative w-full text-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary cursor-pointer hover:bg-successColor focus:outline-none  text-white"

                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
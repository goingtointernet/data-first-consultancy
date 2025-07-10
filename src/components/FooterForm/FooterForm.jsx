"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const FooterForm = () => {
    const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    try {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
     const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const res = await response.json();

      if (res?.message) {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({ name: "", email: "", message: "" })

        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }
      else if (res?.error) {
        setIsSubmitting(false)
        setError("Failed to send message!")
      }
      } catch (error) {
        setIsSubmitting(false)
        setError("Failed to send message!")
        console.log("Contact form error:", error)
    }
  }
    return (
        <section id='contact' className='bg-mainBgColor w-full py-[80px] h-full relative bg-cover'
            style={{ backgroundImage: "url('/images/main-bg.png')" }}>
            <div className='max-w-[1080px] gap-[50px] lg:gap-[117px] w-[90%] items-center mx-auto grid lg:grid-cols-[0.5fr_1fr]'>
                <div className='flex flex-col items-start' data-aos="fade" data-aos-delay={100} >
                    <Image width={200} height={200} src={"/images/logo-icon.png"} className='h-[110px] object-contain object-left' alt="NEXT STEPS FOR YOUR ORGANIZATION" />
                    <h4 className='text-[24px] mt-[20px] font-[400] text-headingColor'>NEXT STEPS FOR YOUR ORGANIZATION</h4>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-[21px]' data-aos="fade" data-aos-delay={200}>
                    <div className='grid sm:grid-cols-2 gap-[21px]'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='fname' className='text-[12px] mb-[5px] flex text-textColor'>Full Name</label>
                            <input  value={formState.name} onChange={handleChange} placeholder='Enter Your Full Name' className='bg-[#ffffff12] text-textColor w-full backdrop-blur-[10px] px-[10px] h-[40px] border border-borderColor rounded-[4px] outline-none' type='text' id='fname' name='name' required />
                        </div>
                        <div>
                            <label  htmlFor='email' className='text-[12px] mb-[5px] flex text-textColor'>Email</label>
                            <input  value={formState.email} onChange={handleChange} placeholder='Enter Your Email' className='bg-[#ffffff12] text-textColor w-full backdrop-blur-[10px] px-[10px] h-[40px] border border-borderColor rounded-[4px] outline-none' type='email' id='email' name='email' required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='messagebody' className='text-[12px] mb-[5px] flex text-textColor'>Full Name</label>
                        <textarea  value={formState.message} onChange={handleChange} placeholder='Write a message...' className='bg-[#ffffff12] outline-none text-textColor w-full backdrop-blur-[10px] p-[10px] h-[120px] resize-none border border-borderColor rounded-[4px]' name="message" id="messagebody"></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className='bg-[#ffffff12] hover:opacity-75 transition-opacity backdrop-blur-[10px] max-w-[140px] h-[45px] border border-borderColor rounded-[30px] flex justify-center items-center gap-[8px]'>
                        <span > {isSubmitting ? "Sending..." : "Submit"}</span>
                        {!isSubmitting && <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9201 13.997L16.8025 9.10661C17.2264 8.68043 17.4644 8.10392 17.4644 7.503C17.4644 6.90207 17.2264 6.32557 16.8025 5.89939L11.9201 1.00894C11.7069 0.797119 11.4184 0.678222 11.1178 0.678222C10.8171 0.678222 10.5286 0.797119 10.3154 1.00894C10.2087 1.11467 10.1241 1.24046 10.0663 1.37905C10.0085 1.51764 9.97877 1.6663 9.97877 1.81644C9.97877 1.96657 10.0085 2.11523 10.0663 2.25382C10.1241 2.39241 10.2087 2.5182 10.3154 2.62393L14.0597 6.36568L1.54082 6.36568C1.23899 6.36568 0.94951 6.48551 0.73608 6.6988C0.522648 6.91208 0.402744 7.20136 0.402744 7.503C0.402744 7.80463 0.522648 8.09391 0.73608 8.3072C0.94951 8.52048 1.23899 8.64031 1.54082 8.64031L14.0597 8.64031L10.3154 12.3821C10.1011 12.5947 9.98011 12.8837 9.97905 13.1855C9.97798 13.4873 10.0969 13.7772 10.3097 13.9914C10.5225 14.2055 10.8117 14.3264 11.1137 14.3275C11.4157 14.3286 11.7058 14.2097 11.9201 13.997Z" fill="white" />
                        </svg>}
                    </button>
                     {error && <p className="text-[14px] mt-[10px] text-[#eb3838] ">*{error}</p>}
                     {isSubmitted && <p className="text-[14px] mt-[10px] text-mainColor ">*Your message has been sent successfully.</p> }
                </form>
            </div>
        </section>
    )
}

export default FooterForm
import React, { useState } from 'react'

type Props = {}

const Contact = (props: Props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const contactEmail = 'AlexandruD@gmail.com'

  const submitForm = () => {
    const date = new Date().toDateString()
    setSubject(date)
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    )
  }

  return (
    <section
      id="contact"
      className="body-font relative mt-20 border-t-2 border-[#a08540]"
    >
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium sm:text-3xl">
            Contact Me
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to contact me using this form.
          </p>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className=" text-sm leading-7 required:bg-pink-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-90 py-1 px-3 text-base leading-8 text-gray-700 outline-none 
                  transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200
                   dark:bg-[#dbd3c6]"
                />
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <label htmlFor="email" className="text-sm leading-7">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-90 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 dark:bg-[#dbd3c6]"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label htmlFor="message" className="text-sm leading-7">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-90
                   py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500
                    focus:bg-white focus:ring-2 focus:ring-indigo-200 dark:bg-[#dbd3c6]"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                onClick={submitForm}
                type="submit"
                className="mx-auto flex rounded border-0 bg-[#45301a] py-2 px-8 text-lg text-[#dbd3c6] hover:bg-opacity-80 focus:outline-none dark:bg-[#a08540] dark:hover:bg-black/10"
              >
                Send
              </button>
            </div>
            <div className="mt-8 w-full border-t-2 border-[#a08540] p-2 pt-8 text-center">
              <a className="">Thank you for your visit!</a>
              <p className="my-5 leading-normal">
                This page was made with NextJS
                <br />I am from Romania
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

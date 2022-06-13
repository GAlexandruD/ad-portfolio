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
      className="body-font relative bg-slate-500 text-gray-200"
    >
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-200 sm:text-3xl">
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
                  className=" text-sm leading-7 text-gray-200 required:bg-pink-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-90 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-90 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-90 py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                onClick={submitForm}
                type="submit"
                className="mx-auto flex rounded border-0 bg-gray-200 py-2 px-8 text-lg text-slate-700 hover:bg-gray-300 focus:outline-none"
              >
                Send
              </button>
            </div>
            <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
              <a className="text-gray-200">Thank you for your visit!</a>
              <p className="my-5 leading-normal">
                This page was made with NextJS
                <br />I am from Bucharest, Romania
              </p>
              <span className="inline-flex">
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

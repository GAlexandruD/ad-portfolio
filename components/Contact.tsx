import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaMapMarkedAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {}

const ContactMe = (props: Props) => {
  type Inputs = {
    name: string
    email: string
    subject: string
    message: string
  }

  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:alexandrud@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.name)} (${
      formData.email
    }) wrote:<br><br>
    ${encodeURIComponent(formData.message)}`
  }

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-center px-10 text-center md:text-left">
      <h3 className="text-center text-2xl uppercase tracking-[20px] text-gray-500 sm:absolute sm:top-10 ">
        Contact
      </h3>

      <div className="flex h-full max-h-[1000px] w-full flex-col items-center justify-evenly sm:mt-10 sm:space-y-10">
        <h4 className="mt-10 hidden text-center text-4xl sm:block">
          <span className="underline decoration-green-600/50">Lets talk!</span>
        </h4>

        <div className="sm:space-y-2">
          <div className="flex items-center justify-center space-x-5">
            <FaPhoneAlt className="h-5 w-5 animate-pulse text-green-600 sm:h-7 sm:w-7" />
            <p className="text-lg sm:text-2xl">+123 456 7890</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <FaEnvelope className="h-5 w-5 animate-pulse text-green-600 sm:h-7 sm:w-7" />
            <p className="text-lg sm:text-2xl">AlexandruD@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <FaMapMarkedAlt className="h-5 w-5 animate-pulse text-green-600 sm:h-7 sm:w-7" />
            <p className="text-lg sm:text-2xl">123 Developer Lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="rounded-md bg-green-600 py-5 px-10 text-lg font-bold text-black hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe

import React from 'react'
import { FaMapMarkedAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo
}

const ContactMe = ({ pageInfo }: Props) => {
  type Inputs = {
    name: string
    email: string
    subject: string
    message: string
  }

  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${
      pageInfo.email
    }?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      formData.name
    )} (${formData.email}) wrote:<br><br>
    ${encodeURIComponent(formData.message)}`
  }

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-center text-center sm:px-10 sm:pb-20 md:text-left">
      <h3 className="mt-4 text-center uppercase tracking-[20px] text-gray-500 sm:absolute sm:top-10 sm:text-2xl ">
        Contact
      </h3>

      <div className="flex h-full max-h-[1000px] w-full flex-col items-center justify-evenly sm:mt-10 sm:space-y-10">
        <h4 className="mt-10 hidden text-center text-4xl sm:block">
          <span className="underline decoration-green-600/50">Lets talk!</span>
        </h4>

        <div className="sm:space-y-2">
          <div className="flex items-center justify-center space-x-5">
            <FaPhoneAlt className="h-4 w-4 animate-pulse text-green-600 sm:h-7 sm:w-7" />
            <p className="sm:text-2xl">{pageInfo.phoneNumber}</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <FaEnvelope className="h-4 w-4 animate-pulse text-green-600 sm:h-7 sm:w-7" />
            <p className="sm:text-2xl">{pageInfo.email}</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <FaMapMarkedAlt className="h-4 w-4 animate-pulse text-green-600 sm:h-7 sm:w-7" />
            <p className="sm:text-2xl">{pageInfo.address}</p>
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
              autoComplete="off"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
              autoComplete="off"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
            autoComplete="off"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
            autoComplete="off"
          />
          <button
            type="submit"
            className="z-50 rounded-md bg-green-600 py-5 px-10 text-lg font-bold text-black hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe

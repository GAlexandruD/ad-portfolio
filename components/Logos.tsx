import Image from 'next/image'

const Logos = () => {
  return (
    <div className="flex content-center justify-center bg-gray-800">
      <div className="m-2">
        <div className="relative h-24 w-24">
          <Image
            src="/static/logos/react-logo.svg"
            alt="React Logo"
            layout="fill"
            objectFit="scale-down"
            className=""
          />
        </div>
        <p className="p-2 text-center text-2xl text-yellow-50">React</p>
      </div>

      <div className="m-2">
        <div className="relative h-24 w-24">
          <Image
            src="/static/logos/next-black-logo.svg"
            alt="React Logo"
            layout="fill"
            objectFit="contain"
            className="text-yellow-50"
          />
        </div>
        <p className="p-2 text-center text-2xl text-yellow-50">Next.js</p>
      </div>
    </div>
  )
}

export default Logos

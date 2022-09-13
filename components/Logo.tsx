import Image from 'next/image'
import path from 'path'

type Props = { path: string; name: string }

const Logo = (props: Props) => {
  return (
    <div className="mr-4 flex flex-col items-center justify-center p-4">
      <div className="relative mb-2 h-24 w-24 transition delay-150 duration-150 ease-in-out sm:hover:scale-110">
        <Image
          src={props.path}
          alt={`${props.name} Logo`}
          layout="fill"
          objectFit="scale-down"
        />
      </div>
      <p className="cursor-default text-center text-xl hover:text-[#545721] dark:hover:text-yellow-100">
        {props.name}
      </p>
    </div>
  )
}

export default Logo

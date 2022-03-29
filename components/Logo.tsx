import Image from 'next/image'
import path from 'path'

type Props = { path: string; name: string }

const Logo = (props: Props) => {
  return (
    <div className="relative">
      <div className="left-auto right-auto h-24  w-24">
        <Image
          src={props.path}
          alt={`${props.name} Logo`}
          layout="fill"
          objectFit="scale-down"
          className=""
        />
      </div>
      <p className=" w-24 p-2 text-center text-xl text-gray-300">
        {props.name}
      </p>
    </div>
  )
}

export default Logo

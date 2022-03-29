import Image from 'next/image'
import path from 'path'

type Props = { path: string; name: string }

const Logo = (props: Props) => {
  return (
    <div className="mb-10 mr-4">
      <div className="relative mb-2 h-24 w-24">
        <Image
          src={props.path}
          alt={`${props.name} Logo`}
          layout="fill"
          objectFit="scale-down"
        />
      </div>
      <p className="text-center text-xl text-gray-300">{props.name}</p>
    </div>
  )
}

export default Logo

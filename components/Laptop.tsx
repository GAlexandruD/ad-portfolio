import React from 'react'

type Props = {
  laptopDisplay: string
}

const Laptop = ({ laptopDisplay }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[236px] w-[350px] bg-[url('/static/laptop/display_frame.png')]">
        <div
          style={{
            backgroundImage: `url(${laptopDisplay})`,
          }}
          className={`absolute left-[15px] top-[18px] h-[200px] w-[321px] rounded-sm bg-blue-700 bg-cover bg-center bg-no-repeat`}
        ></div>
        <div className="z-50 ml-[15px] mt-[18px] h-[200px] w-[321px] bg-[url('/static/laptop/display.png')] opacity-30"></div>
      </div>
      <div className="h-[9px] w-[426px] bg-[url('/static/laptop/base.png')]"></div>
      <div className="h-[9px] w-[426px] rotate-180 bg-gradient-to-t from-gray-400/20 to-transparent"></div>
    </div>
  )
}

export default Laptop

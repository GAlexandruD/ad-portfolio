import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'
type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CloseModal = ({ setModal }: Props) => {
  const router = useRouter()
  return (
    <div className="absolute top-4 right-4 z-50 rounded-full bg-black/50 sm:right-8">
      <AiOutlineCloseCircle
        onClick={() => {
          setModal(false)
          router.replace('/#projects')
        }}
        className="h-10 w-10 cursor-pointer text-gray-200 hover:text-green-600 dark:text-gray-400 md:h-12 md:w-12 xl:h-14 xl:w-14"
      />
    </div>
  )
}

export default CloseModal

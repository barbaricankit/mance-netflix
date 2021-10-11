import { MdArrowBackIos } from 'react-icons/md'

const BackArrow = ({ func }) => {
  return (
    <div
      className="fw-arr hide absolute h-76 z-20 left-0 top-3 p-3 ml-0 flex items-center text-white cursor-pointer"
      onClick={() => func('Previous')}
    >
      <MdArrowBackIos className="text-5xl" />
    </div>
  )
}

export default BackArrow

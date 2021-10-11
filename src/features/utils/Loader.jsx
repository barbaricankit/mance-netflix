import { Oval } from 'react-loading-icons'
const Loader = ({ status }) => {
  return (
    status === 'loading' && (
      <Oval
        className="absolute top-0 right-0 left-0 bottom-0 m-auto"
        fill="#e50914"
      />
    )
  )
}

export default Loader

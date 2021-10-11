import { useNavigate } from 'react-router'
const MobileHeader = () => {
  const navigate = useNavigate()
  const handleSelection = (value) => {
    switch (value) {
      case 'Home':
        return navigate('/')
      case 'Series':
        return navigate('/series')
      case 'Films':
        return navigate('/films')
      case 'New & Popular':
        return navigate('/latest')
      default:
        return navigate('/')
    }
  }
  return (
    <div className="p-4 flex space-x-5 items-center">
      <header className="red-color text-2xl font-semibold">MANCEFLIX</header>
      <select
        id="nav"
        name="nav-options"
        onChange={(e) => handleSelection(e.target.value)}
      >
        <option value="Home">Home</option>
        <option value="Series">Series</option>
        <option value="Films">Films</option>
        <option value="New & Popular">New & Popular</option>
      </select>
    </div>
  )
}

export default MobileHeader

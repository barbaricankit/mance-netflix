import { NavLink } from 'react-router-dom'

const HomeOption = () => {
  return (
    <NavLink activeStyle={{ color: 'white', fontWeight: 'bold' }} to="/" end>
      <p className="text-color text-sm">Home</p>
    </NavLink>
  )
}

export default HomeOption

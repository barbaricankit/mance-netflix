import { NavLink } from 'react-router-dom'

const NewPopularOption = () => {
  return (
    <NavLink activeStyle={{ color: 'white', fontWeight: 'bold' }} to="/latest">
      <p className="text-color text-sm">New & Popular</p>
    </NavLink>
  )
}

export default NewPopularOption

import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <span className="font-bold">React 2024</span>

      <span>
        <Link to="/shop-react-ts/products" className="mr-2">
          Products
        </Link>
        <Link to="/shop-react-ts/about" className="mr-2">
          About
        </Link>
        <Link to="/shop-react-ts/profile">Profile</Link>
      </span>
    </nav>
  )
}

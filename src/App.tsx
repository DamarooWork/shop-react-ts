import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import { Navigation } from './components/Navigation'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/shop-react-ts/products" element={<ProductPage />} />
        <Route path="/shop-react-ts/about" element={<AboutPage />} />
        <Route path="/shop-react-ts/profile" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App

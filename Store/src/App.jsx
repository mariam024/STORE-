import { useState } from 'react'
import './App.css'
import Home from './component/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import About from './component/About/About'
import Footer from './component/Footer/Footer'
import Api from './component/Api/Api'
import ProductInfo from './component/ProductInfo/ProductInfo'
import NotFound from './component/NotFound/NotFound'

function App() {
  const [count, setCount] = useState(0)

  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/footer', element: <Footer /> },
        { path: '/product', element: <Api /> },
        { path: '/product/:id', element: <ProductInfo /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App

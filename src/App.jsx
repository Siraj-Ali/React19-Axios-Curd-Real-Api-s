import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Post } from './components/Posts'
import { Header } from './components/Layout/Header'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from './components/Layout/Layout'
import { Accordion } from './components/Accordion'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Post />
        },
        {
          path: "/faqs",
          element: <Accordion />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App

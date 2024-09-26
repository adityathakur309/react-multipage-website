import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.jsx'
import { AboutPage } from './pages/About.jsx'
import { CountryPage } from './pages/Country.jsx'
import { ContactPage } from './pages/Contact.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'
import { CountryDetails } from './components/UI/CountryDetails.jsx'


// router 
const router = createBrowserRouter([
    {
        path: "/", element: <App></App>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/", element: <HomePage />
            },
            {
                path: "/about", element: <AboutPage />
            },
            {
                path: "/country", element: <CountryPage />
            },
            {
                path: "/country/:id", element: <CountryDetails />
            },
            {
                path: "/contact", element: <ContactPage />
            },
        ]
    }
])
// end 

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}>
        <App />
    </RouterProvider>


)

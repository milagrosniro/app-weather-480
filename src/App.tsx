import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.module.scss'
import { Layout } from './components/Layout/Layout'
import Spinner from './components/Spinner'
import { useAppStore } from './stores/useAppStore'
import Contact from './views/Contact/Contact'


const  App = ()=> {

  const {auth} = useAppStore();

  const Home = lazy(()=>import('./views/Home/Home'))
  const Login = lazy(()=>import('./views/Login/Login'))

  return (
  <BrowserRouter>
  <Suspense fallback={<Spinner/>}>

  <Routes>
    <Route element={<Layout/>}>

    <Route
    path='/'
    element={
        
          !auth ? 
          <Login/> : <Home/>
    }
    />
    <Route
    path='/contact'
    element={<Contact/>}
    />
    </Route>
  </Routes>
  </Suspense>
  
  </BrowserRouter>
  )
}

export default App

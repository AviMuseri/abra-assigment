import './assets/style/main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AppHeader } from './assets/cmps/AppHeader.jsx'

import { HomePage } from './assets/Pages/HomePage.jsx'
import { PlaceIndex } from './assets/Pages/PlaceIndex.jsx'
import { PlaceEdit } from './assets/Pages/PlaceEdit.jsx'

function App() {
  return (
    <Router>
      <section className='app'>
        <AppHeader />
        <main className='main-layout'>

          <Routes>
            <Route element={<HomePage />} path='/' />
            <Route element={<PlaceIndex />} path='/place' />
            <Route element={<PlaceEdit />} path='/place/edit' />
          </Routes>
        </main>
      </section>
    </Router>
  )
}

export default App

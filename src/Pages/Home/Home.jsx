import './Home.css'
import React from 'react'
import SongList from '@/Components/SongList'
import SongDetails from '@/Components/SongDetails'
import { SongProvider } from '@/Context/SongContext'
import Header from '@/Components/Header'

const Home = () => {
  return (
    <>
      <SongProvider>
        <Header />
        <div className='home-container'>
          {/* usando el contexto */}
          <div className='izquierdo'>
            <h2>Lista de canciones</h2>
            <SongList />
          </div>
          <div className='derecho'>
            <h2>Detalle de canciones</h2>
            <SongDetails />
          </div>
        </div>
      </SongProvider>
    </>
  )
}

export default Home

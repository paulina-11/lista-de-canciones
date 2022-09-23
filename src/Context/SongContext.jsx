import { useEffect, useState, createContext, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'
// 1 hacer primero el import

// 2 creacion del contexto
const SongContext = createContext()

// 3 proveedor del contexto
// se encarga de donde se obtine en este caso del json y como se pasa la info

function SongProvider (props) {
  // estados globales
  const [list, setList] = useState([]) // data de la api
  //  info de la cancion seleccionada
  const [selectedSong, setSelectedSong] = useState({})
  const [loading, setLoading] = useState(true) // cuando los datos estan disponibles
  const [search, setSearch] = useState('')

  //   simular llamada a la API de un JSON

  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])
  //   todo lo que este disponible en mi contexto
  const value = {
    list,
    selectedSong,
    setSelectedSong,
    loading,
    search,
    setSearch
  }
  return (
    <SongContext.Provider
      value={value} {... props}
    />
  )
}

// 4 consumidor del contexto
const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// exportar el context
export {
  SongProvider,
  useSongContext
}

import { useSongContext } from '@/Context/SongContext'
import Cargando from '../Cargando/Cargando'
import './SongList.css'
// Importar Js

const SongList = () => {
  const context = useSongContext()

  return (
    <section>
      {context.loading
        ? <div> <Cargando /> </div>
        : context.list.filter(song => {
          if (context.search === '') {
            return song
          } else if (
            song.title.toLowerCase().includes(context.search.toLowerCase())) {
            return song
          }
          return null
        })
          .map((song) => (
            <div
              className='row-song' key={song.id}
              onClick={() => { context.setSelectedSong(song) }}
            >
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          ))}
    </section>
  )
}

export default SongList

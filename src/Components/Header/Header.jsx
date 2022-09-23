import { useSongContext } from '@/Context/SongContext'
import './Header.css'

const Header = () => {
  const context = useSongContext()
  const song = context.selectedSong

  const handleSearch = (e) => {
    context.setSearch(e.target.value)
  }

  return (
    song.title
      ? (
        <div className='nav'>
          Now Playing... {song.title}
          <input className='nav_input' placeholder='Busca la canción' type='text' onChange={handleSearch} />
        </div>)
      : <div className='nav'>Selecciona una canción...</div>
  )
}

export default Header

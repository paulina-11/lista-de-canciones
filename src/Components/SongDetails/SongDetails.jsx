/* eslint-disable react/jsx-indent */
import { useSongContext } from '@/Context/SongContext'

const SongDetails = () => {
  const context = useSongContext()
  return (
    <div>
      {
        context.selectedSong.title
          ? <div>
            <img src={`https://picsum.photos/seed/${context.selectedSong.id}/400/400`} alt='album' />
            <h1>{context.selectedSong.title}</h1>
            <h4>{context.selectedSong.artist}</h4>
            <h4>{context.selectedSong.year}</h4>
            </div>
          : <h1>Selecciona una canción</h1>
      }
    </div>
  )
}

export default SongDetails

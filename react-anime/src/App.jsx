import { useState, useRef } from 'react'
import {fetchDataAll} from './JS/api'
import ApiSingleDiv from './components/ApiSingleDiv'
import ListItem from './components/ListItem'
import Form from './components/Form'

function App() {
  const [animes, setAnimes] = useState([])
  const [watchList, setWatchList] = useState([])
  const animeSearch = useRef(null);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const search = animeSearch.current.value;
    
    const allAnimes = await fetchDataAll(search)
    const {data} = allAnimes;
    
    const animesList = [];
    for(let i = 0; i < data.length; i++){
      let newAnime = {}
      newAnime.id = parseInt(data[i]._id)
      newAnime.title = data[i].title
      newAnime.type = data[i].type
      newAnime.genres = data[i].genres;
      newAnime.image = data[i].image
      newAnime.synopsis = data[i].synopsis
      
      animesList.push(newAnime);
    }

    if(animesList.length === 0) alert('INVALID ANIME NAME')
    
    setAnimes(animesList)
    animeSearch.current.value = '';
  }
  
  const addAnime = () => {
    const {value, id} = event.target
  
    let watchAnime = {};
    watchAnime.title = id;
    watchAnime.image = value;

    setWatchList([...watchList, watchAnime]);
    watchAnime = {}
  }

  const handleDelete = (anime) => {
    const newWatchList = watchList.filter(
      (e) => e.title.toLowerCase() !== anime.title.toLowerCase()
    )

    setWatchList(newWatchList);
  }

  const clear = (e) => {
    e.preventDefault()
    setAnimes([]);
  }

  return (
    <>
      <div className='title-container'>
        <h1 className='title'>Anime Watch List</h1>
      </div>
      <div className="inner-body">
        <div className="search-container">
          <Form 
            onSubmit={handleSubmit} 
            onClick={clear} 
            ref={animeSearch} 
          />
          
          <div className='display-animes'>
            {animes.map((anime) => 
                <ApiSingleDiv 
                  id={anime.id}
                  title={anime.title}
                  image={anime.image}
                  genres={anime.genres[0]+' '+anime.genres[1]+' '+anime.genres[2]}
                  synopsis={anime.synopsis}
                  type={anime.type}
                  onClick={addAnime}
                />
            )}
          </div>
        </div>

        <div className="watchlist">
          <h3 className="watchlist-title">Personal Watch List</h3>
          <ul className='list'>
            {watchList.map((anime) => 
              <ListItem 
                title={anime.title}
                image={anime.image}
                onClick={() =>handleDelete(anime)}
                />
            )}
          </ul>
        </div>

      </div>
    </>
  )
}

export default App

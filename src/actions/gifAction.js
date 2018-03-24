import {FETCH_GIFS} from './types';

export function fetchGIFS(query){
  return function(dispatch){
      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=sbbGhe3uz8cDAjHqHUwHpR1Lp7SVUIQd&limit=5`)
      .then(res=>res.json())
      .then(posts=>

{
          console.log(posts);

        dispatch({
        type: FETCH_GIFS,
        payload: posts.data
      })

}
    )

  }
}

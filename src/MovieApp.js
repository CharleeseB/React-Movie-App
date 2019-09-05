import React, {Component} from 'react';
import Movie from './Movie';

class MovieApp extends Component{
    constructor(){
        super();
        console.log("YUURRRPPPP");
        this.state = {movieData: []}
    }

componentDidMount(){
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
    console.log('We in here NIGGA!');
    fetch(url).then((Response)=>{
        return Response.json();
        }).then((movieJson)=>{
            console.log(movieJson);
            this.setState({
                movieData: movieJson.results
            })
        })

}

render(){
    console.log("component rendered");
    const movies = this.state.movieData.map((movie, i)=>{
        return(
        <Movie key={i} movie={movie} />
        )
    })
    return(
        <div>
            {movies}
        </div>
    )
    
    }
}
export default MovieApp;

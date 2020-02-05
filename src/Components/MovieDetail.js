import React,{Component} from 'react'


class MovieDetail extends Component{

    getMovieId=()=> parseInt(this.props.match.params.id)

 

    render(){

        
        let movie=this.props.movies.find(m=> m.id===this.getMovieId())

        return(
            <div className="movie-detail-container">
                <h2>{movie.title}</h2>
                <img src={movie.img} alt={`${movie.title} cover`}/>
                <p>{movie.descrShort}</p>

            </div>
        )
    }
}
export default MovieDetail
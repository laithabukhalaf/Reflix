import React, { Component } from 'react'
import Movie from './Movie'



class Catalog extends Component{

    constructor(){
        super()
        this.state={
            searchValue:""
        }
    }

    updateSearch=event=> this.setState({searchValue:event.target.value})

    hasRentals=()=> this.props.movies.some(m=> m.isRented[this.props.currentId])

    moviesToDisplay=movie =>{
        return(
            movie.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
             ?<Movie currentId={this.props.currentId} updateRented={this.props.updateRented} updateBudget={this.props.updateBudget} clickedMovie={this.props.clickedMovie} movie={movie} key={movie.id} />
             :null
        )
    }

    getRentedSection =() =>{
        let rentedMovies=this.props.movies.filter(m=>m.isRented[this.props.currentId])

        return(
            <div>
                <p className="section">RENTED:</p>
                <div className="catalog-container">
                    {rentedMovies.map(m => this.moviesToDisplay(m))}
                </div>
            </div>
        )
    }
    
    

    render(){
        
        let user = this.props.users.find(u => u.id === this.props.currentId )
        return(
            <div id="catalog-page">
                <div id="search-conatiner">
                    <input type="text" placeholder="Search a movie" value={this.state.searchValue} onChange={this.updateSearch} />
                    {/* <p className="user-info">BUDGET: ${user.budget}</p> */}
                    {/* <p className="user-info">USER: {user.name.toUpperCase()}</p> */}
                </div>
                {this.hasRentals() ? this.getRentedSection() :null}
                <div>
                    <p className="section">Catalog:</p>
                    <div className="catalog-container">
                        {this.props.movies.map(m=>this.moviesToDisplay(m))}

                    </div>
                </div>
            </div>
               
               
        )
    }
}
export default Catalog
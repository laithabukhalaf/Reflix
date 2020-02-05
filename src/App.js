import React,{ Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./Components/Landing";
import Catalog from "./Components/Catalog";
import MovieDetail from "./Components/MovieDetail";
import Movie from "./Components/Movie";

class App extends Component{
  constructor(){
    super()
    this.state={
      
      movies: [
        {
          id: 0, isRented: false, title: "Tarzan", year: 1999, img:"https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out."
        },
        {
          id: 1, isRented: false, title: "The Lion King", img:"https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994,descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies."
        },
        {
          id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself."
        },
        {
          id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img:"https://musicart.xboxlive.com/7/8f4d1200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means."
        },
        {
          id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation."
        }
      ],
      users:[
        {id: 0, name:"laith",backgroundColor:"blue" },
        {id: 1, name: "john" ,backgroundColor:"red"},
        {id: 2, name:"shoobert",backgroundColor:"green"},
        {id: 3, name:"jona",backgroundColor:"yellow"}
    ],
    budget:20,
    currentID:-1

    }
  }

  

  clickedMovie=id=>{
    // let userId=this.state.currentID
    // let users = [...this.state.users]
    // let user = users.find(u=>u.id===userId)

    let movies=[...this.state.movies]
    let movie=movies.find(m=>{
      if(m.id===id){
        m.isRented=!m.isRented
        if(m.isRented){
          this.setState({budget:this.state.budget-3})
        }
        else{
          this.setState({budget:this.state.budget+3})
        }
      }
    })

    this.setState({movies})
    // this.setState({users})
  }
  

  

  

  

  updateUser=id=> this.setState({currentID:id})
  
  

  render() {

    let movies = this.state.movies
    const rentedMovies = []
        movies.find(movie => {
            if (movie.isRented) {
                rentedMovies.push(movie)
            }
        })

    return (
      <Router>
        <div className="App">
          <div id="link-header">
            <Link to='/'>Home</Link>
            <Link to='/catalog'>Catalog</Link>
            
            <div id="logo">
              <Link to='/'>REFLIX</Link>
            </div>
            
          </div>
          <div className="budget"><h4>Budget:{this.state.budget}</h4></div>
          {rentedMovies.length > 0 ? <div><h3>Rented Movies: <div class="catalog-container">{rentedMovies.map(movie => <Movie key={movie.id} movie={movie} clickedMovie={this.clickedMovie} />)}</div></h3></div> : <span></span>}

          <Route exact path='/' render={() => <Landing users={this.state.users} updateUser={this.updateUser} />} />
          <Route exact path='/catalog' render={() => <Catalog movies={movies} users={this.state.users} clickedMovie={this.clickedMovie} currentUserId={this.state.currentUserId} />} />
          <Route exact path='/movies/:id' render={({ match }) => <MovieDetail match={match} movies={movies} currentUserId={this.state.currentUserId} />} />
        </div>
      </Router>
      
    )
  }









}


export default App;

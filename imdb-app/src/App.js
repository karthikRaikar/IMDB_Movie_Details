import React from "react";
import TopContainer from "./components/TopContainer";
import MiddleContainer from "./components/MiddleContainer";
import BottomContainer from "./components/BottomContainer";
import MovieSearch from "./components/MovieSearch";
import "./App.css";

class App extends React.Component {
  state = {
    prevText: "",
    flag: false,
    result: "",
    moviee: ["Mulan", "Wonder Woman 1984", "No Time to Die", "F9", "Dune"],
    series: [
      "The Outsider",
      "Avenue 5",
      "Hunters",
      "Devs",
      "Locke & Key",
      "White House Farm"
    ],
    topRatedValues: [],
    topSeriesValues: [],
    Title: [],
    Poster: [],
    seriesTitle: [],
    seriesPoster: []
  };

  componentDidMount = async () => {
    let values = [];
    let seriesValue = [];
    // Movies fetch
    for (let i = 0; i < this.state.moviee.length; i++) {
      let topRated = await fetch(
        `http://www.omdbapi.com/?t=${this.state.moviee[i]}&i=tt3896198&apikey=a29dc437`
      );
      let topRatedResult = await topRated.json();
      values.push(topRatedResult);
    }

    // Series fetch
    for (let i = 0; i < this.state.series.length; i++) {
      let topSeries = await fetch(
        `http://www.omdbapi.com/?t=${this.state.series[i]}&i=tt3896198&apikey=a29dc437`
      );
      let topSeriesResult = await topSeries.json();
      seriesValue.push(topSeriesResult);
    }

    //passing top movies from an array
    this.setState({ topRatedValues: values });
    //passing top series from an array
    this.setState({ topSeriesValues: seriesValue });

    //creating movie title and poster variable
    let mTitle = [];
    let mPoster = [];

    //creating series title and poster variable
    let sTitle = [];
    let sPoster = [];

    // for getting movies title and poster
    for (let i = 0; i < this.state.topRatedValues.length; i++) {
      mTitle.push(this.state.topRatedValues[i].Title);
      mPoster.push(this.state.topRatedValues[i].Poster);
    }

    // for getting series title and poster
    for (let i = 0; i < this.state.topSeriesValues.length; i++) {
      sTitle.push(this.state.topSeriesValues[i].Title);
      sPoster.push(this.state.topSeriesValues[i].Poster);
    }

    this.setState({ Title: mTitle });
    this.setState({ Poster: mPoster });
    this.setState({ seriesTitle: sTitle });
    this.setState({ seriesPoster: sPoster });
    console.log(this.state.Title);
    console.log(this.state.Poster);
    console.log("series title", this.state.seriesTitle);
    console.log("series poster", this.state.seriesPoster);
  };

  handleChange = text => {
    this.setState({ prevText: text });
    console.log("current Text:", text);
    console.log("prev Text:", this.state.prevText);
    this.getImdb(text);
  };

  getImdb = async query => {
    let apiResult = await fetch(
      `http://www.omdbapi.com/?t=${query}&i=tt3896198&apikey=a29dc437`
    );
    let results = await apiResult.json();
    console.log(results.imdbRating);
    this.setState({ result: results });
    console.log(this.state.result);
    if (results.imdbRating === undefined) {
      console.log(
        "there is no such movie names, please enter valid movie names"
      );
      this.setState({ flag: false });
    } else {
      this.setState({ flag: true });
    }
  };

  back = back => {
    this.setState({ flag: back });
  };

  render() {
    return (
      <div className="main-container">
        {this.state.flag === true ? (
          <div className="MovieSearch">
            <h2 className="heading">Find IMDB Movie Ratings</h2>
            <TopContainer onChange={this.handleChange} />
            <hr />
            <MovieSearch result={this.state.result} back={this.back} />
          </div>
        ) : (
          <div>
            <h2 className="heading">Find IMDB Movie Ratings</h2>
            <TopContainer onChange={this.handleChange} />
            <hr />
            <h3>Top-Rated Movies</h3>
            <MiddleContainer
              mtitle={this.state.Title}
              mposter={this.state.Poster}
            />
            <hr />
            <h3>Series</h3>
            <BottomContainer
              stitle={this.state.seriesTitle}
              sposter={this.state.seriesPoster}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;

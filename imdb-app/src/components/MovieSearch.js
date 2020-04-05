import React from "react";
import "../App.css";

class MovieSearch extends React.Component {
  state = {
    back: false
  };

  onClick = () => {
    this.setState({ back: true });
    this.props.back(this.state.back);
  };

  render() {
    let { result } = this.props;
    return (
      <div className="movieResultContainer">
        <p
          style={{
            marginLeft: 20,
            color: "white",
            textDecoration: "underline",
            cursor: "pointer"
          }}
          onClick={this.onClick}
        >
          Back
        </p>
        <h4>
          <span
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img
              style={{ width: "70%", height: "450px", marginLeft: "-20px" }}
              src={result.Poster}
              alt={result.Title}
            ></img>
          </span>
        </h4>
        <hr style={{ width: "95%" }} />
        <h4>
          Title:
          <span className="FetchedDetails">{result.Title}</span>
        </h4>
        <h4>
          Released Date:
          <span className="FetchedDetails">{result.Released}</span>
        </h4>
        <h4>
          Director: <span className="FetchedDetails">{result.Director}</span>
        </h4>
        <h4>
          Language: <span className="FetchedDetails">{result.Language}</span>
        </h4>
        <h4>
          Actors: <span className="FetchedDetails">{result.Actors}</span>
        </h4>
        <h4>
          Country: <span className="FetchedDetails">{result.Country}</span>
        </h4>
        <h4>
          IMDB Ratings:{" "}
          <span className="FetchedDetails">{result.imdbRating}</span>
        </h4>
      </div>
    );
  }
}

export default MovieSearch;

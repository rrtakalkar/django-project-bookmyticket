import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios"
import MovieGenreList from "./MovieGenreList.Component";

class MovieTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteMovie = this.deleteMovie.bind(this)
    }

    deleteMovie() {
        axios.delete('http://localhost:8000/movies/' + this.props.movie.id, {
            headers: {
                "Accept": "application/json",
                "Autorization": "Token"
            }
        })
        .then(res => {
            console.log('Movie successfully deleted with : ' + res.data)
        })
        .catch(err => console.warn(err));
    }

    render() {
        return (
            <tr>
                <td>{this.props.movie.id}</td>
                <td>{this.props.movie.title}</td>
                <td>{this.props.movie.director}</td>
                <td>{this.props.movie.released_date}</td>
                <td><MovieGenreList movieGenres={this.props.movie.movie_genres} key={ this.props.movie.id }/></td>
                <td>
                    <Link className="btn btn-sm btn-primary" to={"/edit-movie/" + this.props.movie.id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteMovie} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        )
    }
}

export default MovieTableRow
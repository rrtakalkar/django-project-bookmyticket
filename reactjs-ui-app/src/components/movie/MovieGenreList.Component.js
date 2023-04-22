import React, { Component } from "react";
import axios from "axios"

class MovieGenreList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movieGenres: []
        }
    }

    componentDidMount() {
        this.props.movieGenres.map((genre, i) => {
            axios.get(genre, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
                  }
            })
                .then(res => {
                    this.setState(prevState => {
                        let genres =  prevState.movieGenres;
                        genres.push(res.data);
                        return { movieGenres: genres };
                    });
                })
                .catch(err => console.log(err));
        });
    }

    DataListView() {
        return this.state.movieGenres.map((genre, i) => {
            return <li>{genre.name}</li>;
        })
    }

    render() {
        return (
            <ul>
                { this.DataListView() }
            </ul>
        )
    }
}

export default MovieGenreList
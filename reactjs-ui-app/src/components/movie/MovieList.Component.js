import React, { Component } from "react";
import axios from "axios"
import Table from "react-bootstrap/Table"
import MovieTableRow from "./MovieTableRow.Component";

class MovieList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }    

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/v1/movies/',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
              }
        })
        .then(res => {
            this.setState({
                movies: res.data['results']
            });
        })
        .catch(err => console.log(err))
    }

    DataTable() {
        return this.state.movies.map((res, i) => {
            return <MovieTableRow movie={res} key={i} />
        })
    }

    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Director</th>
                            <th>Released Date</th>
                            <th>Genres</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MovieList
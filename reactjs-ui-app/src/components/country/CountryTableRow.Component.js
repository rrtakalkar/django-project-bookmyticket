import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios"

class CountryTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteCountry = this.deleteCountry.bind(this)
    }

    deleteCountry() {
        axios.delete('http://localhost:8000/api/v1/countries/' + this.props.obj.country.id, {
            headers: {
                "Accept": "application/json",
                "Autorization": "Token"
            }
        })
        .then(res => {
            console.log('Country successfully deleted with : ' + res.data)
        })
        .catch(err => console.warn(err));
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>
                    <Link className="btn btn-sm btn-primary" to={"/country/edit/" + this.props.obj.id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteCountry} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        )
    }
}

export default CountryTableRow
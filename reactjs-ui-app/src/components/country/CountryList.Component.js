import React, { Component } from "react";
import axios from "axios"
import Table from "react-bootstrap/Table"
import CountryTableRow from "./CountryTableRow.Component";

import { getCountries } from "./Country.Api"

class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        getCountries()
            .then(data => {
                this.setState({
                    countries: data['results']
                });
            })
            .catch(err => console.log(err));
    }


    DataTable() {
        return this.state.countries.map((res, i) => {
            return <CountryTableRow obj={res} key={i} />
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

export default CountryList
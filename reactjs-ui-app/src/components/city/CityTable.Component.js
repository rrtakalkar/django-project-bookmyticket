import React, { Component } from "react";
import Table from "react-bootstrap/Table"
import CityTableRow from "./CityTableRow.Component";

import { getCities } from "./City.Api"

class CityTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        }
    }
    componentDidMount() {
        getCities()
            .then(data => {
                console.log(data);
                this.setState({
                    cities: data
                });
            })
            .catch(err => console.log(err));
    }


    DataTable() {
        return this.state.cities.map((res, i) => {
            return <CityTableRow obj={res} key={i} />
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
                            <th>State</th>
                            <th>Country</th>
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

export default CityTable
import React, { Component } from "react";
import Table from "react-bootstrap/Table"
import CinemaTableRow from "./CinemaTableRow.Component";

import { getCinemas } from "./Cinema.Api"

class CinemaTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cinemas: []
        }
    }

    componentDidMount() {
        getCinemas()
            .then(data => {
                this.setState({                    
                    cinemas: data
                });
            })
            .catch(err => console.log(err));
    }


    DataTable() {
        return this.state.cinemas.map((res, i) => {
            return <CinemaTableRow obj={res} key={i} />
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
                            <th>Address</th>
                            <th>City</th>
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

export default CinemaTable
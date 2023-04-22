import React, { Component } from "react";
import Table from "react-bootstrap/Table"
import StateTableRow from "./StateTableRow.Component";

import { getStates } from "./State.Api"

class StateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            states: []
        }
    }

    componentDidMount() {
        getStates()
            .then(data => {
                this.setState({                    
                    states: data['results']
                });
            })
            .catch(err => console.log(err));
    }


    DataTable() {
        return this.state.states.map((res, i) => {
            return <StateTableRow obj={res} key={i} />
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

export default StateTable
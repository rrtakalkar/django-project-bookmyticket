import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryName from "./CountryName.Component";

class StateTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td><CountryName url={this.props.obj.country} /></td>
                <td>
                    <Link className="btn btn-sm btn-primary" to={"/country/edit/" + this.props.obj.id}>
                        Edit
                    </Link>
                </td>
            </tr>
        )
    }
}

export default StateTableRow
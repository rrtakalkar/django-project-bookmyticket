import React, { Component } from "react";
import { Link } from "react-router-dom";

class CinemaTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.city_name}</td>
                <td>
                    <Link className="btn btn-sm btn-primary" to={"/country/edit/" + this.props.obj.id}>
                        Edit
                    </Link>
                </td>
            </tr>
        )
    }
}

export default CinemaTableRow
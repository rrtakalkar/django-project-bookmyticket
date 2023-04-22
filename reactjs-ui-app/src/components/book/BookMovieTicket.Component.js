import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class BookMovieTicket extends Component {

    constructor(props){
        super(props);

        // setting up state
        this.state = {
            name: '',
            seats: '',
        }
    }

    render(){
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>

                    <Form.Select aria-label="Default select example">
                        <option>Select Movie</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>

                    <Form.Group controlId="MovieShow">
                    <Form.Label>Movie Show :</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Movie Show</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    

                    <Form.Group controlId="Name">
                        <Form.Label>Full Name :</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
                    </Form.Group>

                    <Form.Group controlId="Seats">
                        <Form.Label>Number of seats :</Form.Label>
                        <Form.Control type="text" value={this.state.seats} onChange={this.onChangeName} />
                    </Form.Group>
                    
                    <Button variant="success" size="lg" block="block" type="submit">Book</Button>
                    <Link to={"/countries"} className="btn btn-danger btn-block">Cancel</Link>
                </Form>
            </div>
        )
    }
}

export default BookMovieTicket;
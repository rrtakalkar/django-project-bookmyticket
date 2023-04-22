import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from "react-router-dom";

class EditCountry extends Component {
    constructor(props) {
        super(props);
        
        // setting up function
        this.onChangeName = this.onChangeName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        // setting up state
        this.state = {
            name: '',
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/v1/countries/1',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
              }
        })
        .then(res => {
            this.setState({
                id: res.data.id,
                name: res.data.name,                
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    onChangeName(e) {
        this.setState({name: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        axios.put('http://127.0.0.1:8000/api/v1/countries/'+this.state.id, null, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Token 3e42df3a32afd3c0b8161a69275ee20b04eaa5c2',
                  }
            },
            { params: {
                name: this.state.name,                
            }}).then(res => {
            if (res.status === 500) {
                console.log(res.data);
            } else {
                console.log("Server error with : "+res.data);
            }
        }).catch(err => console.warn(err));

        // Redirect to Country List
        this.props.history.push('/countries')
    }

    render() {
        
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Full Name :</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
                    </Form.Group>
     
                    <Button variant="success" size="lg" block="block" type="submit">Save</Button>
                    <Link to={"/countries"} className="btn btn-danger btn-block">Cancel</Link>
                </Form>

            </div>
        );
    }
}

export default EditCountry
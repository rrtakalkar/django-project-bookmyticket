import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

class Welcome extends Component {
    render() {
        return <Card>
        <Card.Body>
          <Card.Title>Welcome To BookMyTicket</Card.Title>
          <Card.Text>
            BookMyTicket offers online movie and events ticket bookings. UI developed using ReactJS, Node.js, Backend Rest API developed in Django, Django Rest Framework, and Database is sqlite3. 
          </Card.Text>
        </Card.Body>
      </Card>
    }
}

export default Welcome
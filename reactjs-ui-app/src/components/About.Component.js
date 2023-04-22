import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class About extends Component {
    render() {
        return <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>BookMyTicket Project</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
                <p><b>Developed By</b></p>
                A37. Rutuja Takalkar<br/>
                A45. Smita Choudhari
            </Modal.Body>
            </Modal.Dialog>
        </div>;
    }
}

export default About
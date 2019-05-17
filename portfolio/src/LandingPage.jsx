import React, { Component} from 'react';
import Button from "react-bootstrap/Button";


class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', margin: '20rem 0 0 0'}}>
                <div style={{color: 'white', fontSize: '2.5rem'}}>
                    Hello! I'm Lauren Whelan
                </div>
                <div style={{padding: '5rem 0 0 0', display: 'flex', justifyContent: 'space-between', width: '45rem'}}>
                    <Button variant='outline-danger' style={{fontSize: '1.3rem', width: '11.5rem'}}>Experience</Button>
                    <Button variant='outline-success' style={{fontSize: '1.3rem', width: '11.5rem'}}>About Me</Button>
                    <Button variant='outline-primary' style={{fontSize: '1.3rem', width: '11.5rem'}}>Contact</Button>
                </div>
            </div>
        )
    }

}

export default LandingPage;

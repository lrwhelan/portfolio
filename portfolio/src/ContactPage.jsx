import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class ContactPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleClick = () => {
        this.props.changePage('Landing');
    };

    render() {
        return(
            <div style={{padding: '5rem 5rem 5rem 5rem'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 0 2rem 0'}}>
                    <div style={{color: '#0076FF', fontSize: '1.6rem'}}>Contact</div>
                    <Button
                        variant='dark'
                        onClick={this.handleClick}
                    >
                        Back to Menu
                    </Button>
                </div>
                <div style={{border: '1px solid #0076FF', borderRadius: '0.2rem', color: 'white', padding: '1rem 1rem 1rem 1rem',  backgroundColor: 'black', fontSize: '1.2rem'}}>
                    Check out my work on GitHub or send me a LinkedIn message below.
                    <div>
                        <a href='www.google.com'>
                            <img src={'GitHub-Mark-Light-32px.png'} width='32' height='32' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage;

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class AboutPage extends Component {
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
                    <div style={{color: '#00FF3B', fontSize: '1.6rem'}}>About Me</div>
                    <Button
                        variant='dark'
                        onClick={this.handleClick}
                    >
                        Back to Menu
                    </Button>
                </div>
                <div style={{border: '1px solid #00FF3B', borderRadius: '0.2rem', color: 'white', padding: '1rem 1rem 1rem 1rem'}}>
                    This is some text.
                </div>
            </div>
        )
    }
}

export default AboutPage;

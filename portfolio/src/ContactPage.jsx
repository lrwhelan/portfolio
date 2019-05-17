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
            <div style={{margin: '5rem 5rem 5rem 5rem'}}>
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
                    <div style={{margin: '5rem 0 5rem 0', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <a href='https://github.com/lrwhelan'>
                            <img alt={'GitHub'} src={'GitHub-Mark-Light-64px.png'} width='64' height='64' />
                        </a>
                        <a href='https://www.linkedin.com/in/lauren-whelan'>
                            <img alt={'LinkedIn'} src={'In-White-72.png'} width='64' height='64' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage;

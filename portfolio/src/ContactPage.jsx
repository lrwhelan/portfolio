import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';


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
            <div className='page-container'>
                <div className='page-title'>
                    <div className='page-body contact-page-body'>Contact</div>
                    <Button
                        variant='dark'
                        onClick={this.handleClick}
                    >
                        Back to Menu
                    </Button>
                </div>
                <div className='page-body-content contact-page-body-content'>
                    Check out my work on GitHub or send me a LinkedIn message below.
                    <div className='page-logo-container'>
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

ContactPage.propTypes = {
    changePage: PropTypes.func.isRequired,
};

export default ContactPage;

import React, { Component} from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";


class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleExperienceClick = () => {
        this.props.changePage('Experience');
    };

    handleAboutClick = () => {
        this.props.changePage('About');
    };

    handleContactClick = () => {
        this.props.changePage('Contact');
    };

    render() {
        return (
            <div className='landing-page-container'>
                <div className='landing-page-title'>
                    Hello! I'm Lauren Whelan
                </div>
                <div className='landing-page-button-container'>
                    <Button
                        variant='outline-danger'
                        style={{fontSize: '1.3rem', width: '11.5rem'}}
                        onClick={this.handleExperienceClick}
                    >
                        Experience
                    </Button>
                    <Button
                        variant='outline-success'
                        style={{fontSize: '1.3rem', width: '11.5rem'}}
                        onClick={this.handleAboutClick}
                    >
                        About Me
                    </Button>
                    <Button
                        variant='outline-primary'
                        style={{fontSize: '1.3rem', width: '11.5rem'}}
                        onClick={this.handleContactClick}
                    >
                        Contact
                    </Button>
                </div>
            </div>
        )
    }

}

LandingPage.propTypes = {
    changePage: PropTypes.func.isRequired,
};

export default LandingPage;

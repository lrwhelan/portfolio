import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';


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
            <div className='page-container'>
                <div className='page-title'>
                    <div className='page-body about-page-body'>About Me</div>
                    <Button
                        variant='dark'
                        onClick={this.handleClick}
                    >
                        Back to Menu
                    </Button>
                </div>
                <div className='page-body-content about-page-body-content'>
                    <div>
                        I’m a fourth year Computer Engineering student at Memorial University of Newfoundland.
                    </div>
                    <br />
                    <div>
                        I’m passionate about development, and I love being creative and solving problems.
                    </div>
                    <br />
                    <div>
                        When I’m not working, you’ll find me travelling, painting, drawing or reading.
                    </div>
                </div>
            </div>
        )
    }
}

AboutPage.propTypes = {
    changePage: PropTypes.func.isRequired,
};

export default AboutPage;

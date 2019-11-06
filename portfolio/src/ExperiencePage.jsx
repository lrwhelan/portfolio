import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


class ExperiencePage extends Component {
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
                    <div className='page-body experience-page-body'>Experience</div>
                    <Button
                        variant='dark'
                        onClick={this.handleClick}
                    >
                        Back to Menu
                    </Button>
                </div>
                <div className='page-body-content experience-page-body-content'>
                    <div>
                        I’ve completed 16 months of work terms; eight of which I have been doing development work.
                    </div>
                    <br />
                    <div>
                        I’ve developed the majority of the front-end of a web application in React (which also included
                        implementing testing with Jest and Enzyme) for Nokia, and another in which I worked with CoLab Software
                        and took on a full-stack development role, implementing front-end features in
                        JavaScript and back-end work in Python using Flask and SQLAlchemy.
                    </div>
                    <br />
                    <div>
                        I'm currently working as a Full-Stack Developer Co-op for Wind River Systems.
                    </div>
                    <br />
                    <div>
                        At university, I’ve had the opportunity to program with languages like C++, Python and Java.
                    </div>
                    <br />
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

ExperiencePage.propTypes = {
    changePage: PropTypes.func.isRequired,
};

export default ExperiencePage;

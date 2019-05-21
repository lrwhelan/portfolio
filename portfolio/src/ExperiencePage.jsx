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
                        implementing testing with Jest and Enzyme) for Nokia, and another in which I worked with a start-up
                        company (who just recently got accepted to participate in Y Combinator - the first company to do so
                        in Atlantic Canada!) and took on a full-stack role, implementing front-end features in vanilla
                        JavaScript and back-end work in Python using Flask and SQLAlchemy.
                    </div>
                    <br />
                    <div>
                        At my latest work term I also had the opportunity to share my React knowledge with a team of
                        developers and helped create documentation and standards to facilitate the move of an application
                        from vanilla JavaScript to React.
                    </div>
                    <br />
                    <div>
                        At university, I’ve had the opportunity to program with languages like C++, Python and Java. For a
                        software design project, myself and my partner created a mobile android application for pet
                        adoption. Specifically, to allow people to view animals available for adoption in their area
                        and connect them to shelters. This application was written in Java, and had a REST API written
                        with PHP, served through Google Cloud.
                    </div>
                    <br />
                    <div>
                        I’m in my second-last semester and currently completing courses in topics like Computer Security,
                        Concurrent Programming and Digital Signal Processing.
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

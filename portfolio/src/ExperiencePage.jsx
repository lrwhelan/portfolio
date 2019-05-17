import React, { Component } from 'react';
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
            <div style={{margin: '5rem 5rem 5rem 5rem'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 0 2rem 0'}}>
                    <div style={{color: '#F00025', fontSize: '1.6rem'}}>Experience</div>
                    <Button
                        variant='dark'
                        onClick={this.handleClick}
                    >
                        Back to Menu
                    </Button>
                </div>
                <div style={{border: '1px solid #F00025', borderRadius: '0.2rem', color: 'white', padding: '1rem 1rem 1rem 1rem', backgroundColor: 'black', fontSize: '1.2rem'}}>
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

export default ExperiencePage;

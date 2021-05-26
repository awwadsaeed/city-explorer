import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class MovieCard extends React.Component {

    render() {

        return (
            <>
                 
                {(this.props.display && this.props.movieData.length !==0) && <ListGroup>
                    <ListGroup.Item>MOVIE</ListGroup.Item>  
                    <ListGroup.Item variant="primary">{this.props.movieData[0].title}</ListGroup.Item>
                    <ListGroup.Item variant="secondary">{this.props.movieData[0].overview}</ListGroup.Item>
                    <ListGroup.Item variant="success">{this.props.movieData[0].avgVotes}</ListGroup.Item>
                    <ListGroup.Item variant="danger">{this.props.movieData[0].totalVotes}</ListGroup.Item>
                    <ListGroup.Item variant="warning">{this.props.movieData[0].imagePath}</ListGroup.Item>
                    <ListGroup.Item variant="info">{this.props.movieData[0].popularity}</ListGroup.Item>
                    <ListGroup.Item variant="light">{this.props.movieData[0].releaseDate}</ListGroup.Item>
                </ListGroup>
                }
                {/* {this.props.display ===false && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                         Weather Data Error: data not found
                        </Card.Title>
                    </Card.Body>
                </Card>} */}

            </>
        )
    }
}

export default MovieCard;
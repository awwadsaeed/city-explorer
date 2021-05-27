import React from 'react';
import Card from 'react-bootstrap/Card';



class MovieCard extends React.Component {

    render() {

        return (
            <>
{/* style={{ width: '18rem'}} */}
                {(this.props.display && this.props.movieData.length !== 0) &&  this.props.movieData.map((element, idx) => {
                    return (<Card  key={idx} className='movieCard'>
                        <img variant="top" src={element.imagePath} className="movieImg" alt={element.title}/>
                        <Card.Body className='cBody'>
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Text className='movieTxt'>
                                {element.overview}<br />
                             <b>Total votes:</b> {element.totalVotes}<br />
                             <b>Avg votes:</b> {element.avgVotes}<br />
                             <b>Popularity:</b> {element.popularity}<br />
                             <b>Releas Date:</b> {element.releaseDate}<br />
                            </Card.Text>

                        </Card.Body>
                    </Card>)
                })
                }
                {/* // <ListGroup>
                //     <ListGroup.Item>MOVIE</ListGroup.Item>  
                //     <ListGroup.Item variant="primary">{this.props.movieData.title}</ListGroup.Item>
                //     <ListGroup.Item variant="secondary">{this.props.movieData.overview}</ListGroup.Item>
                //     <ListGroup.Item variant="success">{this.props.movieData.avgVotes}</ListGroup.Item>
                //     <ListGroup.Item variant="danger">{this.props.movieData.totalVotes}</ListGroup.Item>
                //     <ListGroup.Item variant="warning">{this.props.movieData.imagePath}</ListGroup.Item>
                //     <ListGroup.Item variant="info">{this.props.movieData.popularity}</ListGroup.Item>
                //     <ListGroup.Item variant="light">{this.props.movieData.releaseDate}</ListGroup.Item>
                // </ListGroup> */}
                {console.log(this.props.display)}
                {this.props.display ===false && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                         {this.props.movieData.message}
                        </Card.Title>
                    </Card.Body>
                </Card>}

            </>
        )
    }
}

export default MovieCard;
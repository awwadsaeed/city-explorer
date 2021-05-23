import React from 'react';
import Card from 'react-bootstrap/Card';


class InfoCard extends React.Component {
    render() {
        return (
            <>
                {this.props.display && <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.b63c5ecf5d90031a016f3169a46a0e31&center=${this.props.data.lat},${this.props.data.lon}`} alt='' />
                    <Card.Body>
                        <Card.Title>{this.props.data.display_name.split(',')[0]}, {this.props.data.display_name.split(',')[2]}</Card.Title>
                        <Card.Text>
                            latitude:   {this.props.data.lat}.<br />
                            longitude: {this.props.data.lon}.
                        </Card.Text>
                    </Card.Body>
                </Card>}
                {this.props.display === false && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Error {this.props.data.response.status}</Card.Title>
                        <Card.Text>
                           {this.props.data.message}
                        </Card.Text>
                    </Card.Body>
                </Card>}

            </>
        )
    }
}

export default InfoCard;
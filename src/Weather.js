import React from 'react';
import Card from 'react-bootstrap/Card';


class WeatherCard extends React.Component {

     constructor(props){
         super(props);
         this.state={
             weatherArr:this.props.weatherData,
         }
     }
    render() {
        const arrr = this.state.weatherArr;
        console.log(arrr);
        return (
            <>
                {this.props.display && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                         Weather Data
                        </Card.Title>
                        <Card.Text>
                            {/* {console.log(this.state.weatherData)}  */}
                            Date: {this.state.weatherArr[0].date}<br/>
                            Description: {this.state.weatherArr[0].description}<br/>
                            Date: {this.state.weatherArr[1].date}<br/>
                            Description: {this.state.weatherArr[1].description}<br/>
                            Date: {this.state.weatherArr[2].date}<br/>
                            Description: {this.state.weatherArr[2].description}<br/>

                        </Card.Text>
                    </Card.Body>
                </Card>}

            </>
        )
    }
}

export default WeatherCard;
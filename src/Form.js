import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import dotenv from 'dotenv';
import axios from 'axios';
let serverRoute = process.env.REACT_APP_SERVER;

class FormInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        }
    }

    getInput = (event) => {
        let searchRequest = '';
        searchRequest = event.target.value;
        this.setState({
            searchInput: searchRequest,
        })
    }
 
    getData = async (e) => {
        e.preventDefault();
        let reqUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.b63c5ecf5d90031a016f3169a46a0e31&q=${this.state.searchInput}&format=json`;
        try{
        let result = await axios.get(reqUrl);
        // console.log(result.data[0].display_name);
        this.props.setData(result.data[0],true);
        }catch(error){
           this.props.setData(error,false);
        }
        console.log(serverRoute);
        try{
            let weatherData = await axios.get(`http://localhost:3001/weather?searchQuery=amman&long=35.9239625&lat=31.9515694`);
            this.props.setWeather(weatherData.data,true);
            // console.log(weatherData.data);
            
        }catch(e){
            this.props.setWeather([],false);
        }
    }
    render() {
        return (
            <>
                <Form onSubmit={this.getData}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>City Name</Form.Label>
                        <Form.Control type="text" placeholder="City Name" onChange={this.getInput} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Explore
                    </Button>
                </Form>
            </>
        )
    }
}
export default FormInfo;
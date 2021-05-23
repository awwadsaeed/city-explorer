import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

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
        this.props.setData(result.data[0],true);
        }catch(error){
           this.props.setData(error,false);
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
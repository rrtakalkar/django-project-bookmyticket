import React, { Component } from "react";
import { getCountryByLink } from "../country/Country.Api"

class CountryName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            country_name:''
        }
    }

    componentDidMount(){
        getCountryByLink(this.props.url)
            .then(res => {
                this.setState({
                    country_name: res.name,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render(){
        return (
            <div>{this.state.country_name}</div>
        );
    }
}

export default CountryName;
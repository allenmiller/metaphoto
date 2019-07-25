import React, { Component } from "react";
import "./Home.css";

import { API } from "aws-amplify";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: "Initial time"
        };
    }

    getTime()  {
        let apiName = "https://2dcyvdocsc.execute-api.us-west-2.amazonaws.com/dev";   // TODO: define actual API
        let apiPath = "time";
        let myInit = {};
        API.get(apiName, apiPath, myInit).then(response => {
            this.setState({time: response.data});
        });
    };

    render() {
        this.getTime();
        return (
            <div className="Home">
                <div className="lander">
                    <h1>Metaphoto</h1>
                    <p>Keep track of all that photographic metadata</p>
                    <p>{this.state.time}</p>
                </div>
            </div>
        );
    }
}

import React, { Component } from "react";
import "./Home.css";

import { API } from "aws-amplify";

export default class Home extends Component {

    getTime = async () => {
        let apiName = "";   // TODO: define actual API
        let apiPath = "time";
        let myInit = {};
        let time =  await API.get(apiName, apiPath, myInit);
        this.setState({time: time});
    };

    render() {

        return (
            <div className="Home">
                <div className="lander">
                    getTime();
                    <h1>Metaphoto</h1>
                    <p>Keep track of all that photographic metadata</p>
                    <p>{this.state.time}</p>
                </div>
            </div>
        );
    }
}

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Container1} from "./container1"
import {Container2} from "./container2"
import {Container3} from "./container3"
import {Container4} from "./container4"
import {Container5} from "./container5"
import {Container6} from "./container6"
import {Container7} from "./container7"


class Web {
    render() {
        return (
            <>
                <Container1/>
                <Container2/>
                <Container3/>
                <Container4/>
                <Container5/>
                <Container6/>
                <Container7/>
            </>
    )}
}

ReactDOM.render(<Web/>,document.getElementById("app"));
import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        let curr_component = window.location.href.split("/")[3];
        return(
            <div>
                <span>
                <Link to='/Home'>
                    <Button bsStyle="primary">
                        Home
                    </Button>
                </Link>
                </span>
                { (curr_component === "" || curr_component === "Home")
                    ?
                        <span id="Employee-Login-Button">
                            <Link to='/EmployeeAuthentication'>
                                <Button bsStyle="primary">Employee Login</Button>
                            </Link>
                        </span>
                    :   null
                }
                <hr/>
            </div>
        )
    }
}

export default NavBar;

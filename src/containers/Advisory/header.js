import React, { Component } from 'react';
import { NavLink, Switch, Route, withRouter, Redirect } from 'react-router-dom';
// 样式
import "./header.scss";

import Advisor from './advisor';
import Analysis from './analysis';
import Product from './products';
import Plan from './plan';

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                {
                    title: 'Advisor',
                    path: '/adv',
                    name: "adv"
                }, {
                    title: 'Plan',
                    path: '/plan',
                    name: "plan"
                },
                {
                    title: 'Analysis',
                    path: '/analysis',
                    name: "ana"
                },
                {
                    title: 'Product',
                    path: '/product',
                    name: "product"
                }
            ]
        }

        this.go = this.go.bind(this);
    }

    go(path) {

    }

    render() {

        return (
            <div>
                <ul className="consult-header">
                    {
                        this.state.tabs.map(item => {
                            return (

                                <li className="consult-header-item" key={item.name} onClick={this.go.bind(this, item.path)}
                                >
                                    <NavLink to={"/advisory" + item.path} activeClassName="active">
                                        {item.title}
                                    </NavLink>
                                </li>

                            )
                        })
                    }
                </ul>
                <Switch>
                    <Route path={"/advisory/adv"} component={Advisor} />
                    <Route path={"/advisory/analysis"} component={Analysis} />
                    <Route path={"/advisory/product"} component={Product} />
                    <Route path={"/advisory/plan"} component={Plan} />
                    <Redirect to="/advisory/adv" exact />
                </Switch>

            </div>
        )
    }

}


Header = withRouter(Header)
export default Header;


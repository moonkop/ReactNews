import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,Link} from 'react-router-dom';

import IndexPage from './indexPage'
import ListPage from './listPage';


class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/list/123123">List</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={IndexPage}/>
                    <Route path='/list/:id' component={ListPage} ></Route>


                    {/*<Route component={IndexPage} path='/'></Route>*/}
                </div>


            </BrowserRouter>

        );
    }
}

export default Root;

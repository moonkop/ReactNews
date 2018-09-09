import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


class Header extends React.Component {

    render() {
        return (
            <header>
                <h1>这里是头部</h1>

                <ul>
                    <li><Link to={'/'}>首页</Link></li>
                    <li><Link to={'/list'}>列表页</Link></li>
                    <li><Link to={'/list/123123123'}>列表页</Link></li>

                </ul>
            </header>
        );
    }

}

export {Header as default};
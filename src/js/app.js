import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import PCIndex from './components/pc_index';
import MediaQuery from 'react-responsive';
import MobileIndex from './components/mobile_index'


class Root extends React.Component {
    render() {
        return (
            <div>
              <MediaQuery query='(min-width:1224px)'>
                  <PCIndex></PCIndex>
              </MediaQuery>
                <MediaQuery query='(max-width:1224px)'>
                    <MobileIndex></MobileIndex>
                </MediaQuery>
            </div>

        );
    }
}

ReactDOM.render(
    <Root/>,
    document.getElementById("app")
);

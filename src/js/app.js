import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import PCIndex from './components/pc_index';
import MediaQuery from 'react-responsive';
import MobileIndex from './components/mobile_index'


class Root extends React.Component {

    render() {


        let mediaThreshold = 800;

        return (
            <div>
              <MediaQuery query={"(min-width:"+mediaThreshold+"px)"}>
                  <PCIndex></PCIndex>
              </MediaQuery>
                <MediaQuery query={"(max-width:"+mediaThreshold+"px)"}>
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

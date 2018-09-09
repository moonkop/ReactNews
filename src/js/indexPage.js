var React = require("react");
var ReactDOM = require("react-dom");

import Header from './components/header';
import Footer from './components/footer';
import IndexBody from './components/indexBody';
import ListPage from './listPage';


//import 'antd/dist/antd.css';


class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <IndexBody time="5分钟" cost='100元'></IndexBody>
{/*<ListPage text='im from index page' ></ListPage>*/}


                <Footer></Footer>
            </div>
        );
    }
}

export {IndexPage as default};

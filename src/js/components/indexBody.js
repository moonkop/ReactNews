import React from 'react';
import IndexBodyChild from './indexBodyChild';
import ReactMixin from 'react-mixin';
import MixinLog from "./MixinLog";
import {Input,Menu,Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class IndexBody extends React.Component {
    constructor() {
        super();
        this.state = {userName: 'ahua', sex: 'girl'};


    }

    componentWillMount() {
        // console.log("IndexBody componentWillMount");

    }

    componentDidMount() {
        // console.log("IndexBody componentDidMount");
    }

    logout() {

        this.setState({userName: ''});
        MixinLog.log("logout");


    }

    order() {
        this.refs.price.value = this.props.cost;
    }

    handleClick(e)  {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {

        var boolInput = false;
        //  var logoutButton = ();
//
        // if (this.state.userName == "")
        // {
        //     logoutButton = "";
        // }
        return (
            <header>




                <h1>这里是我的身体</h1>
                <p>{this.state.userName == "" ? "用户还没有登录" : '用户名：' + this.state.userName + "性别：" + this.state.sex} </p>
                {this.state.userName == "" ? <br/> : (
                    <div>
                        <p><input type="button" value="logout" onClick={this.logout.bind(this)}/></p>
                        <p><input type="button" value='order' onClick={this.order.bind(this)}/></p>
                        <p><input type="text" ref='price'/></p>
                        <p><Input placeholder='Basic usage'/></p>
                    </div>

                )
                }

                <IndexBodyChild {...this.props}></IndexBodyChild>
            </header>
        );
    }

}

IndexBody.propTypes = {
    //  cost: React.PropTypes.number,
    // time: React.PropTypes.number
};

IndexBody.defaultProps = {
    cost: "不要钱",
    time: "一分钟体验"

};


export {IndexBody as default};

ReactMixin(IndexBody.prototype, MixinLog);

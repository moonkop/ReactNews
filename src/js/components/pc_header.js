import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import {Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, Checkbox,Modal} from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;


class PCHeader extends React.Component {


    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisable: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userId: 0

        };
    }

    handleClick(e) {
        this.setState({current: e.key});
        if(e.key='register')
        {
            this.setModalVisable(true);
        }
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
handleSubmit(e)
{

}

setModalVisable(value)
{
    this.setState({modalVisable: value});
}
    render() {
        const userShow = this.state.hasLogined
            ? <Menu.Item key='logout' class='register'>
                <Button type='primary' htmlType='button'>{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Link target='_blank' to='/'>
                    <Button type='dashed' htmlType='button'> 个人中心</Button>
                    <Button type="ghost" htmlType='button'>退出</Button>

                </Link>
            </Menu.Item>
            : <Menu.Item key='register' class='register'>
                <Icon type='appstore'/>注册/登录
            </Menu.Item>
        ;
        let {getFieldProps} = this.props.form;


        return (
            <header>

                <Row>
                    <Col span={2}></Col>
                    <Col span={4}> <a href="/" class="logo">
                        <img src="/images/logo.png"/>
                        <span>ReactNews</span>
                    </a></Col>
                    <Col span={16}>


                        <Menu
                            onClick={this.handleClick.bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key='top'>
                                <Icon type="appstore"/>头条
                            </Menu.Item>
                            <Menu.Item key='shehui'>
                                <Icon type="appstore"/>社会
                            </Menu.Item>
                            <Menu.Item key='guoji'>
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key='yule'>
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key='guonei'>
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key='keji'>
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            <Menu.Item key='shishang'>
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                            {userShow}

                        </Menu>
                        <Modal title='用户中心' warpClassName='vertical-center-modal' visible={this.state.modalVisable}
                               onCancel={() => this.setModalVisable(false)}
                               onOk={() => this.setModalVisable(false)} okText='关闭'>
                            <Tabs type='card'>
                                <TabPane tab='注册' key='2'>
                                    <Form onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input placeholder='请输入你的账号' {...getFieldProps('r_userName')}/>
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type='password' placeholder='请输入你的密码' {...getFieldProps('r_password')}/>
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input type='password' placeholder='请再次输入你的密码' {...getFieldProps('r_confirmPassword')}/>
                                        </FormItem>
                                        <Button type='primary' htmlType='submit'>注册</Button>
                                    </Form>
                                </TabPane>

                            </Tabs>
                        </Modal>


                    </Col>
                    <Col span={2}>


                    </Col>


                </Row>

            </header>
        );

    }
}

export default PCHeader= Form.create({})(PCHeader)
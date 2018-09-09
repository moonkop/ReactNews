import React from 'react';

class MoblieHeader extends React.Component {
    render() {
        return (
            <header>
                <a href="/">
                    <img src="/images/logo.png" alt="logo"/>
                    <span>ReactNews</span>
                </a>
            </header>
        );
    }
}

export {MoblieHeader as default};
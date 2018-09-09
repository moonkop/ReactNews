import React from 'react';
import MobileHeader from './mobile_header';


class MobileIndex extends React.Component {
    render() {
        return (
            <div id='mobile'>
                <MobileHeader></MobileHeader>

            </div>
        );
    }
}

export {MobileIndex as default};
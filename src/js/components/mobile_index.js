import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';



class MobileIndex extends React.Component {
    render() {
        return (
            <div id='mobile'>
                <MobileHeader></MobileHeader>
<MobileFooter></MobileFooter>
            </div>
        );
    }
}

export {MobileIndex as default};
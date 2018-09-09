import React from 'react';
var footerCss = require("../../css/footer.css");
class Footer extends React.Component {

    render()
    {
       // console.log(footerCss);

        return (
            <footer>
                <h1 class={footerCss.miniFooter}>这里是尾部</h1>

            </footer>
        );
    }

}

export {Footer as default};
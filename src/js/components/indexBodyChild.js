import React from 'react';

class IndexBodyChild extends React.Component {
    render() {
        return (
            <div>
                这是身体的价格
                <p> 费用</p>

                <p>
                    {this.props.cost}
                </p>
                <p>
                    {this.props.time}

                </p>
            </div>
        );
    }
}

export {IndexBodyChild as default}
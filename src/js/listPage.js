import React from 'react';
import ReactDOM from 'react-dom';

class ListPage extends React.Component {



    constructor()
    {
        super();
        this.state = {money: 100};

    }

    redraw()
    {
        console.log(this);
        this.setState({money: this.state.money+1});

    }

    render()
    {
        const { match, location, history } = this.props

        console.log(this.props);

        return (
            <div>
                <ul>
                    <li>{this.state.money}</li>
<li>{match.params.id}</li>

                    <li>shishabi</li>
                    <li>niyoubing</li>
                    <li>qusiba</li>
                    <li>{this.props.text}</li>
                </ul>
                <input type="button" value='redraw' onClick={this.redraw.bind(this)}/>


            </div>
        );
    }
}

export default ListPage;

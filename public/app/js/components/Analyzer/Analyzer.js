import React from 'react';
import request from 'superagent';

import { ProgressBar } from '../ProgressBar';

class Analyzer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            sentiment: '',
            error: false,
        }

        this._onClickHandler = this._onClickHandler.bind(this);
        this._onChangeHandler = this._onChangeHandler.bind(this);
    }

    _onClickHandler() {
        request.post('/emotions')
            .type('json')
            .send(this.state)
            .then((res) => {
                const data = JSON.parse(res.text);
                console.log(res.text);

                this.setState({
                    sentiment: data.emotion.document.emotion,
                    error: false
                })
            })
            .catch((err) => {
                this.setState({
                    error: err.response.body.error
                })
            })
    }

    _onChangeHandler(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const sentiments = Object.entries(this.state.sentiment);

        return (
            <div className="analyzer">
                <h3 className="analyzer__title">{this.props.title}</h3>
                <textarea
                    className="analyzer__textarea"
                    name="analyzer__textarea"
                    value={this.state.value}
                    onChange={this._onChangeHandler}
                    placeholder="Put in your message here"
                />
                <button className="analyzer__btn btn" onClick={this._onClickHandler}>Analyze</button>
                {this.state.error
                    ? <div className="analyzer__error">{this.state.error}</div>
                    : sentiments.map((sentiment, index) => (
                        <ProgressBar key={sentiment[0]} label={sentiment[0]} value={`${sentiment[1] * 100}%`} />
                    ))
                }
            </div>
        )
    }
}

export default Analyzer;

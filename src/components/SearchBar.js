import React from 'react';

class SearchBar extends React.Component {
    
    state = {
        term: ''
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" action="">
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        <input
                            placeholder="Please type what are you looking for..."
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
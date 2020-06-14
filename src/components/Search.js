import React from 'react';

class Search extends React.Component {
    state = { term : '' };
    onSubmit=(event)=>{
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };
    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onSubmit} className="ui form">
                <div className="filed">
                       <label>image search</label>
                <input
                 type="text" 
                 value = {this.state.term}
                 onChange={e => this.setState({ term: e.target.value })}  / >
                </div>
            </form>
        </div>
        );
    }

}
export default Search;

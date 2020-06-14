import React from 'react';
import unsplash from '../api/unsplash';
//import axios from 'axios';
import Search from './Search';
import ImageList from './ImageList';

class App extends React.Component {
    state={images : []};
    onSubmit = async (term) => {
       const response = await unsplash.get('/search/photos',  {
            params :  { query : term }

        //headers : {
               // Authorization : 'Client-ID _dHxziWCx3HFteAqEOIjAz_5Fzq0szChDExUmuaNUDg'}
        });
        this.setState({images : response.data.results});
    }
    render(){
    return (
    <div className= "ui container"  style={{ marginTop: '10px'}}>
        <Search  onSubmit={this.onSubmit}  />
        <ImageList images={this.state.images} />
    </div>
    
    );
}
}

export default App;

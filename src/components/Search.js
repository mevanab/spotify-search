import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

class Search extends Component {
    constructor(props){
        super(props)
        //Set initial state & searchType defaults to the all radioButton value
        this.state = { 
            query: '',
            searchType: 'album,artist,track', 
            results: {},
        }
    }

    //Run on radio button change to change search type eg:track,artist,album 
    typeChange(event){
        let newType = event.target.value;

        this.setState({searchType : newType})
        this.fetchData(this.state.query, newType);
    }

    //Run on text box change to change search query keyword
    queryChange(event){
        let newQuery = event.target.value;
        
        this.setState({query : newQuery})
        this.fetchData(newQuery, this.state.searchType);
    }

    //Run on both queryChange() & typeChange() to fetch new data. 
    //Both query & type need to be set to run successfully
    fetchData(query, type){
        if(query && type){
            //Construct URL to fetch data if both query & type are not empty. 
            //encodeURIComponent used to encode special characters typed by user
            let url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=${type}`;
            
            //Fetch new data using constructed URL
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.setState({results :  data});
            });
        } else {
            //return false if both query & type are not set properly
            console.log('Query or type not properly set.');
            return false;
        }
    }

    render() {
        //Styles utilized for TextField & RadioButton
        const styles = {
            textField: {
                width: '100%'
            },
            radioButton: {
                display: 'inline-block',
                width: 'auto',
                margin: '0 8px 0 0',
            },
        };

        return (
            <div className="Search">
                <TextField hintText="Type a song, artist or an album to search..." style={styles.textField} onChange={this.queryChange.bind(this)} />
                
                <RadioButtonGroup name="searchTypes" defaultSelected="album,artist,track" onChange={this.typeChange.bind(this)}>
                    <RadioButton value="album,artist,track" label="All" style={styles.radioButton} />
                    <RadioButton value="track" label="Tracks" style={styles.radioButton} />
                    <RadioButton value="artist" label="Artists" style={styles.radioButton} />
                    <RadioButton value="album" label="Albums" style={styles.radioButton} />
                </RadioButtonGroup>

            </div>
        );
    }
}


export default Search;
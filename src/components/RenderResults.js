import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {Tabs, Tab} from 'material-ui/Tabs';

class RenderResults extends Component {
    constructor(props) {
        super(props);

        //Set state for tabs
        this.state = {
            tab: 'tracksTab',
        };
    }

    render() {
        //Styles for Material-UI components
        const styles = {
            headline: {
                fontSize: 24,
                paddingTop: 16,
                marginBottom: 12,
                fontWeight: 400,
            },
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
        };

        //Set variables for Tracks, Artists & Albums
        let resultTracks, resultArtists, resultAlbums; 

        //If the property result contains tracks object, set its' items object to resultTracks variable (items name contains the objects of tracks)
        if(this.props.result.tracks){
            resultTracks = this.props.result.tracks.items;
        }

        //If the property result contains artists object, set its' items object to resultArtists variable (items name contains the objects of artists)
        if(this.props.result.artists){
            resultArtists = this.props.result.artists.items;
        }

        //If the property result contains albums object, set its' items object to resultAlbums variable (items name contains the objects of albums)
        if(this.props.result.albums){
            resultAlbums = this.props.result.albums.items;
        }

        return(
            <div className="ResultsWrapper" style={styles.root}>
                <Tabs tab={this.state.tab} onChange={this.changeTab}>
                    <Tab label="Tracks" tab="tracksTab">
                        <div>
                            <h2 style={styles.headline}>Tracks</h2>
                            <p>
                                Tracks go here.
                            </p>
                        </div>
                    </Tab>
                    <Tab label="Artists" tab="artistsTab">
                    <div>
                        <h2 style={styles.headline}>Artists</h2>
                        <p>
                            Artists go here.
                        </p>
                    </div>
                    </Tab>
                    <Tab label="Albums" tab="albumsTab">
                    <div>
                        <h2 style={styles.headline}>Albums</h2>
                        <p>
                            Albums go here.
                        </p>
                    </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default RenderResults;
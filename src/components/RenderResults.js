import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import { Tabs, Tab } from 'material-ui/Tabs';

import Track from './Track';

class RenderResults extends Component {
    constructor(props) {
        super(props);

        //Set state for tabs
        this.state = {
            value: 'tracksTab',
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
            tabStyles: {
                width: '100%'
            }
        };

        //Set variables for Tracks, Artists & Albums
        let resultTracks, resultArtists, resultAlbums; 

        //If the property result contains tracks object, set its' items object to resultTracks variable (items name contains the objects of tracks)
        if(this.props.result.tracks){
            resultTracks = this.props.result.tracks.items.map(track => {
                return(
                    <Track key={track.id} track={track} />
                );
            });
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
                <Tabs value={this.state.tab} onChange={this.changeTab} style={styles.tabStyles}>
                    <Tab label="Tracks" value="tracksTab">
                        <div>
                            <h2 style={styles.headline}>Tracks</h2>
                            <GridList cellHeight={200} style={styles.gridList} cols={5}>
                                {resultTracks}
                            </GridList>
                        </div>
                    </Tab>
                    <Tab label="Artists" value="artistsTab">
                        <div>
                            <h2 style={styles.headline}>Artists</h2>
                            <p>
                                Artists go here.
                            </p>
                        </div>
                    </Tab>
                    <Tab label="Albums" value="albumsTab">
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
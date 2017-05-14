import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import { List } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';

import Track from './Track';
import Artist from './Artist';
import Album from './Album';

class RenderResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'tracksTab',
            styles: {
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
            }
        };
    }

    //Function to display tracks if tracks object exists in result object else display message
    displayTracks() {
            if(this.props.result.tracks){
                    return(
                        <div className="tracks_wrapper">
                            <small className="results_count">Showing {this.props.result.tracks.items.length} of {this.props.result.tracks.total} results</small>

                            <GridList className="gridlist_wrapper" cellHeight={200} cols={5}>
                            {/* Map through items object and pass each track as a property to Track component */}
                            {this.props.result.tracks.items.map((track) =>
                                <Track key={track.id} track={track} />
                            )}
                            </GridList>
                        </div>
                    );
            } else {
                return(
                    <p>No tracks available for your search.</p>
                );
            }
    }

    //Function to display artists if artists object exists in result object else display message
    displayArtists() {
            if(this.props.result.artists){
                    return(
                        <div className="artists_wrapper">
                            <small className="results_count">Showing {this.props.result.artists.items.length} of {this.props.result.artists.total} results</small>

                            <List cellHeight={200} cols={5}>
                                {/* Map through items object and pass each artist as a property to Artist component */}
                                {this.props.result.artists.items.map((artist) =>
                                    <Artist key={artist.id} artist={artist} />
                                )}
                            </List>
                        </div>
                    );
            } else {
                return(
                    <p>No artists available for your search.</p>
                );
            }
    }

    //Function to display albums if albums object exists in result object else display message
    displayAlbums() {
            if(this.props.result.albums){
                    return(
                        <div className="albums_wrapper">
                            <small className="results_count">Showing {this.props.result.albums.items.length} of {this.props.result.albums.total} results</small>

                            <GridList className="gridlist_wrapper" cellHeight={200} cols={5}>
                            {/* Map through items object and pass each album as a property to Album component */}
                            {this.props.result.albums.items.map((album) =>
                                <Album key={album.id} album={album} />
                            )}
                            </GridList>
                        </div>
                    );
            } else {
                return(
                    <p>No albums available for your search.</p>
                );
            }
    }

    render() {
        return(
            <div className="ResultsWrapper" style={this.state.styles.root}>
                <Tabs value={this.state.tab} onChange={this.changeTab} style={this.state.styles.tabStyles}>
                    <Tab label="Tracks" value="tracksTab">
                        <div>
                            <h2 style={this.state.styles.headline}>Tracks</h2>
                            {this.displayTracks()}
                        </div>
                    </Tab>
                    <Tab label="Artists" value="artistsTab">
                        <div>
                            <h2 style={this.state.styles.headline}>Artists</h2>
                            {this.displayArtists()}
                        </div>
                    </Tab>
                    <Tab label="Albums" value="albumsTab">
                        <div>
                            <h2 style={this.state.styles.headline}>Albums</h2>
                            {this.displayAlbums()}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default RenderResults;
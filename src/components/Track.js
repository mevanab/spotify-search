import React, { Component } from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';

class Track extends Component {
    render() {
        let id, name, album, artists, preview_url, image, combinedArtists;

        //If track is available destructure object and assign to variables
        if(this.props.track){
            ({id, name, album, artists, preview_url} = this.props.track);

            //Take first image of album array as track image
            image = album.images[0].url;

            //Combine all artists of track
            combinedArtists = artists.map((artist) => {
                return artist.name;
            }).join(" & ");
        }

        return(
            <GridTile action={preview_url} key={name} title={name} subtitle={<span>by <b>{combinedArtists}</b></span>} actionIcon={<IconButton href={preview_url} target="_blank"><PlayArrow color="white" /></IconButton>}>
                <img src={image} />
            </GridTile>
        );
    }
}

export default Track;
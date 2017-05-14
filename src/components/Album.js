import React, { Component } from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import AvAlbum from 'material-ui/svg-icons/av/album';

class Album extends Component {
    render() {
        let id, name, artists, images, external_urls, album_url, image, combinedArtists;

        //If album is available destructure object and assign to variables
        if(this.props.album){
            ({id, name, images, artists, external_urls} = this.props.album);

            //If images array is greater than 0 take first image of images array as album image else display default image
            if(images.length > 0){
                image = images[0].url;
            }

            //Combine all artists of track
            combinedArtists = artists.map((artist) => {
                return artist.name;
            }).join(" & ");

            //Assign spotify album url from external_urls object
            album_url = external_urls.spotify;
        }

        return(
            <GridTile key={name} title={name} subtitle={<span>by <b>{combinedArtists}</b></span>} actionIcon={<IconButton href={album_url} target="_blank"><AvAlbum color="white" /></IconButton>}>
                <img src={image} />
            </GridTile>
        );
    }
}

export default Album;
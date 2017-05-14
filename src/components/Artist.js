import React, { Component } from 'react';
import ActionInfoOutline from 'material-ui/svg-icons/action/info-outline';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

class Artist extends Component {
    render() {
        let id, name, external_urls, images, image, artist_url;

        //If track is available destructure object and assign to variables
        if(this.props.artist){
            ({id, name, external_urls, images} = this.props.artist);

            //Take first image of images array as artist image
            if(images.length > 0){
                image = images[0].url;
            }

            //Assign spotify artist url from external_urls object
            artist_url = external_urls.spotify;
        }

        return(
            <ListItem primaryText={name} leftAvatar={<Avatar src={image} />} rightIcon={<ActionInfoOutline href={artist_url} />} />
        );
    }
}

export default Artist;
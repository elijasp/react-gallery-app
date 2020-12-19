import React from 'react';
import Photo from '../Photo/Photo';
import classes from './PhotoList.module.css';

const photoList = (props) => {
    const photos = props.photos.map(photo => {
        return <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} key={photo.id}/>
    });

    return(
        <div className={classes.PhotoList}>
            <h2>Results</h2>
            <ul>{photos}</ul>
        </div>
     
    );
}

export default photoList;
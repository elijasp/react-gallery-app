import React from 'react';
import Photo from '../Photo/Photo';
import classes from './PhotoList.module.css';
import NotFound from '../NotFound/NotFound';

const photoList = (props) => {
    if(props.isInitialised) {
        const photos = props.photos.map(photo => {
            return <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} key={photo.id}/>
        });
        
        if(props.photos.length > 0) {
            return(
                <div className={classes.PhotoList}>
                    <h2>Results</h2>
                    <ul>{photos}</ul>
                </div>
            );
        }else {
           return <NotFound />;
        }
    }
    return(
        <div>
            <h3>Search to view images</h3>
        </div>
    );
}

export default photoList;
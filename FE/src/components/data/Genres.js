import React from 'react';

const Genres = ({ genresname, image }) => {
    const divStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'fit-content',
    };

    return (
        <div className='genres' style={divStyle}>
            <div className='genresname'>
                {genresname}
            </div>
        </div>
    );
};

export default Genres;

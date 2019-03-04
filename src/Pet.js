import React from 'react';
import { hot } from 'react-hot-loader';


class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location } = this.props;

    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo['@size'] === 'pn');
    }
    return (
      <div className="petCard">
        <img className="petCard_pic" src={photos[0].value} alt={name} />
        <div className="petCard_info">
          <p className="petCard_info_name">{name}</p>
          <p className="">
            {animal}-{breed}-{location}
          </p>
        </div>
      </div>
    );
  }
}
export default hot(module)(Pet);

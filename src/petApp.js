import React from 'react';
import Pet from './Pet';
import pf from 'petfinder-client';
import { hot } from 'react-hot-loader';
import './styles/petFinder.scss';

const petfinder = pf({
  key: 'd701d214a36a7409f9af21b50eb247fe',
  secret: '3e5a47f7a2b0350e5c8279d310f19f7d',
});

class PetApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petsList: [],
    };
  }

  componentDidMount() {
    petfinder.pet
      .find({ output: 'full', location: 'Seattle, WA' })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [ data.PetFinderApi.pets.pet ];
          }
        } else {
          pets = [];
        }
        this.setState({
          petsList: pets,
        });
      });
  }

  render() {
    return (
      <div className="petFinder">
        {this.state.petsList.map(pet => {
          let breed;

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(',');
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city},${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

export default hot(module)(PetApp);

import React, { Component } from 'react';

import Modal from './Modal/Modal';

import './Character.css';

class Character extends Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  hideModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const singleCharacter = this.props.singleCharacter;
    const show = this.state.show;

    return (
      <div className='card'>
        <div className='quick-info'>
          <div className='card-img quick-info-image'>
            <img src={singleCharacter.img} alt={singleCharacter.name} />
          </div>
          <div className='quick-info-info'>
            <h2 className='character-name'>{singleCharacter.name}</h2>
            <button onClick={this.showModal}>See More</button>
          </div>
        </div>

        <Modal show={show} hideModal={this.hideModal}>
          <div className='mod'>
            <div className='mod-card-img'>
              <img
                src={singleCharacter.img}
                alt={singleCharacter.name}
                width='100%'
              />
            </div>
            <div className='mod-card-info'>
              <h2 className='mod-character-name'>{singleCharacter.name}</h2>
              <p className='mod-character-nickname'>
                <strong>Nickname:</strong> {singleCharacter.nickname}
              </p>
              <p className='mod-character-portrayed'>
                <strong>Portrayed:</strong> {singleCharacter.portrayed}
              </p>
              <p className='mod-character-dob'>
                <strong>DOB:</strong> {singleCharacter.birthday}
              </p>
              <p className='mod-character-status'>
                <strong>Status:</strong> {singleCharacter.status}
              </p>
              <p className='mod-character-occupation'>
                <strong>Occupation:</strong>
              </p>
              <ul className='mod-character-occupation-list'>
                {singleCharacter.occupation.map((occ, key) => (
                  <li key={key}>{occ}</li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Character;

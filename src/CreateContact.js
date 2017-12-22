
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import formSerialize from 'form-serialize';

class CreateContact extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const values = formSerialize(e.target, { hash: true });
    this.props.onCreateContact(values);
  }
  render() {
    return (
      <div>
        <Link className='close-create-contact' to='/'>Close</Link>
        <form className='create-contact-form' onSubmit={this.handleSubmit}>
          <ImageInput
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64} />
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name' />
            <input type='text' name='email' placeholder='Email' />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContact;

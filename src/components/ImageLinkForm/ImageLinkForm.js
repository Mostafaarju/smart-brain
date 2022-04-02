import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Git it a try. '}
      </p>
      <div className='flex justify-center'>
        <div className='form pa4 br3 shadow-5 flex justufy-center'>
          <input
            className='f4 pa2 w-70 center'
            type='link'
            onChange={onInputChange}
          />
          <button
            onClick={onButtonSubmit}
            className='cursor-pointer w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

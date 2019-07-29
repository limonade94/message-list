
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  
  handleChange = (e) => {
    const { value } = e.target;
    const { onInputChange } = this.props;
    onInputChange(value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onAddMessage } = this.props;
    onAddMessage();
  } 

  onFocus = (e) => {
    e.target.placeholder = '';
    const textArea = document.querySelector('#form-container > textarea');    
    textArea.classList.add('insetStyle');
  }

  onBlur = (e) => {
    e.target.placeholder = 'Your message here...';
    const textArea = document.querySelector('#form-container > textarea');
    textArea.classList.remove('insetStyle');
  }

  render() {

    const {
      inputValue, selectedCategory, onCategoryChecked,
    } = this.props;

    const categories = ['public', 'private'];
    const enabled = !inputValue.trim();
    const charactersAllowed = 300;

    return (
      <form id="form-container" onSubmit={this.handleSubmit}>
        <textarea
          maxLength={charactersAllowed}
          placeholder="Your message here..."
          value={inputValue}
          onChange={this.handleChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <p>
          <span className="charCount">          
            {
              charactersAllowed - inputValue.length
            }
          </span>characters remained.
        </p>
        <section id="radio-wrapper">
          {
            categories.map(category => (
              <label htmlFor={category} key={category}>
                <input
                  id={category}
                  type="radio"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={onCategoryChecked}
                />
                {category}
              </label>
            ))
          }
        </section>
        <button type="submit" disabled={enabled}>Send</button>
      </form>
    );
  }
}

Form.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChecked: PropTypes.func.isRequired,
};

export default Form;

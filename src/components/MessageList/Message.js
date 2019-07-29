import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { MdDelete } from 'react-icons/md';

const Message = ({ id, category, content, publishedDate, onDeleteMessage }) => {
  const optionStyles = classNames('radio-btn-label', {
    public: category === 'public',
    private: category === 'private',
  });
  return (
    <li className="msg-content">
      <p className="content">{content}</p>
      <p className={optionStyles}>{category}</p>      
      <time className="current-dateTime">Published at : {publishedDate}</time>      
      <MdDelete
        className="btn-delete"
        onClick={onDeleteMessage(id)} 
      />
    </li>
  );
};

Message.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  onDeleteMessage: PropTypes.func.isRequired,
};

export default Message;

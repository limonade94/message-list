import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const Messages = ({ list, onDeleteMessage }) => (
  <ul id="message-list">
    {
      list.map(message => (
        <Message
          key={message.id}
          onDeleteMessage={onDeleteMessage}
          {...message}
        />
      ))
    }
  </ul>
);

Messages.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onDeleteMessage: PropTypes.func.isRequired,
};

export default Messages;

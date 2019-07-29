import React, { Component } from 'react';
import uuid from 'uuid';

import MainHeader from 'src/components/layout/MainHeader';
import Form from 'src/components/MessageList/Form';
import Messages from 'src/components/MessageList/Messages';
import Counter from 'src/components/MessageList/Counter';
import messageData from 'src/assets/data.js';

import './index.scss';

class MessageList extends Component {

  state = {
    messages: messageData,
    inputMessage: '',
    category: 'public',
  };

  // Add new message
  handleAddMessage = () => {
    const { messages, inputMessage, category } = this.state;

    const date = new Date();
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const publishedDate = `${day}-${month}-${year}`;

    // New message structure
    const newMessage = {
      id: uuid(),
      content: inputMessage,
      publishedDate,
      category,
    };

    // Add new message to array (list of messages)
    const newMessages = [newMessage, ...messages];

    this.setState({
      messages: newMessages,
      category: 'public',
      inputMessage: '', // Empty textarea field for next new input : friendly UX purpose :-)
    });
  };

  handleInputChange = (value) => {
    this.setState({
      inputMessage: value,
    });  
  };

  handleCategoryChecked = (e) => {
    const category = e.target.value;
    this.setState({ category });
  };

  handleDeleteMessage = id => () => {
    const { messages } = this.state;
    const newMessageList = messages.filter(message => message.id !== id);
    this.setState({
      messages: newMessageList,
    });
  };

  render() {
    const { messages, inputMessage, category } = this.state;
    const count = messages.length;
    return (
      <React.Fragment>
        <MainHeader title="Tell us more ..." />
        <Form
          onAddMessage={this.handleAddMessage}
          inputValue={inputMessage}
          onInputChange={this.handleInputChange}
          selectedCategory={category}
          onCategoryChecked={this.handleCategoryChecked}
        />
        <Counter count={count} />
        <Messages
          list={messages}
          onDeleteMessage={this.handleDeleteMessage}
        />
      </React.Fragment>
    );
  }
}

export default MessageList;

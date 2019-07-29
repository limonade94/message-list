import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

import MessageList from 'src/components/MessageList';

const rootComponent = <MessageList />;

const target = document.getElementById('root');

render(rootComponent, target);

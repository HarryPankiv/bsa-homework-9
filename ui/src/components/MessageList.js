import React from 'react';
import { Item, Message } from './MessageListStyle';
import { Button } from '../containers/ChatStyles';

export default ({ messages, onDelete }) => 
    messages && messages.map( (message, index) => (
        <Item key={index}>
            <Message>{message.text}</Message>
            <Button onClick={ () => onDelete && onDelete(message._id)}>delet dis</Button>
        </Item>
    ))
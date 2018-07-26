import React, { Component } from 'react';
import { Form, MessageInput, Button } from './ChatStyles';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMessage, fetchAllMessages, deleteMessage } from '../actions/actions';
import { allMessages, isMessagesFetching } from '../reducers/index';
import MessageList from '../components/MessageList';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.initialValues.text
        }
    }

    componentDidMount() {
        this.props.actions.fetchAllMessages();
    }

    handleFieldChange = ({ target }) => {
		this.setState( state => ({
			...state,
			[target.name]: target.value
        }))
    }

    handleDelete = id => {
		this.props.actions.deleteMessage(id);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.actions.addMessage(this.state)
        this.setState({text: ''})
    }

    render() {
        const { text } = this.state;
        const { allMessages } = this.props;

        return (
            <div>
                <Form>
                    <MessageInput type="text" placeholder="Enter message..." onChange={this.handleFieldChange} name="text" value={text}/>
                    <Button primary onClick={this.handleSubmit}>send</Button>
                </Form>
                <MessageList 
                    messages={allMessages} 
                    onDelete={this.handleDelete}    
                />
            </div>
        )
    }
}


Chat.defaultProps = {
	initialValues: {
		text: ''
	}
}

Chat.propTypes = {
    // allMessages: PropTypes.array,
	// disabled: PropTypes.bool,
	// text: PropTypes.string.isRequired,
	initialValues: PropTypes.shape({
		text: PropTypes.string,
	})
}


const mapStateToProps = state => ({
    allMessages: allMessages(state)
    // isFetching: isMessagesFetching(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchAllMessages, addMessage, deleteMessage }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
import { schema } from 'normalizr';

export const messages = new schema.Entity(
	'byId',
	{},
	{
		idAttribute: '_id'
	}
)

export const arrayOfMessages = new schema.Array(messages);
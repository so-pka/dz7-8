import {SEND_MESSAGE, replyMessage, REPLY_MESSAGE, lightChat, unLightChat} from '../actions/messageActions';

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            setTimeout(() =>
                store.dispatch(replyMessage(action.chatId, store.getState().messageReducer.nextId)), 2000);
            break;
        }
        case REPLY_MESSAGE: {
            store.dispatch(lightChat(action.chatId));
            setTimeout(() => store.dispatch(unLightChat()), 1000);
            break;
        }
    }
    return next(action);
}


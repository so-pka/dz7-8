export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const sendMessage = (chatId, messageId, text) => ({
    type: SEND_MESSAGE,
    chatId,
    messageId,
    text,
});

export const REPLY_MESSAGE = '@@message/REPLY_MESSAGE';
export const replyMessage = (chatId, messageId) => ({
    type: REPLY_MESSAGE,
    chatId,
    messageId,
});

export const LIGHT_MESSAGE = '@@message/LIGHT_CHAT';
export const lightChat = (chatId) => ({
    type: LIGHT_MESSAGE,
    chatId,

});

export const UNLIGHT_MESSAGE = '@@message/UNLIGHT_CHAT';
export const unLightChat = () => ({
    type: UNLIGHT_MESSAGE,

});


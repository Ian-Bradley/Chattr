import userReducer from './features/user.feature.js';
import usersReducer from './features/users.feature.js';
import messagesReducer from './features/messages.feature.js';
import channelsReducer from './features/channels.feature.js';
import userTotalReducer from './features/userTotal.feature.js';
import preferencesReducer from './features/preferences.feature.js';

const rootReducer = {
    user: userReducer,
    users: usersReducer,
    messages: messagesReducer,
    channels: channelsReducer,
    userTotal: userTotalReducer,
    preferences: preferencesReducer,
}
export default rootReducer;
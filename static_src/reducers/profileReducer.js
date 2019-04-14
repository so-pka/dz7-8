import update from 'react-addons-update';
import { START_PROFILE_LOADING, SUCCESS_PROFILE_LOADING, ERROR_PROFILE_LOADING} from '../actions/profileActions';

const initialStore = {
    name: '',
    email: '',
};

export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case START_PROFILE_LOADING: {
            return update(store, {
                name: { $set: 'начало загрузки' },
            });
        }
        case SUCCESS_PROFILE_LOADING: {
             return update(store, {
               name: { $set: action.payload.name },
               email: { $set: action.payload.email },
            });
        }
        case ERROR_PROFILE_LOADING: {
            return update(store, {
                name: { $set: 'неудачная загрузка профиля' },
            });
        }

        default:
            return store;
    }
}
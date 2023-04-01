import { LOGIN_USER, SIGNUP_USER } from "./types";

export default function (state = {}, action) {
    switch (action. type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload};
        
        case SIGNUP_USER:
            return {...state, signUpSuccess: action.payload};

        default:
            return state;
    }
}
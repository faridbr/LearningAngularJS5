import * as AuthActions from "./auth.actions" 

export interface IState {
    token: string,
    authenticated: boolean
}

const initialState: IState = {
    token: null,
    authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions){
    switch(action.type){
        case AuthActions.SIGNUP:
        case AuthActions.SIGNIN:
            return {...state, authenticated: true};
        case AuthActions.LOGOUT:
            return {...state, token: null, authenticated: false};
        case AuthActions.SET_TOKEN:
            return {...state, token: action.payload, authenticated: true};
        default:
            const token = localStorage.getItem('token');
            return {...state, token: token, authenticated: token != null && token.length > 0};
    }
}
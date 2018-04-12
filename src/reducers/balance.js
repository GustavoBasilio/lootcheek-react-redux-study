import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies'

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balanceReducer = (state = 0, action) => {

    switch (action.type) {
        case constants.SET_BALANCE:
            state = action.balance;
            break;

        case constants.DEPOSIT:
            state = state + action.deposit;
            break;

        case constants.WITHDRAW:
            state = state - action.withdraw;
            break;
        
        default:
            state = parseInt(read_cookie(BALANCE_COOKIE),10) || state;

    }

    bake_cookie(BALANCE_COOKIE, state);
    
    return state;

};

export default balanceReducer;
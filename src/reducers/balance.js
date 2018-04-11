import * as constants from '../actions/constants';

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
                break;
    }

    return state;

};

export default balanceReducer;
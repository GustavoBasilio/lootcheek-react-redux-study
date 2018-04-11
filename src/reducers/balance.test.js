import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe("balanceReducer", () => {
    it('sets a balance', () => {
        const balance = 10;

        expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance})).toEqual(balance);
    });

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, {type: constants.DEPOSIT, deposit})).toEqual(initialState+deposit);
    });

    it('withdraw into the balance', () => {
        const withdraw = 5;
        const initialState = 10;
        const action = {
            type: constants.WITHDRAW,
            withdraw
        };

        expect(balanceReducer(initialState, action)).toEqual(initialState-withdraw);
    });
});
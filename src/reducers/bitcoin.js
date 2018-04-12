import { FETCH_BITCOIN } from "../actions/constants";

const bitcoin = (state = {}, action) => {
    switch(action.type) {
        case FETCH_BITCOIN:
            state = action.bitcoin
    }

    return state;
};

export default bitcoin;
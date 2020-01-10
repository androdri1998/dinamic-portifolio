import { layoutConfig } from "../../database/configFrontend";

export const actionTypesLayoutReducer = {
    CHANGE_LAYOUT: "@layout/CHANGE_LAYOUT"
};

const INITIAL_STATE = layoutConfig;

const layoutReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type){
        case actionTypesLayoutReducer.CHANGE_LAYOUT:
            return {...state, layout: payload}
        default: 
            return state
    }
}

export const changeLayout = (payload) => {
    return {
        type: actionTypesLayoutReducer.CHANGE_LAYOUT,
        payload
    }
}

export default layoutReducer;
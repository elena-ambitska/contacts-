const moduleName = "contacts";
const GET_CONTACTS = `${moduleName}/GET_CONTACTS`;
const SET_FILTER = `${moduleName}/SET_CONTACTS`;
const SET_PAGINATION = `${moduleName}/SET_PAGINATION`;
const SET_GENDER= `${moduleName}/SET_GENDER`;
const SET_NATIONALITY= `${moduleName}/SET_NATIONALITY`;

const defaultState = {
    contacts: [],
    filter:"",
    page: 1,
    gender: "",
    nationality:""
}

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: payload
            }
        case SET_FILTER:
        return {
                ...state,
                   filter: payload
            }
        case SET_PAGINATION:
            return {
                ...state,
                page: payload
            }
        case SET_GENDER:
            return {
                ...state,
                gender: payload
            }
        case SET_NATIONALITY:
            return {
                ...state,
                nationality: payload
            }
        default:
            return state;
    }
}

export const getContacts = (gender,nationality, page) => async (dispatch) => {
    try {
        await fetch(`https://randomuser.me/api/?gender=${gender}&results=10&page=${page}&nat=${nationality}`)
            .then((response) =>
                response.json())
            .then(({results}) => dispatch({type: GET_CONTACTS, payload: results}))

    } catch (error) {
        console.log(error)
    }

}

export const setFilter = (filter) => async (dispatch) => {
    dispatch({type: SET_FILTER, payload: filter});
}

export const setPagination = (page) => async (dispatch) => {
    dispatch({type:SET_PAGINATION, payload: page});

}
export const setGender = (gender) => async (dispatch) => {
    dispatch({type:SET_GENDER , payload: gender});
}

export const setNationality = (nationality) => async (dispatch) => {
    dispatch({type:SET_NATIONALITY, payload: nationality});
}
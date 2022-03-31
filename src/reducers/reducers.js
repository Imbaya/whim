import { InitialState } from "../actions/action"


export const OriginReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_ORIGIN':
                return{
                    latitude:action.payload.latitude,
                    longitude:action.payload.longitude,
                    address:action.payload.address,
                    name:action.payload.name
                }
            default:
                return state
    }
}

export const DestinationReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_DESTINATION':
                return{
                    latitude:action.payload.latitude,
                    longitude:action.payload.longitude,
                    address:action.payload.address,
                    name:action.payload.name
                }
            default:
                return state
    }
}

export const requestDriver = (state = InitialState,action)=>{
    switch(action.type){
        case 'REQUEST_DRIVER' :
            return{
                ...state,
                loading: true
            }
    }
}

export const requestDriverSuccess = (state = InitialState,action)=>{
    switch(action.type){
        case 'REQUEST_DRIVER_SUCCESS' :
            return{
                loading: false,
                driver : payload.driver 
            }
    }
}

export const requestDriverFaluire = (state = InitialState,action)=>{
    switch(action.type){
        case 'REQUEST_DRIVER_FAILURE' :
            return{
                loading: false,
                error: payload.error
            }
    }
}



export const InitialState ={
    loading: false,
    driver: "",
    vehiclemodel:"",
    regno: "",
    number:"",
    error:""
}

export const REQUEST_DRIVER = 'REQUEST_DRIVER'
export const REQUEST_DRIVER_SUCCES = 'REQUEST_DRIVER_SUCCESS'
export const REQUEST_DRIVER_FAILURE = 'REQUEST_DRIVER _FAILURE'

const requestDriver = ()=>{
    return{
        type: REQUEST_DRIVER
    }
}

const requestDriversuccess = ()=>{
    return{
        type: REQUEST_DRIVER_SUCCES,
        payload: driver,vehiclemodel,regno,number
    }
}

const requestDriverFailure  = ()=>{
    return{
        type: REQUEST_DRIVER_FAILURE,
        payload:error
    }
}
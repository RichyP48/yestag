import axiosInstance from "../Interceptor/AxiosInterceptor"


const getPatient=async(id: any)=>{
    return axiosInstance.get('/profile/patient/get'+ id)
    .then((Response:any)=>Response.data)
    .catch((error:any)=>{throw error})

}
const updatePatient=async(patient: any)=>{
    return axiosInstance.put('/profile/patient/update', patient)
    .then((Response:any)=>Response.data)
    .catch((error:any)=>{throw error})

}
export {getPatient, updatePatient}
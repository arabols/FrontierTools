import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { RenderingRequest, RenderingResponse } from "../../models/rendering";


const structureAPI = axios.create({
    baseURL: "https://secure2.uat.frontierssi.com/StructureAPI/api",
    timeout: 10000,
});

//axios.defaults.baseURL = "https://secure2.uat.frontierssi.com/StructureAPI/api"


structureAPI.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { status, statusText } = error.response!;
    toast.error(`Request failed with ${status} ${statusText}`);

    return Promise.reject(error);
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
    get: <T>(url: string) => structureAPI.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => structureAPI.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => structureAPI.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => structureAPI.delete<T>(url).then(responseBody),
}

const RenderingTool = {
    render: (renderRequest: RenderingRequest[]) => request.post<RenderingResponse>('/StructureRendering/RenderStructureToPng', renderRequest)
}

const agent = {
    RenderingTool,
}

export default agent;
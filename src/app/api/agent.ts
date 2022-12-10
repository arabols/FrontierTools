import axios, { AxiosResponse } from "axios";
import { RenderingRequest, RenderingResponse } from "../../models/rendering";


axios.defaults.baseURL = "https://secure2.uat.frontierssi.com/StructureAPI/api"

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const RenderingTool = {
    render: (renderRequest: RenderingRequest[]) => request.post<RenderingResponse>('/StructureRendering/RenderStructureToPng', renderRequest)
}

const agent = {
    RenderingTool,
}

export default agent;

export interface RenderingRequest {
    barcode: string;
    structure: string;
}


export interface RenderingResponse {
    CustomerId: string,
    Data: Data[],
    RowCount: number,
    IsSuccessful: boolean,
    IsPartiallySuccessful: boolean,
    BatchProcessResult: string,
    BatchResultDetails: string,
    Status: string,
    ErrorMessage: string,
    Error: string
}

interface Data {
    Barcode: string,
    StructurePng: string
    Converted: boolean,
    ErrorMessage: string
}
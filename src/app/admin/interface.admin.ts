export interface Routes {
    path: string,
    label: string,
    items?: Routes[],
    icon?: string
};

export interface Model {
    id: string,
    color: string,
    size: string
}

export interface Product {
    id: string,
    name: string,
    description?: string,
    models?: Model[]
}

export enum StatusResponse {
    'success',
    'error',
    'warning'
}
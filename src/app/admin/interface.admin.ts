export interface Routes {
    path: string,
    label: string,
    items?: Routes[],
    icon?: string
};

export interface Model {
    id: string,
    color: string,
    hex?: string
    size: string,
    stock: number
}

export interface Product {
    id: string,
    name: string,
    amount: number | string,
    description?: string,
    models?: Model[]
}

export interface ServiceResponse {
    message: string,
    status: string
}
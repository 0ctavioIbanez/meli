export interface Routes {
    path: string,
    label: string,
    items?: Routes[],
    icon: string
};

export interface Model {
    id: string,
    color: string,
    hex?: string
    size?: string,
    stock: number
}

export interface Product {
    id: string,
    name: string,
    amount: number,
    price: number,
    description?: string,
    models?: Model[],
    image?: string
}

export interface ServiceResponse {
    message: string,
    status: string,
    response?: any
}

export interface ModelActionClick{
    action: string,
    modelId: string
}

export interface Sale {
    id: string
    productId: string,
    modelId: string,
    quantity: number,
    total: number
}

export interface Purchasing {
    quantity: number,
    price: number,
    productId: string,
    modelId: string,
    image?: string,
    name: string,
    models: Model[]
}
export interface IOrderChart {
    count: number;
    status:
    | "waiting"
    | "ready"
    | "on the way"
    | "delivered"
    | "could not be delivered";
}

export interface IOrderTotalCount {
    total: number;
    totalDelivered: number;
}

export interface ISalesChart {
    date: string;
    title: "Order Count" | "Order Amount";
    value: number;
}

export interface IOrderStatus {
    id: number;
    text: "Pending" | "Ready" | "On The Way" | "Delivered" | "Cancelled";
}

export interface IUser {
    id: number;
    username: string;
    password: string;
    fullname: string;
    email: string;
    phone_number: string;
    address: string;
    status: boolean;
}

export interface IIdentity {
    id: number;
    name: string;
    avatar: string;
}

export interface IAddress {
    text: string;
    coordinate: [string, string];
}

export interface IFile {
    name: string;
    percent: number;
    size: number;
    status: "error" | "success" | "done" | "uploading" | "removed";
    type: string;
    uid: string;
    url: string;
}

export interface IEvent {
    // date: string;
    status: string;
}

export interface IStore {
    id: number;
    gsm: string;
    email: string;
    title: string;
    isActive: boolean;
    createdAt: string;
    address: IAddress;
    products: IProduct[];
}

export interface ICourier {
    id: number;
    name: string;
    surname: string;
    email: string;
    gender: string;
    gsm: string;
    createdAt: string;
    accountNumber: string;
    licensePlate: string;
    address: string;
    avatar: IFile[];
    store: IStore;
}
export interface IOrder {
    id: number;
    user: IUser;
    date: string;
    status: string;
    address: IAddress;
    payment: string;
    note: string;
    price: number;
    quantity: number;
    events: IEvent[];
}

export interface IProduct {
    id: number;
    food_name: string;
    quantity: number;
    description: string;
    image: string;
    discount: number;
    price: number;
    category: ICategory;
    star: number;
}
export interface Iorderdetail {
    id: number;
    food: IProduct;
    order: IOrder;
}

export interface ICategory {
    id: number;
    name_category: string;
    // isActive: boolean;
}

export interface IOrderFilterVariables {
    q?: string;
    store?: string;
    user?: string;
    status?: string[];
}

export interface IUserFilterVariables {
    q: string;
    status: boolean;
    gender: string;
    isActive: boolean | string;
}

export interface ICourier {
    id: number;
    name: string;
    surname: string;
    gender: string;
    gsm: string;
    createdAt: string;
    isActive: boolean;
    avatar: IFile[];
}

export interface IStatistica {
    id: number;
    status: string;
    user: IUser;
    address: string;
    price: number;
    payment: string;
    note: string;
    date: string;
    quantity: number;
}
export interface IReview {
    id: number;
    order: IOrder;
    user: IUser;
    star: number;
    createDate: string;
    status: "pending" | "approved" | "rejected";
    comment: string[];
}
export type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

export interface CrudOperation<T, U> {
    findMany(): Promise<T[]>;
    create(data: U): Promise<T>;
    update(id: number, data: U): Promise<T>;
    delete(id: number): Promise<void>;
}
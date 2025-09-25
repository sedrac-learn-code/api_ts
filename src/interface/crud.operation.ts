export interface CrudOperation<T, U> {
    findMany(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    create(data: U): Promise<T>;
    update(id: number, data: U): Promise<T>;
    delete(id: number): Promise<void>;
}
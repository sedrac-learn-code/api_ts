import { CrudOperation } from "../interface/crud.operation";
import { Customer, PrismaClient } from "../generated/prisma";
import { CustomerDTO } from "../dto/customer.dto";
import { CustomerQuery } from "../interface/customer.query";

export class CustomerRepository implements CrudOperation<Customer, CustomerDTO> {
    private instance: CustomerQuery;

    constructor(private customerQuery?: CustomerQuery) {
        this.instance = customerQuery || new PrismaClient();
    }

    async findMany(): Promise<Customer[]> {
        return this.instance.customer.findMany();
    }

    async findById(id: number): Promise<Customer | null> {
        return this.instance.customer.findFirst({
             where: { id },
        });
    }    

    async create(data: CustomerDTO): Promise<Customer> {
        return this.instance.customer.create({ data });
    }

    async update(id: number, data: CustomerDTO): Promise<Customer> {
        return this.instance.customer.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<void> {
        await this.instance.customer.delete({
            where: { id },
        });
    }

    async findFirstName(name: string): Promise<Customer | null> {
        return this.instance.customer.findFirst({
            where: { name },
        });
    }

    async findFirstEmail(email: string): Promise<Customer | null> {
        return this.instance.customer.findFirst({
            where: { email },
        });
    }    

}
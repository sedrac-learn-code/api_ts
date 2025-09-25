import { Customer } from "../generated/prisma";
import { CustomerDTO } from "../dto/customer.dto";
import { CustomerRepository } from "../repository/customer.repository";

export class CustomerService {
    private customRepository;

    constructor() {
        this.customRepository = new CustomerRepository();
    }

    async findMany(): Promise<Customer[]> {
        return this.customRepository.findMany();
    }

    async create(data: CustomerDTO): Promise<Customer> {
        return this.customRepository.create(data);
    }

    async update(id: number, data: CustomerDTO): Promise<Customer> {
        return this.customRepository.update(id, data);
    }

    async delete(id: number): Promise<void> {
        await this.customRepository.delete(id);
    }
  
}
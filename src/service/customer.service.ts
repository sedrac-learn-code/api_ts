import { Customer } from "../generated/prisma";
import { CustomerDTO } from "../dto/customer.dto";
import { CustomerRepository } from "../repository/customer.repository";
import { ValidationException } from "../exception/validation.exception";

export class CustomerService {
    private customRepository;

    constructor() {
        this.customRepository = new CustomerRepository();
    }

    async findMany(): Promise<Customer[]> {
        return this.customRepository.findMany();
    }

    async create(data: CustomerDTO): Promise<Customer> {
        this.validationCustomerDTO(data);
        return this.customRepository.create(data);
    }

    async update(id: number, data: CustomerDTO): Promise<Customer> {
        this.validationCustomerDTO(data);
        return this.customRepository.update(id, data);
    }

    async delete(id: number): Promise<void> {
        await this.customRepository.delete(id);
    }

    async validationCustomerDTO(data: CustomerDTO): Promise<void> {
        if(await this.customRepository.findFirstEmail(data.email)) throw new ValidationException('Email exists');
        if(await this.customRepository.findFirstName(data.name)) throw new ValidationException('Name exists');
    }
  
}
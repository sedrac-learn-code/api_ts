import { CustomerDTO } from "../dto/customer.dto";
import { Customer } from "../generated/prisma/client";

export interface CustomerQuery {
  customer: {
    findMany(): Promise<Customer[]>;
    create(args: { data: CustomerDTO }): Promise<Customer>;
    update(args: { where: { id: number }; data: CustomerDTO }): Promise<Customer>;
    delete(args: { where: { id: number } }): Promise<Customer>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    findFirst(args?: any): Promise<Customer| null>;
  };
}
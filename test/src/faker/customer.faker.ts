import { CustomerDTO } from "../../../src/dto/customer.dto";
import { faker } from '@faker-js/faker';

export class CustomerFaker {

    static generate(): CustomerDTO {
        return { name: faker.person.fullName(), email: faker.internet.email() };
    }

}
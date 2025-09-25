import { assert, describe, expect, test, } from 'vitest'
import { CustomerRepository } from '../../../src/repository/customer.repository';
import { PrismaClient } from '../generated/prisma/client';
import { CustomerFaker } from '../faker/customer.faker';

describe('Customer Repository', () => {
  const repository = new CustomerRepository(new PrismaClient());

  test('findMany: Get all customers', async ()  => {
    await repository.create(CustomerFaker.generate());
    const items = await repository.findMany();
    expect(items.length).toBeGreaterThan(0);
    expect(items).toBeInstanceOf(Array);
  });

  test('create: Register customer', async ()  => {
    const item = await repository.create(CustomerFaker.generate());
    assert.exists(item.id);
  });  
  
});



import { describe, expect, test, } from 'vitest';
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
    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('name');
    expect(item).toHaveProperty('email');
    expect(item.id).toBeGreaterThan(0);
  });  

  test('update: Update customer', async ()  => {
    const item = await repository.create(CustomerFaker.generate());
    const customer = await repository.update(item.id, CustomerFaker.generate());
    expect(customer.id).toEqual(item.id);
    expect(customer.name).not.toEqual(item.name);
    expect(customer.email).not.toEqual(item.email);
  });

  test('delete: Delete customer', async ()  => {
    const item = await repository.create(CustomerFaker.generate());
    await repository.delete(item.id);
    await expect(await repository.findById(item.id)).toBeNull();
  });     
  
});



import { describe, expect, test, } from 'vitest';
import { CustomerRepository } from '../../../src/repository/customer.repository';
import { PrismaClient } from '../generated/prisma/client';
import { CustomerFaker } from '../faker/customer.faker';

describe('Customer Repository', () => {
  const repository = new CustomerRepository(new PrismaClient());

  test('findMany_WhenSuccessfull: Get all customers', async ()  => {
    await repository.create(CustomerFaker.generate());
    const items = await repository.findMany();
    expect(items.length).toBeGreaterThan(0);
    expect(items).toBeInstanceOf(Array);
  });

  test('findById_WhenSuccessfull: Get customer by id', async ()  => {
    const item = await repository.create(CustomerFaker.generate());
    const items = await repository.findById(item.id);
    expect(items).not.toBeNull();
  });

  test('create_WhenSuccessfull: Register customer', async ()  => {
    const item = await repository.create(CustomerFaker.generate());
    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('name');
    expect(item).toHaveProperty('email');
    expect(item.id).toBeGreaterThan(0);
  });  

  test('update_WhenSuccessfull: Update customer', async ()  => {
    const item = await repository.create(CustomerFaker.generate());
    const customer = await repository.update(item.id, CustomerFaker.generate());
    expect(customer.id).toEqual(item.id);
    expect(customer.name).not.toEqual(item.name);
    expect(customer.email).not.toEqual(item.email);
  });

  test('delete_WhenSuccessfull: Delete customer', async ()  => {
    const item = await repository.create(CustomerFaker.generate());
    await repository.delete(item.id);
    await expect(await repository.findById(item.id)).toBeNull();
  });   
  
  test('findFirstName_WhenSuccessfull: Get customer by name', async ()  => {
    const item = await repository.create(CustomerFaker.generate());
    const customer = await repository.findFirstName(item.name);
    expect(customer).not.toBeNull();
  });
  
  test('findFirstEmail_WhenSuccessfull: Get customer by email', async ()  => {
    const item = await repository.create(CustomerFaker.generate());
    const customer = await repository.findFirstEmail(item.email);
    expect(customer).not.toBeNull();
  });  
  
});



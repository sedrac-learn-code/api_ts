import z from "zod";
import { FastifyTypeInstance } from "../type";
import { CustomerService } from "../service/customer.service";

const customerService = new CustomerService();

export async function customerRoute(app: FastifyTypeInstance) {

    app.get("/customers", {
        schema: {
            description: "Get all customers",
            summary: "Get all customers",
            tags: ["customer"],
        }
    }, async () => customerService.findMany() );

    app.post("/customers", {
        schema: {
            description: "Create a customer",
            summary: "Create a customer",
            tags: ["customer"],
            body: z.object({
                name: z.string().meta({ example: "John Doe" }),
                email: z.email().meta({ example: "johndo@hotmail.com" }),
            }),
        }
    }, async (req) => customerService.create(req.body));

};
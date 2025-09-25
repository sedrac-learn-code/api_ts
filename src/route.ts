import { FastifyTypeInstance } from "./type";
import { customerRoute } from "./controller/customer.controller";
import { uploadRoute } from "./controller/upload.controller";

export async function route(app: FastifyTypeInstance) {
    await customerRoute(app);
    await uploadRoute(app);
};
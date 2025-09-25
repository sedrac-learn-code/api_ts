import { FastifyTypeInstance } from "../type";
import fs from "fs";
import pump from "pump";

export async function uploadRoute(app: FastifyTypeInstance) {

    app.post("/upload", {
        schema: {
            tags: ["Upload"],
        }
    }, async (req, reply) => {
        const data = await req.file();
        if (!data) return reply.status(400).send({ error: 'No file uploaded' });
        const storedFile = fs.createWriteStream(`./uploads/${data.filename}`);
        await pump(data.file, storedFile);
        return { upload: 'completed', filename: data.filename };
    });

};
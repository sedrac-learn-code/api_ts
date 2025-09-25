import { describe, expect, test } from "vitest";
import { app } from "../../../src/config";
import supertest from "supertest";
import path from "path";

describe('Upload controller', () => {

    test('upload_WhenSuccessfull: Request upload photo', async () => {
        const testFilePath = path.join(process.cwd(), "image.png");
        await app.ready();
        await supertest(app.server)
            .post("/upload")
            .set('Content-Type', 'multipart/form-data')
            .attach("file", testFilePath)
            .then(res => {
                expect(res.body).toHaveProperty("filename");
                expect(res.body).toHaveProperty("upload", 'completed');
            })
            .catch(err => { 
                console.log(err);
            });
        await app.close();
    });

});
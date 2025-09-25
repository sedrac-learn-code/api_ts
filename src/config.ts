import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { validatorCompiler, serializerCompiler, FastifyZodOpenApiTypeProvider, fastifyZodOpenApiPlugin, fastifyZodOpenApiTransformers } from 'fastify-zod-openapi';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import { route } from './route';
import fastifyMultipart from '@fastify/multipart';

const app = fastify().withTypeProvider<FastifyZodOpenApiTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(fastifyCors, { origin: '*' });
app.register(fastifyZodOpenApiPlugin);
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Swagger API',
      description: 'API documentation',
      version: '1.0.0'
    },
  },
  ...fastifyZodOpenApiTransformers,
});
app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});
app.register(fastifyMultipart);
app.register(route);

export { app };
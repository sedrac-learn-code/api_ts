import type { FastifyInstance, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerDefault, FastifyBaseLogger } from "fastify";
import type { FastifyZodOpenApiTypeProvider } from "fastify-zod-openapi";

export type FastifyTypeInstance = FastifyInstance<
    RawServerDefault,
    RawRequestDefaultExpression,
    RawReplyDefaultExpression,
    FastifyBaseLogger,
    FastifyZodOpenApiTypeProvider
>;
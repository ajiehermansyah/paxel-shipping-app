require("isomorphic-fetch");
const Koa = require("koa");
const next = require("next");
const dotenv = require("dotenv");
const session = require("koa-session");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  server.use(session(server));
  server.keys = [SHOPIFY_API_SECRET_KEY];
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: [
        "write_assigned_fulfillment_orders",
        "read_products",
        "read_orders",
        "write_orders",
        "read_draft_orders",
        "write_draft_orders"
      ],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.redirect("/");
      }
    })
  );

  server.use(verifyRequest());

  server.use(async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return;
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});

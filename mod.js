import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import {BookAll} from './book.js'

const router = new Router();
router
  .get("/", async (context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/dist`,
      index: "index.html",
    });
  })
  .get("/books", async(ctx) => {
  const res=await BookAll();
console.log(res.rows)
ctx.response.body=res.rows;
  })
.get("/books/:id", async(ctx)=>{
if(ctx.params && ctx.params.id){
const {id} =ctx.params;
const res =await BookAll(id);
console.log("res: ",res.rows)
ctx.response.body=res.rows;
   }
})


const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// console.log(`${Deno.cwd()}`)

await app.listen({ port: 8080 });

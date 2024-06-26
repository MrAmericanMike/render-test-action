console.log("SILENCE IS GOLDEN!");
import Koa from "koa";

const APP = new Koa();

APP.use((ctx) => {
	ctx.body = "Hello World";
});

APP.listen(process.env.PORT || 3000);

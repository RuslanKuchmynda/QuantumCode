import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: "http://localhost:8080", // або список доменів
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Якщо потрібно передавати cookies або авторизацію
  });
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();

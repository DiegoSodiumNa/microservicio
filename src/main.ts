import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,{
      transport: Transport.TCP
    },
  );
  // await app.listen(3001);
  await app.listen();
}
bootstrap();

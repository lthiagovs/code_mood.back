import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from 'config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'https://codemood.dev'],
    credentials: true,
  });

  setupSwagger(app);

  app.setGlobalPrefix('api/v1');
  
  // Configurar graceful shutdown
  app.enableShutdownHooks();
  
  await app.listen(3000);
  
  // Graceful shutdown listeners
  process.on('SIGTERM', async () => {
    console.log('SIGTERM received, shutting down gracefully');
    await app.close();
    process.exit(0);
  });
  
  process.on('SIGINT', async () => {
    console.log('SIGINT received, shutting down gracefully');
    await app.close();
    process.exit(0);
  });
}

bootstrap();
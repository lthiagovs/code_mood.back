import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://code_mood:code_mood_key@localhost:27017/code_mood_db?authSource=admin',
      {
        // Configurações para graceful shutdown
        bufferCommands: false
      }
    ),
    // seus outros módulos aqui
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
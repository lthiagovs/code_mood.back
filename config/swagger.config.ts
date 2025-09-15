import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Code Mood API')
    .setDescription('<b>API para gerenciamento de humor e produtividade de desenvolvedores</b>')
    .setVersion('1.0.0')
    .setContact(
      'Luis Thiago',
      'https://github.com/lthiagovs',
      'luisthiag.dev@gmail.com'
    )
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api/docs', app, document);
}

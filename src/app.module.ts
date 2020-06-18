import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://root:password@localhost:27017/nestjs?authSource=admin', { useNewUrlParser: true }),
    CatsModule,
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

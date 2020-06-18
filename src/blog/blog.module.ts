import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';
import { BlogResolver } from './blog.resolver';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Post', schema: BlogSchema}])
    ],
    providers: [BlogResolver, BlogService]
})

export class BlogModule {}

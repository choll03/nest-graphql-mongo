import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BlogType } from './dto/blog.dto';
import { BlogService } from './blog.service';
import { BlogInput } from './inputs/blog.input';

@Resolver()
export class BlogResolver {

    constructor(private blogService: BlogService){}

    @Query(() => [BlogType])
    async blogs() {
        return await this.blogService.getBlog();
    }

    @Mutation(() => BlogType)
    async createBlog(@Args('input') input: BlogInput) {
        return this.blogService.createBlog(input);
    }
}
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/blog.interface';
import { BlogType } from './dto/blog.dto';

@Injectable()
export class BlogService {

    constructor(@InjectModel('Post') private readonly postModel: Model<Post>){}

    async createBlog(blogType: BlogType) : Promise<Post>{
        const newBlog = await new this.postModel(blogType);
        return newBlog.save();
    }


    async getBlog() : Promise<any> {
        return await this.postModel.find({});
    }


    async showBlog(postId: string) : Promise<Post> {
        const blog = await this.postModel.findById(postId).exec();
        return blog;
    }


    // async editBlog(postId: string, createPostDTO: CreatePostDTO) : Promise<Post> {
    //     const blog = await this.postModel.findByIdAndUpdate(postId, createPostDTO, { new: true });
    //     return blog;
    // }


    async deleteBlog(postId: string) : Promise<any> {
        const deletedPost = await this.postModel.findByIdAndRemove(postId);
        return deletedPost;
    }


}

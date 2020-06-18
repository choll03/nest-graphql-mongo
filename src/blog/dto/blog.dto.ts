import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class BlogType {

    @Field()
    title: string;
    @Field()
    description: string;
    @Field()
    body: string;
    @Field()
    author: string;
    @Field()
    date_posted: string;
}
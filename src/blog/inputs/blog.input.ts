import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class BlogInput {
    @Field()
    readonly title: string;
    @Field()
    readonly description: string;
    @Field()
    readonly body: string;
    @Field()
    readonly author: string;
    @Field()
    readonly date_posted: string;
}
import { ObjectType, Field } from "@nestjs/graphql";



@ObjectType()
export class CatType {

    @Field()
    name: string;
}
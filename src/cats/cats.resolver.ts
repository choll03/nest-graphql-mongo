import { Resolver, Query } from '@nestjs/graphql';
import { CatType } from './dto/cats.dto';

@Resolver()
export class CatsResolver {

    @Query(() => String)
    async hello() {
        return 'hello';
    }

    @Query(() => [CatType])
    async cats() {
        return [
            {
                name: "push"
            },
            {
                name: "ee"
            },
        ];
    }
}
import { InputType, Field, PartialType } from "@nestjs/graphql";
import { CreateBookInput } from "./create-book";
@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
    @Field()
    id: string
}
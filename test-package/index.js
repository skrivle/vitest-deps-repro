import { GraphQLError } from "graphql";


export function aGraphQLError() {
    return new GraphQLError('test error');
}
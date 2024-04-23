import { GraphQLError } from "graphql";
import {aGraphQLError} from 'test-package'

describe('App', () => {
    it('works', () => {
        console.log(aGraphQLError())
        expect(aGraphQLError() instanceof GraphQLError).toBeTruthy();
    });
});
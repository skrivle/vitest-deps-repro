import { GraphQLError } from "graphql";
import {aGraphQLError} from 'test-package'

console.log(aGraphQLError() instanceof GraphQLError);

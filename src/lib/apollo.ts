import {ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p1jmt71dvy01xxcgnycncy/master',
  cache: new InMemoryCache()
})
import { ApolloProvider } from "@apollo/client";
import { Router } from "./Router";
import { client } from "./lib/apollo";
// import * as dotenv from 'dotenv';
// dotenv.config();


function App() {

  return (
    <ApolloProvider client={client}>
      <div>
        <Router />
      </div>
    </ApolloProvider>
  )
}

export default App;

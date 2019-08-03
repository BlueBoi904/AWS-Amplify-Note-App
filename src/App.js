import React from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import { listNotes } from "./graphql/queries";

Amplify.configure(aws_exports);

const App = () => {
  return (
    <div className="flex flex-column items-center justify-center bg-washed-red pa3">
      <h1 className="code f2">Amplify Notetaker</h1>
      <form className="mb3">
        <input type="text" placeholder="Write your note" className="pa2 f4" />
        <button type="submit" className="pa2 f4">
          Add
        </button>
      </form>
    </div>
  );
};

export default withAuthenticator(App, { includeGreetings: true });

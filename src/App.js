import React from "react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

const App = () => {
  return <div>Hello</div>;
};

export default App;

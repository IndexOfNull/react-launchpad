import * as React from "react";

import tw from "twin.macro";

//For some reason, the root mounted component cannot be a functional component, so a class is used instead.
export class App extends React.Component {
  render() {
    return (
      <div css={tw`h-screen w-screen flex justify-center items-center`}>
        <div css={tw`border-4 border-blue-500 p-5 rounded text-center`}>
          <p css={tw`text-6xl`} onClick={() => console.log("hello world")}>
            Hello World!
          </p>
          <p css={tw`text-xl mt-2`}>
            Read the README.md file to see what's going on here!
          </p>
        </div>
      </div>
    );
  }
}

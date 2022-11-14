import React from "react";
import {Puff} from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#0b132b"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;

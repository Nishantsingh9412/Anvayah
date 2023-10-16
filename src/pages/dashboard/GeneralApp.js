// import { Suspense, lazy } from "react";
// import React from "react";
// import Chats from "./Chats";
// // Dynamic Loading means it takes some time to Load 
// const Cat = lazy(() => import("../../components/Cat"));

// const GeneralApp = () => {

//   return (
//     <>
//       {/* <Suspense fallback="loading..."> */}
//       {/* <Cat /> */}
//       <Chats /> 
//       {/* </Suspense> */}
//     </>
//   );
// };

// export default GeneralApp;


import React from 'react'

import Chats from './Chats'

const GeneralApp = () => {
  return (
    <>
      GeneralApp 
      <Chats />
    </>
  )
}

export default GeneralApp

import React from "react";

const Whoops404 = (router) =>(
  <section>
    <h1> Page not found at {router.location.pathname}</h1>
  </section>
)

export default Whoops404;
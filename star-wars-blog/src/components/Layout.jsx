import React from "react";

const Layout = () => {
   return (
<div>
<BrowserRouter>
  <div>
    <Switch>
      <Route>
         <Route exact patch="/" component={Home}/>
         <Route exact patch="Information/" component={Information}/>
      </Route>
    </Switch>
    </div> 
</BrowserRouter>
</div>
   )
}

export default Layout

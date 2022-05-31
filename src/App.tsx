import React from 'react';
import DetailSubject from "./pages/Methodist/DetailSubject";
import Permission from "./hoc/Permission";
import {PermissionEnum} from "./config/settings";

function App() {

  return (
    <div className="App">
        <Permission perm={PermissionEnum.Methodist}>
          <DetailSubject/>
        </Permission>
    </div>
  );
}

export default App;

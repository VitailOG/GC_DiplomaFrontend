import React from 'react';

// STYLES
// import 'antd/dist/antd.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

// PAGES
import DetailSubject from "./pages/Methodist/DetailSubject";
import RatingTopListGroup from "./pages/Methodist/RatingTopListGroup";
import StudentList from "./pages/Methodist/StudentList";
import Login from "./pages/Common/Login";
import SubjectList from "./pages/Methodist/SubjectList";

// HOC
import Permission from "./hoc/Permission";
// SETTINGS
import {PermissionEnum} from "./settings";


function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>

                <Route path='/' element={
                    <Permission perm={PermissionEnum.Methodist}>
                      <DetailSubject/>
                    </Permission>
                }/>

                <Route path='/test' element={<RatingTopListGroup />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/student' element={<StudentList />}/>
                <Route path='/subject' element={<SubjectList />}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

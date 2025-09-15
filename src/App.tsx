import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import UserDetail from "./Components/UserDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/React_Practice_1" element={<HomePage />} />
      <Route path="/users/:id" element={<UserDetail/>}/>
    </Routes>
  );
};

export default App;

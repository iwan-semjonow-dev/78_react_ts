import Homework10 from "./homeworks/Homework10/Homework10";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Users from "./pages/Users/Users";
import AdminUser from "./pages/Users/components/AdminUser/AdminUser";

// Lessons imports
import Lesson05 from "./lessons/Lesson05/Lesson05";
import Lesson06 from "./lessons/Lesson06/Lesson06";
import Lesson07 from "./lessons/Lesson07/Lesson07";
import Lesson08 from "./lessons/Lesson08/Lesson08";
import Lesson09 from "./lessons/Lesson09/Lesson09";
import Lesson10 from "./lessons/Lesson10/Lesson10";
import Lesson12 from "./lessons/Lesson12/Lesson12";
// Homeworks imports

function App() {
  return (
    // <></> - fragmet. Он позволяет задать обертку (выступает в качестве родителя), чтобы
    // не было ошибок если у нас есть несколько соседних элементов, но на самой странице никакой
    // новый элемент добавлен не будет
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/lesson-05" element={<Lesson05 />} />
          <Route path="/lesson-06" element={<Lesson06 />} />
          <Route path="/lesson-07" element={<Lesson07 />} />
          <Route path="/lesson-08" element={<Lesson08 />} />
          <Route path="/lesson-09" element={<Lesson09 />} />
          <Route path="/lesson-10" element={<Lesson10 />} />
          <Route path="/homework-10" element={<Homework10 />} />
          <Route path="/lesson-12" element={<Lesson12 />} />
          {/* Lesson 14. React Router */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/admin" element={<AdminUser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
      {/* Lesson 05. TypeScript */}
      {/* Lesson 06. Component typing */}
      {/* Lesson 07. Styling components */}
      {/* Lesson 08. Controlled and uncontrolled components */}
      {/* <Homework10/> */}
    </BrowserRouter>
  );
}

export default App;

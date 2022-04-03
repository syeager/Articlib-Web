import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from "../Pages/Home/HomePage";
import { Navbar } from "../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { FormPage } from "../Pages/FormPage";
import { ArticlePostForm } from "@Articles/Components/ArticlePostForm";
import { LogOutPage } from "@Account/Pages/LogOutPage";

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
              </>
            }
          />
          <Route path="/logOut" element={<LogOutPage />} />
          <Route
            path="/article/post"
            element={
              <FormPage>
                <ArticlePostForm />
              </FormPage>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

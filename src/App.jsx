import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage";
import Layout from "../src/components/Layout";
import RegisterPage from "../src/pages/RegisterPage";
import LoginPage from "../src/pages/LoginPage";
import BlogPage from "../src/pages/BlogPage";
import CreatePostPage from "../src/pages/CreatePostPage";
import PostPage from "../src/pages/PostPage";
import EditPost from "../src/pages/EditPost";
import SearchPage from "../src/pages/SearchPage";
import ErrorPage from "../src/pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "blog",
        element: <BlogPage />,
        children: [
          { path: ":id", element: <PostPage /> },
          { path: "create", element: <CreatePostPage /> },
          { path: "edit/:id", element: <EditPost /> }
        ]
      },
      { path: "search", element: <SearchPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "logout", element: <HomePage /> },
    ]
  },
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

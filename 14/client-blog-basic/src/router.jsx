import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { postRoute } from "./pages/Post";
import { postListRoute } from "./pages/PostList";
import { todoListRoute } from "./pages/TodoList";
import { userRoute } from "./pages/User";
import { userListRoute } from "./pages/UserList";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {

    // root path
    path: "/",
    // element at root path
    element: <RootLayout />,

    //path and element
    children: [
      {
        // error page
        errorElement: <ErrorPage />,

        // childrend of a child
        children: [
          {
            // default path to navigate to
            //does not specify a display object
            // just Navigation element
            // to navigate to the path
            index: true,
            element: <Navigate to="/posts" />,
          },

          // another path
          {
            // the path post
            path: "posts",
            // this is the child to be
            // displayed on the specifeid
            // path it has two display
            // so we create a child
            children: [
              {
                // main path
                // the other path with id
                index: true,
                ...postListRoute,
              },

              {
                //path with id
                path: ":postId",
                ...postRoute,
              },
            ],
          },

          // path of user with its child
          // that is pregnent with two renders
          // genereal render and deteiled render
          // with id
          {
            path: "users",
            children: [
              // redirected to the parent by default
              { index: true, ...userListRoute },
              //a specific user with id
              { path: ":userId", ...userRoute },
            ],
          },

          // todos does not have childrend
          // so it can just take in path and the
          // component to be rendered
          { path: "todos", ...todoListRoute },

          // if all else fail render
          // page not founder
          // if path is just random
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
]);

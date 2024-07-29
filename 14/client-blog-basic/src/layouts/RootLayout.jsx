import React from "react";
import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom";

const RootLayout = () => {
  // get the state of navigation
  const { state } = useNavigation();

  //  set is loading to true if state is loading
  const isLoading = state === "loading";

  return (
    <>
      {/* nav bar with links to other components */}
      <nav className="top-nav">
        <div className="nav-text-large">The App</div>
        <ul className="nav-list">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>

      {/* restors the previous page scroll position if revisited */}
      <ScrollRestoration />

      {isLoading && <div className="loading-spinner" />}

      <div className={`container ${isLoading ? "loading" : ""}`}>
        {/* used in to keep layout consistent while rendering
       other component with react-router dom */}
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;

import React, { useState } from "react";
import { useFetch } from "./useFetch";

// all the url needed
const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

export  const App = () => {
  const [url, setUrl] = useState(URLS.USERS);

  const { data, isLoading, isError } = useFetch(url);

  return (
    <>
      <div>
        {/* on radio select user */}
        <label>
          <input
            type="radio"
            checked={url === URLS.USERS}
            onChange={() => setUrl(URLS.USERS)}
          />
          Users
        </label>

        {/* on radio select post */}
        <label>
          <input
            type="radio"
            checked={url === URLS.POSTS}
            onChange={() => setUrl(URLS.POSTS)}
          />
          Posts
        </label>

        {/* on radio select comments */}
        <label>
          <input
            type="radio"
            checked={url === URLS.COMMENTS}
            onChange={() => setUrl(URLS.COMMENTS)}
          />
          Comments
        </label>
      </div>

      {isLoading ? (
        // if it is loading show loading
        <h1>Loading...</h1>
      ) : // else check if is error
      isError ? (
        // if it is error show error
        <h1>Error</h1>
      ) : (
        // else display the info textually json formated
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  );
};

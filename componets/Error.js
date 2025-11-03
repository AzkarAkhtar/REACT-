import { useRouteError } from "react-router-dom";
const Error = () =>{
  const error = useRouteError();
  return (
     <div className="error-container">
      <h1>Oops! Something went wrong.</h1>
      <p>{error.statusText || error.message}</p>
      <a href="/">Go Home</a>
    </div>
  );
};
export default Error;
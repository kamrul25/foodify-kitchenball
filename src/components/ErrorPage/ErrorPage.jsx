import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className=" mt-12  space-y-5 ">
      <h1 className="text-red-500 text-3xl text-center">Oops!</h1>
      <p className="text-red-500 text-3xl text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-500 text-3xl text-center">
        <i >{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;

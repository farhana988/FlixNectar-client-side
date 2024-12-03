import { NavLink} from "react-router-dom";

function ErrorPage() {
  return (
    <div id="error-page" className="text-center font-medium py-96 text-5xl space-y-7">
      <h1>Hmm... </h1>
      <p>seems like you have lost that page in the digital void</p>
      
      <div className="flex justify-center items-center gap-8">
        {" "}
       <h2>  Lets get you </h2>
        <span className="text-[#9538E2] text-6xl font-bold">
          <NavLink to={"/"}> home!</NavLink>
        </span>
      </div>
    </div>
  );
}

export default ErrorPage;
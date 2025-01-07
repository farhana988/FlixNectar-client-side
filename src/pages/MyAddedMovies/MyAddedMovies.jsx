import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Shared/Heading";
import MyAddedMoviesTable from "./MyAddedMoviesTable";
import { TfiFaceSad } from "react-icons/tfi";
import { ThemeContext } from "../../provider/ThemeProvider";

const MyAddedMovies = () => {
  const { isToggled } = useContext(ThemeContext);
  const addedData = useLoaderData();
  console.log(addedData);

  const [loadedAdded, setLoadedAdded] = useState(addedData);
  return (
    <div className="container mx-auto min-h-screen py-10">
      <Heading title={"My Added Films"}></Heading>

      {loadedAdded.length > 0 ? (
        <div
          className={`group relative rounded-xl shadow-xl
         shadow-primary
         overflow-hidden hover:shadow-2xl mx-5 lg:mx-10 ${
           isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
         }`}
        >
          {/* Table */}
          <div
            className={`overflow-x-auto py-6`}
          >
            <table
              className=" 
              table table-xs"
            >
              <thead className={`lg:text-xl ${
              isToggled ? " text-darkSlate" : " text-ivory"
            }`}>
                <tr>
                  <th className="   py-3">Image</th>
                  <th className="  py-3">Title</th>

                  <th className=" text-left py-3">Genre</th>
                  <th className=" text-left  py-3">Duration</th>
                  <th className=" text-left  py-3">Rating</th>
                  <th className=" text-left  py-3">Description</th>
                  <th className=" text-center py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loadedAdded.map((added) => (
                  <MyAddedMoviesTable
                    added={added}
                    loadedAdded={loadedAdded}
                    setLoadedAdded={setLoadedAdded}
                    key={added._id}
                  ></MyAddedMoviesTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col justify-center items-center gap-5 my-40 active
      text-xl md:text-2xl lg:text-4xl font-bold"
        >
          <TfiFaceSad className="text-9xl " />
          <p className="opacity-50">No added movies found.</p>
          <p className="opacity-50">Start adding some movies to your list!</p>
        </div>
      )}
    </div>
  );
};

export default MyAddedMovies;

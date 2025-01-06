import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";
import Heading from "../components/Shared/Heading";

const Support = () => {
  const { isToggled } = useContext(ThemeContext);

  return (
    <div className={`py-20 `}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <Heading
          title={"Support & Help"}
          subtitle={
            "Having trouble? We are here to help. Browse our FAQs or contact us for more assistance."
          }
        ></Heading>

        <div className="lg:flex gap-6 justify-between space-y-10 lg:space-y-0 mb-16">
          {/* FAQ Section  */}
          <div
            className={`lg:w-1/2 p-8 shadow-2xl rounded-lg  ${
              isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-6">
              {/* acc 1 */}

              <div className={`collapse collapse-arrow ${
                    isToggled
                      ? "bg-base-200 text-darkSlate" 
                      : "bg-card text-ivory"
                  }`}>
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  How do I reset my password?
                </div>
                <div className="collapse-content">
                  <p>
                    {" "}
                    If you&#39;ve forgotten your password, you can easily reset it
                    by clicking on the <b>Forgot Password</b> link on the login page
                    and following the instructions.
                  </p>
                </div>
              </div>

              {/* acc 2 */}

              <div className={`collapse collapse-arrow ${
                    isToggled
                      ? "bg-base-200 text-darkSlate" 
                      : "bg-card text-ivory"
                  }`}>
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Can I watch movies offline?
                </div>
                <div className="collapse-content">
                  <p>
                    {" "}
                    Currently, we don&#39;t support offline viewing. You&#39;ll need an
                    active internet connection to stream movies on FlixNectar.
                  </p>
                </div>
              </div>

              {/* acc 3 */}

              <div className={`collapse collapse-arrow ${
                    isToggled
                      ? "bg-base-200 text-darkSlate" 
                      : "bg-card text-ivory"
                  }`}>
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  How do I add movies to my watchlist?
                </div>
                <div className="collapse-content">
                  <p>
                    {" "}
                    To add a movie to your watchlist, simply click on the <b>Add
                    to Watchlist</b> button on the movie page. You can access your
                    watchlist anytime from the menu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Troubleshooting Section with Toggle */}
          <div
            className={`lg:w-1/2 p-8 shadow-2xl rounded-lg   ${
              isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Troubleshooting Tips
            </h3>

            <div className="space-y-6">
              {/* acc 1 */}
              <div className={`collapse collapse-arrow ${
                    isToggled
                      ? "bg-base-200 text-darkSlate" 
                      : "bg-card text-ivory"
                  }`}>
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Streaming Quality Issues
                </div>
                <div className="collapse-content">
                  <p>
                    {" "}
                    If you experience poor streaming quality, try lowering the
                    video resolution or check your internet connection.
                  </p>
                </div>
              </div>

              {/* acc 2 */}
              <div className={`collapse collapse-arrow ${
                    isToggled
                      ? "bg-base-200 text-darkSlate" 
                      : "bg-card text-ivory"
                  }`}>
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Audio Sync Issues
                </div>
                <div className="collapse-content">
                  <p>
                    {" "}
                    If your audio is out of sync with the video, try refreshing
                    the page or restarting the app.
                  </p>
                </div>
              </div>

              {/* acc 3 */}

              <div className={`collapse collapse-arrow ${
                    isToggled
                      ? "bg-base-200 text-darkSlate" 
                      : "bg-card text-ivory"
                  }`}>
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Unable to Play a Movie
                </div>
                <div className="collapse-content">
                  <p>
                    {" "}
                    If a movie is not playing, check if the movie is available
                    in your region. You can also try clearing your browsers
                    cache.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <p className="text-lg mb-8">
            If you can&#39;t find the answer to your question, feel free to get in
            touch with our support team.
          </p>

          <div className="space-y-6">
            <p className="text-lg">
              <strong>Email:</strong> support@flixnectar.com
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

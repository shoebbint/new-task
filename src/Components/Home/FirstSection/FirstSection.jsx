import "./FirstSection.css";
const FirstSection = () => {
  return (
    <div className=" md:px-36 py-10 ">
      <h1 className="first-h1">Yoga for Flat Abs</h1>
      <p className="first-p">90 Days program</p>
      <div className="grid md:grid-cols-2 gap-10 mt-5">
        <div>
          <video
            className="rounded-[16px]"
            width="635"
            height="399"
            controls
            autoPlay
            loop
          >
            <source src="path_to_your_video_file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-10">
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab gradient-text "
              aria-label="Details"
            />
            <div role="tabpanel" className="tab-content">
              {" "}
              <p className="py-6 para">
                Choose a quiet space so that you can do the session
                uninterrupted. Make sure there is at least 2 hours gap between a
                meal and the class. Put all other devices aside and enjoy the
                session.
              </p>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab "
              aria-label="Techniques"
              checked
            />
            <div role="tabpanel" className="tab-content ">
              {" "}
              <p className="py-6 para">
                Choose a quiet space so that you can do the session
                uninterrupted. Make sure there is at least 2 hours gap between a
                meal and the class. Put all other devices aside and enjoy the
                session.
              </p>
            </div>
          </div>
<div className="pt-8">
<p className="pb-8 p2 gradient-text">AED 99/-</p>
          <div className="flex">
            <button className="btn text-white rounded-full bg-gradient-to-r from-pink-500 to-red-500 pe-5">Join now </button>
            <button className="  hover:text-white btn btn-outline btn-error rounded-full">View Schedule</button>
          </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

import "./FirstSection.css";
const FirstSection = () => {
  return (
    <div className=" md:px-36 py-10 bg-first">
      <h1 className="first-h1">Yoga for Flat Abs</h1>
      <p className="first-p">90 Days program</p>
      <div className="grid md:grid-cols-2 gap-10 mt-5">
        <div>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%" /* 16:9 aspect ratio */,
            }}
          >
            <iframe
              className="rounded-[16px]"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/v7SN-d4qXx0?autoplay=1&loop=1&playlist=v7SN-d4qXx0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="px-10">
          
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab tab-text"
              aria-label="Details"
              style={{ color: '#FE5266' }} 
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut recusandae ipsam in adipisci consequuntur?

              </p>
            </div>
          </div>
          <div className="pt-8">
            <p className="pb-8 p2 gradient-text">AED 99/-</p>
            <div className="flex">
              <button className="btn text-white rounded-full bg-gradient-to-r from-pink-500 to-red-500 pe-5">
                Join now{" "}
              </button>
              <button className="  hover:text-white btn btn-outline btn-error rounded-full">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

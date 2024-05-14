import "./SecondSection.css";

const SecondSection = () => {
  return (
    <div className="sec-bg">
      <div className="bg-img  mx-36 my-10">
        <div className="grid grid-cols-2 gap-20 mt-5 ">
          <div className="flex  items-center ">
            <div>
              <h1 className="first-h1">Structure of program</h1>
              <p className="first-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <div className="mt-16">
                <div>
                  <h1 className="mb-5">
                    <span className="text-8xl gradient-text">90 </span>
                    <span className="text-4xl">Days</span>
                  </h1>
                </div>
                <div>
                  <p className="sec-p">Yoga | Recovery | Rest | Repeat</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-5">
            <img
              className="w-437.371 h-439.235  "
              src="https://s3-alpha-sig.figma.com/img/a969/1c3b/10153f20f9f96d96bce357f4b9d01e3c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SwxXUeQnBwlz33B9i~A87opTrXALHU4E13bc7LYXogP-TbfU4pbkyCKzgAz7Ngin61X9pQxZp7AYN~vF7O719YNsJsM2AePyUFMb-21Jt1DlpvEXcmhPZQeyzw8mAGDkUTWssBMD~8nnrh51jU1ujEXZh3jxCUCN7vMT0KHd2VEKr9BajK1NLdsAC9B~nAU3HxHe7hCnqqiU6ljzPAhnne-4Qg9RohRDBtLmCnco0d0nRloYQh8LbyYp~um6xvVnqkLjdxp9oonIXrYgSVXVjlJgCPSBVbNCy~sLvQKXAt1gpY7C5KZWlq0H3yEGEQU7Iy0XDqBqaytsrgzr2MKP2w__"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

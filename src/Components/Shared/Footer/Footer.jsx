import "./Footer.css";

const Footer = () => {
  return (
    <div className="sec-bg">
      <footer className="py-10 md:px-36 text-center md:text-left ">
        <div className="md:flex justify-between border-b border-black pb-5 items-center">
          <div className="">
            <h1 className="text-3xl mb-5">Let’s talk</h1>
            <h1 className="first-h1">Book an appointment?</h1>
          </div>
          <div className="foot">
            <div className="md:flex justify-center items-center pb-5">
              <div className="me-5">
                <p className="">someone@example.com </p>
              </div>
              <div className=" flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.00195 4H19.002C19.7976 4 20.5607 4.31607 21.1233 4.87868C21.6859 5.44129 22.002 6.20435 22.002 7V17C22.002 17.7956 21.6859 18.5587 21.1233 19.1213C20.5607 19.6839 19.7976 20 19.002 20H5.00195C4.2063 20 3.44324 19.6839 2.88063 19.1213C2.31802 18.5587 2.00195 17.7956 2.00195 17V7C2.00195 6.20435 2.31802 5.44129 2.88063 4.87868C3.44324 4.31607 4.2063 4 5.00195 4ZM19.002 6H5.00195C4.73674 6 4.48238 6.10536 4.29485 6.29289C4.10731 6.48043 4.00195 6.73478 4.00195 7L12.002 11.88L20.002 7C20.002 6.73478 19.8966 6.48043 19.7091 6.29289C19.5215 6.10536 19.2672 6 19.002 6ZM4.00195 17C4.00195 17.2652 4.10731 17.5196 4.29485 17.7071C4.48238 17.8946 4.73674 18 5.00195 18H19.002C19.2672 18 19.5215 17.8946 19.7091 17.7071C19.8966 17.5196 20.002 17.2652 20.002 17V9.28L12.522 13.85C12.3699 13.9378 12.1975 13.984 12.022 13.984C11.8464 13.984 11.674 13.9378 11.522 13.85L4.00195 9.28V17Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>

            <div className="md:flex justify-center items-center justify-end ">
              <div className="ms-auto">
                <p>          +91- 385 526 5060</p>
              </div>
              <div className="ms-auto flex justify-center">
                <img  width="24"
                  height="24"                 
                  src="https://s3-alpha-sig.figma.com/img/ad84/f197/29e1b451b2c0024d6473d1ed920ed9a9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f4~S8yJSmAMkAOocpg8De3jhMFgyhn33axh4xdiM7f~gJKxv37wuk5jwciD9RhlS52qwsRY43DYM9QDCTC4Xd9BXhqeMXX7WgeAoumXJCYl~xE9hKSCXr~qqYuIagAvvGTXyj80BDlwzQOxI0dCP5LU2MErXwj0imjNyPFwhE6TjSi5Q9Fqgh7sxwY6CrUTyhNum-10XVXrxt3-U2QVfSTG5zddx4Oy-3AQkbebgeQg5A3nATbVbvxtl8lDTzxkgl8yr5XWxqhDX19DN1gaNu-dbUUFunoz5naJJ-9Dk0vjPQ62OuTHWDADHeSGyKUxZbMM5c9K6RF7FDCbl1XEJWw__"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-2 mb-24 pt-5">
          <div className="">
            {" "}
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vitae facilisis lorem. Integer non pharetra mauris, non tincidunt
              metus. Aenean in lectus diam...{" "}
            </p>
          </div>
        </div>
      </footer>
      <footer className="footer  px-10 py-8 border-t bg-black text-white border-base-300">
        <div className="   flex items-center justify-center mx-auto">
          <p className="me-5">© 2021 Copyright - Artistic yoga </p>
          <ul className="flex items-center justify-center list-disc">
            <li className="me-8">Privacy policy</li>{" "}
            <li className="">Terms of use</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

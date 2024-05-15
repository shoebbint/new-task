import "./Profile.css";

const Profile = () => {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-48 bg-last">
      <div className="text-4xl md:text-5xl lg:text-6xl text-center">
        <h1>
          MY <span className="gradient-text">ACCOUNT</span>
        </h1>
      </div>
      <div className="flex items-center justify-center py-10">
        <img
          style={{ width: "200px", height: "200px" }}
          className="rounded-full"
          src="https://s3-alpha-sig.figma.com/img/136c/d6e0/46d94521ab5a849d727bf3489e5930c6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExN~QKsVIsuFtX9P5yIa~hck8e9N9sAEOZ6wUqw2rliV8gIBRO0mSRKB2NO8ifZxbnh~cJjs-UZnhMoDUoeyQirqBc~RBpTW3NJ3btYpchAOH-zO4kEMUYUmtnYBL3zq6zetBNOPTUQPC1N6nPpMxdSrrvJLKZcMpZl9iZbORnnsNX-7~m4yTa1~M2IFOhUZ0tC5oY~6JeYAOcWPgKrKIVkT4p4ElA0UFYTSZVcsaWhF4cnxoSzYMi4AHZk0PtUt5By2818awEnBOY4F8JkWwFbUP8wiWZav-bLuHzYEq60LxWxXBcYXzRc0hZWySHdKELiMvyN759Y8VcQYR~DE7Q__"
          alt=""
        />
      </div>
      <div className="text-center md:text-left text-lg">
        <h1 className="title">Name</h1>
        <div className="flex items-center justify-between pb-5">
          <p>Arjun N</p>
          <h2 className="edit">Edit</h2>
        </div>
        <h1 className="title">Email</h1>
        <div className="flex items-center justify-between pb-5">
          <p>arjun@gmail.com</p>
          <h2 className="edit">Edit</h2>
        </div>
        <h1 className="title">Phone</h1>
        <div className="flex items-center justify-between pb-5">
          <p>9826369270</p>
          <h2 className="edit">Edit</h2>
        </div>
        <div className="flex items-center justify-between pb-5">
          <p>Password</p>
          <p>Change password</p>
        </div>
        <h1 className="text-center title">Subscription Details</h1>
        <div className="flex items-center justify-between pb-5">
          <p>1 Year membership for 750 INR</p>
          <h2 className="edit">Change plan</h2>
        </div>
        <p>
          Started on: 13-11-2020 <br />
          Valid till: 13-11-2021
        </p>
        <h1 className="text-center title">Subscription history</h1>
        <h1 className="title">Referral Details</h1>
        <div className="">
          <p className="p">
            Share your referral code and earn cash credits for each friend that
            subscribes. (1 Friend = 5 USD/16 DHRM). Also, your friend receives a
            5 USD credit.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="p">Referral Code: HSAGBWBDAV</p>
          <h2 className="edit">Copy</h2>
        </div>
        <p>Referral History</p>
      </div>
    </div>
  );
};

export default Profile;

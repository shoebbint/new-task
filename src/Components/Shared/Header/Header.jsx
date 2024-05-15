import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="navbar header-bg">
        <div className="flex-none ms-auto menu-text md:w-96">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="about-link" to={"/"}>About Us</Link>
            </li>
            <li>
              <Link className="about-link" to={"/"}>Our Programs</Link>
            </li>
          </ul>

          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full ">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://s3-alpha-sig.figma.com/img/136c/d6e0/46d94521ab5a849d727bf3489e5930c6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExN~QKsVIsuFtX9P5yIa~hck8e9N9sAEOZ6wUqw2rliV8gIBRO0mSRKB2NO8ifZxbnh~cJjs-UZnhMoDUoeyQirqBc~RBpTW3NJ3btYpchAOH-zO4kEMUYUmtnYBL3zq6zetBNOPTUQPC1N6nPpMxdSrrvJLKZcMpZl9iZbORnnsNX-7~m4yTa1~M2IFOhUZ0tC5oY~6JeYAOcWPgKrKIVkT4p4ElA0UFYTSZVcsaWhF4cnxoSzYMi4AHZk0PtUt5By2818awEnBOY4F8JkWwFbUP8wiWZav-bLuHzYEq60LxWxXBcYXzRc0hZWySHdKELiMvyN759Y8VcQYR~DE7Q__"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content mt-3 z-[1] bg-white p-2 shadow rounded-box w-52"
            >
              <li>
                <Link className="some border-b"  to="/profile"> Dashboard</Link>
              </li>
              <li>
                <Link className="some border-b" to="/profile"> Bookmarks</Link>
              </li>
              <li>
                <Link className="some border-b" to="/profile"> My Account</Link>
              </li>
              <li>
                <Link className="some border-b" to="/profile"> Log Out</Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

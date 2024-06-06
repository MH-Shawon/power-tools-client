import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://power-tools-server-nine.vercel.app/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("token");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const results = products.filter(product =>
        product.model.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Product</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://mohsin-hossain-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="fixed z-10 px-12 font-extrabold navbar bg-[#F2BB29]">
      <div className="navbar-start">
        <div className="dropdown">
          <div role="button" tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to={"/"} className="text-xl normal-case btn btn-ghost">
          <img
            style={{ width: 100 }}
            src="https://i.ibb.co/HzpCshd/dewalt.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 text-base menu menu-horizontal">{menuItems}</ul>
      </div>
      <div className="relative navbar-end">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by model"
            className="mr-16 input input-bordered input-sm"
          />
          {searchResults.length > 0 && (
            <ul className="absolute left-0 mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-[210px]">
              {searchResults.map(product => (
                <li key={product.model}>
                  <Link to={`/productDetails/${product._id}`} onClick={handleResultClick}>
                    {product.model}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <div
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user?.displayName}</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleSignOut}>Logout</a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <li className="btn btn-sm btn-outline">
            <Link to="/login">Login</Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default Navbar;

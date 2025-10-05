import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Removed unused useState/useEffect imports after refactor
const Navbar = (props) => {
	const navigate = useNavigate();

	const navigateTo = (address) => {
		navigate(address);
	};

	const jwt = sessionStorage.getItem("jwt");
	// Role & legacy admin flag
	const role = sessionStorage.getItem("role");
	const adminUsersFlag = sessionStorage.getItem("admin_users") === "true";
	const isAdmin = (role && role.toLowerCase() === "admin") || adminUsersFlag;
	// Removed unused iv and encryptedData retrievals
	const handleLogout = () => {
		sessionStorage.clear("jwt");
		sessionStorage.clear("iv");
		sessionStorage.clear("encryptedData");
		navigateTo("/login");
	};
	const scrollDown = (ref) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: "smooth",
		});
	};
	const toggleMenu = () => {
		const navbar = document.getElementById("navbar-default");
		if (navbar) {
			navbar.classList.toggle("hidden");
		}
	};

	return (
		<div>
			<nav
				className={`sticky top-0 z-50 ${"bg-[#18A0A9] border-[#18A0A9]-200"}`}
			>
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a href="#" className="flex items-center">
						<img
							src="/assets/healthcare 1(1).svg"
							alt=""
							className=""
						/>
						<div className="font-bold text-xl ml-3 text-white">
							SmartClinic
						</div>
					</a>
					<button
						onClick={toggleMenu}
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
						aria-controls="navbar-default"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div
						className="hidden w-full lg:block md:w-auto "
						id="navbar-default"
					>
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#18A0A9] text-white">
							<li className="py-2 px-3 relative hover:underline hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md">
								<Link to="/">Home</Link>
							</li>
							{jwt && isAdmin && (
								<li className="py-2 px-3 relative hover:underline hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md">
									<Link to="/admin-dashboard">
										Admin Dashboard
									</Link>
								</li>
							)}
							<li className="py-2 px-3 relative hover:underline hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md">
								<Link
									to="/"
									onClick={() =>
										scrollDown(props.AboutSection)
									}
								>
									About
								</Link>
							</li>
							<li className="py-2 px-3 relative hover:underline hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md">
								<Link
									to="/"
									onClick={() =>
										scrollDown(props.Servicespagesection)
									}
								>
									Diagnoses
								</Link>
							</li>
							<li className="py-2 px-3 relative hover:underline hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md">
								<Link to="/hospitals">Hospitals</Link>
							</li>
							<li className="py-2 px-3 relative hover:underline hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md">
								<Link
									to="/"
									onClick={() =>
										scrollDown(props.ConnectWithUsSection)
									}
								>
									Contact Us
								</Link>
							</li>
							{!jwt && (
								<li className="py-2 px-3 relative hover:underline hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md">
									<Link to="/login">Login</Link>
								</li>
							)}
							{!jwt && (
								<li className="py-2 px-3 relative hover:underline hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md">
									<Link to="/signup">Sign Up</Link>
								</li>
							)}
							{jwt && (
								<li className="py-2 px-3 relative hover:underline hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md">
									<Link to="/changePass">
										Change Password
									</Link>
								</li>
							)}
							{jwt && (
								<button
									className="py-2 px-3 rounded-md bg-[#18A0A9] text-white font-medium hover:underline hover:text-white/90 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
									onClick={handleLogout}
								>
									<a href="/login">Logout</a>
								</button>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

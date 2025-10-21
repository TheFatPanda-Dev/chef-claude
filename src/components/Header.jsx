import ChefClaudeLogo from "../assets/images/chef-claude-logo.png";

function Header() {
	return (
		<header className="flex items-center justify-center shadow-md w-full h-20 sm:h-[108px] px-4">
			<img
				src={ChefClaudeLogo}
				alt="Chef Claude Logo"
				className="h-12 sm:h-auto max-w-full object-contain"
			/>
		</header>
	);
}

export default Header;

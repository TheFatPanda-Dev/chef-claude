import ChefClaudeLogo from "../assets/images/chef-claude-logo.png"

function Header() {
	return (
		<header className="flex items-center justify-center shadow-md w-3xl h-[108px]">
			<img src={ChefClaudeLogo} alt="Chef Claude Logo" />
		</header>
	);
}

export default Header;

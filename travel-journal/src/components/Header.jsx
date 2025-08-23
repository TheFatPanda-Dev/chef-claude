import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function Header() {
	return (
		<header className="flex gap-2 items-center justify-center bg-[#F55A5A] h-[55px]">
			<FontAwesomeIcon icon="fa-solid fa-earth-americas" className="text-white text-2xl" />
			<h1 className="text-white font-inter">my travel journal.</h1>
		</header>
	);
}

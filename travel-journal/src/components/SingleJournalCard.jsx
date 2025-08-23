import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export default function SingleJournalCard() {
	return (
		<article className="max-w bg-white shadow-lg overflow-hidden flex justify-between items-center px-[40px] py-[16px]">
			{/* Image */}
			<img
				src="./images/mount-fuji.jpeg"
				alt="Mount Fuji"
				className="w-[125px] h-[168px] object-cover rounded-lg mr-[19px]"
			/>

			{/* Content */}
			<div className="font-inter text-[#2B283A]">
				{/* Location */}
				<div className="flex items-center  text-sm mb-[7px]">
					<FontAwesomeIcon
						icon="fa-solid fa-location-dot"
						className="text-red-500 mr-1"
					/>
					<span className="text-[11px] uppercase tracking-[2px]">Japan</span>
					<a
						href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
						target="_blank"
						className="text-[11px] ml-2 text-[#918E9B] hover:underline"
					>
						View on Google Maps
					</a>
				</div>

				{/* Title */}
				<h2 className="font-bold  mb-[17px] text-[25px]">Mount Fuji</h2>

				{/* Date */}
				<p className="font-semibold mb-[9px] text-[11px]">
					12 Jan, 2023 - 24 Jan, 2023
				</p>

				{/* Description */}
				<p className="leading-relaxed text-[11px]">
					Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
					(12,380 feet). Mount Fuji is the single most popular tourist site in
					Japan, for both Japanese and foreign tourists.
				</p>
			</div>
		</article>
	);
}

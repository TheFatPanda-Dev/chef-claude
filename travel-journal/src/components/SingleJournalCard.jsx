import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export default function SingleJournalCard(props) {
	return (
		<article className="max-w bg-white shadow-lg overflow-hidden flex justify-between items-center px-[40px] py-[16px]">
			{/* Image */}
			<img
				src={props.img.src}
				alt={props.img.alt}
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
					<span className="text-[11px] uppercase tracking-[2px]">
						{props.country}
					</span>
					<a
						href={props.googleMapsLink}
						target="_blank"
						className="text-[11px] ml-2 text-[#918E9B] hover:underline"
					>
						View on Google Maps
					</a>
				</div>

				{/* Title */}
				<h2 className="font-bold  mb-[17px] text-[25px]">{props.title}</h2>

				{/* Date */}
				<p className="font-semibold mb-[9px] text-[11px]">{props.dates}</p>

				{/* Description */}
				<p className="leading-relaxed text-[11px]">{props.text}</p>
			</div>
		</article>
	);
}

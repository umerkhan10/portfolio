"use client";
import Link from "next/link";
import MagneticComponent from "./magnetic";

export default function Footer() {
	return (
		<footer
			id="connect"
			className="flex flex-col items-center justify-between max-w-4xl mx-auto px-10 py-9 pb-44 z-10"
		>
			<h3 className="text-2xl tracking-[0.6rem] w-full mb-11">Connect</h3>
			<div className="grid grid-cols-6 gap-4 w-full mx-auto">
				<div className=" flex flex-col col-span-6 md:col-span-1 text-3xl gap-4">
					<MagneticComponent>
						<Link
							target="_blank"
							href="https://www.linkedin.com/in/umerkhan10"
							className="underline underline-offset-4"
						>
							LinkedIn
						</Link>
					</MagneticComponent>
					<MagneticComponent>
						<Link
							target="_blank"
							href="https://github.com/umerkhan10"
							className="underline underline-offset-4"
						>
							Github
						</Link>
					</MagneticComponent>
				</div>
				<div className="hidden md:inline md:col-span-2" />
				<div className="col-span-6 md:col-span-2 flex flex-col text-3xl gap-4 md:items-end">
					<div className="flex flex-col gap-3 mt-9 md:mt-0">
						<Link
							target="_blank"
							href="mailto:umerk2829@gmail.com"
							className="flex flex-col"
						>
							<span className="text-lg text-gradient">Email</span>
							<MagneticComponent>
								<span className="text-base">umerk2829@gmail.com</span>
							</MagneticComponent>
						</Link>
						<Link
							target="_blank"
							href="tel:+923224201011"
							className="flex flex-col"
						>
							<span className="text-lg text-gradient">Phone</span>
							<MagneticComponent>
								<span className="text-base">+92 322 4201011</span>
							</MagneticComponent>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

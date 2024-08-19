import { cn } from "@/lib/utils";
import StringLine from "./string-line";
import { motion } from "framer-motion";
import FadeOnScroll from "../fade-on-scroll";

export default function Clients() {
	const clients = ["Hipscan", "True Car", "Maple HR", "Skyworks"];
	return (
		<>
			<section
				id="clients"
				className="flex flex-col justify-center my-[20vh] space-y-4 max-w-4xl px-10 mx-auto"
			>
				<FadeOnScroll>
					<motion.div className="space-y-4">
						<h3 className="text-2xl tracking-[0.6rem]">Projects</h3>
						<p className="text-4xl sm:text-6xl child-gradient">
						I've worked on <span>diverse</span> projects
						delivering <span>innovative</span> solutions and pushing{" "}
						<span>technology's boundaries</span>  for <span>impactful</span> results.
						</p>
					</motion.div>
				</FadeOnScroll>
			</section>
			<section className="mb-[20vh]">
				<StringLine />
				{clients.map((client, index) => (
					<div key={index}>
						<p className="text-4xl sm:text-6xl leading-[80%] w-full max-w-4xl px-10 mb-4 mx-auto">
							{client}
						</p>
						{/* <hr className="border-slate-700" /> */}
						<StringLine />
					</div>
				))}
			</section>
		</>
	);
}

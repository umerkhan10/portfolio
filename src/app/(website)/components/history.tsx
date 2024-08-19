import { cn } from "@/lib/utils";
import StringLine from "./string-line";

export default function History() {
	const history = [
		{
			title: "Full-Stack Engineer",
			company: "Xavor",
			date: "Now",
		},
		{
			title: "Full-Stack Engineer",
			company: "Devsinc",
			date: "Apr 2023",
		},
		{
			title: "Associate Software Engineer",
			company: "Devsinc",
			date: "Mar 2022",
		},
	];
	return (
		<section
			id="history"
			className="flex flex-col justify-center min-h-svh"
		>
			<StringLine />
			{history.map((job, index) => (
				<div
					key={index}
					className={cn(
						"pt-1 md:pt-5"
						// "hover:bg-gradient-logo hover:text-background "
					)}
				>
					<div className="grid grid-cols-7 md:gap-8 text-3xl sm:text-4xl max-w-4xl mx-auto px-10 mb-5">
						<p className="col-span-7 md:col-span-3 mb-2 md:mb-0 text-2xl text-slate-500 sm:text-4xl">
							{job.date}
						</p>
						<p className="col-span-7 md:col-span-4 md:leading-8">
							{job.title} <br />
							<span className="text-gradient text-xl sm:text-2xl font-semibold tracking-widest">
								{job.company}
							</span>
						</p>
					</div>
					<StringLine />
				</div>
			))}
		</section>
	);
}

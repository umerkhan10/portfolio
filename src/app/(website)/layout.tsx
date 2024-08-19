import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";
import Cursor from "./cursor";
import { Person, WithContext } from "schema-dts";
import Script from "next/script";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
	title: "Umer Khan - Portfolio",
	description: "Full-Stack Software Engineer based in Lahore, Pakistan.",
	icons: ["favicon.svg"],
	keywords: [
		"Umer Khan",
		"Software Engineer",
		"Full-Stack Developer",
		"Engineer",
		"Developer",
		"Lahore",
		"Pakistan",
	],
	openGraph: {
		title: "Umer Khan - Portfolio",
		description: "Full-Stack Software Engineer based in Lahore, Pakistan.",
		images: [{ url: "https://umer.dev/screenshot.png" }],
		type: "website",
		countryName: "Pakistan",
		emails: ["umerk2829@gmail.com"],
		phoneNumbers: ["+92 322 4201011"],
		siteName: "Umer Khan - Portfolio",
		url: "https://umer.dev",
	},
	verification: {
		google: "Z83sG39BadmJ0uyci-ndT3TCQ_sR_edLbjH43hNgRHs",
	},
};

const jsonLd: WithContext<Person> = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Umer Khan",
	additionalName: "umerkhan",
	alternateName: "umerkhan",
	disambiguatingDescription:
		"Full-Stack Software Engineer based in Lahore, Pakistan.",
	birthDate: "1999-01-30",
	email: "umerk2829@gmail.com",
	birthPlace: {
		"@type": "Place",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Lahore",
			addressRegion: "Lahore",
			addressCountry: "Pakistan",
		},
	},
	address: {
		"@type": "PostalAddress",
		addressLocality: "Lahore",
		addressRegion: "Lahore",
		addressCountry: "Pakistan",
	},
	awards: ["National Champion of NASA Space Apps Challenge 2020"],
	description: "Full-Stack Software Engineer based in Lahore, Pakistan.",
	gender: "Male",
	jobTitle: "Software Engineer",
	image: "https://umer.dev/umer.jpeg",
	url: "https://umer.dev",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					bebas.className,
					"overflow-x-hidden overflow-y-auto relative"
				)}
			>
				<Header />
				{children}
				<Footer />
				<Cursor />
				{/* Add JSON-LD to your page */}
				<Script
					id="json-ld"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				{/* ... */}
			</body>
		</html>
	);
}
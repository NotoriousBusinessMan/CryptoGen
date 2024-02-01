import Image from "next/image";
import HeaderFile from "../components/headerFile";
import HomeFile from "../components/homeFile";
import LearnFile from "../components/learnFile";
import LeadingFile from "@/components/leading";

export default function Home() {
	return (
		<>
			<HeaderFile/>
			<HomeFile/>
			<LearnFile/>
			<LeadingFile/>
		</>
	);
}

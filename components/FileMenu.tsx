import {
	Tabs,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";

import { Genre } from "@/typings";
import Link from "next/link";

const FileMenu = ({ genres }: { genres: Genre[] }) => {
	return (
		<div className=' hidden lg:flex  justify-between z-50 overflow-x-scroll transition-all duration-150 delay-150 ease-in-out'>
			{genres.map((genre) => (
				<Tabs
					key={genre.id}
					className='flex gap-2 bg-transparent '>
					<TabsList className='flex items-center bg-transparent '>
						<TabsTrigger value={genre.name}>
							<Link
								href={`/series/${genre.id}?genre=${genre.name}`}>
								{genre.name}
							</Link>
						</TabsTrigger>
					</TabsList>
				</Tabs>
			))}
		</div>
	);
};

export default FileMenu;

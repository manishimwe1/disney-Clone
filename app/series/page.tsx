import FileMenu from "@/components/FileMenu";
import MenuBar from "@/components/FileMenu";
import WrraperBg from "@/components/WrraperBg";
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/getImagePath";
import {
	getGenresOfTvSeries,
	getTopRatedTvSeries,
} from "@/lib/getMovies";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	searchParams: {
		p: number;
	};
};
const page = async ({ searchParams: { p } }: Props) => {
	const tvSeries = await getTopRatedTvSeries(p);
	const genres = await getGenresOfTvSeries();
	// console.log(p);

	return (
		<div className='flex flex-col gap-2 mx-auto'>
			<WrraperBg />
			<FileMenu genres={genres} />
			<div className=' w-full space-y-4 -mt-28 sm:-mt-0'>
				<div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 xl:text-xl gap-3 justify-center items-center w-full px-4'>
					{tvSeries.map((tvSerie) => (
						<Link
							key={tvSerie.id}
							href={`/series/tv/${tvSerie.id}`}>
							<div
								key={tvSerie.id}
								className='relative h-64 w-full rounded-sm shadow-sm shadow-gray-950 cursor-pointer hover:scale-105 transition-all delay-200 duration-200 ease-in hover:filter hover:grayscale'>
								<Image
									src={getImagePath(
										tvSerie.backdrop_path ||
											tvSerie.poster_path,
									)}
									alt={tvSerie.title}
									fill
									className='object-cover rounded-sm object-center'
								/>
								<p className='bg-black/60 h-10 text-center text-sm absolute bottom-0 inset-x-0 text-white flex justify-center'>
									{tvSerie?.name}
								</p>
							</div>
						</Link>
					))}
				</div>
				<div className='flex gap-0 justify-between w-1/2 mx-auto text-white p-5 mb-20'>
					{tvSeries.map((tv, i) => (
						<div
							className='bg-[#1a1c29]/10 h-6 w-5 flex items-center justify-center'
							key={tv.id}>
							<Link
								href={`/series?p=${i + 1}`}>
								<Button
									variant={"ghost"}
									className='text-xs flex justify-center items-center'>
									{i + 1}
								</Button>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default page;

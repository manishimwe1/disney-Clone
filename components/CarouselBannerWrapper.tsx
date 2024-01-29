import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

type Props = {
	id?: string;
	keyword?: string;
	notShow?: boolean;
};

const CarouselBannerWrapper = async ({
	id,
	keyword,
	notShow,
}: Props) => {
	const movies = await getDiscoverMovies(id, keyword);
	return (
		<CarouselBanner movies={movies} notShow={notShow} />
	);
};

export default CarouselBannerWrapper;

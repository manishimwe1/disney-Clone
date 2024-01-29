import CarouselBannerWrapper from "./CarouselBannerWrapper";

const WrraperBg = async () => {
	const notShow = true;
	return (
		<div className='h-96'>
			<CarouselBannerWrapper notShow={notShow} />
		</div>
	);
};

export default WrraperBg;

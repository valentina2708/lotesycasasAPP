
import HeroSlider, { Slide, Nav } from 'hero-slider';
import lote from '../assets/casas.jpg';
import casa from '../assets/ground.jpg';
import home from '../assets/home_1.jpg';
import home2 from '../assets/lotes.jpeg';

export default function BasicSlider() {
	return (
		<HeroSlider
			height='90vh'
			autoplay
			controller={{
				initialSlide: 1,
				slidingDuration: 500,
				slidingDelay: 100,
				onSliding: nextSlide =>
					console.debug('onSliding(nextSlide): ', nextSlide),
				onBeforeSliding: (previousSlide, nextSlide) =>
					console.debug(
						'onBeforeSliding(previousSlide, nextSlide): ',
						previousSlide,
						nextSlide
					),
				onAfterSliding: nextSlide =>
					console.debug('onAfterSliding(nextSlide): ', nextSlide),
			}}
		>
    <Slide
				label='Bogliasco - Italy'
				background={{
					backgroundImageSrc: lote,
				}}
			/>
      

			<Slide
				label='Bogliasco - Italy'
				background={{
					backgroundImageSrc: casa,
				}}
			/>

			<Slide
				label='County Clare - Ireland'
				background={{
					backgroundImageSrc: home,
				}}
			/>

			<Slide
				label='Crater Rock, OR - United States'
				background={{
					backgroundImageSrc: home2,
				}}
			/>

			<Nav />
		</HeroSlider>
	);
}

import { useEffect } from 'react';
import '../Css/Carousel.css';

const Carousel = ({ UniqueClass, CarouselItems, Heading }) => {
	let counter = 0;
	const NextGroup = (num) => {
		let TimeID;
		clearTimeout(TimeID);
		if (num === 1) {
			let check = counter + 8;
			if (check < CarouselItems.length - 8) {
				counter += 8;
			} else {
				counter = CarouselItems.length - 7;
				TimeID = setTimeout(() => {
					counter = CarouselItems.length - 7.3;
					CarouselSlide();
				}, 500);
			}
		} else {
			let check = counter - 8;
			if (check > 0) {
				counter -= 8;
			} else {
				counter = 1;
				TimeID = setTimeout(() => {
					counter = 0;
					CarouselSlide();
				}, 500);
			}
		}
		CarouselSlide();
	};
	const CarouselSlide = () => {
		const CarouselItem = document.querySelectorAll(`.${UniqueClass}`);
		CarouselItem.forEach((item, index) => {
			item.style.left = `${index * 12}%`;
			item.style.transform = `translateX(-${counter * 100}%)`;
		});
	};

	useEffect(() => {
		return () => {
			CarouselSlide();
		};
	}, []);
	return (
		<div className='Carousel'>
			<h2 className='Carousel_Heading'>{Heading}</h2>
			<div className='Carousel_Container'>
				<button className='Carousel_LeftBtn' onClick={NextGroup}>
					<span className='LeftBtn_inner'>❮</span>
				</button>
				<div className='Carousel_Item_Container'>
					{CarouselItems.length <= 0
						? ''
						: CarouselItems.map((item, index) => {
								let { Link, Image } = item;
								return (
									<a
										className={`Carousel_Item ${UniqueClass}`}
										href={Link}
										target='_blank'
										key={index}
									>
										<img src={Image} alt='Books' className='Carousel_Img' />
									</a>
								);
						  })}
				</div>
				<button className='Carousel_RightBtn' onClick={() => NextGroup(1)}>
					<span className='RightBtn_inner'>❯</span>
				</button>
			</div>
		</div>
	);
};

export default Carousel;
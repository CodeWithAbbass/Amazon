import { useEffect } from 'react';
import '../Css/MainSlider.css';
import Beauty from '../Assets/SliderImages/Beauty.jpg';
import Computers from '../Assets/SliderImages/Computers.jpg';
import HomeEssentials from '../Assets/SliderImages/HomeEssentials.jpg';
import Kids from '../Assets/SliderImages/Kids.jpg';
import Ship from '../Assets/SliderImages/Ship.jpg';
import Pay from '../Assets/SliderImages/Pay.jpg';
const MainSlider = () => {
	let slideIndex = 0;
	let setTimeOutID;

	const pushSlides = (num) => {
		const Slides = document.querySelectorAll('.mySlide');
		if (num == -1) {
			if (slideIndex < 2) {
				slideIndex = Slides.length - 1;
			} else {
				slideIndex -= 2;
			}
		}
		clearTimeout(setTimeOutID);
		SliderFunc(3000);
	};

	const SliderFunc = (delay) => {
		const Slides = document.querySelectorAll('.mySlide');
		for (let i = 0; i < Slides.length; i++) {
			Slides[i].classList.remove('prev');
			Slides[i].classList.remove('active');
			Slides[i].classList.remove('next');
		}
		slideIndex = slideIndex > Slides.length - 1 ? (slideIndex = 0) : slideIndex;

		if (slideIndex < Slides.length - 1) {
			Slides[slideIndex + 1].classList.add('next');
		} else {
			Slides[0].classList.add('next');
		}
		Slides[slideIndex].classList.add('active');
		if (slideIndex > 0) {
			Slides[slideIndex - 1].classList.add('prev');
		} else {
			Slides[Slides.length - 1].classList.add('prev');
		}
		slideIndex++;
		setTimeOutID = setTimeout(() => {
			clearTimeout(setTimeOutID);
			SliderFunc(delay);
		}, delay);
	};

	useEffect(() => {
		return () => {
			SliderFunc(3000);
		};
	}, []);
	return (
		<div className='MainSlider'>
			<div className='mySlide active'>
				<img src={HomeEssentials} alt='Amazon Product' />
			</div>
			<div className='mySlide'>
				<img src={Computers} alt='Amazon Product' />
			</div>
			<div className='mySlide'>
				<img src={Beauty} alt='Amazon Product' />
			</div>
			<div className='mySlide'>
				<img src={Kids} alt='Amazon Product' />
			</div>
			<div className='mySlide'>
				<img src={Ship} alt='Amazon Product' />
			</div>
			<div className='mySlide'>
				<img src={Pay} alt='Amazon Product' />
			</div>
			<a className='prevBtn' onClick={() => pushSlides(-1)} tabIndex={30}>
				<span className='prevBtn_inner'>❮</span>
			</a>
			<a className='nextBtn' onClick={() => pushSlides(1)} tabIndex={31}>
				<span className='nextBtn_inner'>❯</span>
			</a>
		</div>
	);
};

export default MainSlider;

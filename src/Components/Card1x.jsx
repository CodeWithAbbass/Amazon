import '../Css/Card1x.css';



const Card1x = ({ items }) => {
	let { Headline, Image, Link } = items;

	return (
		<div className='Card1x'>
			<div className='Card_Header'>
				<h2 className='Card_Header_headline'>{Headline}</h2>
			</div>
			<div className='Card_Body'>
				<a href={Link} className='SI_Link'>
					<img src={Image} alt={Headline} className='SI_Image'/>
				</a>
			</div>
			<div className='Card_Footer'>
				<a href='#' className='Card_Footer_Link'>
					See More
				</a>
			</div>
		</div>
	);
};

export default Card1x;

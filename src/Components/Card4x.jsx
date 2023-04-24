



import '../Css/Card4x.css';

const Card4x = ({ items }) => {
	let { Headline, QuadrateItems } = items;

	return (
		<div className='Card4x'>
			<div className='Card_Header'>
				<h2 className='Card_Header_headline'>{Headline}</h2>
			</div>
			<div className='Card_Body'>
				<div className='Quadrate_item_Container d_flex'>
					{QuadrateItems.map((elem, index) => {
						let { Link, Image, Label } = elem;
						return (
							<div className='Quadrate_item' key={index}>
								<a href={Link} target='_blank' className='QI_Link'>
									<div className='QI_Image_Container'>
										<img src={Image} alt={Label} className='QI_Image' />
									</div>
									<div className='QI_Label'>{Label}</div>
								</a>
							</div>
						);
					})}
				</div>
			</div>
			<div className='Card_Footer'>
				<a href='#' className='Card_Footer_Link'>
					See More
				</a>
			</div>
		</div>
	);
};

export default Card4x;

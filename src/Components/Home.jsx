import '../Css/Home.css';
import MainSlider from './MainSlider';
import Card1x from './Card1x';
import Card4x from './Card4x';
import Headset from '../Assets/Game_Accessories_C1/Headset.jpg';
import Keyboard from '../Assets/Game_Accessories_C1/Keyboard.jpg';
import Mouse from '../Assets/Game_Accessories_C1/Mouse.jpg';
import Chair from '../Assets/Game_Accessories_C1/Chair.jpg';
import Basket from '../Assets/Easy_Updates_C2/Basket.jpg';
import Hardware from '../Assets/Easy_Updates_C2/Hardware.jpg';
import Furniture from '../Assets/Easy_Updates_C2/Furniture.jpg';
import Wallpaper from '../Assets/Easy_Updates_C2/Wallpaper.jpg';
import Computers from '../Assets/Shop_By_Category_C3/Computers.jpg';
import VideoGames from '../Assets/Shop_By_Category_C3/VideoGames.jpg';
import Baby from '../Assets/Shop_By_Category_C3/Baby.jpg';
import Toys_And_Games from '../Assets/Shop_By_Category_C3/Toys_And_Games.jpg';
// *************Single Products Image Imports********************
import Beauty from '../Assets/SingleProduct_C4/Beauty.jpg';
import Dresses from '../Assets/SingleProduct_C4/Dresses.jpg';
import Electronics from '../Assets/SingleProduct_C4/Electronics.jpg';
import Health from '../Assets/SingleProduct_C4/Health.jpg';
import Fitness from '../Assets/SingleProduct_C4/Fitness.jpg';
import FitnessNeeds from '../Assets/SingleProduct_C4/FitnessNeeds.jpg';
import NewArrivalToys from '../Assets/SingleProduct_C4/NewArrivalToys.jpg';
import DiscoverFasionTrends from '../Assets/SingleProduct_C4/DiscoverFasionTrends.jpg';
// *************Books Imports********************
import Carousel from './Carousel';
import DayGoal from '../Assets/Books/100DayGoal.jpg';
import Bible from '../Assets/Books/Bible.jpg';
import BurnoutFix from '../Assets/Books/BurnoutFix.jpg';
import Distancia from '../Assets/Books/Distancia.jpg';
import DollarOpposite from '../Assets/Books/DollarOpposite.jpg';
import ElDragonCarton from '../Assets/Books/ElDragonCarton.jpg';
import ElVino from '../Assets/Books/ElVino.jpg';
import FirstSteps from '../Assets/Books/FirstSteps.jpg';
import GameInfinit from '../Assets/Books/GameInfinit.jpg';
import Grammer from '../Assets/Books/Grammer.jpg';
import Grammer1 from '../Assets/Books/Grammer1.jpg';
import Grammer2 from '../Assets/Books/Grammer2.jpg';
import Grammer3 from '../Assets/Books/Grammer3.jpg';
import HebrewFinance from '../Assets/Books/HebrewFinance.jpg';
import HenkaEffect from '../Assets/Books/HenkaEffect.jpg';
import HistoryOfSaintLucia from '../Assets/Books/HistoryOfSaintLucia.jpg';
import Journey from '../Assets/Books/Journey.jpg';
import Labre from '../Assets/Books/Labre.jpg';
import SecondStep from '../Assets/Books/SecondStep.jpg';
// *************Beauty Imports********************
import Cantu from '../Assets/Beauty/Cantu.jpg';
import CeraVe from '../Assets/Beauty/CeraVe.jpg';
import CeraVe1 from '../Assets/Beauty/CeraVe1.jpg';
import Cetaphir from '../Assets/Beauty/Cetaphir.jpg';
import Cetaphir1 from '../Assets/Beauty/Cetaphir1.jpg';
import Crest3DWhite from '../Assets/Beauty/Crest3DWhite.jpg';
import Crest3DWhite1 from '../Assets/Beauty/Crest3DWhite1.jpg';
import Crest3DWhite2 from '../Assets/Beauty/Crest3DWhite2.jpg';
import Crest3DWhite3 from '../Assets/Beauty/Crest3DWhite3.jpg';
import Eucerin from '../Assets/Beauty/Eucerin.jpg';
import Exfoliate from '../Assets/Beauty/Exfoliate.jpg';
import HairCurling from '../Assets/Beauty/HairCurling.jpg';
import LipSmacker from '../Assets/Beauty/LipSmacker.jpg';
import Nizoral from '../Assets/Beauty/Nizoral.jpg';
import PanOxyl from '../Assets/Beauty/PanOxyl.jpg';
import PanOxyl1 from '../Assets/Beauty/PanOxyl1.jpg';
import PanOxyl2 from '../Assets/Beauty/PanOxyl2.jpg';
import Roc from '../Assets/Beauty/Roc.jpg';
import UltraSheer from '../Assets/Beauty/UltraSheer.jpg';
import Vaseline from '../Assets/Beauty/Vaseline.jpg';
import VispMaxFresh from '../Assets/Beauty/VispMaxFresh.jpg';
import OlaPlex from '../Assets/Beauty/OlaPlex.jpg';
import OsilkTherapyLotion from '../Assets/Beauty/OsilkTherapyLotion.jpg';
import MakupRemover from '../Assets/Beauty/MakupRemover.jpg';
import EucerinLotion from '../Assets/Beauty/EucerinLotion.jpg';

const Home = () => {
	const QuadrateProductItem = [
		{
			Headline: 'Gaming accessories',
			QuadrateItems: [
				{
					Link: '#',
					Image: Headset,
					Label: 'Headsets',
				},
				{
					Link: '#',
					Image: Keyboard,
					Label: 'Keyboards',
				},
				{
					Link: '#',
					Image: Mouse,
					Label: 'Mouse',
				},
				{
					Link: '#',
					Image: Chair,
					Label: 'Chairs',
				},
			],
		},
		{
			Headline: 'Easy updates for elevated spaces',
			QuadrateItems: [
				{
					Link: '#',
					Image: Basket,
					Label: 'Baskets & hampers',
				},
				{
					Link: '#',
					Image: Hardware,
					Label: 'Hardware',
				},
				{
					Link: '#',
					Image: Furniture,
					Label: 'Furniture',
				},
				{
					Link: '#',
					Image: Wallpaper,
					Label: 'Wallpaper',
				},
			],
		},
		{
			Headline: 'Shop by Category',
			QuadrateItems: [
				{
					Link: '#',
					Image: Computers,
					Label: 'Computers & Accessories',
				},
				{
					Link: '#',
					Image: VideoGames,
					Label: 'Video Games',
				},
				{
					Link: '#',
					Image: Baby,
					Label: 'Baby',
				},
				{
					Link: '#',
					Image: Toys_And_Games,
					Label: 'Toys And Games',
				},
			],
		},
	];
	const QuadrateProductItem1 = [
		{
			Headline: 'Frequently repurchased in Beauty & Personal Care',
			QuadrateItems: [
				{
					Link: '#',
					Image: OlaPlex,
					Label: '',
				},
				{
					Link: '#',
					Image: MakupRemover,
					Label: '',
				},
				{
					Link: '#',
					Image: EucerinLotion,
					Label: '',
				},
				{
					Link: '#',
					Image: OsilkTherapyLotion,
					Label: '',
				},
			],
		},
	];
	const SingleProductItem = [
		{
			Headline: 'Beauty picks',
			Image: Beauty,
			Link: '#',
		},
		{
			Headline: 'Dresses',
			Image: Dresses,
			Link: '#',
		},
		{
			Headline: 'Electronics',
			Image: Electronics,
			Link: '#',
		},
		{
			Headline: 'Health & Personal Care',
			Image: Health,
			Link: '#',
		},
		{
			Headline: 'Get fit at home',
			Image: Fitness,
			Link: '#',
		},
	];
	const SingleProductItem1 = [
		{
			Headline: 'New arrivals in Toys',
			Image: NewArrivalToys,
			Link: '#',
		},
	];
	const SingleProductItem2 = [
		{
			Headline: 'Discover Fasion Trends',
			Image: DiscoverFasionTrends,
			Link: '#',
		},
		{
			Headline: 'For your Fitness Needs',
			Image: FitnessNeeds,
			Link: '#',
		},
	];
	const CarouselItems1 = [
		{
			Link: '#',
			Image: DayGoal,
		},
		{
			Link: '#',
			Image: Bible,
		},
		{
			Link: '#',
			Image: BurnoutFix,
		},
		{
			Link: '#',
			Image: Distancia,
		},
		{
			Link: '#',
			Image: DollarOpposite,
		},
		{
			Link: '#',
			Image: ElDragonCarton,
		},
		{
			Link: '#',
			Image: ElVino,
		},
		{
			Link: '#',
			Image: FirstSteps,
		},
		{
			Link: '#',
			Image: GameInfinit,
		},
		{
			Link: '#',
			Image: Grammer,
		},
		{
			Link: '#',
			Image: Grammer1,
		},
		{
			Link: '#',
			Image: Grammer2,
		},
		{
			Link: '#',
			Image: Grammer3,
		},
		{
			Link: '#',
			Image: HebrewFinance,
		},
		{
			Link: '#',
			Image: HenkaEffect,
		},
		{
			Link: '#',
			Image: HistoryOfSaintLucia,
		},
		{
			Link: '#',
			Image: Journey,
		},
		{
			Link: '#',
			Image: Labre,
		},
		{
			Link: '#',
			Image: SecondStep,
		},
	];
	const CarouselItems2 = [
		{
			Link: '#',
			Image: Cantu,
		},
		{
			Link: '#',
			Image: CeraVe,
		},
		{
			Link: '#',
			Image: CeraVe1,
		},
		{
			Link: '#',
			Image: Cetaphir,
		},
		{
			Link: '#',
			Image: Cetaphir1,
		},
		{
			Link: '#',
			Image: Crest3DWhite,
		},
		{
			Link: '#',
			Image: Crest3DWhite1,
		},
		{
			Link: '#',
			Image: Crest3DWhite2,
		},
		{
			Link: '#',
			Image: Crest3DWhite3,
		},
		{
			Link: '#',
			Image: Eucerin,
		},
		{
			Link: '#',
			Image: Exfoliate,
		},
		{
			Link: '#',
			Image: HairCurling,
		},
		{
			Link: '#',
			Image: LipSmacker,
		},
		{
			Link: '#',
			Image: Nizoral,
		},
		{
			Link: '#',
			Image: PanOxyl,
		},
		{
			Link: '#',
			Image: PanOxyl1,
		},
		{
			Link: '#',
			Image: PanOxyl2,
		},
		{
			Link: '#',
			Image: UltraSheer,
		},
		{
			Link: '#',
			Image: Roc,
		},
		{
			Link: '#',
			Image: Vaseline,
		},
		{
			Link: '#',
			Image: VispMaxFresh,
		},
	];
	return (
		<div className='Home'>
			{/* Hero Section */}
			<div className='Slider_Container'>
				<MainSlider />
			</div>
			{/* Categories */}
			<div className='Home_Container'>
				<div className='Category_Container d_flex w_100'>
					{QuadrateProductItem.map((item, index) => {
						return (
							<div className='Category_Item' key={index}>
								<Card4x items={item} />
							</div>
						);
					})}
					{SingleProductItem.map((item, index) => {
						return (
							<div className='Category_Item' key={index}>
								<Card1x items={item} />
							</div>
						);
					})}
				</div>

				{/* Cards Client */}
				<div className='Cards_Client_Carousel'>
					<Carousel
						UniqueClass={'CI1'}
						CarouselItems={CarouselItems1}
						Heading={'Top Sellers in Books for you'}
					/>
					<Carousel
						UniqueClass={'CI2'}
						CarouselItems={CarouselItems2}
						Heading={'Popular products in Beauty internationally'}
					/>
				</div>

				<div className='Category_Container d_flex w_100'>
					{SingleProductItem1.map((item, index) => {
						return (
							<div className='Category_Item' key={index}>
								<Card1x items={item} />
							</div>
						);
					})}
					{QuadrateProductItem1.map((item, index) => {
						return (
							<div className='Category_Item' key={index}>
								<Card4x items={item} />
							</div>
						);
					})}
					{SingleProductItem2.map((item, index) => {
						return (
							<div className='Category_Item' key={index}>
								<Card1x items={item} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;

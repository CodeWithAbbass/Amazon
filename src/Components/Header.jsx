import '../Css/Header.css';
import Amazon_Logo from '../Assets/Amazon_Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Header = () => {
	const SelectOnChange = (e) => {
		const SearchIn = document.getElementById('SearchIn');
		if (e.target.value.length <= 5) {
			SearchIn.style.width = `calc(60px + ${e.target.value.length}px)`;
		} else if (e.target.value.length <= 10) {
			SearchIn.style.width = `calc(90px + ${e.target.value.length}px)`;
		} else if (e.target.value.length <= 14) {
			SearchIn.style.width = `calc(100px + ${e.target.value.length}px)`;
		} else if (e.target.value.length <= 18) {
			SearchIn.style.width = `calc(130px + ${e.target.value.length}px)`;
		} else if (e.target.value.length < 20) {
			SearchIn.style.width = `calc(140px + ${e.target.value.length}px)`;
		} else if (e.target.value.length >= 20) {
			SearchIn.style.width = `calc(165px + ${e.target.value.length}px)`;
		}
		// SearchIn.style.width = `${e.target.value.length * 10}px`;
	};

	const SearchInputFocus = (e) => {
		const form = document.querySelector('.Header_Search');
		form.classList.toggle('Header_Sprint_Focused');
	};

	return (
		<div className='Header'>
			<img className='Header_Logo' src={Amazon_Logo} alt='Amazon Header Logo' />

			<form action='No Action' className='Header_Search'>
				<select
					onChange={SelectOnChange}
					name='SearchIn'
					id='SearchIn'
					title='Search in'
					className='Header_SearchIn'
				>
					<option defaultValue='All Department'>All</option>
					<option value='Arts & Crafts'>Arts & Crafts</option>
					<option value='Automotive'>Automotive</option>
					<option value='Baby'>Baby</option>
					<option value='Beauty & Personal Care'>Beauty & Personal Care</option>
					<option value='Books'>Books</option>
					<option value='Boys Fashion'>Boys Fashion</option>
					<option value='Computers'>Computers</option>
					<option value='Deals'>Deals</option>
					<option value='Digital Music'>Digital Music</option>
					<option value='Electronics'>Electronics</option>
					<option value='Girls Fashion'>Girls Fashion</option>
					<option value='Health & Household'>Health & Household</option>
					<option value='Home & Kitchen'>Home & Kitchen</option>
					<option value='Industrial & Scientific'>
						Industrial & Scientific
					</option>
					<option value='Kindle Store'>Kindle Store</option>
					<option value='Luggage'>Luggage</option>
					<option value="Men's Fashion">Men's Fashion</option>
					<option value='Movies & TV'>Movies & TV</option>
					<option value='Music, CDs & Vinyl'>Music, CDs & Vinyl</option>
					<option value='Pet Supplies'>Pet Supplies</option>
					<option value='Prime Video'>Prime Video</option>
					<option value='Software'>Software</option>
					<option value='Sports & Outdoors'>Sports & Outdoors</option>
					<option value='Tools & Home Improvement'>
						Tools & Home Improvement
					</option>
					<option value='Toys & Games'>Toys & Games</option>
					<option value='Video Games'>Video Games</option>
					<option value="Women's Fashion">Women's Fashion</option>
				</select>
				<input
					onFocus={SearchInputFocus}
					onBlur={SearchInputFocus}
					type='text'
					className='Header_SearchInput'
					placeholder='Search Amazon'
				/>
				<div className='Header_SearchIcon'>
					<SearchIcon className='Header_SearchIconSVG' />
				</div>
			</form>

			<div className='Header_Nav'>
				<div className='Header_NavOptions SignIn_Option'>
					<span className='Header_NavOptions_LineOne'>Hello Guest</span>
					<span className='Header_NavOptions_LineTwo'>Sign In</span>
				</div>
				<div className='Header_NavOptions Order_Option'>
					<span className='Header_NavOptions_LineOne'>Returns</span>
					<span className='Header_NavOptions_LineTwo'>& Orders</span>
				</div>
				<div className='Header_NavOptions Prime_Option'>
					<span className='Header_NavOptions_LineOne'>Your</span>
					<span className='Header_NavOptions_LineTwo'>Prime</span>
				</div>
				<div className='Header_NavOptions Basket_Option'>
					<span className='Header_NavOptions_LineOne BasketIcon'>
						<ShoppingBasketIcon />
					</span>
					<span className='Header_NavOptions_LineTwo BasketCount'>0</span>
				</div>
			</div>
		</div>
	);
};

export default Header;

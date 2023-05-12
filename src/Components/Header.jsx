import "../Css/Header.css";
import Amazon_Logo from "../Assets/Amazon_Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let data = useSelector((state) => {
    return state.Cart.items;
  });

  const SelectOnChange = (e) => {
    const SearchIn = document.getElementById("SearchIn");
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
  };
  const SearchInputFocus = (e) => {
    const form = document.querySelector(".Header_Search");
    form.classList.toggle("Header_Sprint_Focused");
    let Home = document.querySelector(".Home");
    Home.classList.toggle("Opacity");
  };
  const MobileSidebar = (e) => {
    const Sidebar = document.querySelector(".MobileSidebar");
    Sidebar.classList.toggle("MobileSidebar_Open");
    const Body = document.body;
    Body.classList.toggle("DisableBodyScroll");
  };
  const DesktopSidebar = (e) => {
    const Sidebar = document.querySelector(".DesktopSidebar");
    Sidebar.classList.toggle("DesktopSidebar_Open");
    const Body = document.body;
    Body.classList.toggle("DisableBodyScroll");
  };
  const ShowSubMenu = (ClsName) => {
    const AllSubMenu = document.querySelectorAll(".DesktopSidebar_SubMenu");
    const Sidebar = document.querySelector(".DesktopSidebar_Content");
    Sidebar.classList.toggle("DesktopSIdebar_DisableScroll");
    AllSubMenu.forEach((SubMenu) => {
      if (SubMenu.classList.contains(`${ClsName}`)) {
        SubMenu.classList.toggle("SubMenu_Show");
      }
      if (ClsName == "All") {
        SubMenu.classList.remove("SubMenu_Show");
      }
    });
  };
  const ShowAllMenu = (ClsName) => {
    const AllMainMenu = document.querySelectorAll(".Menu_Item");
    const SeeAllLinkBtn = document.querySelectorAll(".SeeAllLink");
    SeeAllLinkBtn.forEach((elem) => {
      elem.remove();
    });
    AllMainMenu.forEach((MainMenu) => {
      if (MainMenu.classList.contains(`${ClsName}`)) {
        MainMenu.classList.remove(ClsName);
      }
    });
  };

  // Sidebar Categories
  const MenuCategory1 = {
    Main: {
      MainHeading: "digital content & devices",
      MenuItem: [
        { id: 1, MenuLink: "#", MenuItemTxt: "Amazon Music" },
        { id: 2, MenuLink: "#", MenuItemTxt: "Kindle E-readers & Books" },
        { id: 3, MenuLink: "#", MenuItemTxt: "Amazon App Store" },
      ],
    },
    Sub: [
      {
        id: 1,
        SubHeading: "Stream Music",
        SubItem: [
          { SubLink: "#", SubMenu: "Amazon Music Unlimited" },
          { SubLink: "#", SubMenu: "Free Streaming Music" },
          { SubLink: "#", SubMenu: "Podcasts" },
          { SubLink: "#", SubMenu: "Open Web Player" },
          { SubLink: "#", SubMenu: "Download the App" },
        ],
      },
      {
        id: 2,
        SubHeading: "Kindle E-Readers",
        SubItem: [
          { SubLink: "#", SubMenu: "Kindle Kids" },
          { SubLink: "#", SubMenu: "Free Streaming Music" },
          { SubLink: "#", SubMenu: "Kindle" },
          { SubLink: "#", SubMenu: "Kindle Paperwhite" },
          { SubLink: "#", SubMenu: "Kindle Oasis" },
        ],
      },
      {
        id: 3,
        SubHeading: "Amazon Appstore",
        SubItem: [
          { SubLink: "#", SubMenu: "All Apps and Games" },
          { SubLink: "#", SubMenu: "Games" },
          { SubLink: "#", SubMenu: "Amazon Coins" },
          { SubLink: "#", SubMenu: "Download Amazon Appstore" },
        ],
      },
    ],
  };
  const MenuCategory2 = {
    Main: {
      MainHeading: "Shop By Department",
      MenuItem: [
        { id: 4, MenuLink: "#", MenuItemTxt: "Electronics" },
        { id: 5, MenuLink: "#", MenuItemTxt: "Computers" },
        { id: 6, MenuLink: "#", MenuItemTxt: "Smart Home" },
        { id: 7, MenuLink: "#", MenuItemTxt: "Arts & Crafts" },
        { id: 8, MenuLink: "#", MenuItemTxt: "Automotive" },
        { id: 9, MenuLink: "#", MenuItemTxt: "Baby" },
        { id: 10, MenuLink: "#", MenuItemTxt: "Beauty and personal care" },
        { id: 11, MenuLink: "#", MenuItemTxt: "Women's Fashion" },
        { id: 12, MenuLink: "#", MenuItemTxt: "Men's Fashion" },
        { id: 13, MenuLink: "#", MenuItemTxt: "Health And Household" },
        { id: 14, MenuLink: "#", MenuItemTxt: "Movies & Television" },
      ],
    },
    Sub: [
      {
        id: 4,
        SubHeading: "Electronics",
        SubItem: [
          { SubLink: "#", SubMenu: "Accessories & Supplies" },
          { SubLink: "#", SubMenu: "Camera & Photo" },
          { SubLink: "#", SubMenu: "Car & Vehicle Electronics" },
          { SubLink: "#", SubMenu: "Cell Phones & Accessories" },
          { SubLink: "#", SubMenu: "GPS & Navigation" },
          { SubLink: "#", SubMenu: "Headphones" },
          { SubLink: "#", SubMenu: "Home Audio" },
          { SubLink: "#", SubMenu: "Office Electronics" },
          { SubLink: "#", SubMenu: "Portable Audio & Video" },
          { SubLink: "#", SubMenu: "Security & Surveillance" },
          { SubLink: "#", SubMenu: "Service Plans" },
          { SubLink: "#", SubMenu: "Television & Video" },
          { SubLink: "#", SubMenu: "Video Game Consoles & Accessories" },
          { SubLink: "#", SubMenu: "Video Projectors" },
          { SubLink: "#", SubMenu: "Wearable Technology" },
          { SubLink: "#", SubMenu: "eBook Readers & Accessories" },
        ],
      },
      {
        id: 5,
        SubHeading: "Computers",
        SubItem: [
          { SubLink: "#", SubMenu: "Computer Accessories & Peripherals" },
          { SubLink: "#", SubMenu: "Computer Components" },
          { SubLink: "#", SubMenu: "Computers & Tablets" },
          { SubLink: "#", SubMenu: "Data Storage" },
          { SubLink: "#", SubMenu: "External Components" },
          { SubLink: "#", SubMenu: "Laptop Accessories" },
          { SubLink: "#", SubMenu: "Monitors" },
          { SubLink: "#", SubMenu: "Networking Products" },
          { SubLink: "#", SubMenu: "Power Strips & Surge Protectors" },
          { SubLink: "#", SubMenu: "Printers" },
          { SubLink: "#", SubMenu: "Scanners" },
          { SubLink: "#", SubMenu: "Servers" },
          { SubLink: "#", SubMenu: "Tablet Accessories" },
          { SubLink: "#", SubMenu: "Tablet Replacement Parts" },
          { SubLink: "#", SubMenu: "Warranties & Services" },
        ],
      },
      {
        id: 6,
        SubHeading: "Smart Home",
        SubItem: [
          { SubLink: "#", SubMenu: "Amazon Smart Home" },
          { SubLink: "#", SubMenu: "Smart Home Lighting" },
          { SubLink: "#", SubMenu: "Smart Locks and Entry" },
          { SubLink: "#", SubMenu: "Security Cameras and Systems" },
          { SubLink: "#", SubMenu: "Plugs and Outlets" },
          { SubLink: "#", SubMenu: "New Smart Devices" },
          { SubLink: "#", SubMenu: "Heating and Cooling" },
          { SubLink: "#", SubMenu: "Detectors and Sensors" },
          { SubLink: "#", SubMenu: "Home Entertainment" },
          { SubLink: "#", SubMenu: "Pet" },
          { SubLink: "#", SubMenu: "Voice Assistants and Hubs" },
          { SubLink: "#", SubMenu: "Kitchen" },
          { SubLink: "#", SubMenu: "Vacuums and Mops" },
          { SubLink: "#", SubMenu: "Lawn and Garden" },
          { SubLink: "#", SubMenu: "WIFI and Networking" },
          { SubLink: "#", SubMenu: "Other Solutions" },
        ],
      },
      {
        id: 7,
        SubHeading: "Arts & Crafts",
        SubItem: [
          { SubLink: "#", SubMenu: "Painting, Drawing & Art Supplies" },
          { SubLink: "#", SubMenu: "Beading & Jewelry Making" },
          { SubLink: "#", SubMenu: "Crafting" },
          { SubLink: "#", SubMenu: "Fabric" },
          { SubLink: "#", SubMenu: "Fabric Decorating" },
          { SubLink: "#", SubMenu: "Knitting & Crochet" },
          { SubLink: "#", SubMenu: "Needlework" },
          { SubLink: "#", SubMenu: "Organization, Storage & Transport" },
          { SubLink: "#", SubMenu: "Printmaking" },
          { SubLink: "#", SubMenu: "Scrapbooking & Stamping" },
          { SubLink: "#", SubMenu: "Sewing" },
          { SubLink: "#", SubMenu: "Party Decorations & Supplies" },
          { SubLink: "#", SubMenu: "Gift Wrapping Supplies" },
        ],
      },
      {
        id: 8,
        SubHeading: "Automotive",
        SubItem: [
          { SubLink: "#", SubMenu: "Car Care" },
          { SubLink: "#", SubMenu: "Car Electronics & Accessories" },
          { SubLink: "#", SubMenu: "Exterior Accessories" },
          { SubLink: "#", SubMenu: "Interior Accessories" },
          { SubLink: "#", SubMenu: "Lights & Lighting Accessories" },
          { SubLink: "#", SubMenu: "Motorcycle & Powersports" },
          { SubLink: "#", SubMenu: "Oils & Fluids" },
          { SubLink: "#", SubMenu: "Paint & Paint Supplies" },
          { SubLink: "#", SubMenu: "Perfomance Parts & Accessories" },
          { SubLink: "#", SubMenu: "Replacement Parts" },
          { SubLink: "#", SubMenu: "RV Parts & Accessories" },
          { SubLink: "#", SubMenu: "Tires & Wheels" },
          { SubLink: "#", SubMenu: "Tools & Equipments" },
          { SubLink: "#", SubMenu: "Automotive Enthusiast Merchandise" },
          {
            SubLink: "#",
            SubMenu: "Heavy Duty & Commercial Vehicle Equipment",
          },
        ],
      },
      {
        id: 9,
        SubHeading: "Baby",
        SubItem: [
          { SubLink: "#", SubMenu: "Activity & Entertainment" },
          { SubLink: "#", SubMenu: "Apparel & Accessories" },
          { SubLink: "#", SubMenu: "Baby & Toddler Toys" },
          { SubLink: "#", SubMenu: "Baby Care" },
          { SubLink: "#", SubMenu: "Baby Stationery" },
          { SubLink: "#", SubMenu: "Car Seats & Accessories" },
          { SubLink: "#", SubMenu: "Diapering" },
          { SubLink: "#", SubMenu: "Feeding" },
          { SubLink: "#", SubMenu: "Gift" },
          { SubLink: "#", SubMenu: "Nursery" },
          { SubLink: "#", SubMenu: "Potty Training" },
          { SubLink: "#", SubMenu: "Pregnancy Maternity" },
          { SubLink: "#", SubMenu: "Safety" },
          { SubLink: "#", SubMenu: "Strollers & Accessories" },
          { SubLink: "#", SubMenu: "Travel Gear" },
        ],
      },
      {
        id: 10,
        SubHeading: "Beauty And Personal Care",
        SubItem: [
          { SubLink: "#", SubMenu: "Makeup" },
          { SubLink: "#", SubMenu: "Skin Care" },
          { SubLink: "#", SubMenu: "Hair Care" },
          { SubLink: "#", SubMenu: "Foot, Hand & Nail Care" },
          { SubLink: "#", SubMenu: "Tools & Accessories" },
          { SubLink: "#", SubMenu: "Shave & Hair Removal" },
          { SubLink: "#", SubMenu: "Personal Care" },
          { SubLink: "#", SubMenu: "Oral Care" },
        ],
      },
      {
        id: 11,
        SubHeading: "Women's Fashion",
        SubItem: [
          { SubLink: "#", SubMenu: "Clothing" },
          { SubLink: "#", SubMenu: "Shoes" },
          { SubLink: "#", SubMenu: "Jewelry" },
          { SubLink: "#", SubMenu: "Watches" },
          { SubLink: "#", SubMenu: "Handbags" },
          { SubLink: "#", SubMenu: "Accessories" },
          { SubLink: "#", SubMenu: "Men's Fasion" },
          { SubLink: "#", SubMenu: "Girls' Fasion" },
          { SubLink: "#", SubMenu: "Boys' Fasion" },
        ],
      },
      {
        id: 12,
        SubHeading: "Men's Fashion",
        SubItem: [
          { SubLink: "#", SubMenu: "Clothing" },
          { SubLink: "#", SubMenu: "Shoes" },
          { SubLink: "#", SubMenu: "Jewelry" },
          { SubLink: "#", SubMenu: "Watches" },
          { SubLink: "#", SubMenu: "Handbags" },
          { SubLink: "#", SubMenu: "Accessories" },
          { SubLink: "#", SubMenu: "Men's Fasion" },
          { SubLink: "#", SubMenu: "Girls' Fasion" },
          { SubLink: "#", SubMenu: "Boys' Fasion" },
        ],
      },
      {
        id: 13,
        SubHeading: "Health And Household",
        SubItem: [
          { SubLink: "#", SubMenu: "Baby & Child Care" },
          { SubLink: "#", SubMenu: "Health Care" },
          { SubLink: "#", SubMenu: "Household Supplies" },
          { SubLink: "#", SubMenu: "Medical Supplies & Equipment" },
          { SubLink: "#", SubMenu: "Oral Care" },
          { SubLink: "#", SubMenu: "Personal Care" },
          { SubLink: "#", SubMenu: "Sexual Wellness" },
          { SubLink: "#", SubMenu: "Sports Nutrition" },
          { SubLink: "#", SubMenu: "Stationery & Gift Wrapping Supplies" },
          { SubLink: "#", SubMenu: "Vision Care" },
          { SubLink: "#", SubMenu: "Vitamins & Dietary Supplements" },
          { SubLink: "#", SubMenu: "Wellness & Relaxation" },
        ],
      },
      {
        id: 14,
        SubHeading: "Movies & Television",
        SubItem: [
          { SubLink: "prime", SubMenu: "Movies" },
          { SubLink: "prime", SubMenu: "TV Shows" },
          { SubLink: "prime", SubMenu: "Blu-ray" },
          { SubLink: "prime", SubMenu: "4K Ultra HD" },
          { SubLink: "prime", SubMenu: "Best Seller" },
          { SubLink: "prime", SubMenu: "Today's Deals" },
          { SubLink: "prime", SubMenu: "New Release" },
          { SubLink: "prime", SubMenu: "Pre-orders" },
          { SubLink: "prime", SubMenu: "Kids & Family" },
          { SubLink: "prime", SubMenu: "Prime Video" },
        ],
      },
    ],
  };
  const MenuCategory3 = {
    Main: {
      MainHeading: "Programs & Features",
      MenuItem: [
        { id: 15, MenuLink: "#", MenuItemTxt: "Gift Cards" },
        { id: 16, MenuLink: "#", MenuItemTxt: "Manage Gift Cards" },
        { id: 17, MenuLink: "#", MenuItemTxt: "Shop By Interest" },
        { id: 18, MenuLink: "#", MenuItemTxt: "Amazon Live" },
        { id: 19, MenuLink: "#", MenuItemTxt: "International Shopping" },
        { id: 20, MenuLink: "#", MenuItemTxt: "Amazon Second Chance" },
      ],
    },
    Sub: [
      {
        id: 15,
        SubHeading: "Give A Gift Card",
        SubItem: [
          { SubLink: "#", SubMenu: "All gift cards" },
          { SubLink: "#", SubMenu: "eGift cards" },
          { SubLink: "#", SubMenu: "Gift cards by mail" },
          { SubLink: "#", SubMenu: "Amazon Cash" },
          { SubLink: "#", SubMenu: "For Businesses" },
        ],
      },
      {
        id: 16,
        SubHeading: "Manage Your Gift Card",
        SubItem: [
          { SubLink: "#", SubMenu: "Redeem a gift card" },
          { SubLink: "#", SubMenu: "View Your Balance" },
          { SubLink: "#", SubMenu: "Reload Your Balance" },
        ],
      },
      {
        id: 19,
        SubHeading: "International Shopping",
        SubItem: [
          { SubLink: "#", SubMenu: "Where We Ship" },
          { SubLink: "#", SubMenu: "Visit Amazon Global" },
        ],
      },
    ],
  };
  const MenuCategory4 = {
    Main: {
      MainHeading: "Help & Settings",
      MenuItem: [
        { id: 21, MenuLink: "user", MenuItemTxt: "Your Account" },
        { id: 22, MenuLink: "#", MenuItemTxt: "Customer Services" },
        { id: 23, MenuLink: "#", MenuItemTxt: "Sign Out" },
      ],
    },
    Sub: [],
  };
  const SidebarCat = [
    MenuCategory1,
    MenuCategory2,
    MenuCategory3,
    MenuCategory4,
  ];

  return (
    <div className="Header">
      <div className="Main_Header_Container">
        <div className="Header_Hamburger">
          <button className="Hamburger_Menu" onClick={() => MobileSidebar()}>
            <MenuIcon className="Hamburger_Icon" />
          </button>
          <Link className="Header_Logo_Link MobileRes_LogoLink" to="/">
            <img
              className="MobileHeader_Logo"
              src={Amazon_Logo}
              alt="Amazon Header Logo"
            />
          </Link>
        </div>
        <Link className="Header_Logo_Link DesktopRes_LogoLink" to="/">
          <img
            className="DesktopHeader_Logo"
            src={Amazon_Logo}
            alt="Amazon Header Logo"
          />
        </Link>
        <form action="No Action" className="Header_Search">
          <select
            onChange={SelectOnChange}
            name="SearchIn"
            id="SearchIn"
            title="Search in"
            className="Header_SearchIn"
          >
            <option defaultValue="All Department">All</option>
            <option value="Arts & Crafts">Arts & Crafts</option>
            <option value="Automotive">Automotive</option>
            <option value="Baby">Baby</option>
            <option value="Beauty & Personal Care">
              Beauty & Personal Care
            </option>
            <option value="Books">Books</option>
            <option value="Boys Fashion">Boys Fashion</option>
            <option value="Computers">Computers</option>
            <option value="Deals">Deals</option>
            <option value="Digital Music">Digital Music</option>
            <option value="Electronics">Electronics</option>
            <option value="Girls Fashion">Girls Fashion</option>
            <option value="Health & Household">Health & Household</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Industrial & Scientific">
              Industrial & Scientific
            </option>
            <option value="Kindle Store">Kindle Store</option>
            <option value="Luggage">Luggage</option>
            <option value="Men's Fashion">Men's Fashion</option>
            <option value="Movies & TV">Movies & TV</option>
            <option value="Music, CDs & Vinyl">Music, CDs & Vinyl</option>
            <option value="Pet Supplies">Pet Supplies</option>
            <option value="Prime Video">Prime Video</option>
            <option value="Software">Software</option>
            <option value="Sports & Outdoors">Sports & Outdoors</option>
            <option value="Tools & Home Improvement">
              Tools & Home Improvement
            </option>
            <option value="Toys & Games">Toys & Games</option>
            <option value="Video Games">Video Games</option>
            <option value="Women's Fashion">Women's Fashion</option>
          </select>
          <input
            onFocus={SearchInputFocus}
            onBlur={SearchInputFocus}
            type="text"
            className="Header_SearchInput"
            placeholder="Search Amazon"
          />
          <div className="Header_SearchIcon">
            <SearchIcon className="Header_SearchIconSVG" />
          </div>
        </form>
        <div className="Header_Nav">
          <div className="Header_NavOptions SignIn_Option">
            <span className="Header_NavOptions_LineOne">Hello Guest</span>
            <span className="Header_NavOptions_LineTwo">Sign In</span>
          </div>
          <Link className="Header_NavOptions Order_Option">
            <span className="Header_NavOptions_LineOne">Returns</span>
            <span className="Header_NavOptions_LineTwo">& Orders</span>
          </Link>
          <Link className="Header_NavOptions Prime_Option" to="prime">
            <span className="Header_NavOptions_LineOne">Your</span>
            <span className="Header_NavOptions_LineTwo">Prime</span>
          </Link>
          <Link to="user" className="Header_NavOptions Person_Option">
            <PersonIcon className="Person_Icon" />
          </Link>
          <Link to="cart" className="Header_NavOptions Basket_Option">
            <span className="Header_NavOptions_LineOne BasketIcon">
              <ShoppingBasketIcon />
            </span>
            <span className="Header_NavOptions_LineTwo BasketCount">
              {data.length}
            </span>
          </Link>
        </div>
      </div>
      <div className="Header_Bottom">
        <div className="Header_Bottom_Nav_Container">
          <ul className="Header_Bottom_Nav_Left">
            <li
              className="Bottom_Nav_Left_Link Hamburger_Left_Link"
              onClick={() => DesktopSidebar()}
            >
              <MenuIcon className="Bottom_Nav_Hamburger_Icon" />
              <span className="Bottom_Nav_Hamburger_txt">All</span>
            </li>
            <li className="Bottom_Nav_Left_Link">Today's Deals</li>
            <li className="Bottom_Nav_Left_Link">Buy Again</li>
            <li className="Bottom_Nav_Left_Link">Gift Cards</li>
            <li className="Bottom_Nav_Left_Link">Sell</li>
            <li className="Bottom_Nav_Left_Link">Registry</li>
            <li className="Bottom_Nav_Left_Link">Abbas's Amazon.com</li>
            <li className="Bottom_Nav_Left_Link">Customer Service</li>
            <li className="Bottom_Nav_Left_Link">Browsing History</li>
          </ul>
          <div className="Header_Bottom_Nav_Right">
            <Link to="#" className="Nav_Right_Link">
              Shop great deals now
            </Link>
          </div>
        </div>
      </div>
      <div className="DesktopSidebar">
        <div className="DesktopSidebar_Container">
          <div className="DesktopSidebar_Content_Container">
            <div className="DesktopSidebar_Profile">
              <Link to="user" className="DesktopSidebar_Profile_Link">
                <AccountCircleIcon className="Profile_Avatar" />
                <span className="Profile_Txt">Hello, Abbas</span>
              </Link>
            </div>
            <div className="DesktopSidebar_Content">
              {SidebarCat.length < 1
                ? ""
                : SidebarCat.map((item, index) => {
                    const { Main, Sub } = item;
                    const { MainHeading, MenuItem } = Main;
                    return (
                      <div key={index}>
                        <ul className="DesktopSidebar_Menu">
                          <li className="DesktopSidebar_Menu_Txt">
                            <h6 className="Menu_Txt_Heading">{MainHeading}</h6>
                            <div className="Menu_Item_Container">
                              {MenuItem.length < 1
                                ? ""
                                : MenuItem.map((MainMenuItem, index) => {
                                    const {
                                      id: MainMenuID,
                                      MenuLink,
                                      MenuItemTxt,
                                    } = MainMenuItem;
                                    if (index < 4) {
                                      return (
                                        <Link
                                          to={MenuLink}
                                          key={MainMenuID}
                                          className={`Menu_Item ShowMenuIcon`}
                                          onClick={() =>
                                            Sub.map((SubItemObj) => {
                                              SubItemObj.id == MainMenuID
                                                ? ShowSubMenu(`${MainMenuID}`)
                                                : "";
                                            })
                                          }
                                        >
                                          <span>{MenuItemTxt}</span>
                                          <KeyboardArrowRightIcon />
                                        </Link>
                                      );
                                    }
                                    if (index >= 4) {
                                      return (
                                        <div key={MainMenuID}>
                                          {index == 4 ? (
                                            <Link
                                              to="#"
                                              className="Menu_Item SeeAllLink"
                                              onClick={() =>
                                                ShowAllMenu("SeeAllLinkAfter")
                                              }
                                            >
                                              <span className="SeeAllLinkTxt">
                                                See All
                                              </span>
                                              <KeyboardArrowDownIcon />
                                            </Link>
                                          ) : (
                                            ""
                                          )}
                                          <Link
                                            to={MenuLink}
                                            className="Menu_Item SeeAllLinkAfter ShowMenuIcon"
                                            onClick={() =>
                                              Sub.map((SubItemObj) => {
                                                SubItemObj.id == MainMenuID
                                                  ? ShowSubMenu(`${MainMenuID}`)
                                                  : "";
                                              })
                                            }
                                          >
                                            {MenuItemTxt}
                                            <KeyboardArrowRightIcon />
                                          </Link>
                                        </div>
                                      );
                                    }
                                  })}
                            </div>
                          </li>
                          {Sub.length < 1
                            ? ""
                            : Sub.map((SubMenuItem) => {
                                const {
                                  id: SubMenuID,
                                  SubHeading,
                                  SubItem,
                                } = SubMenuItem;
                                return (
                                  <li
                                    className={`DesktopSidebar_SubMenu ${SubMenuID}`}
                                    key={SubMenuID}
                                  >
                                    <Link
                                      className="SubMenu_To_MainMenu"
                                      onClick={() =>
                                        ShowSubMenu(`${SubMenuID}`)
                                      }
                                    >
                                      <ArrowBackIcon className="SubMenu_To_MainMenu_Icon" />
                                      <span className="SubMenu_To_MainMenu_Txt">
                                        Main Menu
                                      </span>
                                    </Link>
                                    <div className="SubMenu_Menu_Container">
                                      <h6 className="SubMenu_Menu_Heading">
                                        {SubHeading}
                                      </h6>
                                      <div className="SubMenu_Menu_Item_Container">
                                        {SubItem.length < 1
                                          ? ""
                                          : SubItem.map(
                                              (SubMenuLink, index) => {
                                                const { SubLink, SubMenu } =
                                                  SubMenuLink;
                                                return (
                                                  <Link
                                                    key={index}
                                                    to={SubLink}
                                                    className="SubMenu_Menu_Item"
                                                  >
                                                    {SubMenu}
                                                  </Link>
                                                );
                                              }
                                            )}
                                      </div>
                                    </div>
                                  </li>
                                );
                              })}
                        </ul>
                        <div className="DesktopSidebar_Separator"></div>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className="DesktopSidebar_Close">
            <button
              className="DesktopSidebar_Close_Btn"
              onClick={() => {
                DesktopSidebar();
                ShowSubMenu("All");
              }}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="MobileSidebar">
        <div className="MobileSidebar_Container">
          <div className="MobileSidebar_Content">
            <ul className="MobileSidebar_Content_Container">
              <li className="MobileSidebar_Header">
                <Link to="user" className="MobileSidebar_HeaderTop">
                  <span className="MobileSidebar_HeaderTop_Txt">
                    Your Account
                  </span>
                  <PersonIcon className="MobileSidebar_HeaderTop_Icon" />
                </Link>
                <Link
                  to="/"
                  className="MobileSidebar_HeaderBottom"
                  onClick={() => ToggleSidebar()}
                >
                  <span className="MobileSidebar_Bottom_LineOne">Browse</span>
                  <span className="MobileSidebar_Bottom_LineTwo">Amazon</span>
                </Link>
              </li>
              <li className="MobileSidebar_Home">
                <Link
                  to="/"
                  className="MobileSidebar_Home_Link"
                  onClick={() => ToggleSidebar()}
                >
                  <span className="Amazon_Home_Heading">Amazon Home</span>
                  <HomeIcon className="Amazon_Home_Icon" />
                </Link>
              </li>
              <li className="MobileSidebar_Separator"></li>
              <li className="MobileSidebar_Trending">
                <div className="Trending_Heading">Trending</div>
                <Link
                  to="/"
                  className="Trending_Link"
                  onClick={() => ToggleSidebar()}
                >
                  Movers & Shakers
                </Link>
              </li>
              <li className="MobileSidebar_Separator"></li>
              <li className="Sidebar_Menu">
                <div className="Menu_Heading">Menu</div>
                <div className="Menu_Link_Container">
                  <Link
                    to="allproducts"
                    className="Menu_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    All Products
                  </Link>
                  <Link
                    to="prime"
                    className="Menu_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Prime
                  </Link>
                  <Link
                    to="user"
                    className="Menu_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Profile
                  </Link>
                  <Link
                    to="cart"
                    className="Menu_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Wishlist
                  </Link>
                  <Link
                    to="orders"
                    className="Menu_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Returns & Orders
                  </Link>
                  <Link
                    to="search"
                    className="Menu_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Search
                  </Link>
                  <Link
                    to="login"
                    className="Menu_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Login
                  </Link>
                  <Link
                    to="services"
                    className="Menu_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Customer Services
                  </Link>
                  <Link
                    to="support"
                    className="Menu_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Support
                  </Link>
                  <Link
                    to="help"
                    className="Menu_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Help
                  </Link>
                </div>
              </li>
              <li className="MobileSidebar_Separator"></li>
              <li className="MobileSidebar_TopDepartments">
                <div className="TopDepartments_Heading">Top Departments</div>
                <div className="Department_Link_Container">
                  <Link
                    to="/"
                    className="Department_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Home
                  </Link>
                  <Link
                    to="/"
                    className="Department_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Health & Household
                  </Link>
                  <Link
                    to="/"
                    className="Department_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    Books
                  </Link>
                  <Link
                    to="/"
                    className="Department_Link"
                    onClick={() => ToggleSidebar()}
                  >
                    PC
                  </Link>
                </div>
              </li>
              <li className="MobileSidebar_Department_Link_Separator" />
              <li className="MobileSidebar_TopDepartments">
                <Link to="/" className="Department_Link">
                  Amazon Music
                </Link>
                <Link to="/" className="Department_Link">
                  Prime Video
                </Link>
                <Link to="/" className="Department_Link">
                  Books
                </Link>
                <Link to="/" className="Department_Link">
                  Echo & Alexa
                </Link>
                <Link to="/" className="Department_Link">
                  Fire Tablets
                </Link>
                <Link to="/" className="Department_Link">
                  Fire TV
                </Link>
              </li>
              <li className="MobileSidebar_Department_Link_Separator" />
              <li className="MobileSidebar_TopDepartments">
                <div className="Department_Link_Container">
                  <Link to="/" className="Department_Link">
                    Audible Books & Originals
                  </Link>
                  <Link to="/" className="Department_Link">
                    Kindle
                  </Link>
                  <Link to="/" className="Department_Link">
                    Clothing, Shoes, Jewelry & Watches
                  </Link>
                  <Link to="/" className="Department_Link">
                    Electronics
                  </Link>
                  <Link to="/" className="Department_Link">
                    Office & School Supplies
                  </Link>
                  <Link to="/" className="Department_Link">
                    Gift Cards
                  </Link>
                  <Link to="/" className="Department_Link">
                    Amazon Appstore
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="MobileSidebar_Close">
            <button
              className="MobileSidebar_Close_Btn"
              onClick={() => MobileSidebar()}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;



const SidebarMenu = ({ClsName, Heading, Menu}) => {
  return (
    <li className={`DesktopSidebar_SubMenu ${ClsName}`}>
      <Link
        className="SubMenu_To_MainMenu"
        onClick={() => ShowSubMenu(`${ClsName}`)}
      >
        <ArrowBackIcon className="SubMenu_To_MainMenu_Icon" />
        <span className="SubMenu_To_MainMenu_Txt">Main Menu</span>
      </Link>
      <div className="SubMenu_Menu_Container">
        <h6 className="SubMenu_Menu_Heading">Amazon Appstore</h6>
        <div className="SubMenu_Menu_Item_Container">
          <Link className="SubMenu_Menu_Item">All Apps and Games</Link>
          <Link className="SubMenu_Menu_Item">Games</Link>
          <Link className="SubMenu_Menu_Item">Amazon Coins</Link>
          <Link className="SubMenu_Menu_Item">Download Amazon Appstore</Link>
        </div>
      </div>
    </li>
  );
}

export default SidebarMenu;

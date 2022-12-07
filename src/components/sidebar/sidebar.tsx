import Navbar from "../navbar/navbar";
import Search from "../search/search";
import './sidebar.scss';



const Sidebar = () => {
 

  return (
    <div className="Sidebar">
      <Navbar />
      <Search />
      
    </div>
  );
};

export default Sidebar;

import React from "react";
import DisplayList from "./DisplayList";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";


const sortTypes = {
  ascending: { name: "Ascending", fn: (a, b) => a.price - b.price },
  descending: { name: "Descending", fn: (a, b) => b.price - a.price },
  default: { name: "None", fn: (a, b) => a },
};

const FilteredList = (props) => {
  const { list, onAdd } = props;

  const [type, setType] = React.useState("All");
  const [currentSort, setCurrentSort] = React.useState("default");
  const [wineList, setWineList] = React.useState(list);
  const [region, setRegion] = React.useState("All");

  // sort items function
  const sortItems = () => {
    let clickSort;
    if (currentSort === "descending") {
      clickSort = "ascending";
      setWineList(list.slice().sort((a, b) => (a.price > b.price ? 1 : -1)));
    } else if (currentSort === "ascending") {
      clickSort = "default";
      setWineList(list);
    } else if (currentSort === "default") {
      clickSort = "descending";
      setWineList(list.slice().sort((a, b) => (a.price < b.price ? 1 : -1)));
    }

    setCurrentSort(clickSort);
  };

  const onSelectFilterType = (event) => {
    console.log("HIIII")
    setType(event);
  };


  const onSelectFilterRegion = (region) => {
    setRegion(region);
  };

  const filterByType = (item) => {
    if (type === "All") { // if filter is all 
      return true;
    } 
    else if (type === item.type) { // check for filter for other wine types
      return true;
    } 

  };

  const filterByRegion = (item) => {
    if (region === "All") {
      return true;
    } 
    else if (region === item.region) {
      return true;
    } 

  };



  return (
    
    <div>
    <div className="container">
    <div className="filters">
    <div className="empty-div"></div>
        <Nav className="flex-column" variant="pills" defaultActiveKey="All" onSelect={onSelectFilterType}>
         <p><b>Wine Type</b></p>
          <Nav.Item>
            <Nav.Link eventKey="All">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Red">Red</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="White">White</Nav.Link>
          </Nav.Item >
          <Nav.Item>
            <Nav.Link eventKey="Rosé">Rosé</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Sparkling">Sparkling</Nav.Link>
          </Nav.Item>
        </Nav>
      <div className="empty-div"></div>
      <div className="region">
        <Nav className="flex-column" variant="pills" defaultActiveKey="All" onSelect={onSelectFilterRegion}>
         <p><b>Wine Region</b></p>
          <Nav.Item>
            <Nav.Link eventKey="All">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="France">France</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="America">America</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Greece">Greece</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Argentina">Argentina</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    <div>
    <div className="empty-div"></div>
    <Button variant="secondary" className="price"  onClick={sortItems}>
            Sort by price: {sortTypes[currentSort].name}
          </Button>
    </div>
    </div>
    <div className="item-list">
      <DisplayList
        list={wineList.filter(filterByType).filter(filterByRegion)}
        onAdd={onAdd}
      /></div>
      </div>
    </div>
  );
};
export default FilteredList;
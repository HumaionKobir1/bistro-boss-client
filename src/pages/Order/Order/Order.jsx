import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import orderImg from '../../../assets/shop/banner2.jpg'
// import { useState } from "react";
import 'react-tabs/style/react-tabs.css';

import useMenu from "../../../hooks/useMenu";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
// import FoodCard from "../../../components/FoodCard/FoodCard";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup',  'dessert', 'drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);

    // const [activeTab, setActiveTab] = useState(' ')
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')


    // const handleTabClick = (tabName) => {
    //     setActiveTab(tabName);
    //   };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss || Order Food</title>
            </Helmet>
            
            <Cover img={orderImg} title={"OUR SHOP"}></Cover>

            <Tabs className='my-10' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className='flex gap-4 justify-center items-center'>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>

            <TabPanel> 
              <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={dessert}></OrderTab>
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks}></OrderTab>
            </TabPanel>

          </Tabs>
            

            {/* <div className="tabs mx-auto w-1/3 d-flex justify-center mt-7 items-center">
            <div
              onClick={() => handleTabClick("salad")}
              className={`tab  text-gray-700 tab2 h-12 ${
                activeTab == "salad" ? " text-[#f5beb0] border border-b-4 border-[#f5beb0] font-semibold rounded-lg" : ""
              }`}
            >
              SALAD
              
            </div>
            <div
              onClick={() => handleTabClick("pizza")}
              className={`tab text-gray-700 tab2 h-12 ${
                activeTab == "pizza" ? " text-[#f5beb0] border border-b-4 border-[#f5beb0]  font-semibold  rounded-lg" : ""
              }`}
            >
              PIZZA
            </div>

            <div
              onClick={() => handleTabClick("soups")}
              className={`tab text-gray-700 tab2 h-12 ${
                activeTab == "soups" ? " text-[#f5beb0] border border-b-4 border-[#f5beb0] font-semibold rounded-lg" : ""
              }`}
            >
              SOUPS
            </div>

            <div
              onClick={() => handleTabClick("desserts")}
              className={`tab text-gray-700 tab2 h-12 ${
                activeTab == "desserts" ? " text-[#f5beb0] border border-b-4 border-[#f5beb0] font-semibold rounded-lg" : ""
              }`}
            >
              DESSERTS
            </div>

            <div
              onClick={() => handleTabClick("drinks")}
              className={`tab text-gray-700 tab2 h-12 ${
                activeTab == "drinks" ? " text-[#f5beb0] border border-b-4 border-[#f5beb0] font-semibold rounded-lg" : ""
              }`}
            >
              DRINKS
            </div>
            </div> */}
        </div>
    );
};

export default Order;
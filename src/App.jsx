import './App.css';
import EventCard from './components/EventCard';
import zitoimage from './images/zito.jpg';
import papapizza from './images/papapizza.jpg';
import cortinaimage from './images/corinta.jpg';
import buccaneerimage from './images/buccaneer.jpg';
import wisepizza from './images/mangiello.jpg';

import alspizza from './images/bigals.jpg'
import lamppost from './images/lamppost.jpg'
import pitfire from './images/pitfire.jpg'
import pastaparty from './images/pizzaparty.jpg'
import zeropizza from './images/zero.jpg'

const App = () => {

  const pizzaPlaces = [
    {
      name:'Papa Pizza Pie',
      rating : '4.3',
      notable: 'Gluten-Free Pizza',
      website: 'https://www.papapizzapie.com',
      image : papapizza,
    },
    {
      name:"Wise Guys Pizza",
      rating : '4.3',
      notable: 'Chicken Wings',
      website: 'https://wiseguyspizzeria.com/',
      image : wisepizza
    },
    {
      name:'Zito\'s Pizza',
      rating : '4.1',
      notable: 'Great Crust',
      website: 'https://www.zitospizza.com',
      image : zitoimage
    },
    {
      name:'Buccaneer Pizza',
      rating : '3.8',
      notable: 'Vegetarian Options',
      website:'https://www.buccaneerpizza.com' ,
      image : buccaneerimage
    },
    {
      name:'Cortina\'s Pizza',
      rating : '4.4',
      notable: 'Great Sandwiches',
      website: 'https://cortinasitalianfood.com/anaheim',
      image : cortinaimage
    },

    {
      name:'Big Al\'s Pizza',
      rating : '4.1',
      notable: 'Fresh Pizza',
      website: 'https://www.bigalspizzeria.com/',
      image : alspizza
    },
    {
      name:'Lamp Post Pizza',
      rating : '3.4',
      notable: 'TV and Arcade',
      website: 'https://lamppostpizzaorange.com/',
      image : lamppost
    },
    {
      name:'Pitfire Pizza',
      rating : '4.1',
      notable: 'Good Italian Food',
      website: 'https://www.pitfirepizza.com/',
      image : pitfire
    },
    {
      name:'Pasta Party',
      rating : '4.1',
      notable: 'Great Pasta',
      website: 'https://www.pastapartyusa.com/',
      image : pastaparty
    },
    {
      name:'Zero Zero39 Pizzeria',
      rating : '4.8',
      notable: 'Dessert',
      website: 'https://www.zerozeropizza.com/',
      image : zeropizza
    },
  ]

  

  return (
    <div className="App">
      <h1>Pizza Time</h1>

     <div className="Event-Grid">
     <EventCard website = {pizzaPlaces[0].website} imagePath= {pizzaPlaces[0].image} location = {pizzaPlaces[0].name} rating ={pizzaPlaces[0].rating} notable={pizzaPlaces[0].notable} ></EventCard>
     <EventCard website = {pizzaPlaces[1].website} imagePath= {pizzaPlaces[1].image} location = {pizzaPlaces[1].name} rating ={pizzaPlaces[1].rating} notable={pizzaPlaces[1].notable} ></EventCard>
     <EventCard website = {pizzaPlaces[2].website} imagePath= {pizzaPlaces[2].image} location = {pizzaPlaces[2].name} rating ={pizzaPlaces[2].rating} notable={pizzaPlaces[2].notable} ></EventCard>
     <EventCard website = {pizzaPlaces[3].website} imagePath= {pizzaPlaces[3].image} location = {pizzaPlaces[3].name} rating ={pizzaPlaces[3].rating} notable={pizzaPlaces[3].notable} ></EventCard>
     <EventCard website = {pizzaPlaces[4].website} imagePath= {pizzaPlaces[4].image} location = {pizzaPlaces[4].name} rating ={pizzaPlaces[4].rating} notable={pizzaPlaces[4].notable} ></EventCard>
     </div>

     <div className="Event-Grid">
     <EventCard website = {pizzaPlaces[5].website} imagePath= {pizzaPlaces[5].image} location = {pizzaPlaces[5].name} rating ={pizzaPlaces[5].rating} notable={pizzaPlaces[5].notable} ></EventCard>
     <EventCard website = {pizzaPlaces[6].website} imagePath= {pizzaPlaces[6].image} location = {pizzaPlaces[6].name} rating ={pizzaPlaces[6].rating} notable={pizzaPlaces[6].notable} ></EventCard>
     <EventCard website = {pizzaPlaces[7].website} imagePath= {pizzaPlaces[7].image} location = {pizzaPlaces[7].name} rating ={pizzaPlaces[7].rating} notable={pizzaPlaces[7].notable} ></EventCard>
     <EventCard website = {pizzaPlaces[8].website} imagePath= {pizzaPlaces[8].image} location = {pizzaPlaces[8].name} rating ={pizzaPlaces[8].rating} notable={pizzaPlaces[8].notable} ></EventCard>
     <EventCard website = {pizzaPlaces[9].website} imagePath= {pizzaPlaces[9].image} location = {pizzaPlaces[9].name} rating ={pizzaPlaces[9].rating} notable={pizzaPlaces[9].notable} ></EventCard>


     </div>
     




    </div>
  )
}

export default App
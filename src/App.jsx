import './App.css';
import EventCard from './components/EventCard';
import zitoimage from './images/zito.jpg';
import papapizza from './images/papapizza.jpg';
import cortinaimage from './images/corinta.jpg';
import buccaneerimage from './images/buccaneer.jpg';
import mongieloimage from './images/mangiello.jpg';


const App = () => {

  return (
    <div className="App">
      <h1>Local Restaurants</h1>

     <div className="Event-Grid">
     <EventCard imagePath= {papapizza} location ='Papa Pizza Pie' rating ='4.3' notable='Gluten-Free' ></EventCard>
     
     <EventCard imagePath={mongieloimage} location ="Mongielo's Pizza" rating ='4.3' notable='Chicken Wings' ></EventCard>
     
     <EventCard imagePath={zitoimage} location ='Zito Pizza' rating ='3.9' notable='Great Crust' ></EventCard>
    
     </div>

     <div className="Event-Grid">
    
     <EventCard imagePath={buccaneerimage} location ='Buccaneer Pizza' rating ='3.8' notable='Vegetarian Options' ></EventCard>
    
     <EventCard imagePath={cortinaimage} location ='Cortinas Orange' rating ='4.4' notable='Great Sandwiches' ></EventCard>
     </div>


    </div>
  )
}

export default App
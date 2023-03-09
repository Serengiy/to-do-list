import { useState } from 'react';
import Modal from './components/modal/modal';
import '../src/styles/App.css'
import ThingsList from './components/ThingsList';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [things, setThings] = useState([
    {id:1, date: new Date(2023, 1, 17, 3, 24, 0), title:'Social Media', body:'-Plan social content \n-Build content calendar \n-Plan promotion and distribution', color: 'rgb(253 244 180)'},
    {id:2, date: new Date(2023, 1, 19, 5, 22, 15), title:'Content Strategy', body:'Would need time ti get insights (goals, personals, budget, audits), but after, it would be good to focus on assembling my team. Also need to brainstorm on tooling.', color:'rgb(209 234 237)'},
    {id:3, date: new Date(2023, 2, 13, 7, 13, 30), title:'Email  A/B Tests', body:'-Subject lines -Sender -CTA -Sending times', color:'rgb(249 218 219)'},
    {id:4, date: new Date(2023, 3, 8, 3, 24, 0),  title:'Banner Ads', body:'Notes from the workshop: -Sizing matters -Choose distinctive imagery -The landing page must match the display ad', color: 'rgb(250 212 170)'},
  ])


  const post_id = (post, favoriteBeers) => {
    return favoriteBeers.includes(post);
 };

  const RemoveThing = (post) =>{
    // console.log(post);
    setThings(things.filter(p=>p.id !== post))
    // console.log(things.length);
  }

  return (
    <div className="App">
      <h1>Sticker wall</h1>
      {/* {console.log(modalActive)} */}
      <ThingsList remove={RemoveThing} active={modalActive} modal={setModalActive} list={things}/>
      {/* {console.log(modalActive)} */}
    </div>
  );
}

export default App;

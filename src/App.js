import { useState } from 'react';
import '../src/styles/App.css'
import '../src/UI/thing/thing.css'

function App() {
  const [things, setThings] = useState([
    {id:1, date: new Date(2023, 1, 17, 3, 24, 0), title:'Social Media', body:'-Plan social content \n-Build content calendar \n-Plan promotion and distribution', color: 'rgb(253 244 180)'},
    {id:2, date: new Date(2023, 1, 19, 5, 22, 15), title:'Content Strategy', body:'Would need time ti get insights (goals, personals, budget, audits), but after, it would be good to focus on assembling my team. Also need to brainstorm on tooling.', color:'rgb(209 234 237)'},
    {id:3, date: new Date(2023, 2, 13, 7, 13, 30), title:'Email  A/B Tests', body:'-Subject lines -Sender -CTA -Sending times', color:'rgb(249 218 219)'},
    {id:4, date: new Date(2023, 3, 8, 3, 24, 0),  title:'Banner Ads', body:'Notes from the workshop: -Sizing matters -Choose distinctive imagery -The landing page must match the display ad', color: 'rgb(250 212 170)'},
  ])
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div style={{background: things[0].color}} className='thing'>
        <div className='close'>X</div>
        <h3 className='thing-title'>{things[0].title}</h3>
        <p className='thing-body'>{things[0].body}</p>
      </div>
    </div>
  );
}

export default App;

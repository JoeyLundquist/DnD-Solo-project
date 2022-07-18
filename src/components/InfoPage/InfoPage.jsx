import React from 'react';
import { useState } from 'react';
import dndPlayers from '../../images/dndPlayers.jpeg'
import dndMinis from '../../images/dndMinis.jpg'
import './infoPage.css'
import dndSheet from '../../images/5eSheet.png'
import dndSheetFilled from '../../images/5eSheetFilledOut.png'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const [sheets, setSheets] = useState(false)

  return (
    <div className="container">
      <p onClick={() => setSheets(!sheets)}>Info Page</p>
      {sheets? <img className='dnd-sheets' src={dndSheetFilled} /> : <>   <img className='dnd-minis-table' src={dndPlayers} />
      <img className='dnd-minis-table' src={dndMinis} /></>}
      {/* <img className='dnd-minis-table' src={dndPlayers} />
      <img className='dnd-minis-table' src={dndMinis} />
      <img className='dnd-sheets' src={dndSheet} />
      <img className='dnd-sheets' src={dndSheetFilled} /> */}
    </div>
  );
}

export default InfoPage;

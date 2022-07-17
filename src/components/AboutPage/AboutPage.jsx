import React from 'react';
import './aboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="about-container">
      <div>
        <div className='about-page-info'>
        <h2>Special Thanks to:</h2>
        <p>Prime Digital Academy</p>
        <p>Edan</p>
        <p>Gaiman Cohort</p>
        <p>Loved ones back home</p>
        </div>
        <div>
        <h3>Technologies used:</h3>
        <p>React</p>
        <p>Redux</p>
        <p>Redux-Sagas</p>
        <p>MUI</p>
        <p>Passport</p>
        <p>Postgresql</p>
        <p>Axios</p>
        <p>Express</p>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;

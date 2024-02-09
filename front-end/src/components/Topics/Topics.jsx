import React, { useState } from 'react';
import "./Topics.css";
import { Frequencies, DAW, Vocals, Console, Mixing, Mastering } from "../../assets"

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(Frequencies);
  return (
<section id='topics' className='black'>
    <div className='wrapper'>
      <h2>What will you learn?</h2>
      <div className='content-container'>
        <ul>
          <li>What are Frequencies?</li>
          <li>Using the DAW</li>
          <li>Vocals Processing</li>
          <li>Mixing</li>
          <li>Mixing Console</li>
          <li>Mastering</li>
        </ul>

<div className='topic-image'>
  <img src=""></img>
</div>
      </div>
    </div>
    <img src={bgElement1} className='bgElement1'></img>
  </section>
    );
};

export default Topics;
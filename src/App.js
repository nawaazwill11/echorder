import React, { useState, useEffect } from 'react';
import './App.css';
import { Row } from './hyped';
import { Dropdown, Chapter } from './components';

// invert sides
// Chord name on top of the image
// set chord change time
// auto and manual mode - button, motor style on/off
//  emoji - finger to indicate mode. 
//  button on both sides of the button.
// chapter - ankle change and dropdown
// 

function App(props) {

  const db = props.db;

  const [current_chapter, setCurrentChapter] = useState(db.chapters[0].name);
  const [current_chord, setCurrentChord] = useState(db.chapters[0].chords[0].name);

  try {

    // console.log('current chapter:', current_chapter);

    const elements = { dropdowns: [] };

    db.chapters.forEach((chapter) => {
      elements.dropdowns.push(chapter.name);
    });


    const current_chapter_element = function () {
      return db.chapters.find(({ name }) => {
        return name === current_chapter
      })
    }();

    const current_chord_element = function () {
      return current_chapter_element.chords.find(({ name }) => (
        name === current_chord
      ));
    }();

    return (
      <Row>
        <Dropdown items={elements.dropdowns} selected={current_chapter}
          setCurrentChapter={setCurrentChapter} setCurrentChord={() => {
            setCurrentChord(current_chapter_element.chords[0].name);
          }} />
        <Chapter chapter={current_chapter_element} current_chord={current_chord_element} setCurrentChord={setCurrentChord} />
      </Row>
    );
  }
  catch (error) {
    console.log(error);
    return <h1>Could not load app</h1>
  }
}


export default App;

import React, { useState, useEffect } from 'react';
import { Chord } from '../Chord';

function Chapter(props) {

    try {

        const chapter = props.chapter;

        const current_chord_element = props.current_chord;

        return (
            <div className="row">
                <div className="segment"
                    onClick={(e) => (
                        handlePreviousClick(
                            e, props.current_chord, chapter, props.setCurrentChord
                        ))}>
                    Previous
                </div>
                <div className="segment">
                    <Chord chord={current_chord_element} />
                </div>
                <div className="segment"
                    onClick={(e) => (
                        handleNextClick(
                            e, props.current_chord, chapter, props.setCurrentChord
                        ))}>
                    Next</div>
            </div>
        );
    }
    catch (error) {
        throw new Error(error);
    }

}

function handlePreviousClick(e, current_chord, chapter, setCurrentChord) {

    const current_chord_index = chapter.chords.findIndex(
        ({ name }) => name === current_chord);
    if (current_chord_index === 0) return;
    
    const next_chord = chapter.chords[current_chord_index - 1];

    setCurrentChord(next_chord.name);

}

function handleNextClick(e, current_chord, chapter, setCurrentChord) {
    
    console.log(current_chord, chapter);

    const current_chord_index = chapter.chords.findIndex(
        ({ name }) => name === current_chord);
    if (current_chord_index === (chapter.chords.length - 1)) return;
    
    const next_chord = chapter.chords[current_chord_index + 1];

    setCurrentChord(next_chord.name);
}

export { Chapter };
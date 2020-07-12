import React from 'react';
import './styles.scss';


function Dropdown(props) {

    const list_items = props.items;

    try {
        const options = list_items.map((item) => {
            return <option key={item} value={item}>{item}</option>;
        });
        return (
            <select defaultValue={props.selected} 
                onChange={(e) => handleChange(e, props.setCurrentChapter, props.setCurrentChord)} > 
                {options}
            </select>
        );
    }
    catch (error) {
        console.log(error);
        throw new Error(
            'Dropdown: expected prop[items]' +
            ' to be an array, got type ' + typeof (list_items));
    }

}

function handleChange(e, setCurrentChapter, setCurrentChord) {

    const element = e.currentTarget;
    console.log(element.value);
    setCurrentChapter(element.value);
    setCurrentChord();

}

export { Dropdown }
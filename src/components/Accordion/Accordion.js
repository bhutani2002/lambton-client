import './Accordion.css'
import React, { useState } from 'react'
import {questions} from './AccData'
import AccodionComp from './AccodionComp';
const Accordion = () => {
    const [data, setData] = useState(questions);
  return (
    <div>
        {
            data.map((currElem) => {
                const {id}= currElem;
                return <AccodionComp key = {id} {...currElem}/>
            })
        }
    </div>
  )
}

export default Accordion
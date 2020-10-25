import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkSection from './WorkSection.js';
import { Image, Row } from 'react-bootstrap';

function Work(props) {
    return (
       <div>
         {props.worktitle1 && 
          <WorkSection work={props.work1} />
        }
        {props.worktitle2 && 
          <WorkSection work={props.work2} />
        }
        {props.worktitle3 && 
          <WorkSection work={props.work3} />
        }

       </div> 
    );
  }


export default Work;
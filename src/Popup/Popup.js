import React from 'react';
import "./popup.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Popup(props) {


    return (
        <div>
            {(props.trigger)
                ?
                (
                    < div className="popup ">
                        <div className="popup-inner border border-light rounded">
                            
                            {/* <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button> */}
                            <div className="">
                                <div className="lead"><p>Add Task</p></div>
                                <button type="button" className="close close-btn" aria-label="Close" onClick={() => props.setTrigger(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            {props.children}
                        </div>
                    </div>
                )
                : ""
            }
        </div >

    );
}
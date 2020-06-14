import React from 'react';
import "./Result.css";
import jumbotron from 'react-bootstrap/jumbotron';


//jumbotron prop
const results = props => {
    return(
    
    <jumbotron
    // resultS
    className="results-wrapper">
        
        <div className="result current-result">
        {/* current result */}
            <p>Current result</p>
            <p
                className="result-number" idName="current-result">06</p>
        </div>
        
        {/* highest result */}
        <div className="result highest-result">
            <p className="result-number" idName="highest-result">06</p>
            <p>Highest result</p>
        </div>
    
    </jumbotron>

    )
}

export default results;

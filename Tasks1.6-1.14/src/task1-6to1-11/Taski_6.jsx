import React, { useState } from 'react'

export const Task1_6 = () => {
  
      const [good, setGood] = useState(0);
      const [neutral, setNeutral] = useState(0);
      const [bad, setBad] = useState(0);
    
      const handleFeedback = (type) => {
        if (type === 'good') {
          setGood(good + 1);
        } else if (type === 'neutral') {
          setNeutral(neutral + 1);
        } else if (type === 'bad') {
          setBad(bad + 1);
        }
      };
    
      const totalFeedback = good + neutral + bad;
    
      return (
        <div>
          <h1>Unicafe Feedback</h1>
          <div>
            <h2>Give Feedback</h2>
            <button onClick={() => handleFeedback('good')}>Good</button>
            <button onClick={() => handleFeedback('neutral')}>Neutral</button>
            <button onClick={() => handleFeedback('bad')}>Bad</button>
          </div>
          <div>
            <h2>Statistics</h2>
            {totalFeedback === 0 ? (
              <p>No feedback given yet.</p>
            ) : (
              <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {totalFeedback}</p>
                <p>Average: {(good - bad) / totalFeedback}</p>
                <p>Positive: {(good / totalFeedback) * 100}%</p>
              </div>
            )}
          </div>
        </div>
      );
    };
    
   
    


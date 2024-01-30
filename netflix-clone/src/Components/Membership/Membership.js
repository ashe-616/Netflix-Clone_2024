import React from 'react'
import "./membership.css"

function Membership() {
  return (
    <>
     <div className="contain">
      <h1>Ready to watch? Enter your email to create or restart your membership.</h1>
      
      <form> 
        <div className='display'>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                placeholder="Email address"
                />
            </div>

            <div>
                <button type="submit">Get Started</button>
            </div>
        </div>
        
        
        
      </form>
      </div>
    </>
  )
}

export default Membership;

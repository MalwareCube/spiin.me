import React from 'react'
import { Link } from 'react-router-dom';

export default function QuickSpins() {
  return (
    <>
    <h3>Quick Spins</h3>
        
    <h4>Dice:</h4>
    <ul className="quickSpinList">
      <li><Link to="/d4">d4</Link>,</li>
      <li><Link to="/d6">d6</Link>,</li>
      <li><Link to="/d8">d8</Link>,</li>
      <li><Link to="/d10">d10</Link>,</li>
      <li><Link to="/d12">d12</Link>,</li>
      <li><Link to="/d20">d20</Link></li>
    </ul>

    <h4>Misc:</h4>
    <ul className="quickSpinList">
      <li><Link to="/coinflip">coinflip</Link>,</li>
      <li><Link to="/yn">yes or no</Link>,</li>
      <li><Link to="/magic8">magic 8 ball</Link></li>
    </ul>
    </>
  )
}
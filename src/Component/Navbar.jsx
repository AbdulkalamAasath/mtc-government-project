import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDashDropdown, setShowDashDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
      setShowDashDropdown(false)
    };
    const toggleDashboard = () =>
    {
      setShowDashDropdown(!showDashDropdown);
      setShowDropdown(false)
    }
    const closeDropdown = (event) => {
        if (!event.target.matches('.dropbtn')) {
          setShowDropdown(false);
          setShowDashDropdown(false);
        }
      };
    
    
  return (
    <div onClick={closeDropdown} className="navbar" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fefefe', padding: '1em', borderBottom: '1px solid #ddd', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div className="left-menu" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
         <button className="dropbtn"  onClick={toggleDashboard}style={{ backgroundColor: '#fefefe', border: 'none', fontWeight: 'bold', cursor: 'pointer', padding: '0.5em' }}>Dashboard</button>
         {showDashDropdown && (
            <div className="dropdown-content" style={{ display: 'block', position: 'absolute', backgroundColor: 'white', minWidth: '160px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', zIndex: 1 }}>
              <a href="/Enquiry-Details" style={{ padding: '12px 16px', display: 'block', textDecoration: 'none', color: 'black' }}>Enquiry Details</a>
              <a href="/Folio-Details" style={{ padding: '12px 16px', display: 'block', textDecoration: 'none', color: 'black' }}>Folio Details</a>
              <a href="/Supplier-Details" style={{ padding: '12px 16px', display: 'block', textDecoration: 'none', color: 'black' }}>Supplier Details</a>
            </div>
          )}
          <button className="dropbtn" onClick={toggleDropdown} style={{ backgroundColor: '#fefefe', border: 'none', fontWeight: 'bold', cursor: 'pointer', padding: '0.5em' }}>Enquiry</button>
          {showDropdown && (
            <div className="dropdown-content" style={{ display: 'block', position: 'absolute', backgroundColor: 'white', minWidth: '160px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', zIndex: 1 }}>
              <a href="/Enquiry-Entry" style={{ padding: '12px 16px', display: 'block', textDecoration: 'none', color: 'black' }}>Enquiry Entry</a>
              <a href="/New-Folio" style={{ padding: '12px 16px', display: 'block', textDecoration: 'none', color: 'black' }}>New Folio Entry</a>
              <a href="/Supplier-Enquiry" style={{ padding: '12px 16px', display: 'block', textDecoration: 'none', color: 'black' }}>Supplier Entry</a>
            </div>
          )}
        </div>
      </div>
      <div className="right-menu" style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#" className="menu-item" style={{ margin: '0 1em', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>TTS-ABV7FIRM</a>
        <span className="avatar" style={{ fontSize: '24px', cursor: 'pointer' }}>👤</span>
      </div>
    </div>
 )
}

export default Navbar

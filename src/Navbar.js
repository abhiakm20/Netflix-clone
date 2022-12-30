import React, { useEffect, useState } from 'react'
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll', null);
        };
    }, []);

    return (
        <div className={`Navbar ${show && "Navbar_black"}`}>
            <img className="Navbar_logo"
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='NETFLIX'
            />

            <img className="Navbar_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="User avatar"
            />
        </div>
    );
}

export default Navbar
import './index.scss';

import React, { useEffect, useState } from 'react';
import qavoBlack from "../../assets/qavoBlack1.png";

function HomeLeftMenu({ number, y }) {
    const menuItems = [
        { id: 1, label: "GİRİŞ" },
        { id: 2, label: "TANITIM" },
        { id: 3, label: "RƏYLƏR" },
        { id: 4, label: "PORTFOLIO", style: { marginTop: '20px' } },
        { id: 5, label: "ƏLAQƏ" },
    ];

    const [rotation, setRotation] = useState('0deg'); // State to hold the rotation value

    // Effect to update the rotation based on y
    useEffect(() => {
        if (y && typeof y === 'object' && y.y) {
            setRotation(`${y.y}deg`); // Update rotation using the numeric value of y.y
        }
    }, [y]);

    return (
        <div className="col-1 firstCol">
            <img
                src={qavoBlack}
                alt="Qavo"
                style={{ transform: `rotate(${rotation})`, transition: 'transform ease' }} // Smooth rotation transition
            />

            {menuItems.map(({ id, label, style }) => (
                <h3
                    key={id}
                    style={{
                        color: number === id ? '#FF7E21' : 'white',
                        ...style,
                    }}
                >
                    {label}
                </h3>
            ))}
        </div>
    );
}

export default HomeLeftMenu;

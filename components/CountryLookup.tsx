'use client';

import {useEffect, useState} from "react";

const CountryLookup = () => {

    const [country, setCountry] = useState("");

    useEffect(() => {
        fetch('http://ip-api.com/json')
            .then(res => res.json())
            .then(data => {
                setCountry(data.country);
            }).catch(
            err => {
                console.log(err);
                setCountry("India");
            }
        );
    }, []);

    return (
        <div>
            {country}
        </div>
    );
}

export default CountryLookup;
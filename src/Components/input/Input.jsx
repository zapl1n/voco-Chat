import React from 'react';

function Input({placeholder, onChange, value}) {
    return (
        <input
            placeholder={placeholder} value = {value}
        onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default Input;
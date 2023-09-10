import React from 'react';

interface Props {
    button_text: string;
    color?:"primary"|'secondary'|'danger';
    onClick: () => void;
}

const Button = ({color="primary",button_text, onClick}: Props) => {
    return (
        <button type="button" onClick={onClick} className={"btn btn-"+color}>{button_text}</button>
    );
};

export default Button;

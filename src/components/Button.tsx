import React from 'react';

type ButtonPropsType = {
    name: string
}
const Button = (props: ButtonPropsType) => {
    return <button>{props.name}</button>
};

export default Button;
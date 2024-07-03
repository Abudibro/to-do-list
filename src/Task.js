import React, { useState } from "react";
import styled from "styled-components";
import {Input} from "@nextui-org/react";
import { FaTrashAlt } from "react-icons/fa";
import Toggle from "./Toggle";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 60px;
    margin: 5px 0px;
    padding: 3px;
    background: #f5c0a2;
    border-radius: 30px;
    text-align: left;
`;

const inputStyle = {
    width: '280px',
    fontSize: '17px',
    paddingLeft: '20px',
    color: '#424242',
    background: 'none',
    border: 'none',
    fontFamily: 'Montserrat, sans-serif',
};

const DeleteIcon = styled(FaTrashAlt)`
    fontSize: 20px;
    cursor: hover;
    margin: 0 3px;
    color: #ff4848;
    cursor: pointer;
    &:hover {
        opacity: .8;
    }
`;

export const Task = ({task, onCheckboxClick, index, onDeleteClick, onChangeTaskName}) => {
    const checked = task.done;
    const toggleDisabled = task.name === null || task.name === undefined || task.length === 0
    
    return (
        <Wrapper>
            <Toggle
                checked={checked}
                onCheckboxClick={onCheckboxClick}
                index={index}
                id={index}
                disabled={toggleDisabled}
            />
            <Input
                value={task.name}
                placeholder={`Let's do something productive...`}
                onChange={e => onChangeTaskName(index, e.target.value)}
                style={{...inputStyle,
                    textDecoration: checked && 'line-through',
                    opacity: checked && .7
                }}
                transparent
            />
            <DeleteIcon 
                onClick={() => onDeleteClick(index)}
            />
            <div></div>
        </Wrapper>
    )
}

export default Task


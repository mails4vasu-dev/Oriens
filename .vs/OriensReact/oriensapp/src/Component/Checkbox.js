import React from "react";
import { FormGroup, Label, Input } from 'reactstrap';
import './Style.css';
const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
  return (
    <>
    <FormGroup className="custom_checkbox_outer_wrap" check>
        <Label check >
            <Input  
                id={id}
                name={name}
                type={type}
                onChange={handleClick}
                checked={isChecked}
                
            />
        </Label>
    </FormGroup>
    </>
  );
};

export default Checkbox;


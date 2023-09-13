import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  /* margin-bottom: 1rem; */
`;

const StyledInput = styled.input`
 all: unset;
  border-bottom: 1px solid #7a7a7a ;
  transition: border-color 0.1s;
  width: 100%;
  padding: 1.5rem 0rem;
  color: #fde3be; /* Text color */
  background-color: transparent !important; /* Make the background transparent */
  font-weight: 200;
 


  &:focus {
    border-color: #d5d5d5;
    /* Remove border: none; to keep the default focus border */
  }

  
`;

const Input = ({ label, handleInputChange, className,name }) => {
    return (
        <InputContainer>
            <StyledInput
                type="text"
                name={name}
                className={className}
                onChange={handleInputChange}
                placeholder={label}
                required
            />
        </InputContainer>
    );
};

export default Input;

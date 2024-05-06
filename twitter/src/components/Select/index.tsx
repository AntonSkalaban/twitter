import { useState } from "react";

import { useClickOutside } from "hooks";
import { Option } from "types";
import VectorIcon from "assets/images/svg/vector.svg?react";

import { SelectBtn, SelectContent, SelectOption, SelectWrapper, StyledSelect } from "./styled";

interface SelectProps {
  title: string | number;
  options: Option[];
  onSelect: (option: Option) => void;
}

export const Select: React.FC<SelectProps> = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside(() => setIsOpen(false));

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const hanldeSelect = (value: Option) => () => {
    onSelect(value);
  };

  return (
    <SelectWrapper ref={ref} onClick={handleClick}>
      <StyledSelect>
        {title}
        <SelectBtn>
          <VectorIcon />
        </SelectBtn>
      </StyledSelect>
      {isOpen && (
        <SelectContent>
          {options.map(({ name, value }) => (
            <SelectOption key={value} onClick={hanldeSelect({ name, value })}>
              {name}
            </SelectOption>
          ))}
        </SelectContent>
      )}
    </SelectWrapper>
  );
};

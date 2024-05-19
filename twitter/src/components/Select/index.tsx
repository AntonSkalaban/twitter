import { forwardRef, SelectHTMLAttributes, useState } from "react";

import { ErrorMessage } from "components/UI/ErrorMessage";
import { useClickOutside } from "hooks";
import { Option } from "types";
import VectorIcon from "assets/images/svg/vector.svg?react";

import { SelectBtn, SelectContent, SelectOption, SelectWrapper, StyledSelect } from "./styled";

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  title: string;
  options: Option[];
  error?: string;
  onChange: (value: string) => void;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ title, options, error, onChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectRef = useClickOutside(() => setIsOpen(false));

    const handleClick = () => {
      setIsOpen((prev) => !prev);
    };

    return (
      <div>
        <select {...props} ref={ref} onChange={(e) => e.target.value} hidden>
          {options.map(({ name, value }) => (
            <option key={value} value={value}>
              {" "}
              {name}
            </option>
          ))}
        </select>
        <SelectWrapper ref={selectRef} onClick={handleClick}>
          <StyledSelect>
            {title}
            <SelectBtn>
              <VectorIcon />
            </SelectBtn>
          </StyledSelect>
          {isOpen && (
            <SelectContent>
              {options.map(({ name, value }) => (
                <SelectOption key={value} onClick={() => onChange(String(value))}>
                  {name}
                </SelectOption>
              ))}
            </SelectContent>
          )}
        </SelectWrapper>

        <ErrorMessage error={error} />
      </div>
    );
  },
);

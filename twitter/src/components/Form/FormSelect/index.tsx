import { forwardRef, useState } from "react";

import { ErrorMessage } from "components/UI/ErrorMessage";
import { useClickOutside } from "hooks";
import VectorIcon from "assets/images/svg/vector.svg?react";

import { FormSelectProps } from "./types";
import { SelectBtn, SelectContent, SelectOption, SelectWrapper, StyledSelect } from "./styled";

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ title, options, error, onChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectRef = useClickOutside(() => setIsOpen(false));

    const handleClick = () => {
      setIsOpen((prev) => !prev);
    };

    const handleSelect = (value: string | number) => () => {
      onChange(String(value));
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
                <SelectOption key={value} onClick={handleSelect(value)}>
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

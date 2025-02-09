import styled from 'styled-components'
import { theme } from "@/theme/theme";
import { JSX } from 'react'


type SelectInputOption = {
    optionValue?: string | number | readonly string[],
    label: string
  }
  
  type SelectInputProps = {
    options: SelectInputOption[],
    Icon?: JSX.Element,
  } & React.ComponentProps<"select">

export default function SelectInput({
    options,
    value,
    name,
    Icon,
    className,
    onChange,
    ...restProps
  }: SelectInputProps) {
    return (
      <SelectInputStyled className={className}>
        {Icon && <div className="icon">{Icon}</div>}
        <select name={name} value={value} onChange={onChange} {...restProps}>
          {options.map(({ optionValue, label }) => (
            <option key={label} value={optionValue}>
              {label}
            </option>
          ))}
        </select>
      </SelectInputStyled>
    )
  }

const SelectInputStyled = styled.div`
   /* border: 1px solid yellow; */
   background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    /* border: 1px solid red; */
    font-size: ${theme.fonts.size.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex; // centre verticalement l'icône dans le champ select
  }

  select {
    /* border: 1px solid blue; */
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: 0;
  }
`
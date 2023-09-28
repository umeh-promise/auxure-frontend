import { formatText } from '../../helpers/formatText';

import Wrapper from './Wrapper';

// import name from '../../assets/icons/chevron-down.svg';

const Select = ({
  showLabel = true,
  className,
  label,
  placeholder,
  children,
  ...props
}) => {
  return (
    <Wrapper fluid className={` flex flex-col gap-[1rem]  ${className}`}>
      {showLabel && (
        <label
          htmlFor={formatText(label)}
          className='text-base font-medium leading-1 text-color'
        >
          {label}
        </label>
      )}

      <select
        defaultValue={placeholder}
        className="w-full gap-[0.625rem] py-[0.75rem] pl-[1rem] items-start rounded-[0.25rem] outline-none border-gray border-solid border-[0.15rem] text-gray font-light leading-[1.375rem] text-base bg-white appearance-none z-10 bg-[url('./assets/icons/chevron-down.svg')] bg-no-repeat bg-[95%] disabled:bg-gray-2 cursor-pointer"
        {...props}
      >
        <option value={placeholder} disabled hidden>
          {placeholder}
        </option>
        {children}
      </select>
    </Wrapper>
  );
};

export default Select;

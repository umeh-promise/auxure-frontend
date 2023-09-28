// import { CheckIcon } from '../../assets/icons/svg-icons';
import { CheckIcon } from '../../assets/icons/svg-icons';
import { formatText } from '../../helpers/formatText';

import Wrapper from './Wrapper';

const Input = ({
  showLabel = true,
  type,
  label,
  placeholder,
  className,
  variant = '',
  childrenClass = {},
  ...props
}) => {
  const { inputClass = '', labelClass = '' } = childrenClass;

  return (
    <Wrapper
      fluid
      className={`flex ${
        type === 'radio' || type === 'checkbox'
          ? `flex-row gap-[0.5rem] items-center`
          : 'flex-col gap-[1rem]'
      } ${className}`}
    >
      {type === 'radio' && variant === 'primary' ? (
        <>
          <input
            type={type}
            id={formatText(label)}
            className={` ${inputClass} appearance-none w-[1.56rem] h-[1.56rem] rounded-full border-[.2rem] border-solid border-gray outline-none before:block before:content-[""] before:w-[0.75rem] before:h-[0.75rem] before:rounded-full before:bg-accent-5 before:translate-x-[35%] before:translate-y-[30%] before:scale-0 before:origin-center text-base cursor-pointer 
                  before:transition-all before:ease-in before:duration-[0.1s]
                  checked:border-accent-5
                  checked:before:translate-y-[28%] checked:before:translate-x-[29%] checked:before:scale-100
                  checked:before:transition-all checked:before:duration-[0.1s] ease-[cubic-bezier(0.25, 0.25, 0.56, 2)]
                  
                  [&+label]:text-gray
                  [&+label]:checked:text-color`}
            {...props}
          />

          <label
            htmlFor={formatText(label)}
            className={`${labelClass} text-base font-light leading-0.5  cursor-pointer transition-all duration-[0.3s] ease-[cubic-bezier(0.25, 0.25, 0.56, 2)]`}
          >
            {label}
          </label>
        </>
      ) : type === 'radio' && variant === 'secondary' ? (
        <>
          <input
            type={type}
            id={formatText(label)}
            className='appearance-none w-[1.24rem] h-[1.24rem] rounded-full border-[.2rem] border-solid border-color outline-none before:block before:content-[""] before:w-[0.75rem] before:h-[0.75rem] before:rounded-full  before:translate-x-[35%] before:translate-y-[30%] before:scale-0 before:origin-center text-base cursor-pointer 
                  before:transition-all before:ease-in before:duration-[0.1s]
                  checked:border-[.4rem]
                  checked:border-primary
                  checked:before:translate-y-[28%] checked:before:translate-x-[29%] checked:before:scale-100
                  checked:before:transition-all checked:before:duration-[0.1s] ease-[cubic-bezier(0.25, 0.25, 0.56, 2)]'
            {...props}
          />

          <label
            htmlFor={formatText(label)}
            className='text-base font-light leading-3 cursor-pointer text-color  '
          >
            {label}
          </label>
        </>
      ) : type === 'checkbox' && variant === 'primary' ? (
        <hgroup className='flex relative gap-[0.65rem] items-center '>
          <input
            type='checkbox'
            id={formatText(label)}
            className={`${inputClass} w-[1.5rem] h-[1.5rem] bg-primary appearance-none rounded-[0.313rem] shrink-0 checked:bg-primary checked:border-0 focus:outline-none peer cursor-pointer`}
          />
          {showLabel && (
            <label
              htmlFor={formatText(label)}
              className='text-lighter text-base font-light leading-3 cursor-pointer'
            >
              {label}
            </label>
          )}
          <CheckIcon
            className={`${labelClass} hidden w-[1.5rem] h-[1.5rem] peer-checked:block absolute pointer-events-none left-0 fill-white`}
          />
        </hgroup>
      ) : type === 'checkbox' && variant === 'secondary' ? (
        <>
          <input
            type={type}
            id={label}
            className="w-[1.5rem] h-[1.5rem] bg-white appearance-none rounded-[0.125rem] shrink-0 border-gray border-[.15rem] checked:bg-white text-white checked:border-[.15rem] focus:outline-none peer cursor-pointer block relative
            before:content-[url('./assets/icons/check.svg')] before:absolute before:text-base before:right-0 before:left-0 before-bg-cover before:invisible
            checked:before:visible 
            "
          />

          <label
            htmlFor={label}
            className='text-base font-light leading-2 text-gray cursor-pointer'
          >
            {label}
          </label>
        </>
      ) : (
        <>
          {showLabel && (
            <label
              htmlFor={formatText(label)}
              className={'text-base font-medium leading-1 text-color '}
            >
              {label}
            </label>
          )}
          <input
            type={type}
            className='w-full gap-[0.625rem] py-[0.75rem] pl-[1rem] items-start rounded-[0.25rem] outline-none border-gray border-solid border-[0.15rem] placeholder-gray font-light leading-[1.375rem] md:text-base '
            id={formatText(label)}
            {...props}
            placeholder={placeholder}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Input;

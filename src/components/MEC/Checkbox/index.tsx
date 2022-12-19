import React, { forwardRef, InputHTMLAttributes, useState, useEffect } from 'react';

import cx from 'classnames';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  demension?: 'S' | 'M';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  label: string | React.ReactNode;
  additionalText?: string | React.ReactNode;
  required?: boolean;
  hasError?: boolean;
  id: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      className,
      demension = 'M',
      onChange,
      checked: defaultChecked = false,
      id = 'defaultCheckboxId',
      label,
      additionalText,
      required,
      hasError,
      indeterminate,
      ...props
    },
    ref
  ) => {
    const [checked, setChecked] = useState<boolean>(defaultChecked);

    useEffect(() => {
      setChecked(defaultChecked);
    }, [defaultChecked]);

    const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }

      //setChecked(e.target.checked);
    };

    return (
      <div >
        <div >
          <input
            
            ref={ref}
            {...props}
            type="checkbox"
            onChange={clickHandler}
            id={id}
            checked={checked}
          />
          <div >
            {indeterminate ? (
              <svg
                width="8"
                height="2"
                viewBox="0 0 8 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
             
              >
                <rect y="0" width="8" height="2" rx="1" fill="white" />
              </svg>
            ) : (
              checked && (
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path
                    d="M13.4714 5.80473C13.7318 5.54438 13.7318 5.12227 13.4714 4.86192C13.2111 4.60157 12.7889 4.60157 12.5286 4.86192L7 10.3905L4.13807 7.52859C3.87772 7.26824 3.45561 7.26824 3.19526 7.52859C2.93491 7.78893 2.93491 8.21105 3.19526 8.47139L6.5286 11.8047C6.78894 12.0651 7.21106 12.0651 7.4714 11.8047L13.4714 5.80473Z"
                    fill="white"
                  />
                </svg>
              )
            )}
          </div>
          {label && (
            <label htmlFor={id} >
              {label}
              {required && <span >{` ${'*'}`}</span>}
            </label>
          )}
        </div>
        {additionalText && <div >{additionalText}</div>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

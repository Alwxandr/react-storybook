import React, { FC } from 'react';

interface ArrowBackIconProps {
  className?: string;
}

export const ArrowBackIcon: FC<ArrowBackIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="8"
    viewBox="0 0 23 8"
    fill="none"
    className={className}
  >
    <path
      d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976312 4.7308 0.659729 4.53553 0.464467C4.34027 0.269205 4.02369 0.269205 3.82843 0.464467L0.646447 3.64645ZM23 3.5L1 3.5L1 4.5L23 4.5L23 3.5Z"
      fill="#929292"
    />
  </svg>
);

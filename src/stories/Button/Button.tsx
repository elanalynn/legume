import React from 'react';
import './button.scss';

export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Which side of the text does the icon sit on?
   */
  iconSide?: 'left' | 'right';
  /**
   * Button contents
   */
  children: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Is this button a principal call to action or a dangerous action?
   */
  type?: 'primary' | 'secondary' | 'danger';
  /**
   * Which vegetable emoji to include.
   */
  vegetable?:
    | 'broccoli'
    | 'carrot'
    | 'corn'
    | 'cucumber'
    | 'eggplant'
    | 'lettuce'
    | 'pepper'
    | 'tomato'
    | 'yam';
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  children,
  iconSide = 'left',
  size = 'medium',
  type = 'secondary',
  vegetable = 'pepper',
  ...props
}) => {
  const typeMap = {
    primary: 'legume-button--primary',
    secondary: 'legume-button--secondary',
    danger: 'legume-button--danger',
  };

  const iconMap = {
    broccoli: '🥦',
    carrot: '🥕',
    corn: '🌽',
    cucumber: '🥒',
    eggplant: '🍆',
    lettuce: '🥬',
    pepper: '🌶',
    tomato: '🍅',
    yam: '🍠',
  };
  return (
    <button
      type="button"
      className={`legume-button legume-button--${size} ${typeMap[type]}`}
      style={{ backgroundColor }}
      {...props}
    >
      {iconSide === 'left' && `${iconMap[vegetable]}`}
      &nbsp;
      {children}
      &nbsp;
      {iconSide === 'right' && `${iconMap[vegetable]}`}
    </button>
  );
};

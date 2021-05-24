/*
 * Button component. It provides interfaces for all types
 * of the buttons.
 */

import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../tokens";
import { bool, string } from "prop-types";
import { StyledIcon } from "../Icon";

const Button = ({ as, label, children, ...props }) => {
  const isIcon = children?.type?.displayName === "Icon";
  return (
    <StyledButton as={as} isIcon={isIcon} {...props}>
      {label ? label : children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: 1px solid;
  border-color: transparent;
  box-sizing: border-box;
  line-height: 24px;
  position: relative;
  user-select: none;
  text-decoration: none;
  border-radius: 1rem;
  padding: ${({ isIcon }) => (isIcon ? "12px" : "16px")};
  background-color: ${({ color }) => color};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  color: ${colors.background500};
  font-size: 14px;
  font-weight: 700;
  width: ${(p) => (p.isStretched ? "100%" : null)};
  ${({ isOutline }) =>
    isOutline &&
    `
     border-color: ${colors.onSurface100}; 
     background-color: transparent;
     color: ${colors.onBackground500};
  `};
  ${({ isBorderless }) =>
    isBorderless &&
    `
     background-color: transparent;
     color: ${colors.primary500};
     font-size: 18px;
     line-height: 28px;
     font-weight: 500;
     letter-spacing: -0.4px;
     padding: 0;
  `};

  &:has(span) {
    padding: 12px;
    background: blue;
  }
`;

Button.propTypes = {
  label: string,
  disabled: bool,
  isStretched: bool,
  isOutline: bool,
  isBorderless: bool,
  color: string,
};

Button.defaultProps = {
  color: colors.primary500,
};

export default Button;

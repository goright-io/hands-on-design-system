import React from "react";
import styled from "styled-components";
import { typography } from "tokens";
import { string, shape, arrayOf } from "prop-types";

/* SummaryTable
 *
 * SummaryTable displays order details in a table, each row has information on name and price for each item.
 */

const SummaryTable = ({ items, total }) => {
  return (
    items &&
    items.length > 0 && (
      <>
        <StyledHeading>Summary</StyledHeading>
        <StyledGrid>
          {items.map((item) => (
            <React.Fragment key={item.name}>
              <p>{item.name}</p>
              <StyledPrice>{item.price}</StyledPrice>
            </React.Fragment>
          ))}
        </StyledGrid>
        {total && (
          <>
            <StyledBorder />
            <StyledGrid>
              <StyledItemName>Total</StyledItemName>
              <StyledTotal>{total}</StyledTotal>
            </StyledGrid>
          </>
        )}
      </>
    )
  );
};

SummaryTable.propTypes = {
  items: arrayOf(
    shape({
      name: string,
      price: string,
    })
  ),
  total: string,
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 16px;
  margin-bottom: 32px;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 32px 0;
`;

const StyledItemName = styled.p`
  font-size: 18px;
  line-height: 28px;
`;

const StyledHeading = styled.h2`
  margin-bottom: 30px;
`;

const StyledPrice = styled.div`
  font-family: ${typography.headline6FontFamily};
  font-size: ${typography.headline6FontSize};
  font-weight: ${typography.headline6FontWeight};
  font-style: ${typography.headline6FontStyle};
  line-height: ${typography.headline6LineHeight};
  letter-spacing: ${typography.headline6LetterSpacing};
  text-align: right;
`;

const StyledTotal = styled.div`
  font-family: ${typography.headline4FontFamily};
  font-size: ${typography.headline4FontSize};
  font-weight: ${typography.headline4FontWeight};
  font-style: ${typography.headline4FontStyle};
  line-height: ${typography.headline4LineHeight};
  letter-spacing: ${typography.headline4LetterSpacing};
  text-align: right;
`;

export default SummaryTable;

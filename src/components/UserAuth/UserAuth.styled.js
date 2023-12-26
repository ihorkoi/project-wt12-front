import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;
  font-size: 18px;
  line-height: 24px;
  color: var(--primary-color);
  &:hover {
    color: var(--secondary-orange);
  }
  img {
    border-radius: 50%;
  }
`;

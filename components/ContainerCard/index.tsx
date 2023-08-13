import React from 'react';
import {
  Container
} from './styles'

interface ContainerCardProps {
  children: React.ReactNode;
  title?: string;
}

const ContainerCard = ({
children,
title,
}: any) => (
  <Container>
    {title && (
      <div>
        <h1>
          {title}
        </h1>
      </div>
    )}
    {children}
  </Container>
)

export default ContainerCard;

import React from 'react';
import { Container } from './styles';

interface ScoreCardProps {
  loading?: boolean;
  bgColor?:string;
  subtitle?: string;
  value?: string | number;
  boxShadow?: string;
  title: string;
  icon?: React.ReactNode;
}

const ScoreCardDashboard: React.FC<ScoreCardProps> = (
  {
    bgColor,
    title,
    subtitle,
    value,
    boxShadow="light",
    icon,
  }) => {
  return (
    <Container bgColor ={bgColor} boxShadow={boxShadow}>
      <div className="card-content">
        <div className="card-value">
          <h2>
            {title}
          </h2>
          <h1>
           {value}
          </h1>
          <span>
            {subtitle}
          </span>
        </div>
        <div className="card-icon">
          {icon}
        </div>
      </div>
    </Container>
  );
};
export default ScoreCardDashboard;

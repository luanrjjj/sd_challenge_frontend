import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
import { LoadingOutlined} from '@ant-design/icons';
import { Spin } from 'antd';


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container type="submit" isLoading={loading || false} {...rest}>
      {loading ? (<Spin className="spin-loading" indicator={antIcon}/>) : children}
    </Container>
  );
};
export default Button;

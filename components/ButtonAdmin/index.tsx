import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { ButtonContainer } from './styles';

// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const ButtonAdmin = ({
  children, lg, block, loading, disabled, color, className,
  style, link, onClick, htmlType, id, form, key, icon, action,
  extra,
}: any) => {
  const iconToShow = () => {
    if (loading) {
      // return <Spin indicator={antIcon} />;
    }

    if (icon) {
      return icon;
    }

    return null;
  };

  return (
    <ButtonContainer>


    <button
      className={
        `gyramais-btn
        ${lg ? 'gyramais-btn-large' : ''}
        ${block ? 'gyramais-btn-block' : ''}
        ${loading ? 'gyramais-btn-loading' : ''}
        ${color ? `gyramais-btn-${color}` : ''}
        ${link ? 'gyramais-btn-link' : ''}
        ${icon ? `gyramais-btn-icon ${!children ? 'only-icon' : ''}` : ''}
        ${action ? 'gyramais-action-button' : ''}
        ${disabled ? 'gyramais-disabled' : ''}
        ${className || ''}`
      }
      disabled={loading || disabled}
      style={style}
      onClick={() => onClick?.()}
      type={htmlType === 'submit' ? 'submit' : 'button'}
      id={id}
      key={key}
      form={form}
    >
      {iconToShow()}
      {children && (
        <span style={{ paddingLeft: iconToShow() ? '10px' : '' }}>
          {children}
        </span>
      )}
      {extra}
    </button>
    </ButtonContainer>
  );
};

export default ButtonAdmin;

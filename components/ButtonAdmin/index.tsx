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
    if (icon) {
      return icon;
    }

    return null;
  };

  return (
    <ButtonContainer>


    <button
      className={
        `component-btn
        ${lg ? 'component-btn-large' : ''}
        ${block ? 'component-btn-block' : ''}
        ${loading ? 'component-btn-loading' : ''}
        ${color ? `component-btn-${color}` : ''}
        ${link ? 'component-btn-link' : ''}
        ${icon ? `component-btn-icon ${!children ? 'only-icon' : ''}` : ''}
        ${action ? 'component-action-button' : ''}
        ${disabled ? 'component-disabled' : ''}
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

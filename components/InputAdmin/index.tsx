import React, { useState } from 'react';
import {
  Input,
  Tooltip,
  InputNumber,
} from 'antd';
import {
  LoadingOutlined,
  InfoCircleFilled,
} from '@ant-design/icons';
import MaskedTextInput from 'react-text-mask';
import { InputContainer } from './styles';

const InputAdmin = ({
  autoComplete,
  autoSize = { minRows: 3, maxRows: 5 },
  placeholder,
  type,
  className,
  onChange,
  value,
  disabled,
  id,
  loading,
  guide,
  mask,
  onKeyUp,
  onKeyDown,
  prefix,
  alert,
  onBlur,
  min,
  max,
  step,
  addonAfter,
  size,
  autoFocus,
  onPressEnter,
  addonBefore,
  maxLength,
}: any) => {
  const [visible, setVisible] = useState(false);
  return (
    <InputContainer>
      {(type === 'text' || type === 'string' || type === 'email' || !type) && (
        <Input
          id={id}
          size={size}
          autoFocus={autoFocus}
          onPressEnter={onPressEnter}
          addonBefore={addonBefore}
          addonAfter={loading ? <LoadingOutlined /> : addonAfter}
          disabled={disabled}
          autoComplete={autoComplete}
          placeholder={placeholder}
          type={type}
          maxLength={maxLength}
          className={`${className || ''} bewiz-input`}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          prefix={prefix}
          onFocus={() => setVisible(true)}
          onBlur={() => { setVisible(false); onBlur?.(); }}
          suffix={alert && visible && (
            <Tooltip title={alert} visible={visible}>
              <InfoCircleFilled className="input-info-icon" />
            </Tooltip>
          )}
        />
      )}
      {type === 'number' && (
        <InputNumber
          id={id}
          size={size}
          autoFocus={autoFocus}
          onPressEnter={onPressEnter}
          placeholder={placeholder}
          min={min}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`admin-input ${className || ''}`}
          value={value}
          prefix={prefix}
        />
      )}
      {type === 'password' && (
        <Input.Password
          id={id}
          size={size}
          autoFocus={autoFocus}
          onPressEnter={onPressEnter}
          addonBefore={addonBefore}
          addonAfter={loading ? <LoadingOutlined /> : addonAfter}
          disabled={disabled}
          autoComplete={autoComplete}
          placeholder={placeholder}
          type={type}
          className={`${className || ''} admin-input`}
          onChange={onChange}
          value={value}
          prefix={prefix}
        />
      )}
      {type === 'textarea' && (
        <Input.TextArea
          id={id}
          autoFocus={autoFocus}
          onPressEnter={onPressEnter}
          disabled={disabled}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={`${className || ''} admin-input`}
          onChange={onChange}
          value={value}
          prefix={prefix}
          onFocus={() => setVisible(true)}
          onBlur={() => setVisible(false)}
          autoSize={autoSize}
        />
      )}
      {type === 'masked' && (
        <div>
          <MaskedTextInput
            id={id}
            className="ant-input admin-input"
            guide={guide}
            mask={mask}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onKeyUp={onKeyUp}
            prefix={prefix}
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
          />
          {alert && visible && (
            <div className="custom-input-tooltip">
              <Tooltip title={alert} visible={visible}>
                <InfoCircleFilled className="input-info-icon" />
              </Tooltip>
            </div>
          )}
        </div>
      )}
      {type === 'currency' && (
        <InputNumber
          id={id}
          size={size}
          autoFocus={autoFocus}
          onPressEnter={onPressEnter}
          addonBefore={addonBefore}
          addonAfter={loading ? <LoadingOutlined /> : addonAfter}
          parser={(e) => e && parseFloat(
            e.replace(/[R$\s?|(.*)]/g, '')
              .replace(',', '.'),
          )}
          placeholder={placeholder}
          min={min}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`admin-input ${className || ''}`}
          value={value}
          prefix={prefix}
        />
      )}
      {type === 'percent' && (
        <InputNumber
          id={id}
          size={size}
          autoFocus={autoFocus}
          onPressEnter={onPressEnter}
          // addonBefore={addonBefore}
          // formatter={(value) => value && round(parseFloat(value) * 100, 6)}
          // parser={(value) => value && round(parseFloat(value) / 100, 6)}
          placeholder={placeholder}
          maxLength={maxLength}
          min={min}
          max={max}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          step={step ?? 1}
          className={`admin-input ${className || ''}`}
          value={value}
          // addonAfter={loading ? <LoadingOutlined /> : '%'}
        />
      )}
    </InputContainer>
  );
};

export default InputAdmin;

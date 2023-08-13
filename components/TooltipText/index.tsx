import { Tooltip } from 'antd';
import React from 'react';

interface TooltipProps {
  text: string;
  className?: string;
  maxLength: number;
  selector?: string;
}

const TooltipText = ({text, maxLength, selector, className = ''}:TooltipProps) => {

  if (!text) {
        return <p>''</p>;
    }

    const  HtmlSelectorAbreviation: any =  {
        'p' : ( <p>{text.substring(0, maxLength)}...</p>),
        'span' : (<span>{text.substring(0, maxLength)}...</span>),
        'div' : ( <div>{text.substring(0, maxLength)}...</div>),
        'h1' : ( <h1>{text.substring(0, maxLength)}...</h1>),
        'h2' : ( <h2>{text.substring(0, maxLength)}...</h2>),
        'a' : ( <a href={text}>{text.substring(0, maxLength)}...</a>),
    }

    const  HtmlSelector: any =  {
        'p' : ( <p>{text}</p>),
        'span' : (<span>{text}</span>),
        'div' : ( <div>{text}</div>),
        'h1' : ( <h1>{text}</h1>),
        'h2' : ( <h2>{text}</h2>),
        'a' : ( <a>{text}</a>),
    }

  return (
    <div className={className}>
      {text && (text.length > maxLength) ? (
        <Tooltip title={text}>
          { selector? HtmlSelectorAbreviation[selector] : HtmlSelectorAbreviation.p}
        </Tooltip>
      ) : (
        selector && HtmlSelector[selector]? HtmlSelector[selector]: HtmlSelector.p
      )}
     </div>
  );
};

export default TooltipText;

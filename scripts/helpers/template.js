/**
 * Template for the icon component, used by svgr package.
 */

function defaultTemplate(
  { template },
  opts,
  { imports, componentName, jsx },
) {
  const plugins = ['jsx']
  const jsTemplate = template.smart({ plugins })
  const componentRealName = componentName.name?.replace('Svg', '');

  return jsTemplate.ast`import React from 'react';
  
  function ${componentRealName}(oldProps) {    
    const props = Object.assign({
      height: oldProps.size || 24,
      width: oldProps.size || 24,
      viewBox: oldProps.viewBox || '0 0 24 24',
      fill: oldProps.fill || 'currentColor',
    }, oldProps, {
      size: undefined,
      className: 'groww-icons ' + (oldProps.className || ''),
    });

    return ${jsx}
  }
  
  export default React.memo ? React.memo(${componentRealName}) : ${componentRealName};
    `
}

module.exports = defaultTemplate
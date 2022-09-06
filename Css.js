const css = (styles) => {
  Object.keys(styles).forEach((elementSelector) => {
    apply(elementSelector, styles[elementSelector]);
  });
};

const apply = (elementKeyString, styleObject) => {
  const element = selectElement(elementKeyString);

  Object.keys(styleObject).map((key) => {
    element.forEach((el) => {
      el.style[key] = styleObject[key];
    });
  });
};

const selectElement = (key) => {
  const indicator = key.slice(0, 1);

  if (indicator === "#") {
    return document.querySelectorAll(key);
  } else {
    return document.querySelectorAll(`.${key}`);
  }
};

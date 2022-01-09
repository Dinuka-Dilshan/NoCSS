const css = (id, styles) => {
  if (Array.isArray(id)) {

    id.map((e) => {
      let elementStyle;

      if (e[0] === "#") {
        elementStyle = document.getElementById(e.slice(1)).style;

        const style = Object.keys(styles).map((entry) => {
          return [entry, styles[entry]];
        });

        style.map((pair) => {
          const attribute = pair[0];
          const value = pair[1];

          elementStyle[attribute] = value;
        });
      } else if (e[0] === ".") {
        const elementsArray = document.getElementsByClassName(e.slice(1));

        const style = Object.keys(styles).map((entry) => {
          return [entry, styles[entry]];
        });

        for (let x = 0; x < elementsArray.length; x++) {
          style.map((pair) => {
            const attribute = pair[0];
            const value = pair[1];
            elementsArray[x].style[attribute] = value;
          });
        }
      } else {
        const elementsArray = document.getElementsByTagName(e);

        const style = Object.keys(styles).map((entry) => {
          return [entry, styles[entry]];
        });

        for (let x = 0; x < elementsArray.length; x++) {
          style.map((pair) => {
            const attribute = pair[0];
            const value = pair[1];
            elementsArray[x].style[attribute] = value;
          });
        }
      }
    });
  } else {
    let elementStyle;

    if (id[0] === "#") {
      elementStyle = document.getElementById(id.slice(1)).style;

      const style = Object.keys(styles).map((entry) => {
        return [entry, styles[entry]];
      });

      style.map((pair) => {
        const attribute = pair[0];
        const value = pair[1];

        elementStyle[attribute] = value;
      });
    } else if (id[0] === ".") {
      const elementsArray = document.getElementsByClassName(id.slice(1));

      const style = Object.keys(styles).map((entry) => {
        return [entry, styles[entry]];
      });

      for (let x = 0; x < elementsArray.length; x++) {
        style.map((pair) => {
          const attribute = pair[0];
          const value = pair[1];
          elementsArray[x].style[attribute] = value;
        });
      }
    } else {
      const elementsArray = document.getElementsByTagName(id);

      const style = Object.keys(styles).map((entry) => {
        return [entry, styles[entry]];
      });

      for (let x = 0; x < elementsArray.length; x++) {
        style.map((pair) => {
          const attribute = pair[0];
          const value = pair[1];
          elementsArray[x].style[attribute] = value;
        });
      }
    }
  }
};

css(['.a','#b'], {
  color: "red",
  fontSize:'2rem'
});

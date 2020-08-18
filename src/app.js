const Pet = () => {
  return React.createElement("div", {}, [ //here comes the children
    React.createElement("h1", {}, "Sparkle Goth"),
    React.createElement("h2", {}, "Cat"),
    React.createElement("h2", {}, "Domestic Shorthair")
  ]);
};

const App = () => {
  return React.createElement("div", { id: "Something Important" }, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet)
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

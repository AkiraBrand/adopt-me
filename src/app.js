const Pet = ({ name, animal, breed}) => {
  return React.createElement("div", {}, [ //here comes the children
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Junior",
      animal: "Dog",
      breed: "Dauschund"
    }),
    React.createElement(Pet, {
      name: "Sparkle Goth",
      animal: "Cat",
      breed: "Domestic Shorthair"
    }),
    React.createElement(Pet, {
      name: "Birbie Girl",
      animal: "Bird",
      breed: "Cockatiel" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

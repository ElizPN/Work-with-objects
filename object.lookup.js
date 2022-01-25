function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  lookup["alpha"];
  lookup["bravo"];
  lookup["charlie"];
  lookup["delta"];
  lookup["echo"];
  lookup["foxtrot"];

  result = lookup[val];

  return result;
}

phoneticLookup("charlie");

const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("./greet.js");

test("greet says hello with the name", () => {
  assert.strictEqual(greet("Janua"), "Halo, Janua!");
});test("greet works with another name", () => { assert.strictEqual(greet("Budi"), "Halo, Budi!"); });

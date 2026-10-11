const test = require("node:test");
const assert = require("node:assert");
const { goodbye } = require("./farewell.js");

test("farewell says goodbye with the name", () => {
  assert.strictEqual(goodbye("Janua"), "Sampai jumpa, Janua!");
});
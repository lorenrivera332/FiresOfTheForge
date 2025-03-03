
#### index.js

```javascript
#!/usr/bin/env node

const forges = [
  "Baldric the Flamebinder – Forged ‘Inferno’s Wrath’, a sword that burns eternally.",
  "Eldra Stonehammer – Crafted ‘Titan’s Embrace’, an unbreakable warhammer.",
  "Karn the Unyielding – Created ‘Shadowfang’, a dagger that disappears in the moonlight.",
  "Varos the Stormcaller – Smith of ‘Thunder’s Echo’, a mace that roars like a tempest.",
  "Ysara the Runeweaver – Wrote enchantments into ‘Celestial Aegis’, a shield that reflects magic."
];

function getRandomForge() {
  return forges[Math.floor(Math.random() * forges.length)];
}

console.log("Welcome to Fires of the Forge!");
console.log("Here is a legendary blacksmith and their masterpiece:");
console.log(getRandomForge());

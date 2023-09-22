// Get HTML head element
let head = document.getElementsByTagName("HEAD")[0];

// Create new link Element
let link = document.createElement("link");

// set the attributes for link element
link.rel = "stylesheet";

link.type = "text/css";

link.href = "reset.css";

// Append link element to HTML head
head.appendChild(link);

module.exports = ModernCssReset;

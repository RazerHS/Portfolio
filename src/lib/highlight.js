import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; 

export function highlight(node) {
    hljs.highlightElement(node);
}
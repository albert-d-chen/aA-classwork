// import DomNodeCollection from "./dom_node_collection";
const DomNodeCollection = require ('./dom_node_collection');

window.$l = (arg) => {
    if (arg instanceof HTMLElement) {
        return new DomNodeCollection([arg]);
    } else if (arg instanceof String) {
        const nodes = document.querySelectorAll(arg);
        const nodesToArray = Array.from(nodes);
        return new DomNodeCollection(nodesToArray);
    }

}

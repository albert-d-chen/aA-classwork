class DomNodeCollection {
    constructor (nodes) {
        this.nodes = nodes;
    }

    html(str) {
        if (typeof str === 'string') {
            this.nodes.forEach((node) => {
                node.innerHTML = str;
            })
        } else if (this.nodes.length > 0) {
            return this.nodes[0].innerHTML;
        }
    }

    empty() {
        this.html('');
    }

    append() {

    }

    attr(key, value){
        if (typeof value === 'string') {
            this.nodes.forEach((node) => {
                node.setAttribute(key, value);
            })
        } else {
            return this.nodes[0].getAttribute(key);
        }
    }

    addClass(newClass) {
        this.nodes.forEach((node) => {
            node.classList.add(newClass);
        })
    }

    removeClass(target) {
        this.nodes.forEach((node) => {
            node.classList.remove(target);
        })
    }

    children() {
        let childNodes = [];
        this.each((node) => {
            const childNodeList = node.children;
            childNodes = childNodes.concat(Array.from(childNodeList));
        });
        return new DomNodeCollection(childNodes);
    }

    parent() {
        const parentNodes = [];
        this.nodesforEach(({ parentNode }) => {
            if (!parentNode.visited) {
                parentNodes.push(parentNode);
                parentNode.visited = true;
            }
        });

        parentNodes.forEach((node) => {
            node.visited = false;
        });
        return new DomNodeCollection(parentNodes);
    }

    find(target) {
        let foundNodes = [];
        this.nodes.forEach((node) => {
            const nodeList = node.querySelectorAll(target);
            foundNodes = foundNodes.concat(Array.from(nodeList));
        });
        return new DomNodeCollection(foundNodes);
    }
}


module.exports = DomNodeCollection;
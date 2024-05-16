import React, { useState } from 'react'

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        if (!this.head) {
            this.head = new ListNode(value);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new ListNode(value);
        }
    }

    removeNodes(x) {
        let dummy = new ListNode(0);
        dummy.next = this.head;
        let current = dummy;
        while (current.next) {
            if (current.next.value > x) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        this.head = dummy.next;
    }

    toArray() {
        let array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
}

function Prob3() {

    const [list, setList] = useState(new LinkedList());
    const [input, setInput] = useState('');
    const [threshold, setThreshold] = useState('');

    const handleAddNode = () => {
        const newList = new LinkedList();
        newList.head = list.head;
        newList.addNode(Number(input));
        setList(newList);
        setInput('');
    };

    const handleRemoveNodes = () => {
        const newList = new LinkedList();
        newList.head = list.head;
        newList.removeNodes(Number(threshold));
        setList(newList);
        setThreshold('');
    };

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="number"
                placeholder="Add node value"
            />
            <button onClick={handleAddNode}>Add Node</button>
            <input
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                type="number"
                placeholder="Threshold value"
            />
            <button onClick={handleRemoveNodes}>Remove Nodes</button>
            <h2>Linked List:</h2>
            <ul>
                {list.toArray().map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    )
}
export default Prob3
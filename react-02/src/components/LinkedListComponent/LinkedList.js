import React from 'react';
import {Node, DoublyLinkedList } from './linkedListClass.js'



class LinkedList extends React.Component {
  constructor(props) {
      super(props)
      this.node = new Node();
      this.double = new DoublyLinkedList() 
  }



    render() {
        return(
        <p>{'Hello from LinkedList'}</p>
        )




    }

    
}

export default LinkedList;
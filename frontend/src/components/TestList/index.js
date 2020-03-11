import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import styles               from './TestList.module.scss';

const ListItem = (props) => {

  return <li className={styles.listItem}>{props.children}</li>;

};

ListItem.propTypes = {
  children: PropTypes.node,
};

class TestList extends Component {
  constructor (props) {
    super( props );

    const newItems = [];
    for (let i = 40; i > 0; i--) {
      newItems.push( i );
    }

    this.state = {
      items: newItems,
    };

    this.listRef = React.createRef();

  }

  loadItems = () => {
    const { items } = this.state;
    const newItems = [];
    for (let i = items.length + 40; i > items.length; i--) {
      newItems.push( i );
    }
    this.setState( {
                     items: [...newItems, ...items]
                   } );
  };

  getSnapshotBeforeUpdate (prevProps, prevState) {
    if (prevState.items.length < this.state.items.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  componentDidMount () {
    this.listRef.current.scrollTo( 0, this.listRef.current.scrollHeight );
  }

  render () {

    const { items } = this.state;

    return (
      <>
        <ul ref={this.listRef} className={styles.list}>
          {
            items.map( item => (<ListItem key={item}>{item}</ListItem>) )
          }


        </ul>
        <button className={styles.button} onClick={this.loadItems}>load</button>
      </>
    );
  }
}

TestList.propTypes = {};

export default TestList;
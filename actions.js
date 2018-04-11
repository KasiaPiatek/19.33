/*orzenie komentarza,*/

const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}

export ADD_COMMENT;
export addComment;


/*-------------------------

edycja komentarza,*/


const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    id: id,
    text: text,
  }
}

export EDIT_COMMENT;
export editComment;

/*-------------------------
usowanie komentarza,

{
    type: REMOVE_COMMENT,
    id: 20 // przykładowy id komentarza do usunięcia
}*/

const REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment(text, id) {
  return {
    type: REMOVE_COMMENT,
    id: id,
  }
}

export REMOVE_COMMENT;
export removeComment;

/*
---------------------------

ocenianie +1 / -1 (kciuk w górę/kciuk w dół) komentarza*/

var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

	render: function() {
	        return React.createElement('div', {},
	            React.createElement('button', {onClick: this.increment}, 'Dodaje '),
	            React.createElement('div', {}, this.state.counter),
	            React.createElement('button', {onClick: this.decrement}, 'Odejmuje'),
	        );
});

ReactDOM.render(React.createElement(element), document.getElementById('app'));



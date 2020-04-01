import React from 'react';
import { connect } from 'react-redux';

const App = ({ initialText, changeText }) => (
  <div>
    <p>{initialText}</p>
    <button onClick={changeText}>change text!</button>
  </div>
);

const mapStateToProps = ({ initialText }) => ({
  initialText,
});

const mapDispatchToProps = (dispatch) => ({
  changeText: () => dispatch({ type: 'CHANGE_TEXT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

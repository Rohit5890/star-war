import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import InputElem from './components/component-input';
import ListElem from './components/component-list';

import GetData from './actionCreators/action-getData';
import FilterAction from './actionCreators/action-filter';

class App extends Component {
  constructor(props){
    super(props);
    this.fullList =[];
  }
  componentDidMount(){
      this.props.dispatch(GetData());
  }
  onChangeHandler(e){
    this.props.dispatch(FilterAction(e.target.value,this.fullList));
  }
  renderList(){
    return this.props.listItem.map((item, index)=><ListElem key={`${item.name}_${index}`} index={index}data={item} className={`col-xs-12 col-sm-6 col-md-4`}/>);
  }
  render() {
    let {listItem} =  this.props;
    
    if((this.fullList.length === 0 ) && listItem) {
       this.fullList = listItem
      };

    return (
      <div className="App container">
        <div className="jumbotron">
          <h1>Star War Character List</h1>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <InputElem className="form-control" placeholder="Filter the List" onChangeHandler = {(e)=>this.onChangeHandler(e)}/>
              {
                (listItem.length === 0) && <div className="row">Loding in progress</div>
              }
              {
                listItem && <ul className="row">
                  {this.renderList()}
                </ul>
              }
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    listItem: state.filteredList
  }
}
const WrapperApp = connect(mapStateToProps)(App)
export default WrapperApp;

import { type } from 'jquery';
import React, {Component} from 'react';
import './App.css';
import Alert from './Components/Alert';
// to import alert element
import Media from './Components/Media'

class App extends Component{
  render(){
    return(
      <div className="App container">
        <div className= "alert alerst-info">
        <h3 className="text-danger">Ini project pertama React</h3>
        <p className="subJudul">Belajar React JS semoga mudah</p>
        <button className= "mr-1 btn btn-success">setuju</button>
        <button className= "mr-1 btn btn-success">iyain</button>
        <div className="App container col-sm-6">
        <Alert type={this.state.type} header={this.state.header}>  
      {this.state.content}    
      <hr />  
      <h4>Alert Control</h4>  
      <b className="text-left">Tipe Alert</b>  
      <select className="form-control" name="type" value={this.state.type}
      onChange={this.changeTypeAlert}>  
      <option value="success">Success</option>  
      <option value="warning">Warning</option>  
      <option value="danger">Danger</option>  
      <option value="info">Info</option>  
      </select>  
      <b className="text-left">Header Alert</b>  
      <input  
      type="text" name="header" className="form-control" value={this.state.header}  
      onChange={this.changeHeaderAlert} />  
      <b className="text-left">Content Alert</b>  
      <input  
      type="text" name="content" className="form-control" value={this.state.content}  
      onChange={this.changeContentAlert} />
      </Alert>
        <Media image="mantra1.jpg" title="Konser">
          Ini foto konser mantra mantra 1 
        </Media>
        <Media image="mantra2.jpg" title="Konser">
          Ini foto konser mantra mantra 2 
        </Media>

        
        </div>
        </div>
      </div>
    );
  }
  constructor(){  
    super();  
    this.state = {  
      type: "danger",  
      header: "Fatal Error",  
      content: "ini content dari alert"  
    }  
  }
  //Constructor adalah fungsi yang pertama kali di panggil saat sebuah class dilakukan proses instance
}

export default App;
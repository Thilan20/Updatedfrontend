
import React from 'react';
import Logo from './logo.jpg'
export default class DynamicTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      lo: "",
      po: "",
      POs:[],
      mark:"",
      Marks:[],
      LOs:[],
      items: []
    }
  }


  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  updatelo(test) {
    this.setState({
      lo: test.target.value
    });
  }

  updatepo(test) {
    this.setState({
      po: test.target.value
    });
  }

  handleClick() {
    var items = this.state.items;
    var LOs= this.state.LOs;
    var POs= this.state.POs;

    items.push(this.state.message);
    LOs.push(this.state.lo);
    POs.push(this.state.po)
    this.setState({
      items: items,
      LOs:LOs,
      POs:POs,
      message: "",
      lo:" ",
      po:""
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;

    this.setState({
      items: items
    });
  }

  handleloChanged(i, test) {
    var LOs = this.state.LOs;
    LOs[i]  = test.target.value;

    this.setState({
      LOs:LOs
    });
  }

  
  handlepoChanged(i, test) {
    var POs = this.state.POs;
    POs[i]  = test.target.value;

    this.setState({
      POs:POs
    });
  }
  handleItemDeleted(i) {
    var items = this.state.items;
    var LOs = this.state.LOs;
    var POs =this.state.POs;
    items.splice(i, 1);
    LOs.splice(i,1);
    POs.splice(i,1);

    this.setState({
      items: items,
      LOs:LOs,
      POs:POs
  
    });
  }

  renderRows() {
    var context = this;

    return  this.state.items.map(function(o, i) {
      
              return (
                
                <tr >
                  <td>
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged.bind(context, i)}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleloChanged.bind(context, i)}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleloChanged.bind(context, i)}
                    />
                  </td>

                  <td>
                    <button
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });
  }

  render() {
    return (
      <div>
        <div class ="header"> 
      <img src={Logo} alt ='weblogo' />
      
        
         
            <h1>Faculty of Engineering University of Ruhuna</h1>
          
          <h2>Outcome Based Education System</h2>
      </div>
      <h3></h3>
        <table className="">
          <thead>
            <tr>
              <th>
                Assessment Component
              </th>
              <th>
                LO
              </th>
              <th>
                PO
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <hr/>

        <input 
        class="col-md-1  "
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        />
        
        <input
        class="col-md-1  offset-md-4 "
          type="text"
          value={this.state.lo}
          onChange={this.updatelo.bind(this)}
        />

<input
        class="col-md-1  offset-md-4 "
          type="text"
          value={this.state.po}
          onChange={this.updatepo.bind(this)}
        />
      <br/>
        <button 
        class="col-md-3  "
          onClick={this.handleClick.bind(this)}
        >
          Add Item
        </button>
        <br/>
<div class="col-md-3  offset-md-9">
<button>Submit</button>
</div>
  
      </div>
    );
  }
}
import React, { Component } from 'react'

export default class Find extends Component {
  constructor(){
    super()
    this.state = {
      Name: "",
      Address: "",
      Hours: "",
      Number:""
    }
  }

  getRestaurant = async () => {
    const response = await fetch("")
    const data = await response.json()
    

  this.componentDidMount = () => {
    this.getRestaurant()
  }
  }
  render() {
    return (
      <div>
        <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">ZIP Code</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ZIP Code" />
  </div>
  <button type="submit" className="btn btn-primary">Search</button>
</form>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Find extends Component {
  getRestaurant = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fa2d0c09c1mshb07e89b4883daa3p15de0fjsnf3e2076c6a58',
        'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
      }
    };
    
    fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/90210/0', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

  }
  render() {
    return (
      <div >
        <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">ZIP Code</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ZIP Code" />
        </div>
        <button type="submit" className="btn btn-primary" onChange={this.getRestaurant}>Search</button>
      </form>
      </div>
    )
  }
}

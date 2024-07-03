import React from 'react';
import Navbar from './Navbar';

const Viewsub = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Subscriber ID</th>
      <th scope="col">Name</th>
      <th scope="col">Newspaper</th>
      <th scope="col">Subscription Plan</th>
      <th scope="col">Monthly Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">001</th>
      <td>John Doe</td>
      <td>The New York Times</td>
      <td>Basic</td>
      <td>$4</td>
    </tr>
    <tr>
      <th scope="row">002</th>
      <td>Jane Smith</td>
      <td>The Washington Post</td>
      <td>Premium</td>
      <td>$10</td>
    </tr>
    <tr>
      <th scope="row">003</th>
      <td>Michael Brown</td>
      <td>The Wall Street Journal</td>
      <td>Digital</td>
      <td>$12</td>
    </tr>
    <tr>
      <th scope="row">004</th>
      <td>Emily Davis</td>
      <td>The Guardian</td>
      <td>Supporter</td>
      <td>$6</td>
    </tr>
    <tr>
      <th scope="row">005</th>
      <td>David Wilson</td>
      <td>Financial Times</td>
      <td>Standard</td>
      <td>$14</td>
    </tr>
    <tr>
      <th scope="row">006</th>
      <td>Sarah Miller</td>
      <td>Los Angeles Times</td>
      <td>Digital</td>
      <td>$8</td>
    </tr>
    <tr>
      <th scope="row">007</th>
      <td>James Taylor</td>
      <td>The Economist</td>
      <td>Digital</td>
      <td>$15</td>
    </tr>
    <tr>
      <th scope="row">008</th>
      <td>Jessica Johnson</td>
      <td>USA Today</td>
      <td>Digital All Access</td>
      <td>$10</td>
    </tr>
    <tr>
      <th scope="row">009</th>
      <td>Robert Moore</td>
      <td>Chicago Tribune</td>
      <td>Digital</td>
      <td>$7</td>
    </tr>
    <tr>
      <th scope="row">010</th>
      <td>Linda Martinez</td>
      <td>The Boston Globe</td>
      <td>Digital</td>
      <td>$6</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Viewsub;

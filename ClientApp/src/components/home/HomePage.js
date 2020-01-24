import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1 className="display-5">
      <span className="text-primary">Expense Application</span>
    </h1>
    <p className="lead">It is demo app demonstrating user/employee submits his/her company expenses charged to their corporate credit card. User can also add additional cash expenses if required.</p>
    <p className="lead">Backend RESTful APIs are serviced by two different microservices, that can be developed and deployed independently.</p>
    <hr className="my-4" />

    <h4>Built with following technologies</h4>
    <ul className="list-group">
      <li className="list-group-item list-group-item-primary">
        <b>Front End:</b> Single Page App (SPA): React.js + Redux for store management + Bootstrap + Jest Unit Testing
      </li>
      <li className="list-group-item list-group-item-info">
        <b>Back End for Front End:</b> ASP.Net MVC Core 2.2, serves the compiled react client pages and calls RESTful Apis (No CORS)
      </li>
      <li className="list-group-item list-group-item-primary">
        <b>Back End - RESTful Api:</b> ASP.Net Core 2.2 + Dapper for data access + xUnit Test with Moq
      </li>
      <li className="list-group-item list-group-item-info">
        <b>E2E:</b> Functional/End to end testing with Nightwatch and Selenium
      </li>
      <li className="list-group-item list-group-item-info">
        <b>Database:</b> SQL Server
      </li>
      <li className="list-group-item list-group-item-info">
        <b>Send EMail:</b> SendGrid API + Azure Queue and Serverless Apps.
      </li>
      <li className="list-group-item list-group-item-primary">
        <b>Deployment:</b> Github + CI/CD: Continuous deployment to Azure Cloud
      </li>
      <li className="list-group-item list-group-item-info">
        <b>Hosting:</b> Azure Cloud, hosts application, RESTful APIs, serverless apps for sendgrid email and SQL database
      </li>
    </ul>

    <h4 className="mt-4">How to test this demo app?</h4>
    <ul className="list-group">
      <li className="list-group-item list-group-item">
        <b>Create a user:</b> From top menu: Click User Profile - Create user.
        <p>Please enter a valid email, so expense report can be send on submission. This email will not be used or shared anywhere else.</p>
        <p>In real world, this step will not required. The app will already have the users set by the company. </p>
      </li>
      <li className="list-group-item list-group-item">
        <b>Login:</b> Log in using the userid and password (max 8 chars).
      </li>
      <li className="list-group-item list-group-item">
        <b>Create sample transactions:</b> Click [Create Sample Transactions] from User Profile.
        <p>Since there is no real credit card associated with it, this action is to simulate transactions posted by credit card company.</p>
      </li>
      <li className="list-group-item list-group-item">
        <b>Process Expense:</b> Upon creating sample transactions, under User Profile, click [Process Expenses]. Should display transactions. (if not refresh the browser)
      </li>
      <li className="list-group-item list-group-item">
        <b>Submit:</b> Select a Cost Centre, checkmark verification and click [Save].
        <p>Should receive a confirmation with submitted expense id as well a email confirmation with submitted expenses.</p>
      </li>
    </ul>

    <Link to="about" className="btn btn-primary btn-lg mt-4">
      Learn more
    </Link>
  </div>
);

export default HomePage;

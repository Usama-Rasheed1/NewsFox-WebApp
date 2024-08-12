import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div className='container my-4'>
        <h2>NewsFox - Top Headlines</h2>
        <p>
          <strong>Overview</strong><br />
          NewsFox is a React.js-based news web application that utilizes the NewsAPI from
          <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer"> newsapi.org </a> 
          to provide users with top headlines. The application features a responsive design built with Bootstrap, allowing users to navigate through various news categories seamlessly.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Dynamic News Fetching: Retrieves and displays the latest headlines from various sources based on the selected category.</li>
          <li>Category Selection: Users can choose different news categories through a responsive navbar.</li>
          <li>Pagination: Allows users to navigate between pages of news articles.</li>
          <li>Loading State: Includes a spinner to indicate when news articles are being fetched.</li>
        </ul>

        <h3>Technologies Used</h3>
        <ul>
          <li>React.js: For building the user interface.</li>
          <li>Bootstrap: For responsive design and styling.</li>
          <li>NewsAPI: For fetching news data.</li>
        </ul>

        <h3>Usage</h3>
        <ul>
          <li>Choose a Category: Use the navbar to select the desired news category.</li>
          <li>Navigate News Articles: Use the "Prev" and "Next" buttons to navigate through different pages of news articles.</li>
          <li>View Articles: Click on a news article to view its details.</li>
        </ul>

        <p>
          <strong>API Key</strong><br />
          Replace the placeholder API key in <code>News.js</code> with your own key from 
          <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer"> newsapi.org </a>:
          <code>let url = `https://newsapi.org/v2/top-headlines?q=${this.props.category}&apiKey=YOUR_API_KEY`;</code>
        </p>

        <p>
            For questions or feedback, please contact 
            <a href="mailto:usamara760@gmail.com"> usamara760@gmail.com</a>. 
            Feel free to adjust the content as needed and add any additional sections if required. 
            Happy coding.
        </p>

      </div>
    );
  }
}

export default About;

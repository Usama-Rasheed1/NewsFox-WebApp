					NewsFox - Top Headlines

Overview
NewsFow is a React.js-based news web application that utilizes the NewsAPI (from [newsapi.org](https://newsapi.org)) to provide users with top headlines. 
The application features a responsive design built with Bootstrap, allowing to navigate through various news categories seamlessly.

Features
1. Dynamic News Fetching: Retrieves and displays the latest headlines from various sources based on the selected category.
2. Category Selection: Users can choose different news categories through a responsive navbar.
3. Pagination: Allows users to navigate between pages of news articles.
4. Loading State: Includes a spinner to indicate when news articles are being fetched.

Technologies Used
1. React.js: For building the user interface.
2. Bootstrap: For responsive design and styling.
3. NewsAPI: For fetching news data.

Usage
1. Choose a Category: Use the navbar to select the desired news category.
2. Navigate News Articles: Use the "Prev" and "Next" buttons to navigate through different pages of news articles.
3. View Articles: Click on a news article to view its details.

API Key
Replace the placeholder API key in `News.js` with your own key from [newsapi.org](https://newsapi.org):
let url = `https://newsapi.org/v2/top-headlines?q=${this.props.category}&apiKey=YOUR_API_KEY`;


For questions or feedback, please contact 'usamara760@gmail.com'.
Feel free to adjust the content as needed and add any additional sections if required.
Happy coding.
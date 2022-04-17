import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {

  state = {
    news: []
  }

  componentDidMount() {
    this.findNews();
  }
  
  findNews = async () => {    
    const url = `https://newsapi.org/v2/top-headlines?country=co&apiKey=1ba6ab5418ec495aa96deb39f1bb7bce`;
    const resp = await fetch(url);
    const news = await resp.json();
  
    this.setState({
      news: news.articles
    });
  }

  render() {
    return (
      <>
        <Header title={'React News API'} />
        App
        <Footer />
      </>
    )
  }
}

export default App
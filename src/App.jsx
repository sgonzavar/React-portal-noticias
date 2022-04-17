import React from 'react';
import Header from './components/Header';
import ListNews from './components/ListNews';
import FormNews from './components/FormNews';

class App extends React.Component {
  state = { 
    news: []
   }

  componentDidMount() {
    this.findNews();
  }

  findNews = async  (category = 'general') => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1ba6ab5418ec495aa96deb39f1bb7bce`;
      const resp = await fetch(url);
      const news = await resp.json();

      this.setState({
        news : news.articles
      })
  }

  render() { 
    return ( 
        <>
            <Header 
                title='news React API'
            />

            <div className="container white contenedor-news ">
                <FormNews 
                  findNews={this.findNews}
                />

                <ListNews 
                  articles={this.state.news}
                />
            </div>
        </>
    );
  }
}
 
export default App;

import React from 'react';
import api from './api';
import css from './index.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filmes: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('Batman');

    // console.log(response.data);
    this.setState({
      filmes: response.data,
    });
  }

  render() {
    const { filmes } = this.state;

    return (
      <>
        <h1>Lista de filmes</h1>
        {filmes.map((filmes) => (
          <li key={filmes.show.id}>
            <h2>Título: {filmes.show.name}</h2>
            <p className="cursor">{filmes.show.url} </p>
          </li>
        ))}
      </>
    );
  }
}

export default App;

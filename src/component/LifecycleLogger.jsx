import { Component } from 'react';

class LifecycleLogger extends Component {
  // initializer - é quando o componente é alocado em memoria.
  // não tem relação com o DOM.
  // utilizado para configuração de estado, props, event handlers...
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Componente init...');
  }

  componentDidMount() {
    // lida com side effects, ou seja, efeitos colaterais que acontecem após o componete ser montado.
    console.log('component mounted...');
  }

  componentDidUpdate(prevProps, prevState) {
    // monitora e dispara quando prevProps ou prevState sofre alterações de atualização.
    if (prevState.count !== this.state.count) {
      console.log("Component updated...", this.state.count)
    }
  }

  componentWillUnmount() {
    console.log("Component unmount...")
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }



  render() {
    return (
      <div className="logger-container">
        <h2>LifeCycleLogger</h2>
        <h3>Class Componet</h3>
        <br />
        <p>Count: {this.state.count}</p>
        <button className='secondary-btn' onClick={this.incrementCount}>Update</button>
      </div>
    );
  }
}

export default LifecycleLogger;

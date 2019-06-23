import React, {Component, Fragment} from "react";
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

import './index.css';
//30723f89252e4f08b9bef62c8f5393a3
class App extends Component{

  state = {
      noticias: []
  };

  componentDidMount(){
  
      this.consultarNoticias();

  }

  consultarNoticias = async(categoria='general') => {

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=30723f89252e4f08b9bef62c8f5393a3`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    console.log(noticias);

    this.setState({
      noticias: noticias.articles
    })

  }


    render(){
        return (
            <Fragment>
              <Header 
              titulo="Noticias de React"
              />

              <div className="container white contenedor-noticias">
                  <Formulario
                    consultarNoticias = {this.consultarNoticias}
                  />

                  <ListaNoticias 
                    noticias={this.state.noticias}
                  />
              </div>

            </Fragment>
        );
    }
}

export default App;

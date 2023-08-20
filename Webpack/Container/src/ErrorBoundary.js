import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      /**
       * * Captura os errors em qualquer componente que esteja dentro de 
       * * <ErrorBoundary> </ErrorBoundary>
       * * e re-renderiza com uma mensagem do erro
       */
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      /**
       * * Pode ser enviado um log do mensagem de erro a um  
       * * serviço de reporte aqui...
       */
    }
    
    render() {
      if (this.state.errorInfo) {
        return (
          <div>
            {/* Permite mostrar no layout um mensagem customizado do erro */}
            {/* <h3>{this.state.error.name} </h3>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.error.message}
            </details> */}
          </div>
        );
      }
       /**
       * * Se não tem erro, o componente vai ser renderizado de forma normal
       */
      return this.props.children;
    }  
  }
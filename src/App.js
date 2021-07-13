import { Component, useState } from "react";
import BarraTitulo from './Componentes/BarraTitulo';
import Highcharts from 'highcharts';
import moment from 'moment';

class App extends Component {
  useState = {
    registros: [1, 2, 3, 4, 5, 6, 7].map(day => [
      +moment().add(day, "days"), 
      Math.random() * 200
    ])
  }

  componentDidMount() {
    this.graficar();
  }

  graficar = () => {
    Highcharts.chart('grafico', {
      title: {
        text: "Mi Registro de peso"
      },
      xAxis: {
        type: "datetime"
      },
      series: [
        {
          name: "test",
          data: this.useState.registros
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <BarraTitulo></BarraTitulo>
        <main>
          <div className="valing-wrapper">
            <h2>Registro Diario de peso</h2>
          </div>
          <div className="row">
            <div className="col s6">
              <div id="grafico" className="z-depth-2 hoverable"></div>
            </div>
            <div className="col s6">
              <table className="z-depth-2 hoverable">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Peso (Libras)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>208 lb</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <button className="btn">Click me</button>
        Hola mundo
      </div>
    );
  }
}

export default App;

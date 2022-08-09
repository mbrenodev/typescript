import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociaoesView extends View<Negociacoes> {

  template(model: Negociacoes): string {
    return `
    <table class="table table-houver table-bordered">
      <thead>
        <tr>
          <th>Data</th>
          <th>Quantidade</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        ${model.lista().map(negociacao => {
      return `
            <tr>
              <td> ${new Intl.DateTimeFormat().format(negociacao.data)} </td>
              <td> ${negociacao.quantidade} </td>
              <td> ${negociacao.valor} </td>
            </tr>
          `;
    }).join('')}
      </tbody>
    </table>    
    `;
  }
}
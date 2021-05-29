import React from "react";

export default class Fieldset extends React.Component {
  render() {
    const estados = ["BA", "SP", "MG"];
    const { verifyCity, onMouseEnter, upperCase, removeSpecialCharacter } = this.props;

    return (
      <div>
        <fieldset>
          <label>
            <input
              name="Nome"
              type="text"
              placeholder="Seu nome"
              maxLength="40"
              onChange={upperCase}
              required
            />
          </label>
          <label>
            <input
              name="Email"
              type="text"
              placeholder="Email"
              maxLength="50"
              required
            />
          </label>
          <label>
            <input name="CPF" type="text" placeholder="CPF" maxLength="11" required />
          </label>
          <label>
            <input
              name="Endereco"
              type="text"
              placeholder="Endereco"
              maxLength="200"
              required
              onChange={removeSpecialCharacter}
            />
          </label>
          <label>
            <input
              name="Cidade"
              // value={value}
              type="text"
              placeholder="Cidade"
              maxLength="28"
              required
              onBlur={verifyCity}
            />
          </label>
          <label>
            <select name="Estado" type="text" placeholder="">
              {estados.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            <input type="radio" /> Casa
            <input type="radio" /> Apartamento
          </label>
        </fieldset>

        <fieldset>
          <textarea onMouseEnter={onMouseEnter} />
        </fieldset>
      </div>
    );
  }
}

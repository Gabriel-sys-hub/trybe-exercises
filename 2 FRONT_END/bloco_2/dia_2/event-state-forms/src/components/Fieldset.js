import React from "react";
import { Form } from 'react-bootstrap';

export default class Fieldset extends React.Component {
  render() {
    const estados = ["BA", "SP", "MG"];
    const { saveData, verifyCity, onMouseEnter, upperCase, removeSpecialCharacter } = this.props;

    return (
      <div>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <Form.Group >
            Nome
            <Form.Control
              name="Nome"
              type="text"
              placeholder="Seu nome"
              maxLength="40"
              onChange={upperCase}
              required
            />
          </Form.Group>
          <Form.Group>
            Email
            <Form.Control
              name="Email"
              type="text"
              placeholder="Email"
              maxLength="50"
              required
              onChange={saveData}
            />
          </Form.Group>
          <Form.Group>
            CPF
            <Form.Control name="CPF" type="text" placeholder="CPF" maxLength="11" required />
          </Form.Group>
          <Form.Group>
            Endereco
            <Form.Control
              name="Endereco"
              type="text"
              placeholder="Endereco"
              maxLength="200"
              required
              onChange={removeSpecialCharacter}
            />
          </Form.Group>
          <Form.Group>
            Cidade
            <Form.Control
              name="Cidade"
              // value={value}
              type="text"
              placeholder="Cidade"
              maxLength="28"
              required
              onBlur={verifyCity}
            />
          </Form.Group>
          <Form.Group>
            Estado
            <select name="Estado" type="text" placeholder="">
              {estados.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='apartamento'>
            Apartamento
            </Form.Label>
            <Form.Control id='apartamento' type="radio" />
            <Form.Label htmlFor='casa'>
            Casa
            </Form.Label>
            <Form.Control id='casa' type="radio" />

          </Form.Group>
        </fieldset>

        <fieldset>
          <legend>Dados do Ultimo emprego</legend>
          <textarea maxLength='1000' required></textarea>
          <textarea maxLength='40' required onMouseEnter={onMouseEnter} />
          <Form.Control type='text' required maxLength='500'/>
        </fieldset>
      </div>
    );
  }
}

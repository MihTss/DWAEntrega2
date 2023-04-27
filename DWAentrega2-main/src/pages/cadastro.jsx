import React, { useState } from 'react'
import Title from '../components/Title'
import { Dados } from '../components/Dados'
import Swal from 'sweetalert2'


export const Cadastro = () => {
  const [free, setFree] = useState(true)
  const [plus, setPlus] = useState(false)

  const validateCardNumber = (cardNumber) => {
    const regex = /^[0-9]{20}$/;
    return regex.test(cardNumber);
  }

  const submitForm = (event) => {
    event.preventDefault()
    console.log(formValues)
    //verificar se todos os campos estao preenchidos
    if (formValues.nome == "" || formValues.telefone == "" || formValues.endereco == "" || formValues.telefone == "" || formValues.dadoscartao == "" || formValues.cvc == "") {
      Swal.fire({
        icon: 'warning',
        title: 'Erro!',
        text: 'Campos não preenchidos!'
      });
      return
    }
    if (!validateCardNumber(formValues.cardnum)) {
      console.log("erro")
      Swal.fire({
        icon: 'warning',
        title: 'Erro!',
        text: 'Número do cartão inválido!'
      });
      return
    }
    handleClick()
  }

  const [formValues, setFormValues] = useState({
    nome: '',
    telefone: '',
    endereco: '',
    dadoscartao: '',
    cardnum: '',
    cvc: '',
    plano: 'free'
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const clickFree = () => {
    setFree(true)
    setPlus(false)

    setFormValues({
      ...formValues,
      plano: 'free'
    })
  }

  const clickPlus = () => {
    setFree(false)
    setPlus(true)

    setFormValues({
      ...formValues,
      plano: 'plus'
    })
  }

  function handleClick() {

    alert("Plano assinado com sucesso!")
  }

  return (
    <div className='container text-center'>
      <Title title={"Cadastro de Assinante"} text="" />
      <Dados />
      <form className='p-3' onSubmit={submitForm}>
        <div className='row form-group'>
          <div className='col'>
            <h2>Dados Pessoais:</h2>
            <br />
            <input className="form-control" required type="text" placeholder='Nome' name='nome' value={formValues.nome} onChange={handleInput} />
            <br />
            <input className="form-control" required type="number" placeholder='Telefone' name='telefone' value={formValues.telefone} onChange={handleInput} />
            <br />
            <input className="form-control" required type="text" placeholder='Endereço' name='endereco' value={formValues.endereco} onChange={handleInput} />
            <br />
            Plano Escolhido:
            <div className="d-flex justify-content-center planos">
              <button className='m-2 btn border border-dark ' type='button' onClick={clickFree} style={{ backgroundColor: free ? '#0D6EFD' : 'white' }}>FREE</button>
              <br />
              <button className='m-2 btn border border-dark ' type='button' onClick={clickPlus} style={{ backgroundColor: plus ? '#0D6EFD' : 'white' }}>PLUS</button>
            </div>
          </div>

          <div className='col'>
            <h2>Dados do Cartão:</h2>
            <br />
            <input className="form-control" required type="text" placeholder='Nome do cartão' name='dadoscartao' value={formValues.dadoscartao} onChange={handleInput} />
            <br />
            <input className="form-control" required type="number" maxLength="20" placeholder='Número do cartão' name='cardnum' value={formValues.cardnum} onChange={handleInput} />
            <br />
            <input className="form-control" required type="password" maxLength="3" pattern="[0-9]{3}" placeholder='CVC' name='cvc' value={formValues.cvc} onChange={handleInput} />
          </div>
        </div>
        <button type='submit' className='w-25 btn-primary' onClick={submitForm}>ASSINAR</button>
      </form>
    </div>

  )
}
import React from 'react';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import './Produto.css'

function Produtos() {
    const [data, setDate] = useState([])


    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [preco, SetPreco] = useState('R$ ')
    const [descricao, setDescricao] = useState('')
    const [link_imagem, setLink_imagem] = useState('')

    // Get Api
    React.useEffect(() => {
        Axios.get('https://crudserver2.herokuapp.com/pratos')
            .then(res => {
                console.log("Getting from ", res.data)
                setDate(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    // Post a new 'info' for api
    const postData = (e) => {
        e.preventDefault();
        Axios.post('https://crudserver2.herokuapp.com/pratos', {
            nome, setNome, tipo, setTipo, descricao, setDescricao, preco, SetPreco, link_imagem, setLink_imagem
        })
            .then(res => console.log('Posting data', res))
            .catch(err => console.log(err))
    }

    const postData2 = (e) => {
        e.preventDefault();
        Axios.post('https://crudserver2.herokuapp.com/bebidas', {
            nome, setNome, tipo, setTipo, descricao, setDescricao, preco, SetPreco, link_imagem, setLink_imagem
        })
            .then(res => console.log('Posting data', res))
            .catch(err => console.log(err))
    }

    const postData3 = (e) => {
        e.preventDefault();
        Axios.post('https://crudserver2.herokuapp.com/sobremesa', {
            nome, setNome, tipo, setTipo, descricao, setDescricao, preco, SetPreco, link_imagem, setLink_imagem
        })
            .then(res => console.log('Posting data', res))
            .catch(err => console.log(err))
    }

    //  Delete an id's api
    const postDelete = (id, e) => {
        e.preventDefault();
        Axios.delete(`https://crudserver2.herokuapp.com/pratos/${id} `)
            .then(res => console.log('Deleting data', res))
            .catch(err => console.log(err))
    }

    const postDelete2 = (id, e) => {
        e.preventDefault();
        Axios.delete(`https://crudserver2.herokuapp.com/bebidas/${id} `)
            .then(res => console.log('Deleting data', res))
            .catch(err => console.log(err))
    }

    const postDelete3 = (id, e) => {
        e.preventDefault();
        Axios.delete(`https://crudserver2.herokuapp.com/sobremesa/${id} `)
            .then(res => console.log('Deleting data', res))
            .catch(err => console.log(err))
    }

    // Patch what u want for the choosen api
    const postPatch = (id, e) => {
        e.preventDefault();
        Axios.patch(`https://crudserver2.herokuapp.com/pratos/${id}`, {
            nome, setNome, tipo, setTipo, descricao, setDescricao, preco, SetPreco, link_imagem, setLink_imagem
        })
            .then(res => console.log('Patching data', res))
            .catch(err => console.log(err))
    }

    // Patch what u want for the choosen api
    const postPatch2 = (id, e) => {
        e.preventDefault();
        Axios.patch(`https://crudserver2.herokuapp.com/bebidas/${id}`, {
            nome, setNome, tipo, setTipo, descricao, setDescricao, preco, SetPreco, link_imagem, setLink_imagem
        })
            .then(res => console.log('Patching data', res))
            .catch(err => console.log(err))
    }

    // Patch what u want for the choosen api
    const postPatch3 = (id, e) => {
        e.preventDefault();
        Axios.patch(`https://crudserver2.herokuapp.com/sobremesa/${id}`, {
            nome, setNome, tipo, setTipo, descricao, setDescricao, preco, SetPreco, link_imagem, setLink_imagem
        })
            .then(res => console.log('Patching data', res))
            .catch(err => console.log(err))
    }


    /* Função para RadioBtn consumir */
    function Pratos() {
        Axios.get('https://crudserver2.herokuapp.com/pratos')
            .then(res => {
                console.log("Getting from ", res.data)
                setDate(res.data)
            })
            .catch(err => console.log(err))
    }

    /* Função para RadioBtn consumir */
    function Bebidas() {
        Axios.get('https://crudserver2.herokuapp.com/bebidas')
            .then(res => {
                console.log("Getting from ", res.data)
                setDate(res.data)
            })
            .catch(err => console.log(err))
    }

    /* Função para RadioBtn consumir */
    function Sobremesa() {
        Axios.get('https://crudserver2.herokuapp.com/sobremesa')
            .then(res => {
                console.log("Getting from ", res.data)
                setDate(res.data)
            })
            .catch(err => console.log(err))
    }



    /* Product site style */
    const arr = data.map((data, index) => {
        return (
            <div className='grid-container'>
                {/* <td style={{ border: '1px solid black' }}>  {data.id}  </td> */} {/* Nao usado */}
                {/* <td style={{ border: '1px solid black' }}>  {data.nome}  </td> */}
                {/*  <td style={{ border: '1px solid black' }}>  {data.tipo}  </td> */} {/* Nao usado */}
                {/* <td style={{ border: '1px solid #235355' }}>  {data.preco}  </td> */}
                {/* <td style={{ border: '1px solid #235355' }}>  {data.descricao}  </td> */}
                {/* <img src={data.link_imagem} style={{ border: '1px solid #235355' }}></img> */}

                <h2></h2>

                <div className="card">
                    <div className='card_img'>
                        <img src={data.link_imagem} alt="Image Api" />
                    </div>
                    <h3> {data.nome} </h3>
                    <h4> {data.tipo} </h4>
                    <p className="price"> {data.preco} </p>
                    <p className='Descricao'> {data.descricao} </p>


                    <div className='buttons'>
                        <div className='flex'>
                            <button className="noselect" id="Pbtn" onClick={(e) => postDelete(data.id, e)}><span className="text">Food</span><span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                </svg>
                            </span>
                            </button>
                            <br />
                            <button className="noselect" id="Pbtn" onClick={(e) => postDelete2(data.id, e)}><span className="text">Drink</span><span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                </svg>
                            </span>
                            </button>
                            <br />

                        </div>

                        <div className='patchbttt'>
                            <button className="Patchbtn" onClick={(e) => postPatch(data.id, e)}>
                                Patch
                            </button >
                        </div>


                    </div>
                </div>

                {/* Delete BTN*/}



            </div >
        )
    })


    /* Input's para adicionar || atualizar dados */
    return (
        <div className="App">

            <h2 className='central'>Selecione o que você quer</h2>
            <div className='flex'>

                <input type="radio" id="Pratos" name="restaurant" onClick={Pratos} />
                <label htmlFor="Pratos">Pratos</label><br />

                <input type="radio" id="Bebidas" name="restaurant" onClick={Bebidas} />
                <label htmlFor="Bebidas">Bebidas</label><br />

                <input type="radio" id="Sobremesa" name="restaurant" onClick={Sobremesa} />
                <label htmlFor="Sobremesa"> Sobremesa </label><br />


            </div>



            {/* <label>Nome</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <hr />
                <label>Tipo</label>
                <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
                <hr />
                <label>Preço</label>
                <input type="text" value={preco} onChange={(e) => SetPreco(e.target.value)} />
                <hr />
                <label>Descrição</label>
                <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                <hr />
                <label>Link da Imagem</label>
                <input type="text" value={link_imagem} onChange={(e) => setLink_imagem(e.target.value)} />
                <hr /> */}


            {/* Nome das Tabelas dos dados do Site */}
            {/* <table style={{ border: '1px solid black' }}> */}
            {/* <tr>
                    <th style={{ border: '1px solid black' }}>Id</th>
                    <th style={{ border: '1px solid black' }}>Nome</th>
                    <th style={{ border: '1px solid black' }}>Tipo</th>
                    <th style={{ border: '1px solid black' }}>Preço</th>
                    <th style={{ border: '1px solid black' }}>Descrição</th>
                </tr> */}
            {arr}
            {/* </table> */}
            <div className="form">
                <div className="title">Bem-vindo</div>
                <div className="subtitle">Vamos adicionar um novo prato!</div>
                <div className="input-container ic1">
                    <div className="cut"></div>
                    <label htmlFor="firstname" className="placeholder1">Nome</label>
                    <input id="firstname" className="input" type="text" placeholder=" " value={nome} onChange={(e) => setNome(e.target.value)} />

                    <div className="cut"></div>
                    <label htmlFor="Tipo" className="placeholder2">Tipo</label>
                    <input id="Tipo" className="input" type="text" placeholder=" " value={tipo} onChange={(e) => setTipo(e.target.value)} />

                    <div className="cut"></div>
                    <label htmlFor="Preco" className="placeholder3">Preço</label>
                    <input id="Preco" className="input" type="text" placeholder=" " value={preco} onChange={(e) => SetPreco(e.target.value)} />

                    <div className="cut"></div>
                    <label htmlFor="Descricao" className="placeholder4">Descrição</label>
                    <input id="Descricao" className="input" type="text" placeholder=" " value={descricao} onChange={(e) => setDescricao(e.target.value)} />

                    <div className="cut"></div>
                    <label htmlFor="LinkImage" className="placeholder5">Link da Imagem</label>
                    <input id="LinkImage" className="input" type="text" placeholder=" " value={link_imagem} onChange={(e) => setLink_imagem(e.target.value)} />


                </div>
            </div>
            <div className='centralbtn'>
                {/* Post button Food */}
                <button onClick={postData} className="PostBtn">
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Food</span>
                </button>

                {/* Post button Drink */}
                <button onClick={postData2} className="PostBtn">
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Drink</span>
                </button>

                {/* Post button Dessert */}
                <button onClick={postData3} className="PostBtn">
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Dessert</span>
                </button>
            </div>

        </div>
    );
}

export default Produtos;
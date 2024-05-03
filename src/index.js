import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express()

app.use(cors())

app.use(express.json())

let users = []
let idUser = 1
let messages = []
let idMensagen = 1

app.post('/', (req,res)=>{

    res.status(200).send(JSON.stringify({Mensagem : "Bem vindo à aplicação"}))

})

app.post('/signup',async (req,res)=>{
    const data = req.body;
    const name = data.nome;
    const email = data.email;
    const password = data.senha;

    if(!name){
        res.status(400).send(JSON.stringify({Mensagem:'Por favor, verifique se passou o nome'}))
        return
    }

    if(!email){
        res.status(400).send(JSON.stringify({Mensagem:'Por favor, verifique se passou o email'}))
        return
    }

    if(!password){
        res.status(400).send(JSON.stringify({Mensagem:'Por favor, verifique se passou a senha'}))
        return
    }

    const validatingEmail = users.find((validEmail)=> validEmail.email === email)

    if(validatingEmail){
        res.status(400).send(JSON.stringify({Mensagem : "Email já cadastrado, insira outro"}))
        return
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    let newUser ={
        id : idUser,
        name : name,
        email : email,
        password : encryptedPassword
    }

    users.push(newUser)
    idUser++

    res.status(201).send(JSON.stringify({Mensagem:`Seja bem vindo ${name} ! Pessoa usuária registrada com sucesso!`}))

})

app.get('/login', async(req,res) =>{
    const data = req.body
    const email = data.email
    const password = data.senha;

    if(!email){
        res.status(400).send(JSON.stringify({Mensagem : "Insira um e-mail válido"}))
        return
    }
    if(!password){
        res.status(400).send(JSON.stringify({Mensagem : "Insira uma senha válida"}))
        return
    }

    const validatingEmail = users.find((search) => search.email === email)

    if(!validatingEmail){
        res.status(400).send(JSON.stringify({Mensagem:'Email não encontrado no sistema, verifique ou crie uma conta'}))
        return
    }

    const validatingPassword = await bcrypt.compare(password, validatingEmail.password)


    if(!validatingPassword){
        res.status(400).send(JSON.stringify({Mensagem:'Senha incorreta'}))
        return
    }

    res.status(201).send(JSON.stringify({Mensagem:`Seja bem vindo ${validatingEmail.name} ! Pessoa usuária logada com sucesso!`}))

})

app.post('/:validatingemail/message', (req,res)=>{
    const validatingemail = req.params.validatingemail

    if(!validatingemail){
        res.status(400).send(JSON.stringify({Mensagem : "Informa um email válido"}))
        return
    }

    const existEmail = users.find(emaill=> emaill.email === validatingemail)

    if(!existEmail){
        res.status(400).send(JSON.stringify({Mensagem : "Email não cadastrado"}))
        return

    }

    const data = req.body;
    const title = data.titulo;
    const description = data.descricao;

    if(!title){
        res.status(400).send(JSON.stringify({Mensagem : "Titulo da mensagem não informada"}))
        return
    }
    if(!description){
        res.status(400).send(JSON.stringify({Mensagem : "Descrição da mensagem não informada"}))
        return
    }

    let newMessage = {
        id : idMensagen,
        title : title,
        description : description,
        email: validatingemail
    }

    messages.push(newMessage)
    idMensagen++

    res.status(201).send(JSON.stringify({Mensgem:"Mensagem criada com sucesso!",
    titulo: newMessage.title,
    descricao: newMessage.description }))

})

app.get('/message/:validatingemail', (req,res)=>{
    const validatingemail = req.params.validatingemail

    const existEmail = users.find(emaill=> emaill.email === validatingemail)

    if(!existEmail){
        res.status(400).send(JSON.stringify({Mensagem : "Email não encontrado, verifique ou crie uma conta"}))
        return
    }

    const existMessage = messages.find(emaill=> emaill.email === validatingemail)

    if(!existMessage){
        res.status(400).send(JSON.stringify({Mensagem : "Não existe mensagem com esse email!"}))
        return
    }

    const existMessage2 = messages.filter(message => message.email === validatingemail)

    const messagens = existMessage2.map((message)=> `ID: ${message.id} | Título: ${message.title} | Descrição: ${message.description}`)

    res.status(201).send(JSON.stringify({Mensgem:"Seja bem vindo!",
    data : messagens}))
})

app.put('/message/:id', (req,res)=>{
    const validID = Number(req.params.id);

    if(!validID){
        res.status(400).send(JSON.stringify({Mensagem : "Por favor informe um ID"}))
        return
    }

    const existID = messages.findIndex(locating=> locating.id === validID);

    if(existID === -1){
        res.status(400).send(JSON.stringify({Mensagem : "Por favor, informe um id válido da mensagem"}))
        return
    }

    const data = req.body;

    const newTitle = data.title;
    const newDescription = data.descricao;

    if(!newTitle){
        res.status(400).send(JSON.stringify({Mensagem : "Título inválido"}))
        return
    }

    if(!newDescription){
        res.status(400).send(JSON.stringify({Mensagem : "Descrição inválida"}))
        return
    }

    if(existID != -1){
        const mensagem = messages[existID];
        mensagem.title = newTitle;
        mensagem.description = newDescription;
    }

    res.status(200).send(JSON.stringify({
        Mensagem : "Atualização feita com sucesso!",
        titulo : newTitle,
        descricao : newDescription
    }))
})

app.delete('/message/:id', (req,res)=>{
    const validID = Number(req.params.id);

    if(!validID){
        res.status(400).send(JSON.stringify({Mensagem : "Por favor informe um ID"}))
        return
    }

    const existID = messages.findIndex(locating=> locating.id === validID);

    if(existID === -1){
        res.status(400).send(JSON.stringify({Mensagem : "Mensagem não encontrada, verifique o identificador em nosso banco"}))
        return
    }

    else{
        messages.splice(existID, 1)
    }
    res.status(200).json({
        Mensagem : "Mensagem apagada com sucesso",
    })
})

app.listen(3333,()=> console.log('Servidor rodando na porta 3333'))
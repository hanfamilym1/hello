module.exports={
    register: (req,res)=>{
        const db = req.app.get('db')
        let { username, password} = req.body
        console.log(req.body)
        db.insert_user(username,password).then(user=>
        res.status(200).send(user)).then(
        db.get_users(username).then(user=>
            res.status(200).send(user)))
        }
    
    
}
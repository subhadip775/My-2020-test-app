const {admin, firebase} = require ("../config/config")

exports.signup = (req,res) =>{
 
  var object = {
    fname:req.body.fname,
    lname:req.body.lname,
    user:req.body.user,
    seq:req.body.seq,
    cseq:req.body.cseq,
  }
  console.log(object)
  firebase.auth().createUserWithEmailAndPassword(object.user, object.seq)
  
  
  
  
  .then((response)=>{
    return res.json({response})
  })
  .catch((error)=>{
    return res.json({error})
  })
  
  
}


exports.login = (req,res) =>{
  
  var object2 = {
    email:req.body.email,
    seq:req.body.seq,
  }
  console.log(object2)
  firebase.auth()
  .signInWithEmailAndPassword(object2.email, object2.seq)

.then((response)=>{
  console.log(response.user.uid)
  response.user.getIdToken()
  .then((token)=>{
    return res.json({token})
  })
})  
  
.catch((error)=>{
  return res.json({error})
})  
  
}



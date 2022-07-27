import app from './src/app.js'



app.listen(process.env.PORT || 3000, function(){
  console.log("Servidor escutando em http://localhost:$",this.address().port, app.settings.env)
})
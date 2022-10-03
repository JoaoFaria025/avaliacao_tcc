import app from './src/app.js'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


app.listen(process.env.PORT || 3000, function(){
  console.log("Servidor escutando em http://localhost:$",this.address().port, app.settings.env)
})
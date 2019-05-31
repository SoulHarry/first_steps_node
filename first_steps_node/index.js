const fs = require('fs');

fs.writeFile('/texto.txt','la primera linea con fs write',function(err){
    if(err){
        console.log(err);
        
    }else{
        console.log("archivo creado");
    }
    
});

console.log("ultima linea");
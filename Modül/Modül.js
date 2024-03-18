const fs = require('fs');

fs.writeFile("deneme.txt","Hello World", function(error){
if (error) {
    console.log(error);
}
else {
    console.log("dosya oluştruldu");
}
})


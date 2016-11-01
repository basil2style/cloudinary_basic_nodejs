
var cloudinary = require('cloudinary')

cloudinary.config({ 
  cloud_name: 'cloud_name', 
  api_key: 'api_key', 
  api_secret: 'api_secret' 
});

cloudinary.uploader.upload("https://hanselandpetal.files.wordpress.com/2010/09/dahlia-02.jpg", function(result) { 
  console.log(result) 
});
const multer = require ('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../democloud/public/uploads'); 
    },
    filename: (req, file, cb) => {
      const suffix = Date.now();
      cb(null, suffix + '-' + file.originalname); },
  });
  
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 10 * 1024 * 1024,  
     
    }
  }); 
  
  module.exports = upload;
  
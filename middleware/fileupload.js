const multer = require('multer');


let storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'./uploads');
    },

    filename:(req,file,cd) =>{
        const uniqueName = Date.now() +'-'+ file.originalname;
        cd(null,uniqueName);
    }
});

const upload = multer({storage});

module.exports = upload;
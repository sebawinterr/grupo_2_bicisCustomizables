const path = require('path');

module.exports = {
    index : function(req, res){
        res.sendFile(path.resolve(__dirname, '..','views','usuarios','register.html'));
        
    }
    
}
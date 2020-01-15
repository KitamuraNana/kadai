const http = require('http');

const server = http.createServer((req,res) =>  {
            
            const num = Math.random() 
            if(num < 0.5) {
                res.write('yay:D')
            } else if (num < 0.7) {
                alert('yaaay;D')
            } else if (num < 0.9) {
                alert('yaaaaaay!!!XD')
            } else {
                alert('X(')
            }
    res.setHeader('Access-Control')
    res.write('result');
    res.end();
    });
server.listen(4000);
console.log('Listening port 4000...');
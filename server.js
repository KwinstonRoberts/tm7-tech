const express = require('express'); 
const app = express();

app.set('view engine', 'ejs');

app.use('/css',express.static('public/css'));
app.use('/images',express.static('public/images'));
app.use('/js',express.static('public/js'));
app.use('/fonts',express.static('public/fonts'));


const data = {
    data:{
        navLinks: 
            [
                {name:'Home', href:'top'},
                {name:'Services',href:'services'},
                // {name:'Works',href:'works'},
                {name:'Team',href:'team'},
                {name:'Contact',href:'contact'}
            ],
        
        team:[
            {
                name:'',
                title:'',
                symbol:'code',
                image:'1',
                bio:`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Exercitationem illum officia libero maiores omnis. 
                 Iste dicta quaerat perspiciatis mollitia enim dignissimos eligendi aliquid,
                  porro cupiditate fugit asperiores expedita atque. Atque.
                `,
                social:
                [
                    {
                        name:'linkedin', 
                        href:'https://www.linkedin.com/in/kyle-roberts-6a67818a/'
                    } 
                ]
            }
        ],
        social: [
            {name:'linkedin', href:'https://www.linkedin.com/company/tm7-tech/'}
        ],
        tools:[
            {name:'angular',href:'angular.io'},
            // {name:'java', href: 'java.com'}
        ]
    }
}


app.get('/', function(req, res){ 
    res.render('index', data);
});

app.listen(process.env.PORT || 8080, () => console.log('Example app listening on port 8080!'))
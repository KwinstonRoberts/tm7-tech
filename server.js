const express = require('express'); 
const app = express();
const ejsLint = require('ejs-lint');

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
                name:'Kyle Roberts',
                title:'UI Developer',
                symbol:'code',
                image:'kyle',
                bio:`A graduate of lighthouse labs, Kyle is a front-end development enthusiast. Off hours, 
                    you can find him soldering together electronic curcuits, or with his programmer
                    friends at Tango Palace Coffee Shop.`,
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
            // {name:'angular',href:'angular.io'},
            // {name:'java', href: 'java.com'}
        ]
    }
}

console.log(ejsLint.lint('index', data));


app.get('/', function(req, res){ 
    res.render('index', data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
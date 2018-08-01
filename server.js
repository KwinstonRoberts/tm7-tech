const express = require('express'); 
const app = express();

app.set('view engine', 'ejs');
app.use('/css',express.static('public/css'));
app.use('/images',express.static('public/images'));
app.use('/js',express.static('public/js'));
app.use('/fonts',express.static('public/fonts'));
app.use('/node_modules',express.static('node_modules'));


const data = {
    data:{
        slides:[
            {white:false,image_id:1,header_s:'We\'re TM7',symbol:'',text:'A modern team with big dreams',header_e:''},
            {white:true,image_id:2,header_s:'We',symbol:'heart',text:'FinTech, InsurTech, RegTech',header_e:'Agile'},
            {white:true,image_id:3,header_s:'We',symbol:'heart',text:'Web, Bots, AI, Blockchain',header_e:'Agile'}
       
        ],
        navLinks: 
            [
                {name:'Home', href:'home'},
                {name:'Services',href:'services'},
                {name:'Team',href:'team'},
                {name:'Contact',href:'contact'}
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

app.get('/loaderio-5ac7d3d82c95ec35c31720804f81267d', function(req, res){ 
    res.sendFile('loaderio-5ac7d3d82c95ec35c31720804f81267d.txt',{root: __dirname});
});

app.listen(process.env.PORT || 8080, () => console.log('Tm7 app listening on port:' + (process.env.PORT || 8080)));
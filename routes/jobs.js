const express = require('express');
const router  = express.Router();
const Job     = require ('../models/Job');

//Homepage
router.get('/main', (req, res)=>{

    let search = req.query.job;
    let query  = '%'+search+'%'

    if (!search){
        Job.findAll({order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs,
                layout: 'dashboard'
            });
        })
        .catch(err => console.log(err));
    } else{
        Job.findAll({
            where: {title: {[Op.like]:query}},
            
            order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs, search
            });
        })
        .catch(err => console.log(err));
    }
    
});

//Adicionar nova Vaga
router.get('/add', (req, res) =>{
    res.render("add", {layout: 'dashboard'});
});

//Detalhe da vaga 
router.get('/view/:id', (req, res) => Job.findOne({
    where: {id: req.params.id}
}).then(job => {
    res.render('view', {
        job,
        layout: 'dashboard'
    });
}).catch(err => console.log(err)));

// add job via post
router.post('/add', (req, res)=>{
    let {title, salary, company, email, new_job, description} = req.body;

    //insert
    Job.create({
        title,
        salary,
        company,
        email,
        new_job,
        description,
    })
    .then(() => res.redirect('/main'))
    .catch(err=> console.log(err));
});

module.exports = router
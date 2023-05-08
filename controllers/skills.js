
const Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    })
} 

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title:'Skill Details'
    })
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' })
}

function create(req, res) {
    console.log(req.body)
    // Models are responsible for CRUD'ing the data
    Skill.create(req.body)
    // Always do a redirect when data has been changed
    res.redirect('/skills')
}    

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

module.exports = {
    index,
    show,
    newSkill,
    create,
    deleteSkill
}


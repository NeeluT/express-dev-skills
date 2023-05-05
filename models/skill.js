
const skills =[
    {id: 10, skill: 'python', expert: true},
    {id: 20, skill: 'java', expert: false},
    {id: 30, skill: 'node', expert: true},
]

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

module.exports = {
    getAll,
    getOne
}
const chalk = require('chalk')
const Yargs = require('yargs')
const Notes = require('./NotesLogic.js')



Yargs.command({

    command :'add',
    describe:'adding new note',
    builder:{
        title:{

            describe:' Note title',
            demandOption: true,
            type:'string'

        

        },
        body:{
            describe:'Note Body',
            demandOption: true,
            type:'string'



        }


    },

    
    handler:(argv)=>{
      
        Notes.addNote(argv.title,argv.body)

      }
    
    
})

Yargs.command({

    command :'remove',
    describe: 'removing note',
    builder:{
        title:{

            describe:' Note title',
            demandOption: true,
            type:'string'

        

        },
        body:{
            describe:'Note Body',
            demandOption: false,
            type:'string'



        }


    },

    
    handler : (argv)=>{
      
        Notes.removeNote(argv.title)

      }
    
    
})
Yargs.command({

    command:'read',
    describe:'Reading new note',
    builder:{
        title:{

            describe:' Note title',
            demandOption: true,
            type:'string'

        

        }
    


    },
    handler :(argv)=>{
        Notes.readNotes(argv.title)
      }
})

Yargs.command({

    command :'list',
    describe:'Listing new note',
    
    handler : ()=>{
        Notes.listNotes()
      }
})

//console.log(Yargs.argv)
 Yargs.parse()
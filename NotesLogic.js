
const fs = require('fs')
const chalk = require('chalk')

const getNotes =  () => console.log("yourNotes...")
   



//this function aims to add the given data into the notepad
const AddNotes = (title,body)=>{
    const LoadedNotes=LoadNotes()
     
    const NoteDuplicationChecker = LoadedNotes.filter((note)=> note.title===title)
        
      
    


    if(NoteDuplicationChecker.length===0)
    {
        LoadedNotes.push({

            title:title,
            body:body
        })


        console.log(chalk.green.inverse('adding a new note'))
        WriteNotes(LoadedNotes)

 
    }else{
        console.log(chalk.red.inverse('the note already existed'))
    }
    
}
//this functions aims to write the given data into the notepad
const WriteNotes = (LoadedNotes)=>
{
    
    const DataJson=JSON.stringify(LoadedNotes)
    fs.writeFileSync("NotesText.json",DataJson)
    console.log(chalk.green.inverse('NotePad Updated'))
       
}

//this function aims to read notes from json file & parse it 
const LoadNotes =  () =>{
    try {
        const RawDataBuffer= fs.readFileSync('NotesText.json')
        const StringConvertedData = RawDataBuffer.toString()
        const JsonData= JSON.parse(StringConvertedData)
        return JsonData
        
    } catch (error) {
        return []
    }
    
}






 
// this function aims to remove the given note from the notepad
const removeNote=(title)=>{

    const LoadedNotes=LoadNotes()
     
    const NoteExistingChecker = LoadedNotes.filter((note)=> note.title!==title)
    //calling writing function to update the notepad
    WriteNotes(NoteExistingChecker)
    console.log(chalk.green.inverse("Removing Note"))
}




const readNotes =(title)=>{

    const LoadedNotes=LoadNotes()
    
    const TitleMatch = LoadedNotes.find((TitleMatch)=> TitleMatch.title===title)

 

    if(TitleMatch)
    {
         console.log(chalk.green.inverse(TitleMatch.title))
         console.log((TitleMatch.body))
    }else{
        console.log(chalk.red.inverse("Note Not Found!"))
    }
}







const listNotes = () =>{
    
    const LoadedNotes=LoadNotes()
    console.log(chalk.inverse('Your Notes ...'))

    LoadedNotes.forEach(note => {
        console.log(note.title)
        
    });
}





//exporting the functions globaly to be able to access it 
module.exports = {
    getNotes:getNotes,
    addNote:AddNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes

}





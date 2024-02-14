document.addEventListener('DOMContentLoaded', () => {
    const $newEntriesContainer = document.querySelector('#newEntryContainer')
    const $pastEntriesContainer = document.querySelector('#pastEntriesContainer')

    $pastEntriesContainer.addEventListener('click', ()=> {
        console.log('hi')
    })


    const deleteEntry = async(e) => {

        if(e.target.id === 'deleteBtn'){ 

            $newEntriesContainer.removeChild($entryContainer)
            $newEntriesContainer.removeChild($deleteBtn)
            $newEntriesContainer.removeChild($editBtn)
          
           data.pop()
           renderNewestEntry()
           renderPastEntries()
           console.log(data)   
        }
      
    }
    const deletePastEntry = (e) => {
        
         if(e.target.id.includes('deleteBtn')){
            
             for(let i = 0; i< data.length-1; i++){
               
                 const btnId = parseInt(e.target.id.split('deleteBtn-')[1])
                 console.log(btnId, data[i].id)
                 if(btnId === data[i].id){
     
                     //console.log(parseFloat(data[i].id))
                     data= data.filter((el) => el.id !== btnId)
                     renderPastEntries()
                 }
             }
             console.log(data)
         }
     }
    deleteBtn.addEventListener('click',deleteEntry)

    $pastEntriesContainer.addEventListener('click', deletePastEntry)
    
})
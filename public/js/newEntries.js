// a list of past entries
// newest entry prominent
// click listener for each past entry item
//click lister for each new entry
// new entry button
// render past entries
// dummy data

const { response } = require("express")

const $newEntryTitleInput = document.querySelector('#newEntryTitle')
const $newEntryTextArea = document.querySelector('#newEntry')

const $newHabitCheckboxes = document.querySelectorAll('input[name="habitToBeTracked"]:checked')
const $newEntrySubmitButton = document.querySelector('#newEntrySubmitButton')

const $newMoodSelect = document.querySelector('#moodSelect')





const submitNewEntry = async(e) => {
    e.preventDefault()

    async function getHabits (){
        const habits = await fetch('/api/habits')
        console.log(habits)
    }
    async function updateHabit (id){
       
        const options = {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };
          const updatedHabit = await fetch(`/api/habits/${id}`, options)
    }
    const newSubmittedEntry = {
        title: $newEntryTitleInput.value,
        description: $newEntryTextArea.value,
        mood: $newMoodSelect.value
    }
    
    const url = '/api/entry/newEntry';
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSubmittedEntry) 
    }
    console.log(newSubmittedEntry)
    try {
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
         window.location.href = '/';
        return responseData;
    } catch (err) {
        console.error(err);
       return response.status(500).send(err)
    }
}



    

 

$newEntrySubmitButton.addEventListener('click', submitNewEntry)



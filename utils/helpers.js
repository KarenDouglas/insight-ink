module.exports = {
    renderLastEntry: function(entries) {
        let latestEntry = entries[entries.length - 1];
        function renderHabits(lastestHabits) {
                if(lastestHabits){
                let li = ``;
                for (let i = 0; i < lastestHabits.length; i++) {
                    li += `<li>${lastestHabits[i]}</li>`;
                }
                return li;
            }else{
               console.log('no habits')
            }
            
        }
            
        const habitList = renderHabits(latestEntry.habits);
        return `
        <section>
            <h2><strong>${latestEntry.title}</stong></h2>

            <p><strong>Mood:</strong> ${latestEntry.mood}</p>
            <p> <strong>Habits:</strong></p>
            <ul>${habitList}</ul>
            <p>${latestEntry.description}</p>
        </section>
        `;
    }
};

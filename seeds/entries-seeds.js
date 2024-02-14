 const  Entry = require('../models/Entry')

const entries = [
  {   
    id: 1,
    title: 'Big Hiking Day!',
    mood: 'excited', 
    description: "Today, I went to the mountain with Lynn. I haven't gone hiking in a minute so it was so difficult. It was a 4 mile hike round trip with a 3500 ft elevation gain. So it was pure suffering (mostly fun). Cardio is definitely not my best friend!!! Along the way, we saw some cool animals like, I saw a ton of chipmunks. So many people must come here everyday because they're crazy big for chipmunks. We also saw a mountain goat at the peak when we finally got up there, but I was so amazed to see it so close in the wild. Lynn and I were definitely contemplating climbing the tree and hiding away from the horns if we got too close and aggrevated it! Overall was an amazing day! My body is definitely going to feel it in the morning, but I'm so happy to have went."
},
{
    id: 2,
    title: 'Prepare to Organize!',
    mood: 'calm', 
    description: 'It was a super productive day! Deep cleaning and '
},
{
    id: 3,
    title: 'a whole new world',
    mood: 'angry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi. Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint? Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaecati aspernatur expedita asperiores deserunt. Nemo quibusdam dolore neque exercitationem! Qui doloribus tempora rerum ad aliquid deserunt consequuntur nam, ipsam dolor sapiente excepturi eligendi sed pariatur sit quibusdam amet iste animi natus impedit veniam temporibus autem atque! Aspernatur, ut ipsum.'
},
{
    id: 4,
    title: 'everybody wants to be a cat',
    mood: 'angry',  
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi. Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint? Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaec'
},
{
    id: 5,
    title: 'wassup',
    mood: 'angry',
    habits: [
        'drink water',
        'go for a walk',
        'journal',
        'call parents'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi. Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint? Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaec'
},
{
    id: 6,
    title: 'hello',
    mood: 'angry',   
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aliquam omnis porro, ad tempore earum deserunt eligendi voluptatem architecto alias sint sunt placeat et, ipsa debitis vitae veniam, repudiandae commodi. Repellendus blanditiis eveniet, dicta sequi facilis minima saepe libero fugiat! Error, cupiditate? Impedit atque eveniet labore expedita eos illum fugit fuga consequuntur nisi, est culpa quos, ex delectus repudiandae sint? Voluptatum cumque corporis hic cupiditate, excepturi, nulla perferendis ab doloribus officia error vitae fuga dolorum deleniti quaerat maiores optio velit obcaec'
}
   
  ];
  const seedEntries = () => Entry.bulkCreate(entries);
  module.exports =  seedEntries ;
let animals = document.querySelectorAll(".animal")
let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "Vote for Doggo"
animals[0].append(dogVoteBtn)
let catVoteBtn = document.createElement("button")
catVoteBtn.textContent = "Vote for Catto"
animals[1].append(catVoteBtn)
let fishVoteBtn = document.createElement("button")
fishVoteBtn.textContent = "Vote for Fishy"
animals[2].append(fishVoteBtn)

let dogVotesCell = document.querySelector('#doggo-votes')
dogVoteBtn.addEventListener('click', function(e){
    let dogVotesCount = parseInt(dogVotesCell.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;
    localStorage.setItem('dog-votes',dogVotesCount);
    let dogVotes = localStorage.getItem('dog-votes')
    if (dogVotes){
        dogVotesCell.textContent = dogVotes;
    }
    
});

let catVotesCell = document.querySelector('#catto-votes')
catVoteBtn.addEventListener('click', function(e){
    let catVotesCount = parseInt(catVotesCell.textContent);
    catVotesCount = catVotesCount +1;
    catVotesCell.textContent = catVotesCount;
    localStorage.setItem('cat-votes', catVotesCount);
});

let fishVotesCell = document.querySelector('#fish-votes')
fishVoteBtn.addEventListener('click', function(e){
    let fishVotesCount = parseInt(fishVotesCell.textContent);
    fishVotesCount = fishVotesCount +1;
    fishVotesCell.textContent = fishVotesCount;
    localStorage.setItem('fish-votes', fishVotesCount);
});

// use this code for cleaner code, basing things on id name
// select pet div
let dogDiv = document.querySelector("#doggo")
// select pet table rows
let dogTbRow = document.querySelector("#doggo-votes");
//per counters
let doggoVotes = localStorage.getItem("dog-votes");
if (doggoVotes) {
    dogVoteCounter = parseInt(doggoVotes);
}
let dogVoteCounter = 0

let dogBtn = document.createElement("button")
dogBtn.textContent= "Vote for Doggo";
dogDiv.append(dogBtn)

// write javascrip that increases count of the vote, add eventlistener, need to access local storeage when you load page to retrivee number of votes
//need to get local storage.getItem retrieve by dog-votes
dogBtn.addEventListener("click", function(){
    dogVoteCounter = dogVoteCounter +1;
    dogTbRow.textContent = dogVoteCounter;
    localStorage.setItem("dog-votes", dogVoteCounter);

}






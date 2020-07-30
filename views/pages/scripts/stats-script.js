const attempts = document.querySelector("#attempts")
const average = document.querySelector("#average")
const high = document.querySelector("#high")
const low = document.querySelector("#low")
const userName = document.querySelector("h1");

var stats;
var user;

$(document).ready(() => {
    let ajaxReq; 
    ajaxReq = $.ajax({
        url: "/getStats", 
        type: 'GET',
        datatype: "json",
        data: "" 
    });

    ajaxReq.done(function (data) {
     
        if (data) {
            console.log(data)
            user = data;
            stats = data.stats;
            //sets user name in the jumbotron
            userName.textContent = data.firstName + " " + data.lastName;
            //adjust on page stats
            attempts.textContent = stats.length;

            //average
            
            //add up all the scores
            let totalScore = 0;
            //set up array of all scores
            let scoreArr = []
            for (let s = 0; s < stats.length; s++) {
                totalScore += stats[s].score;
                scoreArr.push(stats[s].score);
            }
                //divide by stats.length
            let averageScore = totalScore / stats.length;
                
            average.textContent = averageScore;
            //high
            let highScore = Math.max(...scoreArr);

            high.textContent = highScore;
            //low
            let lowScore = Math.min(...scoreArr);

            low.textContent = lowScore;
        }
    });
})
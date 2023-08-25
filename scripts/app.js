import { Team } from "./Team.js"

document.addEventListener("DOMContentLoaded", () => {
    const teamSubmitButton = document.getElementById("teamSubmitButton")
    teamSubmitButton.addEventListener( "click",switchVisible1);

    const scoreStart = document.getElementById("scoreStart")
    scoreStart.addEventListener("click",switchVisible2)

    const back = document.getElementById("back")
    back.addEventListener("click",getBack)

})


const switchVisible1 = () => {

    document.getElementById('teamsJoin').style.display = 'none';
    document.getElementById('teamSubmitButton').style.display = 'none'
    document.getElementById('toss').style.display = 'block';
    document.getElementById('scoreStart').style.display = 'block'
    document.getElementById("back").style.display = 'block'
    }
const switchVisible2 = () => {

    document.getElementById('toss').style.display = 'none'
    document.getElementById('scoreStart').style.display = 'none'
    // document.getElementById('scoreCard').style.display = 'block'
    document.getElementById('scoreCard').style.display = 'flex'
    document.getElementById('scoreCard').style.flex = '1'
    document.getElementById('scoreCard').style.flexDirection = 'column' 
}

const getBack = () => {


    if(document.getElementById('toss').style.display === 'block'){
        
        document.getElementById('toss').style.display = 'none'
        document.getElementById('teamsJoin').style.display = 'block'
        document.getElementById('teamSubmitButton').style.display = 'block'
        document.getElementById('scoreStart').style.display = 'none'
        document.getElementById('back').style.display = 'none'

    }

    if(document.getElementById('scoreCard').style.display === 'flex'){
        
        document.getElementById('scoreCard').style.display = 'block'
        document.getElementById('scoreCard').style.display = 'none'
        document.getElementById('toss').style.display = 'block'
        document.getElementById('scoreStart').style.display = 'block'
    }

}


     const teamWithFlags = 
     { "IND" : "https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop",
       "PAK" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgLImDMKROm3Y9QPRr9dGvnKT6poNht_oeg&usqp=CAU",
       "ENG" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ610hZUfGtF_7RyEsl5LpRG2h5Jb4zuZ_QNw&usqp=CAU",
       "AUS" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAKQpXvEL6cZVYYc112lvpzufu80KoAic9A&usqp=CAU",
       "NZ" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwmPxvYthY6ocDt99Va9PZhylAWbnvuS_vQ&usqp=CAU",
       "SA" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQXGRv01JX1qrJ28Jx7cC1ir7nAPOn8617w&usqp=CAU",
       "WI" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYS0J5SPf9PnC4PDkxWV7NRtLlcpIQxyGAA&usqp=CAU",
       "SL" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4e5bW9beZF0YGRBFtZOxr3O7ibS_DQJGHQ&usqp=CAU",
       "AFG" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmK3AL2IU37s8vwAT0UtuIIALkVaY1PMvuiw&usqp=CAU",
       "BNG" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXr7g9rMaQgnhUpRz0DnLtJgOz4KHZvVmVw&usqp=CAU",
    }
    


var total_overs = 5
var runs = 0
var wickets = 0
var overs = 0
var balls = 0
var actionButtons = []
var inning1Runs = 0
var inning1Wickets = 0
var team1name = ""
var team2name = ""
var innings = 1;


document.addEventListener("DOMContentLoaded",() => {

    let teamSubmitButton=document.getElementById("teamSubmitButton")
   
    const teams=[]
    const registerTeam = (e) => { 
        e.preventDefault();
        
        var nameone= document.getElementById("nameone").value
        var nametwo= document.getElementById("nametwo").value
        var totalOvers = document.getElementById("totalOvers").value

        totalOvers = Number(totalOvers)

        let team=null;
        team = new Team(nameone,nametwo,totalOvers)
        teams.push(team)
        console.log(teams)
        
        total_overs = totalOvers;
        team1name = nameone;
        team2name = nametwo;
    
        
        const firstTeam = document.getElementById("firstTeam")
        const secondTeam = document.getElementById("secondTeam")
        const team1 = document.getElementById("team1")
        const team2 = document.getElementById("team2")

        firstTeam.innerHTML = ` ` + team1name + ` `;
        secondTeam.innerHTML = ' ' + team2name + ` `;

        team1.innerHTML = ` <img src=` + teamWithFlags[team1name] + ` id="innerimg1" alt="team1Logo" />`
        team2.innerHTML = ` <img src=` + teamWithFlags[team2name] + ` id="innerimg2" alt="team2Logo" />`

        const tossWinner = document.getElementById("tossWinner")
        tossWinner.innerHTML =`
        <option disabled selected >--select--</option>
        <option value="` + team1name + ` "> ` + team1name + ` </option>
        <option value="` + team2name + ` "> ` + team2name + ` </option>`
    }



    teamSubmitButton.addEventListener("click", registerTeam)

    var tossWinningTeam = ""
    var tossLosingTeam = ""
    var choseTo = ""

    const scoreStart = document.getElementById("scoreStart")
    const storeToss = () => {

        console.log(team1name)
        console.log(team2name)
        // console.log(nameone)

        choseTo = document.getElementById("choseTo").value
        tossWinningTeam = document.getElementById("tossWinner").value
        console.log(choseTo);
        console.log(tossWinningTeam);


        if(tossWinningTeam.trim() === team1name){
        tossLosingTeam = team2name;
        }
        else if(tossWinningTeam.trim() === team2name) {
        tossLosingTeam = team1name;
        }

        
        console.log(tossLosingTeam)
    

        const battingTeam = document.getElementById("battingTeam")
        if(choseTo === "bat"){
            battingTeam.innerHTML = ` ` + tossWinningTeam + ` `;
            }
        else{
            battingTeam.innerHTML = ` ` + tossLosingTeam + ` `;
        }
    }

    scoreStart.addEventListener("click",storeToss)


    const divScore = document.getElementById("score")
    const divOvers = document.getElementById("over")
    const match = document.getElementById("match")
    const matchData = document.getElementById("matchData")

    

    const updateOverIncrease = () => {
        if(balls < 5)
        {balls++ ;}
        else
        {
            overs++ ;
            balls = 0 ;
        }

        if((overs === total_overs && inning1Runs === 0) || (wickets === 10 && inning1Runs === 0) )
        {
           

            console.log(inning1Runs);
            console.log(inning1Wickets);
            
                startNewInning();

        }
        if((runs > inning1Runs && inning1Runs !== 0) || (wickets === 10 && inning1Runs !== 0) || (overs === total_overs && inning1Runs !== 0) ){
            console.log(runs)
            console.log(wickets)
            console.log("chase successfull")
            declareInnings();
        }
        

        divOvers.innerHTML = overs + `.` + balls ;
    }

    const buttonOne = document.getElementById("one") 
    const updateOne =  () => {
        if(overs < total_overs && wickets < 10 && (inning1Runs === 0 || inning1Runs >= runs)){
        runs += 1
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOverIncrease();
        actionButtons.pop();
        actionButtons.push(updateOne);
        // console.log(actionButtons.pop())
        var o = teams[0].totalOvers
        console.log(o)
        }
    }
    buttonOne.addEventListener("click",updateOne)


    const buttonTwo = document.getElementById("two") 
    const updateTwo =  () => {
        if(overs < total_overs && wickets < 10 && (inning1Runs === 0 || inning1Runs >= runs)){
        runs += 2
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOverIncrease();
        actionButtons.pop();
        actionButtons.push(updateTwo);
        // console.log(actionButtons.pop())
        }
    }
    buttonTwo.addEventListener("click",updateTwo)


    const buttonThree = document.getElementById("three") 
    const updateThree =  () => {
        if(overs < total_overs && wickets < 10 && (inning1Runs === 0 || inning1Runs >= runs)){
        runs += 3
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOverIncrease();
        actionButtons.pop();
        actionButtons.push(updateThree);
        // console.log(actionButtons.pop())
        }
    }
    buttonThree.addEventListener("click",updateThree)


    const buttonFour = document.getElementById("four") 
    const updateFour =  () => {
        if(overs < total_overs && wickets < 10 && (inning1Runs === 0 || inning1Runs >= runs)){
        runs += 4
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOverIncrease();
        actionButtons.pop();
        actionButtons.push(updateFour);
        // console.log(actionButtons.pop())
        }
    }
    buttonFour.addEventListener("click",updateFour)


    const buttonFive = document.getElementById("five") 
    const updateFive =  () => {
        if(overs < total_overs && wickets < 10 && (inning1Runs === 0 || inning1Runs >= runs)){
        runs += 5
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOverIncrease();
        actionButtons.pop();
        actionButtons.push(updateFive);
        // console.log(actionButtons.pop())
        }
    }
    buttonFive.addEventListener("click",updateFive)


    const buttonSix = document.getElementById("six") 
    const updateSix =  () => {
        if(overs < total_overs && wickets < 10 && (inning1Runs === 0 || inning1Runs >= runs)){
        runs += 6
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOverIncrease();
        actionButtons.pop();
        actionButtons.push(updateSix);
        // console.log(actionButtons.pop())
        }
    }
    buttonSix.addEventListener("click",updateSix)


    const buttonZero = document.getElementById("zero") 
    const updateZero =  () => {
        if(overs < total_overs && wickets < 10 && (inning1Runs === 0 || inning1Runs >= runs)){
        runs += 0
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOverIncrease();
        actionButtons.pop();
        actionButtons.push(updateZero);
        // console.log(actionButtons.pop())
        }
    }
    buttonZero.addEventListener("click",updateZero)

    
    const buttonOut = document.getElementById("out") 
    const updateOut =  () => {
        if(overs < total_overs && wickets < 10 && (inning1Runs === 0 || inning1Runs >= runs)){
        wickets += 1
        divScore.innerHTML = runs + ` - ` + wickets;
        updateOverIncrease();
        actionButtons.pop();
        actionButtons.push(updateOut);
        }
    }
    buttonOut.addEventListener("click",updateOut)


    const buttonWide = document.getElementById("wide") 
    const updateWide =  () => {
        if(overs < total_overs && wickets < 10 && (inning1Runs === 0 || inning1Runs >= runs)){
        runs += 1 ;
        divScore.innerHTML = runs + ` - ` + wickets;
        actionButtons.pop();
        actionButtons.push(updateWide);
        }
    }
    buttonWide.addEventListener("click",updateWide)

    const updateOverDecrease = () => {
        if(balls > 0)
        {balls-- ;}
        else
        {
            overs-- ;
            balls = 5 ;
        }

        divOvers.innerHTML = overs + `.` + balls ;
    }

    const buttonUndo = document.getElementById("undo") 
    const updateUndo =  () => {
      //  if(overs < total_overs && wickets < 10){
        let lastPushedButton = actionButtons.pop();


            const reUpdateZero = () => {    
                const updateUndoZero =  () => {
                    runs -= 0
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateOverDecrease();
                updateUndoZero();
            }

            const reUpdateOne = () => {    
                const updateUndoOne =  () => {
                    runs -= 1
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateOverDecrease();
                updateUndoOne();
            }

            const reUpdateTwo = () => {    
                const updateUndoTwo =  () => {
                    runs -=  2;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateOverDecrease();
                updateUndoTwo();
            }

            const reUpdateThree = () => {    
                const updateUndoThree =  () => {
                    runs -= 3 ;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateOverDecrease();
                updateUndoThree();
            }

            const reUpdateFour = () => {    
                const updateUndoFour =  () => {
                    runs -= 4 ;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateOverDecrease();
                updateUndoFour();
            }

            const reUpdateFive = () => {    
                const updateUndoFive =  () => {
                    runs -= 5 ;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateOverDecrease();
                updateUndoFive();
            }

            const reUpdateSix = () => {    
                const updateUndoSix =  () => {
                    runs -= 6 ;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateOverDecrease();
                updateUndoSix();
            }

            const reUpdateOut = () => {    
                const updateUndoOut =  () => {
                    wickets -= 1;
                    divScore.innerHTML = runs + ` - ` + wickets;
                }
                updateOverDecrease();
                updateUndoOut();
            }

            const reUpdateWide = () => {  
                const updateUndoWide =  () => {
                    runs -= 1;
                    divScore.innerHTML = runs + ` - ` + wickets; 
                }
                updateUndoWide();
            }







        switch(lastPushedButton){
            case updateZero :
                {
                    reUpdateZero();
                    break;
                }
                
            case updateOne :
                {
                    reUpdateOne();
                    break;
                }
            case updateTwo :
                {
                    reUpdateTwo();
                    break;
                }
            case updateThree :
                {
                    reUpdateThree();
                    break;
                }
            case updateFour :
                {
                    reUpdateFour();
                    break;  
                }
            case updateFive :
                {
                    reUpdateFive();
                    break;     
                }
            case updateSix :
                {
                    reUpdateSix();
                    break;
                }
            case updateOut :
                {
                    reUpdateOut();
                    break;
                }
            case updateWide :
                {
                    reUpdateWide();
                    break;
                }
        // }
    }
    }
    buttonUndo.addEventListener("click",updateUndo)



    const buttonNoBall = document.getElementById("noBall") 

    const updateNoBall =  () => {
        if(overs < total_overs && wickets < 10 && (inning1Runs === 0 || inning1Runs >= runs)){
        
        let askForRuns = document.createElement("div")
        askForRuns.classList.add('updateNoballInnerKeys')
        askForRuns.innerHTML = 
        `<div class = "popupForNoball"> enter the runs scored at no ball</div>
        <div class = "innerKeytype">
                    <button type="button" id="innerOne">One</button>
                    <button type="button" id="innerTwo">Two</button>
                    <button type="button" id="innerThree">Three</button>
                    <button type="button" id="innerFour">Four</button>
                </div>
                <div class = "innerKeytype">
                    <button type="button" id="innerFive">Five</button>
                    <button type="button" id="innerSix">Six</button>
                    <button type="button" id="innerZero">Zero</button>
                    <button type="button" id="innerByes" >B/LB</button>
                </div>`
 

        let updateKeys = document.getElementById("updateKeys")
        updateKeys.appendChild(askForRuns);

        const hideDiv = () => {
            askForRuns.innerHTML = ' '
        //document.appendChild(askForRuns);
        }



        // let bye = document.getElementById("innerByes")
        // const byefunction = () => {
            
        // }
        // bye.addEventListener("click",byefunction)


        let innerOne = document.getElementById("innerOne")
        const onefunction = () => {
           updateOne();
           updateOverDecrease();
           hideDiv();
        }
        innerOne.addEventListener("click",onefunction)

        let innerTwo = document.getElementById("innerTwo")
        const twofunction = () => {
           updateTwo();
           updateOverDecrease();
           hideDiv();
        }
        innerTwo.addEventListener("click",twofunction)

        let innerThree = document.getElementById("innerThree")
        const threefunction = () => {
            updateThree();
            updateOverDecrease();
            hideDiv();
        }
        innerThree.addEventListener("click",threefunction)

        let innerFour = document.getElementById("innerFour")
        const fourfunction = () => {
            updateFour();
            updateOverDecrease();
            hideDiv();
        }
        innerFour.addEventListener("click",fourfunction)

        let innerFive = document.getElementById("innerFive")
        const fivefunction = () => {
            updateFive();
            updateOverDecrease();
            hideDiv();
        }
        innerFive.addEventListener("click",fivefunction)

        let innerSix = document.getElementById("innerSix")
        const sixfunction = () => {
            updateSix();
            updateOverDecrease();
            hideDiv();
        }
        innerSix.addEventListener("click",sixfunction)

        let innerZero = document.getElementById("innerZero")
        const zerofunction = () => {
            updateZero();
            updateOverDecrease();
            hideDiv();
        }
        innerZero.addEventListener("click",zerofunction)


    }
}


    buttonNoBall.addEventListener("click",updateNoBall)



    const buttonByes = document.getElementById("byes");
    const updateByes = () => {
        if(overs < total_overs && wickets < 10 && (inning1Runs === 0 || inning1Runs >= runs)){

        
            let askForRunsForByes = document.createElement("div")
            askForRunsForByes.classList.add('updateNoballInnerKeys')
            askForRunsForByes.innerHTML = 
            `<div class = "popupForNoball"> bye or leg bye runs </div>
            <div class = "innerKeytype">
                        <button type="button" id="innerOneForBye">One</button>
                        <button type="button" id="innerTwoForBye">Two</button>
                        <button type="button" id="innerThreeForBye">Three</button>
                        <button type="button" id="innerFourForBye">Four</button>
                    </div>
                    <div class = "innerKeytype">
                        <button type="button" id="innerFiveForBye">Five</button>
                        <button type="button" id="innerSixForBye">Six</button>
                        <button type="button" id="innerZeroForBye">Zero</button>
                    </div>`
     
    
            let updateKeys = document.getElementById("updateKeys")
            updateKeys.appendChild(askForRunsForByes);
    
            const hideDiv = () => {
                askForRunsForByes.innerHTML = ' '
            //document.appendChild(askForRuns);
            }

            let innerZeroForBye = document.getElementById("innerZeroForBye")
            const Zerofunction = () => {
            updateOne();
            hideDiv();
            updateOverDecrease();
            }
            innerZeroForBye.addEventListener("click",Zerofunction)
            
            let innerOneForBye = document.getElementById("innerOneForBye")
            const onefunction = () => {
               updateOne();
               hideDiv();
            }
            innerOneForBye.addEventListener("click",onefunction)
    
            let innerTwoForBye = document.getElementById("innerTwoForBye")
            const twofunction = () => {
               updateTwo();
               hideDiv();
            }
            innerTwoForBye.addEventListener("click",twofunction)
    
            let innerThreeForBye = document.getElementById("innerThreeForBye")
            const threefunction = () => {
                updateThree();
                hideDiv();
            }
            innerThreeForBye.addEventListener("click",threefunction)
    
            let innerFourForBye = document.getElementById("innerFourForBye")
            const fourfunction = () => {
                updateFour();
                hideDiv();
            }
            innerFourForBye.addEventListener("click",fourfunction)
    
            let innerFiveForBye = document.getElementById("innerFiveForBye")
            const fivefunction = () => {
                updateFive();
                hideDiv();
            }
            innerFiveForBye.addEventListener("click",fivefunction)
    
            let innerSixForBye = document.getElementById("innerSixForBye")
            const sixfunction = () => {
                updateSix();
                hideDiv();
            }
            innerSixForBye.addEventListener("click",sixfunction)
    
            // let innerZeroForBye = document.getElementById("innerZeroForBye")
            // const zerofunction = () => {
            //     updateZero();
            //     hideDiv();
            //     if(check === 5)
            //    updateOverDecrease();
            // }
            // innerZeroForBye.addEventListener("click",zerofunction)
    
    
            actionButtons.pop();
            actionButtons.push(updateByes);
        }
    }

    buttonByes.addEventListener("click",updateByes);



    const startNewInning = () => {
        const firstInning = document.createElement("div")
        firstInning.innerHTML = `
        <div id = "innermatchData">
        <p>Score in first innings </p>
        <p>Runs `+ runs + `     Wickets ` + wickets + `</p>
        <button type="button" id="nextInning">Let chase</button>
        </div>`
        
        matchData.appendChild(firstInning);

        document.getElementById("matchRecords").style.display = 'none'

       
    
    const nextInning = document.getElementById("nextInning")
    const startNextInning = () => {

        inning1Runs = runs;
        inning1Wickets = wickets;

        console.log(inning1Runs)
        console.log(inning1Wickets)

        runs = 0
        wickets = 0
        overs = 0
        balls = 0
     

        document.getElementById("matchRecords").style.display = 'block'
        document.getElementById("innermatchData").style.display = 'none'
        divScore.innerHTML = runs + `-` + wickets ;
        divOvers.innerHTML = overs + `.` + balls ;
        
        var inningShower = document.getElementById("inningShower")
        inningShower.innerHTML = `2nd innings`

        if(choseTo === "bat"){
            battingTeam.innerHTML = ` ` + tossLosingTeam + ` `;
            }
        else{
            battingTeam.innerHTML = ` ` + tossWinningTeam + ` `;
        }
    }
    nextInning.addEventListener("click",startNextInning)
}

const declareInnings = () => {
    // const match = document.getElementById("matchData")

    const declareInn = document.createElement("div")
    if(inning1Runs<runs){
        if(choseTo = "bat"){
            declareInn.innerHTML = `
            <div id="declareRes">
                <p>` + tossLosingTeam + ` won the match by ` + (10  - wickets) + `wickets</p>
            </div>`
        }
        else{
                declareInn.innerHTML = `
                <div id="declareRes">
                    <p>` + tossWinningTeam + ` won the match by ` + (10  - wickets) + `wickets</p>
                </div>`
        }

    }
    else if(inning1Runs>runs){
        if(choseTo = "bat"){
            declareInn.innerHTML = `
            <div id="declareRes">
                <p>` + tossWinningTeam + ` won the match by ` + (inning1Runs - runs) + `runs</p>
            </div>`
        }
        else{
            declareInn.innerHTML = `
            <div id="declareRes">
                <p>` + tossLosingTeam + ` won the match by ` + (inning1Runs - runs) + `runs</p>
            </div>`
        }

    }
    else{
        declareInn.innerHTML = `
        <div id="declareRes">
            <p>this match is tie</p>
        </div>`
    }
    matchData.appendChild(declareInn)

    document.getElementById("matchRecords").style.display = "none";


    var keys = document.getElementById("keys")
    keys.style.display = "none"

    
}




})






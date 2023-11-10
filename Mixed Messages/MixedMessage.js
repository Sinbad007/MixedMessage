

/*1. Result View dari user - Speed [1-5] 
  2. Word encouragement    - random based on Speed ( Spv : )
  3. Advice to Improvement - random based on Spped ( HR : )
*/

let name = ['Boby','Baba','Bubu','Bibi','Bulu']; // random
let speed = [1,2,3,4,5]; // mapping
let description = {1: 'Disappointing!!',2: 'Late from timeline!',3: 'According to the timeline',4: 'Faster than expected :)',5: 'Great!! Much faster'};
let emojiList = {1: ['😡','Angry'], 2: ['😞','Disappointed'], 3: ['😐','OK'], 4:['😊','happy'], 5: ['😃','very happy']}

const userReviewList = [];
const userReviewPerformance = { // obj 
    name: undefined,
    jobID: undefined,
    speed: undefined,
    description: undefined , 
    encouragementWord: undefined,
    adviceImprovement: undefined,
    emoticon: undefined
};

//const userReviewPerformance =[{}];

const encouragementMappingSpeed = {    // random 1/2
    '1': ['Struggles today, strength tomorrow. Progress is progress, no matter how small. Keep pushing forward!','Every setback is a setup for a comeback. Your effort counts—stay resilient and keep moving forward!'],
    '2': ['Every stumble is a step toward success. Learn, adjust, and keep moving forward. You`ve got this!','Every stumble is a step toward success. Learn, adjust, and keep moving forward. You`ve got this!'],
    '3': ['Consistency breeds excellence. Keep working for your progress, Average performance does not give you an edge over rivals','Just Enough, not enough, let`s develop it again'],
    '4': ['Good job, you just exceeded average. Keep moving and be the best while continuing to improve your performance :)','Good Job:)','Goooood :)','Moooooo :)' ,'Puuuhhhh :)'],
    '5': ['Excellent job! Even at your best, there`s room to soar higher. Embrace growth, and keep pushing for even greater achievements!" :))','Great Job :))']
}

const adviceImprovementMappingSpeed = { // random 1/2
    '1': ['Your speed is very poor, review your job and consult with your manager !!','This speed is unacceptable, consult your manager!!'],
    '2': ['Your speed is still below target, let`s check what is holding you back!','Not according to expectations, must be accelerated!'],
    '3': ['Your speed is in line with requests, but there is still a lot of room to improve speed','As expected, but there is still a lot that can be accelerated'],
    '4': ['Your speed is faster than estimated, but we know you can be even faster :)','More than Expectations, let`s Improve until it`s perfect:) '],
    '5': ['You`ve done your best, improve beyond your limits... :)) ','Perfect, Let`s create a new speed record.:))','Perfectto :))','Congratulation :))']
};

const smilingFace = [
    '',
    '   ******   ',
    '  *      *  ',
    ' *  ~~~~  * ',
    '*    ∆ ∆    *',
    '*   \\___/   *',
    ' *        * ',
    '  *      *  ',
    '   ******   '
  ];


// generate and Logic  
const generateRandomNumber = number => Math.floor(Math.random()* number);

function generateRandomJobId(length) {
    return [...Array(length)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
  }

userReviewPerformance.name = name[generateRandomNumber(name.length)];
userReviewPerformance.speed = speed[generateRandomNumber(speed.length)];
userReviewPerformance.description = description[userReviewPerformance.speed];
userReviewPerformance.emoticon = emojiList[userReviewPerformance.speed];

userReviewPerformance.jobID = generateRandomJobId(7);
userReviewPerformance.encouragementWord = encouragementMappingSpeed[userReviewPerformance.speed][generateRandomNumber(encouragementMappingSpeed[userReviewPerformance.speed].length)];
userReviewPerformance.adviceImprovement = adviceImprovementMappingSpeed[userReviewPerformance.speed][generateRandomNumber(adviceImprovementMappingSpeed[userReviewPerformance.speed].length)];

userReviewList.push(userReviewPerformance);
// end of generate 1
  
// Formatted 
  function formatPerformance() {
    console.log('=========================================================================================================');
    console.log(userReviewPerformance.name + ' your performance for work with ID '+userReviewPerformance.jobID + 'is ' + userReviewPerformance.description );
    console.log('Spv : '  + userReviewPerformance.encouragementWord);
    console.log('HR : '  + userReviewPerformance.adviceImprovement);
    console.log('=========================================================================================================');
    if (userReviewPerformance.speed === 5 ) {
        console.log(smilingFace.join('\n'));
    }
  }

  formatPerformance();
// end of Formatted 

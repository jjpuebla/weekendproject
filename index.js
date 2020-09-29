let  readlineSync  =  require('readline-sync');
console.log( "THE GENIE GAME" );
console.log( "You find a magic lamp, when you rubb the lamp a Genie shows up. " );
console.log( "He tells you that you can choose one wish among these three wishes to pass your Web Development course." );
console.log( "\nWhich wish would you choose:");

wishAr=['Create a 100% didactic, understandable and graphical fully functional version of Github.','Be able to use in the course a Windows PC instead of a MAC (or Linux)','Typing 100ppm only looking at the screen, never looking at the keyboard.'];
let option = readlineSync.keyInSelect(wishAr, "Choose:");

switch(wishAr[option]) {
  case wishAr[0]:
    console.log('In exchange to create the new GitHub version, the Genie asks you to accomplish one of these task:');
    taskAr=['To do 30 pushups in one try','To do a 15 days vegetables diet','To wake up at 6am all Sundays for 3 months'];
    let option2 = readlineSync.keyInSelect(taskAr, "Choose:");
     
        switch(taskAr[option2]) {
            case taskAr[0]:
                console.log( "Genie: \"Your wish will be granted once you upload the video proofing the tasks\"" );
                break;
            case taskAr[1]:
                console.log( "Genie: \"Your wish will be granted once you send proof you loose 20 pounds\"" );
                break;
            case taskAr[2]:
                console.log( "Genie: \"Your wish will be granted once you upload the pics proofing the tasks\"" );
                break;
            default: 
                console.log( "Genie: \"It seems you do not need any wish. No more wishes for you\"" );
        }
    break;    

  case (wishAr[1]):
    console.log('In exchange to let you use your Windows PC instead of a MAC, Genie asks you to acomplish one of these three tasks:');
    taskAr=['Try to explain your instructor, you think a Windows PC is better than a MAC (Instructor has to accept your affirmation)', 'Watch four \“how to use Github\” videos in a row and not fall asleep', 'Upload an update of \“two truths and a lie\” by yourself (no instructor help)' ];
    let option3 = readlineSync.keyInSelect(taskAr, "Choose:");
  
        switch(taskAr[option3]) {
            case taskAr[0]:
                console.log( "Genie: \"Are you sure the instructor accepted it? You are lying, you lost your wish!!\"" );
                break;
            case taskAr[1]:
                console.log( "Genie: \"I can\’t believe you.  You lost your wish!\"" );
                break;
            case taskAr[2]:
                console.log( "Genie: \"Good Job!!, now you can use your PC in the course... at your own risk\"" );
                break;
            default: 
                console.log( "Genie: \"It seems you do not need any wish. No more wishes for you\"" );
        }
    break;
  
  case wishAr[2]:
    console.log( "Genie: \"I won\’t do that wish, don\'t be lazy, just go and practice!!!\"" );
    break;
  
  default: 
    console.log( "Genie: \"It seems you do not need any wish. No more wishes for you\"" );
 

} 

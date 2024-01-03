import inquirer from 'inquirer'
//ATM SYSTEM USING INQUIRER
async function atmSystem() {
    let loop = true
    let IncorrectAtempt = 0
    let maxAtempt = 5 
    while(loop&& IncorrectAtempt<maxAtempt){
        const inputData = await inquirer.prompt([
            {
                type: 'password',
                name: 'userPassword',
                message: 'Enter your 4 Digit Pin:'
            }
        ])
        type AllData = {
                password: string,
        }
        let user:AllData ={
                password: '2468',
        }
        let balance:number= Math.floor(Math.random()*5000)
        let newBalance:number=balance
        if (inputData.userPassword==user.password){
                while(loop){
                console.log('Welcome Sarosh ')
                const atmFunc = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'userSelection',
                    message:'Select your action',
                    choices:['Balance Check', 'Withdraw Money', 'Exit']
                }
            ])
            switch(atmFunc.userSelection){
               case 'Balance Check':
                    console.log('Your Balance is = '+newBalance )
                    loop=false;
                break;
                case 'Withdraw Money':
                    console.log('Current Balance is = '+ newBalance)
                    const drawMoney = await inquirer.prompt([{
                        type:'list',
                        name:'drawSelection',
                        choices:['1000','5000','Custom']
                    }])
                        switch(drawMoney.drawSelection){
                            
                            case '1000':
                                if(drawMoney.drawSelection<=balance){
                                newBalance=balance-drawMoney.drawSelection
                                loop=false
                                console.log('Money withdrawn = '+ drawMoney.drawSelection+ ' \n New Balance = '+ newBalance)
                                }
                                else if (drawMoney.drawSelection>balance){
                                    console.log('Your balance is not sufficient')
                                }break;
                            case '5000':
                                if(drawMoney.drawSelection<=balance){
                                    loop=false
                                newBalance=balance-drawMoney.drawSelection
                                console.log('Money withdrawn = '+ drawMoney.drawSelection+ '\n New Balance = '+ newBalance)
                                }
                                else if (drawMoney.drawSelection>balance){
                                    console.log(' Your balance is not sufficient')
                                }break;
                            case 'Custom':
                                    const customChoice = await inquirer.prompt({
                                        type:'input',
                                        name:'customChoiceUser',
                                        message:'Enter value'
                                    })
                                    if (customChoice.customChoiceUser<=newBalance){
                                        loop=false
                                    newBalance=balance-customChoice.customChoiceUser
                                    console.log('Money withdrawn = '+ customChoice.customChoiceUser+ '\n New Balance = '+ newBalance)
                                }
                                    else{
                                        console.log(' Your balance is not sufficient')
                                    }
                                    break;
                            }
                break;
                case 'Exit':
                    loop=false
                    break;
            }           
            }
        }
        else {
            IncorrectAtempt++
            console.log('Incorrect PIN, Attempts left: ' , maxAtempt-IncorrectAtempt)
            if (maxAtempt===IncorrectAtempt){
                console.log ('Card Blocked Please contact your bank ')
            }    
        }
    }
}
atmSystem()
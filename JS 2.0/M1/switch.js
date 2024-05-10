
let mySub;
const subscription = 'premium';

switch (subscription){
    case "pro":
        mySub= 1;
        break;
    
    case 'service':
        mySub=2;
        break;
    
    case 'pro':
        mySub= '3';
        break;

    default:
        mySub = "default result";
}

document.write(mySub);



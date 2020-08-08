//read : 00000100
//write : 00000010
//execute : 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

//add permission
myPermission = myPermission | readPermission | writePermission;

//check if have permission
let message = (myPermission & readPermission) ? 'yes' : 'no';
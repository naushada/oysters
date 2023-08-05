export interface IAccountInfo {
    "userid": string,
    "password": string,
    //role: ["teacher", "student", "principle", "it", "admin", "external", "pta", "parent"]
    "roles": Array<string>,
    "name": string,
    //could have more than one email id
    "emails": Array<string>,
    //could have more than one cell number
	"cellnumbers": Array<string>,
    "aadhaarnumber": string,
    "address": {
        "pinnumber": number,
        "city": string,
        "state": string,
        "country": string,
        "address": string
	},
    // location is optional
    "location": {
        "latitude": string,
        "longitude": string,
        "altitude": string
    },
    // ipaddress is optional
    "ipaddresstype": string,
    "ipaddressvalue": string

}

export interface IStatus {
    "result": string, //Success/Failure
	"reason": string, //When Status=Failure then this will be present
	"ts": Date,
	"ip": string
}
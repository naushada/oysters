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

export const Role: Array<string>  = [
    "Teacher",
    "Student",
    "Principal",
    "IT",
    "Admin",
    "Pta",
    "External",
    "Parent"
];

export const Country: Array<string>  = [
    "India",
    "China",
    "Pakistan",
    "Bangladesh",
    "USA",
    "Canada",
    "France",
];

export const State: Array<string>  = [
    "Maharastra",
    "Telangana",
    "Uttar Pradesh",
    "New Delhi"
];

export const City: Array<string>  = [
    "Pune",
    "Mumbai",
    "Hyderabad ",
    "New Delhi"
];

export let subnavbarMap = new Map<string, Array<string>> ([
    ["Dashboard",   ["Admin", "Principal"]],
    ["Status",      ["Admin", "Principal"]],
    ["Account",     ["Principal", "Admin", "It"]],
    ["Inventory",   ["Admin", "Principal", "Teacher"]],
    ["Grievances",  ["*"]],
    ["Logout",      ["*"]]
]);

export let Priority:Array<string> = [
    "Hight",
    "Medium",
    "Low"
]

export let GrievanceResolution:Array<string> = [
    "Open",
    "Resolved",
    "Re-open",
    "Inprogress"
]
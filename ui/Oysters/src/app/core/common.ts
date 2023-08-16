export interface IAccountInfo {
    "personalinfo": {
		"name": string;
		"dob": Date;
		"grade": string;
		"section": string;
		"rollnumber": string;
		"academicyear": string;
		"dateofadmision": Date
		"fathername": string;
		"mothername": string;
	},
	"addressinfo": {
		"address": string;
		"pincode": number;
		"city": string;
		"state": string;
		"country": string;
	},
	"logininfo": {
		"userid": string;
		"password": string;
		"role": Array<string>;
	},
	"contactinfo": {
		"emails": Array<string>;
		"cellnumbers": Array<string>;
	},
	"academichistoryinfo" : [
		{
			"grade": string;
			"section":string;
			"rollnumber": string;
			"academicyear": string;
		}
	]
};

export interface IEventData {
    id: string;
    document: string;
};

export interface IMember {
    userid: string;
    password: string;
    grade: string;
    name: string;
    cellnumber: string;
    //Member/Secretary/Teacher
    role: string;
    emailid: string;
};

export interface IPTA {
    academicyear: string;
    ptas: Array<IMember>;
};


export interface IStatus {
    "result": string, //Success/Failure
	"reason": string, //When Status=Failure then this will be present
	"ts": Date,
	"ip": string,
    "payload": string;
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
    ["PTA",         ["*"]]
]);

export let vnavbarMap = new Map<string, Array<string>>([
    ["Account",                 ["Create Account", "Update Account", "List Account"]],
    // Access right for a given Option.
    ["Create Account",          ["Principal", "Admin", "It"]],
    ["Create Update",           ["Principal", "Admin", "It"]],
    ["List Account",            ["Principal", "Admin", "It"]],
    //Vertical NAV Bar.
    ["Grievances",              ["Create Grievance", "Status Grievances", "Update Grievance"]],
    // Access right for a given option.
    ["Create Grievance",        ["*"]],
    ["Status Grievances",       ["*"]],
    ["Update Grievance",        ["Principal", "Teacher", "Admin", "It"]],
    ["Inventory",               ["Create Inventory", "Status Inventories", "Update Inventories"]],
    ["PTA",                     ["Create PTA", "List PTA"]]
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
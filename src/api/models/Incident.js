import {DataStore} from "@aws-amplify/datastore";

class Incident {
        constructor(param) {
                
        }

}

export const createIncident =async () =>{
        await DataStore.save(
            new Incident({
                    "date": "1970-01-01Z",
                    "time": "12:30:23.999Z",
                    "location": "Lorem ipsum dolor sit amet",
                    "incidentType": "Lorem ipsum dolor sit amet",
                    "harm": true,
                    "individuals": "Lorem ipsum dolor sit amet",
                    "eventType": "Lorem ipsum dolor sit amet",
                    "effects": true,
                    "patientSSN": "Lorem ipsum dolor sit amet",
                    "patientPhone": "Lorem ipsum dolor sit amet",
                    "patientAddress": "Lorem ipsum dolor sit amet",
                    "patientName": "Lorem ipsum dolor sit amet",
                    "witness1Name": "Lorem ipsum dolor sit amet",
                    "witness1Phone": "Lorem ipsum dolor sit amet",
                    "witness2Name": "Lorem ipsum dolor sit amet",
                    "witness2Phone": "Lorem ipsum dolor sit amet",
                    "witness3Name": "Lorem ipsum dolor sit amet",
                    "witness3Phone": "Lorem ipsum dolor sit amet",
                    "department": "Lorem ipsum dolor sit amet",
                    "description": "Lorem ipsum dolor sit amet",
                    "prevention": "Lorem ipsum dolor sit amet",
                    "command": "Lorem ipsum dolor sit amet"
            })
        );
}
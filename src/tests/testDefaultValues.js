const defaultValues = {
    date: new Date(),
    time: new Date(),
    location: "",
    eventType: [],
    //boolean on backend
    harm: "Yes",
    //string on backend delineated by commas
    individuals: {
        patient: false,
        familyMember: false,
        adult: false,
        child: false,
        staffMember: false,
        visitor: false,
        volunteer: false,
        other: false
    },
    //string on backend delineated by commas
    incidentType: "Actual Event/Incident",
    //boolean
    effects: 'No harm sustained',
    witness1Name: '',
    witness1Phone: '',
    witness2Name: '',
    witness2Phone: '',
    witness3Name: '',
    witness3Phone: '',
    //string on backend delineated by commas
    department: [],
    description: "",
    prevention: "",
    patientName: "",
    patientSSN: "",
    patientPhone: "",
    patientAddress: ""
}

export default defaultValues;
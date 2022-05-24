import { findAllByRole, render, screen, waitFor} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import mock from "./testServer/mock";
import {Banner} from "./components/common/Banner";
import ASFIcon from "./components/common/ASFIcon";
import DateOfEvent from "./components/SIRForm/Fields/DateOfEvent";
import Header from "./components/SIRForm/Header/Header";
import TimeOfEvent from "./components/SIRForm/Fields/TimeOfEvent";
import LocationBox from "./components/SIRForm/Fields/LocationBox";
import EventTypeBox from "./components/SIRForm/Fields/EventTypeBox";
import HarmEventBox from "./components/SIRForm/Fields/HarmEventBox";
import IndividualsInvolvedFormGroup from "./components/SIRForm/Fields/IndividualsInvolvedFormGroup";
import TypeOfEventBox from "./components/SIRForm/Fields/TypeOfEventBox";
import EffectOfIncidentBox from "./components/SIRForm/Fields/EffectOfIncidentBox";
import Witness from "./components/SIRForm/Fields/Witness";
import DepartmentsInvolvedBox from "./components/SIRForm/Fields/DepartmentsInvolvedBox";
import DescriptionOfIncidentBox from "./components/SIRForm/Fields/DescriptionOfIncidentBox";
import ActionsTakenBox from "./components/SIRForm/Fields/ActionsTakenBox";
import PatientNameBox from "./components/SIRForm/Fields/PatientNameBox";
import PatientSSNBox from "./components/SIRForm/Fields/PatientSSNBox";
import PatientPhoneBox from "./components/SIRForm/Fields/PatientPhoneBox";
import AddressBox from "./components/SIRForm/Fields/AddressBox";
import Fields from "./components/SIRForm/Fields/Fields";


describe("Component tests",()=> {
  beforeAll(() => mock.listen());
  afterEach(() => mock.resetHandlers());
  afterAll(() => mock.close());

  describe("testing Banner Component",()=>{
    beforeEach(()=>render(<Banner/>));
    it("should see banner",async ()=>{
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });
    it("should the Army Software Factory icon",async ()=>{
      expect(screen.getByRole('img',({name:"Army Software Factory Icon"}))).toBeInTheDocument();
    });
  });

  describe("testing ASFIcon Component",()=>{
    beforeEach(()=>render(<ASFIcon/>));
    it("should the Army Software Factory icon",async ()=>{
      expect(screen.getByRole('img',({name:"Army Software Factory Icon"}))).toBeInTheDocument();
    });
  });

  describe("testing DateOfEvent Component",()=>{
    beforeEach(()=>render(<DateOfEvent/>));
    it("should see a label",async ()=>{
      expect(screen.getByText('Date of Event')).toBeInTheDocument();
    });
    it("should see the textbox with place holder text",async ()=>{
      expect(screen.getByDisplayValue('05/23/2022')).toBeInTheDocument();
    });
    it("should see the button",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe("tesing Header Component",()=>{
    beforeEach(()=>render(<Header/>));
    it("should see a Header with text Incident Report Form",async ()=>{
      expect(screen.getByRole('heading',{name:/incident report form/i})).toBeInTheDocument();
    });
  });

  describe("testing TimeofEvent Component",()=>{
    beforeEach(()=>render(<TimeOfEvent/>));
    it("should see a label",async ()=>{
      expect(screen.getByText('Time of Event')).toBeInTheDocument();
    });
    it("should see the textbox with place holder text",async ()=>{
      expect(screen.getByDisplayValue('06:00 pm')).toBeInTheDocument();
    });
    it("should see the button",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe("testing LocationBox Component",()=>{
    beforeEach(()=>render(<LocationBox/>));
    it("should see a label",async ()=>{
      expect(screen.getByText(/location of event/i)).toBeInTheDocument();
    });
    it("should see the textbox",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe("testing EventTypeBox Component", ()=>{
    beforeEach(()=>render(<EventTypeBox/>));
    it("should see a button event type", async ()=>{
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it("should display event type text", async ()=>{
      expect(screen.getByText('Event Type')).toBeInTheDocument();
    });
  });
  describe("testing HarmEventBox Component", ()=>{
    beforeEach(()=>render(<HarmEventBox/>));
    it("should see a button harm event boolean", async ()=>{
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it("should display harm boolean text", async ()=>{
      expect(screen.getByText('Harm or Potential Harm')).toBeInTheDocument();
    });
  });

  describe("testing Individuals Involved checkboxes", ()=>{
    beforeEach(()=>render(<IndividualsInvolvedFormGroup/>));
    it("should see patient", async ()=>{
      expect(screen.getByText('Patient')).toBeInTheDocument();
    });
    it("should see patient checkbox", async ()=>{
      expect(screen.getByRole('checkbox', {name:"Patient"})).toBeInTheDocument();
    });
    it("should see family member", async ()=>{
      expect(screen.getByText('Family Member')).toBeInTheDocument();
    });
    it("should see family member checkbox", async ()=>{
      expect(screen.getByRole('checkbox', {name:"Family Member"})).toBeInTheDocument();
    });
    it("should see Adult", async ()=>{
      expect(screen.getByText('Adult')).toBeInTheDocument();
    });
    it("should see Adult checkbox", async ()=>{
      expect(screen.getByRole('checkbox', {name:"Adult"})).toBeInTheDocument();
    });
    it("should see Child", async ()=>{
      expect(screen.getByText('Child <18 years old')).toBeInTheDocument();
    });
    it("should see Child checkbox", async ()=>{
      expect(screen.getByRole('checkbox', {name:"Child <18 years old"})).toBeInTheDocument();
    });
    it("should see Staff member", async ()=>{
      expect(screen.getByText('Staff Member')).toBeInTheDocument();
    });
    it("should see Staff member checkbox", async ()=>{
      expect(screen.getByRole('checkbox', {name:"Staff Member"})).toBeInTheDocument();
    });
    it("should see visitor", async ()=>{
      expect(screen.getByText('Visitor')).toBeInTheDocument();
    });
    it("should see Visitor checkbox", async ()=>{
      expect(screen.getByRole('checkbox', {name:"Visitor"})).toBeInTheDocument();
    });
    it("should see Volunteer", async ()=>{
      expect(screen.getByText('Volunteer')).toBeInTheDocument();
    });
    it("should see Volunteer checkbox", async ()=>{
      expect(screen.getByRole('checkbox', {name:"Volunteer"})).toBeInTheDocument();
    });
    it("should see Other", async ()=>{
      expect(screen.getByText('Other')).toBeInTheDocument();
    });
    it("should see Other checkbox", async ()=>{
      expect(screen.getByRole('checkbox', {name:"Other"})).toBeInTheDocument();
    });
  });

  describe("testing TypeOfEventBox Component",()=>{
    beforeEach(()=>render(<TypeOfEventBox/>));
    it("should see a label",async ()=>{
      expect(screen.getByText(/Type of Event/i)).toBeInTheDocument();
    })
    it("should see the textbox",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
  });

  describe("testing EffectOfEventIncidentBox Component",()=>{
    beforeEach(()=>render(<EffectOfIncidentBox/>));
    it("should see a button effect of event incident button", async ()=>{
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it("should display harm boolean text", async ()=>{
      expect(screen.getByText('Effect of this incident on the individual(s) Involved')).toBeInTheDocument();
    });
  });

  describe("testing Witness Component",()=>{
    beforeEach(()=>render(<Witness/>));
    it("should see a Witness Name label", async ()=>{
      expect(screen.getByText('Witness Name')).toBeInTheDocument();
    });
    it("should see a Witness telephone number label", async ()=>{
      expect(screen.getByText('Witness Telephone Number')).toBeInTheDocument();
    });
    it("should render 6 textboxes", async ()=>{
      expect(screen.getAllByRole('textbox').length==6);

    })
  });

  describe("testing DepartmentsInvolvedBox Component",()=>{
    beforeEach(()=>render(<DepartmentsInvolvedBox/>));
    it("should see a label",async ()=>{
      expect(screen.getByText(/Department\(s\) Involved in this incident/i)).toBeInTheDocument();
    });
    it("should see the combobox",async ()=>{
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe("testing DescriptionOfIncidentBox Component",()=>{
    beforeEach(()=>render(<DescriptionOfIncidentBox/>));
    it("should see a label",async ()=>{
      expect(screen.getByText(/Description of Incident/i)).toBeInTheDocument();
    });
    it("should see the textbox",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe("testing ActionsTakenBox Component",()=>{
    beforeEach(()=>render(<ActionsTakenBox/>));
    it("should see a label",async ()=>{
      expect(screen.getByText(/What actions, if any, could have been taken to prevent this incident from occurring?/i)).toBeInTheDocument();
    });
    it("should see the textbox",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe("testing PatientNameBox Component",()=>{
    beforeEach(()=>render(<PatientNameBox/>));
    it("should see a label",async ()=>{
      expect(screen.getByText(/Patient Name or ID Plate/i)).toBeInTheDocument();
    });
    it("should see the textbox",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe("testing PatientSSNBox Component",()=>{
    beforeEach(()=>render(<PatientSSNBox/>));
    it("should see a label",async ()=>{
      expect(screen.getByText(/Patient SSN/i)).toBeInTheDocument();
    });
    it("should see the textbox",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe("testing PatientPhoneBox Component",()=>{
    beforeEach(()=>render(<PatientPhoneBox/>));
    it("should see a label",async ()=>{
      expect(screen.getByText(/Patient Telephone Number/i)).toBeInTheDocument();
    });
    it("should see the textbox",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe("testing AddressBox Component",()=>{
    beforeEach(()=>render(<AddressBox/>));
    it("should see a label",async ()=>{
      expect(screen.getByText(/Patient Address/i)).toBeInTheDocument();
    });
    it("should see the textbox",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe("testing disabled Submit button",()=>{
    beforeEach(()=>render(<Fields/>));
    it("should see a button",async ()=>{
      expect(screen.getByText(/Submit/i)).toBeInTheDocument();
    });
    it("should see the button",async ()=>{
      expect(screen.getByText('Submit').closest("button")).toBeDisabled();
    });
  });





});

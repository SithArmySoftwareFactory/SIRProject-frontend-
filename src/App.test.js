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


describe("Component tests",()=> {
  beforeAll(() => mock.listen());
  afterEach(() => mock.resetHandlers());
  afterAll(() => mock.close());

  describe("testing Banner Component",()=>{
    beforeEach(()=>render(<Banner/>));
    it("should see banner",async ()=>{
      expect(screen.getByRole('banner')).toBeInTheDocument();
    })
    it("should the Army Software Factory icon",async ()=>{
      expect(screen.getByRole('img',({name:"Army Software Factory Icon"}))).toBeInTheDocument();
    })
  });

  describe("testing ASFIcon Component",()=>{
    beforeEach(()=>render(<ASFIcon/>));
    it("should the Army Software Factory icon",async ()=>{
      expect(screen.getByRole('img',({name:"Army Software Factory Icon"}))).toBeInTheDocument();
    })
  });

  describe("testing DateOfEvent Component",()=>{
    beforeEach(()=>render(<DateOfEvent/>));
    it("should see a label",async ()=>{
      expect(screen.getByText('Date of Event')).toBeInTheDocument();
    })
    it("should see the textbox with place holder text",async ()=>{
      expect(screen.getByDisplayValue('05/23/2022')).toBeInTheDocument();
    })
    it("should see the button",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
  });

  describe("tesing Header Component",()=>{
    beforeEach(()=>render(<Header/>));
    it("should see a Header with text Incident Report Form",async ()=>{
      expect(screen.getByRole('heading',{name:/incident report form/i})).toBeInTheDocument();
    })
  })

  describe("testing TimeofEvent Component",()=>{
    beforeEach(()=>render(<TimeOfEvent/>));
    it("should see a label",async ()=>{
      expect(screen.getByText('Time of Event')).toBeInTheDocument();
    })
    it("should see the textbox with place holder text",async ()=>{
      expect(screen.getByDisplayValue('06:00 pm')).toBeInTheDocument();
    })
    it("should see the button",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
  });

  describe("testing LocationBox Component",()=>{
    beforeEach(()=>render(<LocationBox/>));
    it("should see a label",async ()=>{
      expect(screen.getByText(/location of event/i)).toBeInTheDocument();
    })
    it("should see the textbox",async ()=>{
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
  });

});

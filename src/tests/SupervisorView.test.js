import {render, screen} from '@testing-library/react';
import SupervisorView from "../components/Supervisor/SupervisorView";

describe('Component Test for Supervisor View',()=>{

    beforeEach(()=>{
        render(<SupervisorView/>);
    });

    it('should see an Incident Reports header',()=>{
        expect(screen.getByText(/incident reports/i)).toBeInTheDocument();
    });

    it('should see heading reports',()=>{
        expect(screen.getByRole('cell',{name:/reports/i})).toBeInTheDocument();
    });

    it('should see the filter button',()=>{
        expect(screen.getByRole('button',{name:/show filters/i})).toBeInTheDocument();
    })

    it('should see a searchbox',()=>{
        expect(screen.getByRole('searchbox')).toBeInTheDocument();
    })

    it('should see a checkbox to select all boxes',()=>{
        expect(screen.getByRole('checkbox', {  name: /select all rows/i})).toBeInTheDocument()
    });

    it('should see a event date',()=>{
        expect(screen.getByText(/event date/i)).toBeInTheDocument();
    });

    it('should see location',()=>{
        expect(screen.getByText(/location/i)).toBeInTheDocument();

    });

    it('should see incident type',()=>{
        expect(screen.getByRole('columnheader', {  name: /incident type/i})).toBeInTheDocument();
    });

    it('should see harm',()=>{
        expect(screen.getByText(/harm/i)).toBeInTheDocument();
    });

    it('should see individuals(s) involved',()=>{
        expect(screen.getByText(/individuals\(s\) involved/i)).toBeInTheDocument();
    });

    it('should see event type',()=>{
        expect(screen.getByText(/event type/i)).toBeInTheDocument();
    });

    it('should see details',()=>{
        expect(screen.getByText(/details/i)).toBeInTheDocument();
    });

    it('should see rows per page',()=>{
        expect(screen.getByText(/rows per page:/i)).toBeInTheDocument();
    });

    it('should see button changes row per page',()=>{
        expect(screen.getByRole('button',{name:/rows per page: 5/i})).toBeInTheDocument();
    });

    it('should see button changes to the next page',()=>{
        expect(screen.getByRole('button',{name:/go to next page/i})).toBeInTheDocument();
    });

    it('should see button changes to the next page',()=>{
        expect(screen.getByRole('button',{name:/go to previous page/i})).toBeInTheDocument();
    });
});
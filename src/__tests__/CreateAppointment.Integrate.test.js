import React from 'react'
import { render, screen, fireEvent, queryByAttribute, act, queryAllByAttribute, waitFor } from '@testing-library/react';
import { checkAge, checkAlphabets, checkEmail, checkNumber, checkRequired, pinCode } from '../reusable/utils';
import { apiService } from '../reusable/Api';
import CreateAppointmentView from '../views/createAppointment/CreateAppointmentView';
let testName = "CreateAppointment business"
const getById = queryByAttribute.bind(null, 'id');
const getByName = queryAllByAttribute.bind(null, 'name');

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: '',
    age: "",
    streetName: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
    trainerPreferences: '',
    physioRequired: '',
    weeks: 1,
    package: '',
    totalAmount: 0
}

const onFormSubmit = jest.fn();

const setup = () => {
    const utils = render(<CreateAppointmentView initialValues={initialValues} onFormSubmit={onFormSubmit} />)
    const fNameInput = getById(utils.container, 'firstName');
    const lNameInput = getById(utils.container, 'lastName');
    const emailInput = getById(utils.container, 'email');
    const mobileInput = getById(utils.container, 'mobile');
    const ageInput = getById(utils.container, 'age');
    const streetNameInput = getById(utils.container, 'streetName');
    const cityInput = getById(utils.container, 'city');
    const stateInput = getById(utils.container, 'state');
    const countryInput = getById(utils.container, 'country');
    const pinCodeInput = getById(utils.container, 'pinCode');
    const malePreferenceInput = getById(utils.container, 'malePreference');
    const femalePreferenceInput = getById(utils.container, 'femalePreference');
    const noPreferenceInput = getById(utils.container, 'noPreference');
    const physioInput1 = getById(utils.container, 'physioRequired1');
    const physioInput2 = getById(utils.container, 'physioRequired2');
    const package1 = getById(utils.container, 'package1');
    const package2 = getById(utils.container, 'package2');
    const package3 = getById(utils.container, 'package3');
    const weeksInput = getById(utils.container, 'weeks');
    const totalAmountInput = getById(utils.container, 'totalAmount');
    const packageInput = getByName(utils.container, 'package');
    const button = getById(utils.container, 'button');
    const form = getById(utils.container, 'form');
    return {
        fNameInput,
        lNameInput,
        emailInput,
        mobileInput,
        ageInput,
        streetNameInput,
        cityInput,
        stateInput,
        countryInput,
        pinCodeInput,
        malePreferenceInput,
        femalePreferenceInput,
        noPreferenceInput,
        physioInput1,
        physioInput2,
        weeksInput,
        button,
        package1,
        package2,
        package3,
        packageInput,
        totalAmountInput,
        form,
        ...utils,
    }
}
/* ============================== E2E Test=================== */

const appointmentEntry =
{
    firstName: "Ravi",
    lastName: "Verma",
    email: "ravi@gmail.com",
    mobile: "08767675645",
    age: "50",
    streetName: "Millanium Road",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    pinCode: "226016",
    trainerPreferences: "Male",
    physioRequired: "No",
    weeks: "2",
    package: "5 Sessions per week",
}


describe('business', () => {
    test(`${testName} should submit form`, async () => {
        const { fNameInput, lNameInput, emailInput, mobileInput, ageInput, totalAmountInput, streetNameInput, cityInput, stateInput, countryInput, pinCodeInput, malePreferenceInput, femalePreferenceInput, noPreferenceInput, physioInput1, physioInput2, weeksInput, package1, package2, package3, form } = setup()
        const fNameRequired = checkRequired(appointmentEntry.firstName)
        const lNameRequired = checkRequired(appointmentEntry.lastName)
        const mobileRequired = checkRequired(appointmentEntry.mobile)
        const emailRequired = checkRequired(appointmentEntry.email)
        const ageRequired = checkRequired(appointmentEntry.age)
        const streetNameRequired = checkRequired(appointmentEntry.streetName)
        const cityRequired = checkRequired(appointmentEntry.city)
        const stateRequired = checkRequired(appointmentEntry.state)
        const countryRequired = checkRequired(appointmentEntry.country)
        const pinCodeRequired = checkRequired(appointmentEntry.pinCode)
        const trainerPreferencesRequired = checkRequired(appointmentEntry.trainerPreferences)
        const physioRequiredRequired = checkRequired(appointmentEntry.physioRequired)
        const weeksRequired = checkRequired(appointmentEntry.weeks)
        const packageRequired = checkRequired(appointmentEntry.package)
        const fNameAlpha = checkAlphabets(appointmentEntry.firstName)
        const lNameAlpha = checkAlphabets(appointmentEntry.lastName)
        const emailValid = checkEmail(appointmentEntry.email)
        const ageNumberValid = checkNumber(appointmentEntry.age)
        const ageValid = checkAge(appointmentEntry.age)
        const pinCodeNumberValid = checkNumber(appointmentEntry.pinCode)
        const pinCodeValid = pinCode(appointmentEntry.pinCode)
        const weeksNumberValid = checkNumber(appointmentEntry.weeks)


        fireEvent.blur(fNameInput);
        fireEvent.change(fNameInput, { target: { value: appointmentEntry.firstName } });
        fireEvent.blur(lNameInput);
        fireEvent.change(lNameInput, { target: { value: appointmentEntry.lastName } });
        fireEvent.blur(mobileInput);
        fireEvent.change(mobileInput, { target: { value: appointmentEntry.mobile } });
        fireEvent.blur(emailInput);
        fireEvent.change(emailInput, { target: { value: appointmentEntry.email } });
        fireEvent.blur(ageInput);
        fireEvent.change(ageInput, { target: { value: appointmentEntry.age } });
        fireEvent.blur(streetNameInput);
        fireEvent.change(streetNameInput, { target: { value: appointmentEntry.streetName } });
        fireEvent.blur(cityInput);
        fireEvent.change(cityInput, { target: { value: appointmentEntry.city } });
        fireEvent.blur(stateInput);
        fireEvent.change(stateInput, { target: { value: appointmentEntry.state } });
        fireEvent.blur(countryInput);
        fireEvent.change(countryInput, { target: { value: appointmentEntry.country } });
        fireEvent.blur(pinCodeInput);
        fireEvent.change(pinCodeInput, { target: { value: appointmentEntry.pinCode } });

        if (appointmentEntry.trainerPreferences === 'Male') {
            fireEvent.click(malePreferenceInput, { target: { value: appointmentEntry.trainerPreferences } });
        } else if (appointmentEntry.trainerPreferences === 'Female') {
            fireEvent.click(femalePreferenceInput, { target: { value: appointmentEntry.trainerPreferences } });
        } else {
            fireEvent.click(noPreferenceInput, { target: { value: appointmentEntry.trainerPreferences } });
        }

        if (appointmentEntry.physioRequired === "Yes") {
            fireEvent.click(physioInput1, { target: { value: appointmentEntry.physioRequired } });
        } else if (appointmentEntry.physioRequired === "No") {
            fireEvent.click(physioInput2, { target: { value: appointmentEntry.physioRequired } });
        }

        if (appointmentEntry.package === "4 Sessions per week") {
            fireEvent.click(package2, { target: { value: appointmentEntry.package } });
        }
        if (appointmentEntry.package === "5 Sessions per week") {
            fireEvent.click(package3, { target: { value: appointmentEntry.package } });
        }
        if (appointmentEntry.package === "One Time appointment") {
            fireEvent.click(package1, { target: { value: appointmentEntry.package } });
        }

        if (appointmentEntry.package === "5 Sessions per week" || appointmentEntry.package === "4 Sessions per week") {
            fireEvent.blur(weeksInput);
            fireEvent.change(weeksInput, { target: { value: appointmentEntry.weeks } });
        }


        const totalAmount =
            appointmentEntry.package === "One Time appointment" ? 500 :
                appointmentEntry.package === "4 Sessions per week" ? (parseInt(appointmentEntry.weeks) * 4 * 400) :
                    appointmentEntry.package === "5 Sessions per week" ? (parseInt(appointmentEntry.weeks) * 5 * 300) :
                        0
        fireEvent.blur(totalAmountInput);
        fireEvent.change(totalAmountInput, { target: { value: totalAmount } });

        fireEvent.submit(form);

        if (!fNameRequired || !lNameRequired || !mobileRequired || !emailRequired || !ageRequired || !streetNameRequired || !cityRequired || !stateRequired || !countryRequired || !pinCodeRequired || !trainerPreferencesRequired || !physioRequiredRequired || !weeksRequired || !packageRequired) {
            expect(await screen.findAllByText(/required/i)).toBeTruthy();
        } else if (emailRequired && !emailValid) {
            expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
        } else if ((fNameRequired && !fNameAlpha) || (lNameRequired && !lNameAlpha)) {
            expect(await screen.findAllByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
        } else if ((ageRequired && !ageNumberValid) || (pinCodeRequired && !pinCodeNumberValid) || (weeksRequired && !weeksNumberValid)) {
            expect(await screen.findAllByText(/Only numbers are allowed for this field./i)).toBeTruthy();
        } else if (ageRequired && ageNumberValid && !ageValid) {
            expect(await screen.findByText(/Age must be greater than 18 and less than 60./i)).toBeTruthy();
        } else if (pinCodeRequired && pinCodeNumberValid && !pinCodeValid) {
            expect(await screen.findByText(/Pinocde should be 6 digits/i)).toBeTruthy();
        } else {
            await waitFor(async () => {
                const data = { ...appointmentEntry, totalAmount }
                expect(onFormSubmit).toHaveBeenCalled();
                expect(onFormSubmit).toHaveBeenCalledTimes(1);
                await apiService('POST', '/allfriends', data)
                    .then((res) => {
                        expect({ ...data, id: res.data.id }).toEqual(res.data)
                        expect(res.status).toBe(201)
                    })
            })
        }
        await act(() => Promise.resolve()); // To avoid act wrapping warning
    }

    )
})


/** ===========================End========================= **/
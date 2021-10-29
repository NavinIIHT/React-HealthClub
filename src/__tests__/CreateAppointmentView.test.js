import React from 'react'
import CreateAppointmentView from '../views/createAppointment/CreateAppointmentView';
import { render, screen, fireEvent, queryByAttribute, act, queryAllByAttribute, waitFor } from '@testing-library/react';


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

let testName = "CreateAppointment boundary"
/** ===========================Check All Validation for Input Fields========================= **/

describe('boundary', () => {
    test(testName + ' firstName is required', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
        })
        await waitFor(async () => {
            expect(await screen.findByText(/First name required./i)).toBeTruthy();
        })
    });
    test(testName + ' firstName is invalid', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
            fireEvent.change(fNameInput, { target: { value: 'abc@def' } });
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
        })
    });
    test(testName + ' firstName is Valid', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
            fireEvent.change(fNameInput, { target: { value: 'Harshit Kishor' } });
        })
        await waitFor(async () => {
            const firstNameError1 = await screen.queryByText(/First name required./i);
            const firstNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
            expect(firstNameError1).toBeNull();
            expect(firstNameError2).toBeNull();
        })
    });
});


describe('boundary', () => {
    test(testName + ' lastName is required', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Last name required./i)).toBeTruthy();
        })
    });
    test(testName + ' lastName is invalid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'abc@def' } });
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
        })
    });
    test(testName + ' lastName is Valid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'Harshit Kishor' } });
        })
        await waitFor(async () => {
            const lastNameError1 = await screen.queryByText(/Last name required./i);
            const lastNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
            expect(lastNameError1).toBeNull();
            expect(lastNameError2).toBeNull();
        })
    });
});

describe('boundary', () => {
    test(testName + ' Email is required', async () => {
        const { emailInput } = setup()
        act(() => {
            fireEvent.blur(emailInput);
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Email required./i)).toBeTruthy();
        })
    });
    test(testName + ' Email is invalid', async () => {
        const { emailInput } = setup()
        act(() => {
            fireEvent.blur(emailInput);
            fireEvent.change(emailInput, { target: { value: 'abc@def' } });
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
        })
    });
    test(testName + ' Email is Valid', async () => {
        const { emailInput } = setup()
        act(() => {
            fireEvent.blur(emailInput);
            fireEvent.change(emailInput, { target: { value: 'abc@def.com' } });
        })
        await waitFor(async () => {
            const emailError = await screen.queryByText(/Invalid email./i);
            expect(emailError).toBeNull();
        })
    });
});

describe('boundary', () => {
    test(testName + ' Mobile is required', async () => {
        const { mobileInput } = setup()
        act(() => {
            fireEvent.blur(mobileInput);
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Mobile Number required./i)).toBeTruthy();
        })
    });
    test(testName + ' Mobile is Valid', async () => {
        const { mobileInput } = setup()
        act(() => {
            fireEvent.blur(mobileInput);
            fireEvent.change(mobileInput, { target: { value: '9987654545' } });
        })
        await waitFor(async () => {
            const mobileError = await screen.queryByText(/Mobile Number required./i);
            expect(mobileError).toBeNull();
        })
    });
});


describe('boundary', () => {
    test(testName + ' Age is required', async () => {
        const { ageInput } = setup()
        act(() => {
            fireEvent.blur(ageInput);
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Age required./i)).toBeTruthy();
        })
    });
    test(testName + ' Age is only number', async () => {
        const { ageInput } = setup()
        act(() => {
            fireEvent.blur(ageInput);
            fireEvent.change(ageInput, { target: { value: '22tt121' } });
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Only numbers are allowed for this field./i)).toBeTruthy();
        })
    });
    test(testName + ' Age must be greater than 18.', async () => {
        const { ageInput } = setup()
        act(() => {
            fireEvent.blur(ageInput);
            fireEvent.change(ageInput, { target: { value: 15 } });
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Age must be greater than 18 and less than 60./i)).toBeTruthy();
        })
    });
    test(testName + ' Age must be less than 60.', async () => {
        const { ageInput } = setup()
        act(() => {
            fireEvent.blur(ageInput);
            fireEvent.change(ageInput, { target: { value: 61 } });
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Age must be greater than 18 and less than 60./i)).toBeTruthy();
        })
    });
    test(testName + ' Age is Valid', async () => {
        const { ageInput } = setup()
        act(() => {
            fireEvent.blur(ageInput);
            fireEvent.change(ageInput, { target: { value: 25 } });
        })
        await waitFor(async () => {
            const messageError = await screen.queryByText(/Age required./i);
            expect(messageError).toBeNull();
        })
    });
});


describe('boundary', () => {
    test(testName + ' Street Name is required', async () => {
        const { streetNameInput } = setup()
        act(() => {
            fireEvent.blur(streetNameInput);
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Street name required./i)).toBeTruthy();
        })
    });
    test(testName + ' Street Name is Valid', async () => {
        const { streetNameInput } = setup()
        act(() => {
            fireEvent.blur(streetNameInput);
            fireEvent.change(streetNameInput, { target: { value: 'Millanium Road' } });
        })
        await waitFor(async () => {
            const messageError = await screen.queryByText(/Street name required./i);
            expect(messageError).toBeNull();
        })
    });
});

describe('boundary', () => {
    test(testName + ' Country is required', async () => {
        const { countryInput } = setup()
        act(() => {
            fireEvent.blur(countryInput);
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Country required./i)).toBeTruthy();
        })
    });
    test(testName + ' Country is Valid', async () => {
        const { countryInput } = setup()
        act(() => {
            fireEvent.blur(countryInput);
            fireEvent.change(countryInput, { target: { value: 'India' } });
        })
        await waitFor(async () => {
            const messageError = await screen.queryByText(/Country required./i);
            expect(messageError).toBeNull();
        })
    });
});

describe('boundary', () => {
    test(testName + ' City is required', async () => {
        const { cityInput } = setup()
        act(() => {
            fireEvent.blur(cityInput);
        })
        await waitFor(async () => {
            expect(await screen.findByText(/City required./i)).toBeTruthy();
        })
    });
    test(testName + ' City is Valid', async () => {
        const { cityInput } = setup()
        act(() => {
            fireEvent.blur(cityInput);
            fireEvent.change(cityInput, { target: { value: 'Barabanki' } });
        })
        await waitFor(async () => {
            const messageError = await screen.queryByText(/City required./i);
            expect(messageError).toBeNull();
        })
    });
});

describe('boundary', () => {
    test(testName + ' State is required', async () => {
        const { stateInput } = setup()
        act(() => {
            fireEvent.blur(stateInput);
        })
        await waitFor(async () => {
            expect(await screen.findByText(/State required./i)).toBeTruthy();
        })
    });
    test(testName + ' State is Valid', async () => {
        const { stateInput } = setup()
        act(() => {
            fireEvent.blur(stateInput);
            fireEvent.change(stateInput, { target: { value: 'Uttar Pradesh' } });
        })
        await waitFor(async () => {
            const messageError = await screen.queryByText(/State required./i);
            expect(messageError).toBeNull();
        })
    });
});

describe('boundary', () => {
    test(testName + ' PinCode is required', async () => {
        const { pinCodeInput } = setup()
        act(() => {
            fireEvent.blur(pinCodeInput);
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Pincode required./i)).toBeTruthy();
        })
    });
    test(testName + ' PinCode is only number', async () => {
        const { pinCodeInput } = setup()
        act(() => {
            fireEvent.blur(pinCodeInput);
            fireEvent.change(pinCodeInput, { target: { value: '22tt121' } });
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Only numbers are allowed for this field./i)).toBeTruthy();
        })
    });
    test(testName + ' PinCode has only 6 digit', async () => {
        const { pinCodeInput } = setup()
        act(() => {
            fireEvent.blur(pinCodeInput);
            fireEvent.change(pinCodeInput, { target: { value: '2287121' } });
        })
        await waitFor(async () => {
            expect(await screen.findByText(/Pinocde should be 6 digits/i)).toBeTruthy();
        })
    });
    test(testName + ' PinCode is Valid', async () => {
        const { pinCodeInput } = setup()
        act(() => {
            fireEvent.blur(pinCodeInput);
            fireEvent.change(pinCodeInput, { target: { value: '225121' } });
        })
        await waitFor(async () => {
            const messageError = await screen.queryByText(/Pincode required./i);
            expect(messageError).toBeNull();
        })
    });
});

describe('boundary', () => {
    test(testName + ' Trainer Preferences is required', async () => {
        const { button, malePreferenceInput, femalePreferenceInput, noPreferenceInput } = setup()
        act(() => {
            fireEvent.click(button)
        })
        await waitFor(async () => {
            expect(malePreferenceInput.checked).toEqual(false);
            expect(femalePreferenceInput.checked).toEqual(false);
            expect(noPreferenceInput.checked).toEqual(false);
            expect(await screen.findByText(/Preferences required./i)).toBeTruthy();
        })

    });
    test(testName + ' Trainer Preferences is Valid', async () => {
        const { malePreferenceInput, femalePreferenceInput, noPreferenceInput } = setup()
        act(() => {
            fireEvent.click(malePreferenceInput, { target: { value: "Male" } });
        })
        await waitFor(async () => {
            expect(malePreferenceInput.checked).toEqual(true);
            expect(femalePreferenceInput.checked).toEqual(false);
            expect(noPreferenceInput.checked).toEqual(false);
            expect(malePreferenceInput.value).toBe('Male')
        })

        act(() => {
            fireEvent.click(femalePreferenceInput, { target: { value: "Female" } });
        })
        await waitFor(async () => {
            expect(malePreferenceInput.checked).toEqual(false);
            expect(femalePreferenceInput.checked).toEqual(true);
            expect(noPreferenceInput.checked).toEqual(false);
            expect(femalePreferenceInput.value).toBe('Female')
        })

        act(() => {
            fireEvent.click(noPreferenceInput, { target: { value: "No" } });
        })
        await waitFor(async () => {
            expect(malePreferenceInput.checked).toEqual(false);
            expect(femalePreferenceInput.checked).toEqual(false);
            expect(noPreferenceInput.checked).toEqual(true);
            expect(noPreferenceInput.value).toBe('No')
        })
    });
});

describe('boundary', () => {
    test(testName + ' physioRequired is required', async () => {
        const { button, physioInput1, physioInput2 } = setup()
        act(() => {
            fireEvent.click(button)
        })
        await waitFor(async () => {
            expect(physioInput1.checked).toEqual(false);
            expect(physioInput2.checked).toEqual(false);
            expect(await screen.findByText(/Physiotherapist required./i)).toBeTruthy();
        })
    });
    test(testName + ' physioRequired is Valid', async () => {
        const { physioInput1, physioInput2 } = setup()
        act(() => {
            fireEvent.click(physioInput1, { target: { value: "Yes" } });
        })
        await waitFor(async () => {
            expect(physioInput1.checked).toEqual(true);
            expect(physioInput2.checked).toEqual(false);
            expect(physioInput1.value).toBe('Yes')
        })

        act(() => {
            fireEvent.click(physioInput2, { target: { value: "No" } });
        })
        await waitFor(async () => {
            expect(physioInput1.checked).toEqual(false);
            expect(physioInput2.checked).toEqual(true);
            expect(physioInput2.value).toBe('No')
        })

    });
});

describe('boundary', () => {
    test(testName + ' Package is required', async () => {
        const { button, package1, package2, package3 } = setup()
        act(() => {
            fireEvent.click(button)
        })
        await waitFor(async () => {
            expect(package1.checked).toEqual(false);
            expect(package2.checked).toEqual(false);
            expect(package3.checked).toEqual(false);
            expect(await screen.findByText(/Package required./i)).toBeTruthy();
        })
    });
    test(testName + ' Package is Valid', async () => {
        const { package1, package2, package3 } = setup()
        act(() => {
            fireEvent.click(package1, { target: { value: "One Time appointment" } });
        })
        await waitFor(async () => {
            expect(package1.checked).toEqual(true);
            expect(package2.checked).toEqual(false);
            expect(package3.checked).toEqual(false);
            expect(package1.value).toBe('One Time appointment')
        })

        act(() => {
            fireEvent.click(package2, { target: { value: "4 Sessions per week" } });
        })
        await waitFor(async () => {
            expect(package1.checked).toEqual(false);
            expect(package2.checked).toEqual(true);
            expect(package3.checked).toEqual(false);
            expect(package2.value).toBe('4 Sessions per week')
        })

        act(() => {
            fireEvent.click(package3, { target: { value: "5 Sessions per week" } });
        })
        await waitFor(async () => {
            expect(package1.checked).toEqual(false);
            expect(package2.checked).toEqual(false);
            expect(package3.checked).toEqual(true);
            expect(package3.value).toBe('5 Sessions per week')
        })
    });
});


/** ===========================End========================= **/

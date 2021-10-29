import React from 'react'
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';
import ContactUsView from '../views/contactUs/ContactUsView';

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: '',
    message: '',
}
const onFormSubmit = jest.fn();
const getById = queryByAttribute.bind(null, 'id');

const setup = () => {
    const utils = render(<ContactUsView initialValues={initialValues} onFormSubmit={onFormSubmit} />)
    const fNameInput = getById(utils.container, 'firstName');
    const lNameInput = getById(utils.container, 'lastName');
    const email = getById(utils.container, 'email');
    const mobile = getById(utils.container, 'mobile');
    const message = getById(utils.container, 'message');
    const button = getById(utils.container, 'button');
    const form = getById(utils.container, 'form');
    return {
        fNameInput,
        lNameInput,
        mobile,
        email,
        message,
        button,
        form,
        ...utils,
    }
}

let testName = "ContactUsView boundary"
/** ===========================Check All Validation for Input Fields========================= **/
describe('boundary', () => {

    test(testName + ' Email is required', async () => {
        const { email } = setup()
        fireEvent.blur(email);
        await waitFor(async () => {
            expect(await screen.findByText(/Email required./i)).toBeTruthy();
        })

    });

    test(testName + ' Email is invalid', async () => {
        const { email } = setup()
        fireEvent.blur(email);
        act(() => {
            fireEvent.change(email, { target: { value: 'abc@def' } });
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
        })

    });

    test(testName + ' Email is Valid', async () => {
        const { email } = setup()
        fireEvent.blur(email);
        act(() => {
            fireEvent.change(email, { target: { value: 'abc@def.com' } });
        });
        await waitFor(async () => {
            const emailError = await screen.queryByText(/Invalid email./i);
            expect(emailError).toBeNull();
        })

    });
});


describe('boundary', () => {

    test(testName + ' firstName is required', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
        });
        await waitFor(async () => {
            expect(await screen.findByText(/First name required./i)).toBeTruthy();
        })

    });

    test(testName + ' firstName is invalid', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
            fireEvent.change(fNameInput, { target: { value: 'abc@def' } });
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
        })

    });

    test(testName + ' firstName is Valid', async () => {
        const { fNameInput } = setup()
        act(() => {
            fireEvent.blur(fNameInput);
            fireEvent.change(fNameInput, { target: { value: 'Harshit Kishor' } });
        });
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
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Last name required./i)).toBeTruthy();
        })

    });

    test(testName + ' lastName is invalid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'abc@def' } });
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
        })

    });

    test(testName + ' lastName is Valid', async () => {
        const { lNameInput } = setup()
        act(() => {
            fireEvent.blur(lNameInput);
            fireEvent.change(lNameInput, { target: { value: 'Harshit Kishor' } });
        });
        await waitFor(async () => {
            const lastNameError1 = await screen.queryByText(/Last name required./i);
            const lastNameError2 = await screen.queryByText(/Only alphabets are allowed for this field/i)
            expect(lastNameError1).toBeNull();
            expect(lastNameError2).toBeNull();
        })

    });
});


describe('boundary', () => {

    test(testName + ' Message is required', async () => {
        const { message } = setup()
        act(() => {
            fireEvent.blur(message);
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Message required./i)).toBeTruthy();
        })

    });

    test(testName + ' Message is Valid', async () => {
        const { message } = setup()
        act(() => {
            fireEvent.blur(message);
            fireEvent.change(message, { target: { value: 'Harshit Kishor' } });
        });
        await waitFor(async () => {
            const messageError = await screen.queryByText(/Message required./i);
            expect(messageError).toBeNull();
        })

    });
});


describe('boundary', () => {
    test(testName + ' Mobile is required', async () => {
        const { mobile } = setup()
        act(() => {
            fireEvent.blur(mobile);
        });
        await waitFor(async () => {
            expect(await screen.findByText(/Mobile Number required./i)).toBeTruthy();
        })

    });

    test(testName + ' Mobile is Valid', async () => {
        const { mobile } = setup()
        act(() => {
            fireEvent.blur(mobile);
            fireEvent.change(mobile, { target: { value: '9987654545' } });
        });
        await waitFor(async () => {
            const mobileError = await screen.queryByText(/Mobile Number required./i);
            expect(mobileError).toBeNull();
        })

    });
});

/** ===========================End========================= **/

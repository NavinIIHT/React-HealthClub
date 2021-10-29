import React from 'react'
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';
import ContactUsView from '../views/contactUs/ContactUsView';
import { checkRequired, checkAlphabets, checkEmail } from '../reusable/utils';
import { apiService } from 'src/reusable/Api';

let testName = "ContactUs business"

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

/* ============================== E2E Test=================== */

const contactUsEntry =
    { firstName: "Harshit", lastName: "Kishor", email: "harshit+1000@mail.com", mobile: "34434322213", message: "df\nvf\nbg\n\nb" }


describe('business', () => {
    test(`${testName} should submit form`, async () => {
        const { fNameInput, lNameInput, mobile, email, message, form } = setup()
        const fNameRequired = checkRequired(contactUsEntry.firstName)
        const lNameRequired = checkRequired(contactUsEntry.lastName)
        const mobileRequired = checkRequired(contactUsEntry.mobile)
        const emailRequired = checkRequired(contactUsEntry.email)
        const messageRequired = checkRequired(contactUsEntry.message)
        const fNameAlpha = checkAlphabets(contactUsEntry.firstName)
        const lNameAlpha = checkAlphabets(contactUsEntry.lastName)
        const emailValid = checkEmail(contactUsEntry.email)


        fireEvent.blur(fNameInput);
        fireEvent.change(fNameInput, { target: { value: contactUsEntry.firstName } });

        fireEvent.blur(lNameInput);
        fireEvent.change(lNameInput, { target: { value: contactUsEntry.lastName } });

        fireEvent.blur(mobile);
        fireEvent.change(mobile, { target: { value: contactUsEntry.mobile } });

        fireEvent.blur(email);
        fireEvent.change(email, { target: { value: contactUsEntry.email } });

        fireEvent.blur(message);
        fireEvent.change(message, { target: { value: contactUsEntry.message } });

        fireEvent.submit(form);

        if (!fNameRequired || !lNameRequired || !mobileRequired || !emailRequired || !messageRequired) {
            expect(await screen.findByText(/required/i)).toBeTruthy();
        } else if (emailRequired && !emailValid) {
            expect(await screen.findByText(/Invalid email./i)).toBeTruthy();
        } else if ((fNameRequired && !fNameAlpha) || (lNameRequired && !lNameAlpha)) {
            expect(await screen.findByText(/Only alphabets are allowed for this field/i)).toBeTruthy();
        } else {
            await waitFor(async () => {
                expect(onFormSubmit).toHaveBeenCalled();
                expect(onFormSubmit).toHaveBeenCalledTimes(1);
                await apiService('POST', '/contactUs', contactUsEntry)
                    .then((res) => {
                        expect({ ...contactUsEntry, id: res.data.id }).toEqual(res.data)
                        expect(res.status).toBe(201)
                    })
            })
        }
        await act(() => Promise.resolve()); // To avoid act wrapping warning
    }

    )
})


/** ===========================End========================= **/
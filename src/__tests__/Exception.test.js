import { apiService } from "../reusable/Api";

let exceptionTest = "ViewAppointment exception"
describe('exception', () => {
  test(exceptionTest + ' should be check fitness Api', async () => {
    await apiService('GET', '/allfriends', null)
      .then((res) => {
        expect(res.data).toEqual(res.data);
        expect(res.data).toBe(res.data);
        expect(res.data).not.toBe(null);
        expect(null).toBeNull();
        expect(res.data).toBeTruthy();
      })
  })


})

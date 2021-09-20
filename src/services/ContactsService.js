import delay from '../utils/delay';

class ContactService {
  async listContacts(orderBy = 'asc') {
    const response = await fetch(
      `http://localhost:3001/contacts?orderBy=${orderBy}`,
    );

    await delay(2000);

    const json = await response.json();
    return json;
  }
}

export default new ContactService();

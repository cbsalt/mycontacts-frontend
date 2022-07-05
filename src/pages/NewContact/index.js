import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function handleSubmit(data) {
    try {
      const contact = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        category_id: data.categoryId,
      };

      const response = await ContactsService.createContact(contact);

      console.log(response);
    } catch {
      alert('Ocorreu um erro ao cadastrar o contato');
    }
  }

  return (
    <>
      <PageHeader
        title="Novo contato"
      />

      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}

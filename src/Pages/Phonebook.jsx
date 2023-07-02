import { Container, PageTitle, SectionTitle } from './Phonebook.module';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter.jsx';
import { MdOutlineContactPhone } from 'react-icons/md';
import { FcContacts } from 'react-icons/fc';
import { useSelector } from 'react-redux';

export const Phonebook = () => {
  const { token } = useSelector(state => state.auth);

  return (
    <>
      {token ? (
        <Container>
          <PageTitle>
            Phonebook <MdOutlineContactPhone />
          </PageTitle>
          <ContactForm />
          <SectionTitle>
            Contacts <FcContacts></FcContacts>
          </SectionTitle>
          <Filter></Filter>
          <ContactList></ContactList>
        </Container>
      ) : (
        <PageTitle>Книга контактів доступна після авторізації!</PageTitle>
      )}
    </>
  );
};

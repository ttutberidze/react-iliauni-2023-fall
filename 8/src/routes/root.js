import { Outlet, Form, useLoaderData, NavLink } from "react-router-dom";
import { createContact, getContacts } from "../contacts";

export const getUsersLoader = async ({params, request}) => {
  return await getContacts();
}

export const createUserAction = async ({params, request}) => {
  const user = await createContact();
  return user;
}

export default function Root() {

  const contacts = useLoaderData();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
        {contacts.length ? (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <NavLink
                  to={`/user/${contact.id}`}
                >
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                  {contact.favorite && <span>★</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
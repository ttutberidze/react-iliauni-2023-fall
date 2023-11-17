import { Form, Outlet, redirect, useFetcher, useLoaderData } from "react-router-dom";
import { deleteContact, updateContact } from "../contacts";

export const viewUserAction = async ({params: {userId}, request}) => {
  if(request.method === 'POST') {
    // Add to favorite
    const formData = await request.formData();
    return await updateContact(userId, {favorite: formData.get('favorite') === 'true'})
  } else {
    // Delete
    await deleteContact(userId);
  return redirect('/');
  }
}

export default function Contact() {

  const contact = useLoaderData();

  return (
    <div id="contact">
      <div>
        <img
          src={contact.avatar}
          alt={contact.first}
        />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form method="get" action="edit">
            <button>Edit</button>
          </Form>
          <Form method="delete">
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

const Favorite = ({ contact }) => {
  const fetcher = useFetcher();
  let favorite = contact.favorite;
  if(fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true'
  }
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
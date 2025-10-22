import { getSession } from "@/_lib/session";
import { getContactAction } from "@/actions/contact";
import { redirect } from "next/navigation";
import ContactForm from "@/_components/ContactForm";

const EditContactPage = async ({ params }) => {
  const user = await getSession();

  if (!user) {
    redirect("/login");
  }

  const result = await getContactAction(params.id);
  
  if (!result.success) {
    if (result.redirectTo) {
      redirect(result.redirectTo);
    }
    
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Contact Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            {result.message || "The contact you're looking for doesn't exist or you don't have permission to edit it."}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Back to Contacts
          </a>
        </div>
      </div>
    );
  }

  const contact = result.data;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center">
            <a
              href="/contact"
              className="mr-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Edit Contact</h1>
              <p className="mt-2 text-gray-600">
                Update the contact information for {contact.name}.
              </p>
            </div>
          </div>
        </div>

        <ContactForm
          contact={contact}
        />
      </div>
    </div>
  );
};

export default EditContactPage;
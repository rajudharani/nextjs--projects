import { getSession } from "@/_lib/session";
import { redirect } from "next/navigation";
import ContactForm from "@/_components/ContactForm";

const NewContactPage = async () => {
  const user = await getSession();

  if (!user) {
    redirect("/login");
  }

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
              <h1 className="text-3xl font-bold text-gray-900">Add New Contact</h1>
              <p className="mt-2 text-gray-600">
                Create a new contact in your address book.
              </p>
            </div>
          </div>
        </div>

        <ContactForm
          contact={null}
        />
      </div>
    </div>
  );
};

export default NewContactPage;

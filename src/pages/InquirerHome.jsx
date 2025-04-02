import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

// shadcn
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const InquirerHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="grid grid-cols-9 mt-15">
          <h1 className="font-sub text-2xl col-span-2 col-start-2">
            Welcome, <span className="font-extrabold">Athena Patricio</span>!
          </h1>
        </div>

        <div className="grid grid-cols-5 gap-7 h-[60vh] content-center">
          <div className="col-span-1 col-start-2 justify-self-center w-full">
            <Card className="h-75 cursor-pointer hover:bg-gray-100 shadow-lg">
              <CardContent className="mx-auto my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-30"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </CardContent>
              <CardTitle className="mx-auto p-2">
                <a href="" className="hcursor-pointer">
                  Raise an Inquiry
                </a>
              </CardTitle>
            </Card>
          </div>
          <div className="col-span-1 col-start-3 justify-self-center w-full">
            <Card className="h-75 cursor-pointer hover:bg-gray-100 shadow-lg">
              <CardContent className="mx-auto my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-30"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
              </CardContent>
              <CardTitle className="mx-auto p-2">
                <a href="" className="hcursor-pointer">
                  View FAQs
                </a>
              </CardTitle>
            </Card>
          </div>
          <div className="col-span-1 col-start-4 justify-self-center w-full">
            <Card className="h-75 cursor-pointer hover:bg-gray-100 shadow-lg">
              <CardContent className="mx-auto my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-30"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </CardContent>
              <CardTitle className="mx-auto p-2">
                <a href="" className="hcursor-pointer">
                  Open Inbox
                </a>
              </CardTitle>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InquirerHome;

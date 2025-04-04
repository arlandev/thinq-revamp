import PageLayout from "@/components/common/PageLayout";
import WelcomeText from "@/components/common/WelcomeText";
import Navbar from "@/components/common/Navbar";

import { Button } from "@/components/ui/button";

import DeactivateButton from "@/components/common/DeactivateButton";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function InquirerAccountsPage() {
  // TODO: Add Edit Dialog and Account Activation Modal

  return (
    <PageLayout navbar={<Navbar link="" linkName="" />}>
      <div className="flex justify-between items-start mb-8">
        <WelcomeText firstName="First" lastName="Last" />
        <Button className="flex items-center gap-2">
          Downloadables
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </Button>
      </div>
      <h1 className="text-3xl font-main font-bold my-10 justify-self-center text-center">
        INQUIRER ACCOUNTS
      </h1>

      <div className="flex-grow flex flex-col">
        <div className="bg-white rounded-lg shadow-xl flex-grow flex flex-col">
          <div className="flex flex-col h-full">
            <Table className="h-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/12"></TableHead>
                  <TableHead className="w-1/12">User ID</TableHead>
                  <TableHead className="w-2/12">Name</TableHead>
                  <TableHead className="w-3/12">Email</TableHead>
                  <TableHead className="w-2/12">Role</TableHead>
                  <TableHead className="w-1/12">Status</TableHead>
                  <TableHead className="w-3/12 text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="h-full">
                <TableRow>
                  <TableCell>
                    <Button>Edit</Button>
                  </TableCell>
                  <TableCell className="font-medium">00001</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john.doe@ust.edu.ph</TableCell>
                  <TableCell>Student</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell className="text-right">
                    <DeactivateButton
                      disable={true}
                      inquirerName="John Doe"
                      inquirerEmail="john.doe@ust.edu.ph"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Button>Edit</Button>
                  </TableCell>
                  <TableCell className="font-medium">00002</TableCell>
                  <TableCell>Mark Cruz</TableCell>
                  <TableCell>mark.cruz@ust.edu.ph</TableCell>
                  <TableCell>Staff</TableCell>
                  <TableCell>Inactive</TableCell>
                  <TableCell className="text-right">
                    <DeactivateButton
                      disable={false}
                      inquirerName="Mark Cruz"
                      inquirerEmail="mark.cruz@ust.edu.ph"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <Button className="mx-2 px-6">Add User</Button>
          <Button className="mx-2 px-6">Batch Deactivate</Button>
        </div>
      </div>
    </PageLayout>
  );
}

export default InquirerAccountsPage;

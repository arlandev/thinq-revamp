import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import React from "react";
import Navbar from "/src/components/common/Navbar";
import Footer from "/src/components/common/Footer";

function HelpdeskPage(props) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* navbar container */}
      <div className="w-full">
        <Navbar link="/test" linkName="Test" />
      </div>
      {/* Welcome Row*/}
      <div className="my-20 p-10 w-full">
        <div className="container mx-auto">
          <h2 className="ml-10 items-center tracking-wide text-3xl font-bold">
            Welcome, firstName lastName
          </h2>
        </div>
      </div>
      {/* Switch Container */}
      <div className="p-8 w-full">
        <div className="container mx-auto flex justify-center items-center">
          <Tabs defaultValue="employees" className="w-full max-w-[600px]">
            <TabsList className="w-full">
              <TabsTrigger value="employees" className="flex-1 text-2xl py-3">
                EMPLOYEES
              </TabsTrigger>
              <TabsTrigger value="students" className="flex-1 text-2xl py-3">
                STUDENTS
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      {/* Main Content Area */}
      <div className="flex-grow w-full">
        <div className="container mx-auto grid grid-cols-20 h-full">
          {/* Left Column */}
          <div className="col-span-3 col-start-2 p-4 rounded-l-xl">
            <h3 className="text-black text-2xl font-medium mb-4">
              Filter by Status
            </h3>
            <div className="flex flex-col space-y-3">
              <Button className="w-full py-5 text-base">New & Open</Button>
              <Button className="w-full py-5 text-base">New</Button>
              <Button className="w-full py-5 text-base">Open</Button>
              <Button className="w-full py-5 text-base">Closed</Button>
            </div>
          </div>
          {/* Table Container */}
          <div className="p-10 col-span-15 rounded-xl">
            <div className="bg-white rounded shadow-2xl outline-1">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          {/* Right Column */}
          <div className="invisible col-span-3 bg-blue-500 p-4">
            <h3 className="text-white font-medium mb-4">Additional Space</h3>
            <div className="h-32 bg-blue-400 rounded flex items-center justify-center text-white">
              Available area
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HelpdeskPage;

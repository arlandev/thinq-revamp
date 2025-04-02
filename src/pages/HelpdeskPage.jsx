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
import Navbar from "@/components/common/Navbar";
import WelcomeText from "@/components/common/WelcomeText";
import PageLayout from "@/components/common/PageLayout";

function HelpdeskPage(props) {
  return (
    <PageLayout navbar={<Navbar link="/test" linkName="Test" />}>
      {/* Welcome Section */}
      <WelcomeText firstName="Test" lastName="Test" />

      {/* Tabs Container */}
      <Tabs defaultValue="employees" className="flex-grow flex flex-col">
        <div className="p-8 w-full">
          <div className="container mx-auto flex justify-center items-center">
            <TabsList className="w-full max-w-[600px]">
              <TabsTrigger value="employees" className="flex-1 text-2xl py-3">
                EMPLOYEES
              </TabsTrigger>
              <TabsTrigger value="students" className="flex-1 text-2xl py-3">
                STUDENTS
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Employees Tab Content */}
        <TabsContent value="employees" className="flex-grow flex flex-col mt-0">
          <div className="flex flex-col md:flex-row gap-8 flex-grow">
            {/* Left Column */}
            <div className="w-full md:w-64 flex-shrink-0 space-y-8">
              {/* Status Buttons */}
              <div className="space-y-4">
                <div className="font-medium">FILTER BY STATUS</div>
                <div className="space-y-2">
                  <Button className="w-full">NEW & OPEN</Button>
                  <Button className="w-full">NEW</Button>
                  <Button className="w-full">OPEN</Button>
                  <Button className="w-full">CLOSED</Button>
                </div>
              </div>
            </div>

            {/* Right Column - Employees Table */}
            <div className="flex-grow flex flex-col">
              <div className="bg-white rounded-lg shadow-xl flex-grow flex flex-col">
                <div className="flex flex-col h-full">
                  <Table className="h-full">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Employee ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead className="text-right">Inquiries</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="h-full">
                      <TableRow>
                        <TableCell className="font-medium">EMP001</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>HR</TableCell>
                        <TableCell className="text-right">5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">EMP002</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>IT</TableCell>
                        <TableCell className="text-right">3</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">EMP003</TableCell>
                        <TableCell>Inactive</TableCell>
                        <TableCell>Finance</TableCell>
                        <TableCell className="text-right">0</TableCell>
                      </TableRow>
                      <TableRow className="h-full">
                        <TableCell className="font-medium">EMP004</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>Marketing</TableCell>
                        <TableCell className="text-right">2</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Students Tab Content */}
        <TabsContent value="students" className="flex-grow flex flex-col mt-0">
          <div className="flex flex-col md:flex-row gap-8 flex-grow">
            {/* Left Column */}
            <div className="w-full md:w-64 flex-shrink-0 space-y-8">
              {/* Status Buttons */}
              <div className="space-y-4">
                <div className="font-medium">FILTER BY STATUS</div>
                <div className="space-y-2">
                  <Button className="w-full">NEW & OPEN</Button>
                  <Button className="w-full">NEW</Button>
                  <Button className="w-full">OPEN</Button>
                  <Button className="w-full">CLOSED</Button>
                </div>
              </div>
            </div>

            {/* Right Column - Students Table */}
            <div className="flex-grow flex flex-col">
              <div className="bg-white rounded-lg shadow-xl flex-grow flex flex-col">
                <div className="flex flex-col h-full">
                  <Table className="h-full">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Student ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Program</TableHead>
                        <TableHead className="text-right">Inquiries</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="h-full">
                      <TableRow>
                        <TableCell className="font-medium">STU001</TableCell>
                        <TableCell>Enrolled</TableCell>
                        <TableCell>Computer Science</TableCell>
                        <TableCell className="text-right">2</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">STU002</TableCell>
                        <TableCell>Enrolled</TableCell>
                        <TableCell>Business</TableCell>
                        <TableCell className="text-right">1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">STU003</TableCell>
                        <TableCell>On Leave</TableCell>
                        <TableCell>Engineering</TableCell>
                        <TableCell className="text-right">3</TableCell>
                      </TableRow>
                      <TableRow className="h-full">
                        <TableCell className="font-medium">STU004</TableCell>
                        <TableCell>Enrolled</TableCell>
                        <TableCell>Education</TableCell>
                        <TableCell className="text-right">0</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
}

export default HelpdeskPage;

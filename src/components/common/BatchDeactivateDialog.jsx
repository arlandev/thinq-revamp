import { Button } from "@/components/ui/button";

import { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function BatchDeactivateDialog({ users = [] }) {
  // TODO: handle users decoupling list

  // state to control open and close of dialog
  const [open, setOpen] = useState(false);

  // only get active users to show in the table
  const activeUsers = users.filter((user) => user.isActive);

  const [selectedUsers, setSelectedUsers] = useState({});

  // update selectedUsers by flipping a switch for the userId
  /**
    prev:
    *   {
        "00001": true,
        "00003": false
        }
    * then click 00001
        new:
        {
        "00001": false,
        "00003": false
        }
    */

  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // to avoid browser reload

    // load array of users to deactivate
    const usersToDeactivate = Object.keys(selectedUsers).filter(
      (userId) => selectedUsers[userId],
    );

    // call API for deactivation
    // TODO: API Deactivation
    console.log("Deactivating users: ", selectedUsers);

    // set selected users to be empty
    setSelectedUsers({});

    // close the dialog window
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Batch Deactivate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="">Deactivate Users</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Deactivate multiple selected users.
        </DialogDescription>
        <form onSubmit={handleSubmit}>
          <div className="max-h-96 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>User ID</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Active Tickets</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeUsers.length > 0 ? (
                  activeUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={!!selectedUsers[user.id]}
                          onChange={() => handleCheckboxChange(user.id)}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell className="text-right">
                        {user.hasActiveTickets ? "True" : "False"}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-6">
                      No active users found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </form>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={Object.values(selectedUsers).filter(Boolean).length === 0}
          >
            Deactivate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BatchDeactivateDialog;

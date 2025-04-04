import { Button } from "@/components/ui/button";

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

import { DateInput } from "@/components/ui/dateinput";

function AddUserDialog(user) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2/4">
        <DialogHeader>
          <DialogTitle>ADD {user.addType.toUpperCase()}</DialogTitle>
          <DialogDescription>
            This action will add a user to our database.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="text-right">
              First Name
            </Label>
            <Input id="firstName" defaultValue="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-right">
              Last Name
            </Label>
            <Input id="lastName" defaultValue="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email Address
            </Label>
            <div className="col-span-3 flex items-center">
              <Input
                id="email"
                type="text"
                defaultValue=""
                placeholder=""
                className="rounded-r-none"
              />
              <div className="dark:bg-input/30 border-input flex h-9 rounded-r-md border border-l-0 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] text-gray-500 group-hover:border-gray-400">
                @ust.edu.ph
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dob" className="text-right">
              Date of Birth
            </Label>
            <DateInput />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-3 gap-2 w-2/3">
            <Button type="submit">CSV Import</Button>
            <Button type="submit" className="font-bold">
              {"+"}
            </Button>
            <Button type="submit">Add</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddUserDialog;

// src/components/InquiryDetailsDialog.jsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InquiryDetailsDialog = ({
  inquiry = {
    referenceNumber: "",
    inquirerEmail: "",
    affiliation: "",
    concern: "",
    specificConcern: "",
    concernDetails: "",
    assignedTo: "",
  },
  trigger,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">View Details</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Inquiry Details</DialogTitle>
          <DialogDescription>
            View the complete information for this inquiry.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Row 1 */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="referenceNumber" className="text-right font-medium">
              Reference Number
            </Label>
            <Input
              id="referenceNumber"
              value={inquiry.referenceNumber}
              className="col-span-3"
              disabled
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="inquirerEmail" className="text-right font-medium">
              Inquirer
            </Label>
            <Input
              id="inquirerEmail"
              value={inquiry.inquirerEmail}
              className="col-span-3"
              disabled
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="affiliation" className="text-right font-medium">
              Affiliation
            </Label>
            <Input
              id="affiliation"
              value={inquiry.affiliation}
              className="col-span-3"
              disabled
            />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="concern" className="text-right font-medium">
              Concern
            </Label>
            <Input
              id="concern"
              value={inquiry.concern}
              className="col-span-3"
              disabled
            />
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="specificConcern" className="text-right font-medium">
              Specific Concern
            </Label>
            <div className="col-span-3">
              <textarea
                id="specificConcern"
                value={inquiry.specificConcern}
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled
              />
            </div>
          </div>

          {/* Row 6 */}
          <div className="grid grid-cols-4 items-start gap-4">
            <Label
              htmlFor="concernDetails"
              className="text-right font-medium pt-2"
            >
              Concern Details
            </Label>
            <div className="col-span-3">
              <textarea
                id="concernDetails"
                value={inquiry.concernDetails}
                className="w-full min-h-[150px] rounded-md border border-input bg-muted px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled
              />
            </div>
          </div>

          {/* Row 7 */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="assignTo" className="text-right font-medium">
              Assign To
            </Label>
            <div className="col-span-3">
              {!inquiry.assignedTo ? (
                <Select>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Assign this inquiry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Personnel</SelectLabel>
                      <SelectItem value="John Doe">John Doe</SelectItem>
                      <SelectItem value="Jose Rizal">Jose Rizal</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              ) : (
                <div className="font-medium">{inquiry.assignedTo}</div>
              )}
            </div>
          </div>
        </div>
        <DialogFooter className="gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button variant="default" type="button">
            Save & Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryDetailsDialog;

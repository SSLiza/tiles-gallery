"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

export function UpdateUserModal() {
    const [open, setOpen] = useState(false); // ✅ DEFINE HERE

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;

    try {
      await authClient.updateUser({
        name,
        image,
      });

      toast.success("Profile updated successfully!");
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Button className="bg-[#5B7E3C] text-white hover:bg-[#4a6a30]">
        Update Profile
      </Button>

      <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">

        <Modal.Container placement="center">

          <Modal.Dialog className="bg-white text-gray-800 rounded-2xl shadow-2xl sm:max-w-md">

            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="border-b pb-4">

              <Modal.Icon className="bg-gray-100 text-[#5B7E3C]">
                <Envelope className="size-5" />
              </Modal.Icon>

              <Modal.Heading className="text-gray-800">
                Update Profile
              </Modal.Heading>

            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* NAME */}
                <TextField>
                  <Label>Name</Label>
                  <Input
                    name="name"
                    placeholder="Enter your name"
                    className="focus:border-[#c9a96e]"
                  />
                </TextField>

                {/* IMAGE */}
                <TextField>
                  <Label>Image URL</Label>
                  <Input
                    name="image"
                    placeholder="Enter image URL"
                    className="focus:border-[#c9a96e]"
                  />
                </TextField>

                {/* FOOTER */}
                <div className="flex gap-3 pt-2">

                  <Button
                    type="button"
                    slot="close"
                    variant="secondary"
                    className="w-full text-[#5B7E3C]"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    className="w-full bg-[#5B7E3C] text-white hover:bg-[#4a6a30]"
                  >
                    Update
                  </Button>

                </div>

              </form>

            </Modal.Body>

          </Modal.Dialog>

        </Modal.Container>

      </Modal.Backdrop>
    </Modal>
  );
}
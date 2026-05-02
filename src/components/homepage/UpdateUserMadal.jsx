"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

export function UpdateUserModal() {
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

      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  return (
    <Modal>
      <Button variant="secondary">Update Profile</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full">
                    <Label>Name</Label>
                    <Input name="name" placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Image URL</Label>
                    <Input name="image" placeholder="Enter image URL" />
                  </TextField>

                  <Modal.Footer>
                    <Button type="button" slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit">
                      Update Profile
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function VideoModal({
  path,
  open,
  setOpen,
}: {
  path?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden bg-black p-0">
        <video autoPlay controls={false} loop src={"/testvid.mp4"} />
      </DialogContent>
    </Dialog>
  );
}

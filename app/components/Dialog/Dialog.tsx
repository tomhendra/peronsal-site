import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./Dialog.styles.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface Props {
  children: React.ReactNode;
}

function Content({ children, ...props }: Props) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="dialog-overlay" />
      <DialogPrimitive.Content className="dialog-content" {...props}>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export { links };
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
export const DialogClose = DialogPrimitive.Close;

// https://www.radix-ui.com/docs/primitives/components/dialog

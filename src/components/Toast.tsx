import { useEffect, useState } from "react";
import { eventBusService } from "@services/eventBusService";

interface ToastProps {
  closable?: boolean;
}

export const Toast = () => {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<ToastProps>({});
  const handleClose = (event: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  useEffect(() => {
    eventBusService.on("showToast", toast => {
      setToast(toast);
      setOpen(true);
    })
  }, [])

  const closeButton = (
      <></>
  )

  return (
      <div>Toast</div>
  )
}

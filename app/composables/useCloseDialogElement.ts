// export function useCloseDialogElement(dialogElement: any) {
//    dialogElement.addEventListener("click", closeOnBackDropClick)

//       function closeOnBackDropClick ({ currentTarget, target }: any) {
//          const dialogElement = currentTarget
//          const isClickedOnBackDrop = target === dialogElement
//          if (isClickedOnBackDrop) {
//             dialogElement.close()
//       }
//    }
// }

export function useCloseDialogElement(dialogElement: HTMLDialogElement): void {
   dialogElement.addEventListener("click", closeOnBackDropClick);
 
   function closeOnBackDropClick({ currentTarget, target }: MouseEvent): void {
     const dialogElement = currentTarget as HTMLDialogElement;
     const isClickedOnBackDrop = target === dialogElement;
     if (isClickedOnBackDrop) {
       dialogElement.close();
     }
   }
 }
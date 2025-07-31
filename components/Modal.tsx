import { XIcon } from "@heroicons/react/solid"
import MuiModal from "@mui/material/Modal"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/Atom"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"


function Modal() {

  const [showModal, setShowModal] = useRecoilState(modalState)



  const handleClose = () => {
      setShowModal(false)
  }
  return (
    <MuiModal open={showModal} onClose={handleClose}>
        <>
          <button className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]">
            <XIcon className="h-6 w-6 text-white" onClick={handleClose}/>
          </button>
          <div className="flex items-center justify-center h-full">
            <div className="bg-white/50 p-20 w-[70%]">
              <h2 className="mb-5 font-mono text-xl text-center">Create new memo</h2>
              <form>
                <div>
                  <input type="text" className="px-6 py-2 w-full rounded-lg focus:outline-none shadow-sm" placeholder="Send To"/>
                </div>
                <div>
                  <input type="text" className="px-6 py-2 w-full rounded-lg focus:outline-none shadow-sm mt-5" placeholder="Type"/>
                </div>
                <div>
                  <input type="date" className="px-6 py-2 w-[50%] rounded-lg focus:outline-none shadow-sm mt-5" placeholder="Date"/>
                  <label htmlFor="approval" className="mx-[10%]">Approval required?
                    <input type="checkbox" name="approval" id="approval" className="ml-2 px-6 py-2 w-70 rounded-lg focus:outline-none shadow-sm mt-5" placeholder=""/>
                  </label>  
                </div>
                <div>
                  <input type="text" className="px-6 py-2 mt-5 w-full rounded-lg focus:outline-none shadow-sm" placeholder="Subject"/>
                </div>
                <div>
                  {/* p-2 w-full rounded-lg focus:outline-none shadow-sm mt-5 */}
                  <textarea name="message" id="message" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-5 outline-none focus:ring-teal-300 h-40" placeholder="Enter memo body"></textarea>
                </div>
                <button type="button" className="py-2 px-8 bg-[#1f1f1f] mt-4 rounded-md text-white hover:text-[#1f1f1f] hover:scale-[1.1] hover:bg-[#f1f1f1] transition-all">Upload Memo</button>
              </form>
            </div>
          </div>
        </>
    </MuiModal>
  )
}
export default Modal
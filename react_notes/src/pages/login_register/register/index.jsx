import React, { useEffect } from "react";
import App from "@/pages/index";
import NotesForm from "@/components/notesform";
import { GiHood } from "react-icons/gi";
import { useState } from "react";

export default function Register({ setloginButtonClicked }) {
  const [SignUp, setSignUp] = useState(false);

  const inputStyles =
    "outline-none text-black rounded-lg bg-transparent border border-black h-8 w-56 pl-3";

  function handleBackdrop() {
    setdisplayLoginComponent(false);
  }
  return (
    <div className=" w-screen h-screen fixed flex flex-col  justify-center bg-green-400 ">
      <div className="flex flex-col h-2/3 w-1/2 bg-slate-800 rounded-md ">
        <button
          onClick={() => setloginButtonClicked(false)}
          className="hover:text-green-300 w-fit h-fit flex justify-start text-sm p-5 items-center hover:border-s-2 border-green-400"
        >
          be anonymous
          <GiHood className="hover:text-green w-8 h-8" />
        </button>

        <form
          action="submit"
          className="flex flex-col w-full h-full justify-start gap-3 items-center"
        >
          <div className="h-12"></div>
          <section className="flex flex-col justify-start  w-fit gap-5">
            {" "}
            {/* tror egt ikke section taggen er nødvendig, men nå er den her */}
            <h1 className="justify-center text-6xl bold ">Register</h1>
            <div className="h-2"></div>
            <input type="text" className={inputStyles} placeholder="Username" />
            <input type="text" className={inputStyles} placeholder="password" />
          </section>
        </form>
        <button onClick={() => setSignUp(true)}>
          Have an account <span className="hover:text-green-400">Log in</span>
        </button>
      </div>
    </div>
  );
}

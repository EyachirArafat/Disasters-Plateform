import React from "react";
import { NavbarPTwo } from "../../../common/navbar/Navbar-2";
import { Container } from "../../../common/Container";
import { ItemTitle } from "../../../common/navbar/ItemTitle";
import { cn } from "../../../library/utilities/cn";
import { Button } from "../../../common/button";

export const GetStarted = ({ itemTitle, itemName, pDiv, progress, onDelete }) => {
  return (
    <div className="bg-secondary w-full mt-[84px] pb-4 md:pb-5 mb-5 fixed right-0 left-0">
      <Container className="md:pt-6 pt-4 ">
        <div className="flex justify-between items-center gap-3 flex-wrap py-[6px] ">
          <div className="flexCC gap-3">
            <button onClick={onDelete} className="text-2xl w-5 h-5 flex justify-center border p-3 border-accent/40 items-center rounded-full bg-white font-bold active:scale-90">
              ×
            </button>
            <ItemTitle itemTitle={itemTitle} itemName={itemName} />
          </div>
          <div className="flex">
            <div className="flex">
              <span
                className={`md:w-32 sm:w-30 xsm:w-28 w-16 h-2 rounded-s-lg border-accent ${
                  progress >= 1 ? 'bg-primary' : 'bg-color1'}`}
              ></span>
              <span
                className={`md:w-32 sm:w-30 xsm:w-28 w-16 h-2 border-accent ${
                  progress >= 2 ? 'bg-primary' : 'bg-color1'}`}
              ></span>
              <span
                className={`md:w-32 sm:w-30 xsm:w-28 w-16 h-2 rounded-e-lg border-accent ${
                  progress >= 3 ? 'bg-primary' : 'bg-color1'}`}
              ></span>
              
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <Button
              children="Back"
              className="bg-white !hover:text-white !text-accent"
            />
            <Button children="Next" className="" />
          </div>
        </div>
      </Container>
    </div>
  );
};


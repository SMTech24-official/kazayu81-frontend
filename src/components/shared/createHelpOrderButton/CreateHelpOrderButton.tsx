import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CreateHelpOrderButton = () => {
  return (
    <Link href={"/create-help"}>
      <Button className="bg-orange-500 hover:bg-orange-600 text-white">Create Help Order</Button>
    </Link>
  );
};

export default CreateHelpOrderButton;

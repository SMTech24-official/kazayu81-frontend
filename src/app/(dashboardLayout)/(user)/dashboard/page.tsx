"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";

export default function UserProfileCard() {
  const user = useSelector((state: RootState) => state.user.user);
  //   console.log(user);
  return (
    <div className=" flex w-full mt-20 items-center justify-center">
      <Card className=" max-w-xl shadow-lg w-full mx-auto">
        <CardContent className="flex flex-col items-center gap-4 pt-6">
          <Avatar className="w-24 h-24">
            {user?.profileImage ? (
              <Image
                src={user?.profileImage}
                alt={user?.name || "User Name"}
                width={100}
                height={100}
                className="rounded-full"
              />
            ) : (
              <AvatarFallback>
                {
                  // firstName
                  // lastName

                  // first letter of first name and last name

                  user?.firstName.charAt(0) + user?.lastName.charAt(0)
                }
              </AvatarFallback>
            )}
          </Avatar>
          <div className="space-y-1 text-center">
            <h3 className="font-semibold text-lg">
              {user?.firstName} {` `} {user?.lastName}
            </h3>
            <p className="text-sm text-muted-foreground">{user?.customerId}</p>
          </div>
          <Link href={`/create-help`}>
            <Button className="bg-orange-500 px-5 text-lg py-6 hover:bg-orange-600">Create Help</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

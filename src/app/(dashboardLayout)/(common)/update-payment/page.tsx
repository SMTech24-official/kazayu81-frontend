import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Trash2 } from "lucide-react";
import Image from "next/image";
import mainIcon from "@/assets/images/main-ico.png";

export default function PaymentSettings() {
  const savedCards = [
    { id: 1, type: "Visa", last4: "4242", expiry: "12/24" },
    { id: 2, type: "Mastercard", last4: "5555", expiry: "10/25" },
    { id: 3, type: "American Express", last4: "0001", expiry: "08/26" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-between mb-6">
        <div className="mb-4 bg-white inline-block p-2 rounded-full">
          <Image
            src={mainIcon}
            alt="none"
            width={40}
            height={40}
            className="mx-auto"
          />
        </div>
        <h1 className="text-2xl font-bold">Payment Settings</h1>
      </div>
      <Tabs defaultValue="bank-account" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 gap-5 mb-6 bg-slate-100">
          <TabsTrigger
            value="bank-account"
            className="data-[state=active]:bg-orange-500 bg-white data-[state=active]:text-white"
          >
            Bank account
          </TabsTrigger>
          <TabsTrigger
            value="debit-credit"
            className="data-[state=active]:bg-orange-500 bg-white data-[state=active]:text-white"
          >
            Debit/credit card
          </TabsTrigger>
          <TabsTrigger
            value="saved-card"
            className="data-[state=active]:bg-orange-500 bg-white data-[state=active]:text-white"
          >
            Saved card
          </TabsTrigger>
        </TabsList>
        <TabsContent value="bank-account">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="routing-number">Routing Number:</Label>
              <Input id="routing-number" placeholder="Enter Routing number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="account-number">Enter Account Number:</Label>
              <Input id="account-number" placeholder="Enter Account Number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-account-number">
                Confirm Account Number:
              </Label>
              <Input
                id="confirm-account-number"
                placeholder="Confirm Account Number"
              />
            </div>
            <div className="space-y-2">
              <Label>Account Type:</Label>
              <RadioGroup defaultValue="checking">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="checking" id="checking" />
                  <Label htmlFor="checking">Checking</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="savings" id="savings" />
                  <Label htmlFor="savings">Savings</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
              Submit
            </Button>
          </form>
        </TabsContent>
        <TabsContent value="debit-credit">
          <p>Debit/credit card content goes here.</p>
        </TabsContent>
        <TabsContent value="saved-card">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedCards.map((card) => (
              <Card key={card.id} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <CreditCard className="h-8 w-8 text-orange-500" />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">{card.type}</p>
                    <p className="text-sm text-gray-500">
                      **** **** **** {card.last4}
                    </p>
                    <p className="text-sm text-gray-500">
                      Expires {card.expiry}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="bg-white border-dashed border-2 border-gray-300">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <Button
                  variant="outline"
                  className="text-orange-500 border-orange-500 hover:bg-orange-50"
                >
                  + Add New Card
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

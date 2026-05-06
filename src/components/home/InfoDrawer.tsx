
import React from 'react';
import { InfoIcon } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const InfoDrawer = ({ tldrContent }: { tldrContent: string }) => {
  return (
    <div className="flex justify-end">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
            <InfoIcon className="h-4 w-4" />
            <span className="text-xs">O této službě</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Nejvýhodnější Připojení</DrawerTitle>
            <DrawerDescription>
              {tldrContent}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Zavřít</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default InfoDrawer;

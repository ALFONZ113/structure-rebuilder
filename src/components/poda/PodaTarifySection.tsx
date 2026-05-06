
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PodaTarifySection = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-4">PODA internet - tarify a ceny 2025</h2>
      <p className="mb-4">PODA nabízí několik tarifů optického internetu:</p>

      <h3 className="text-xl font-semibold mb-3">Optický internet PODA:</h3>
      <div className="overflow-x-auto my-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tarif</TableHead>
              <TableHead>Rychlost</TableHead>
              <TableHead>Měsíční cena</TableHead>
              <TableHead>Aktivace</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">PODA Internet 300</TableCell>
              <TableCell>300 Mb/s</TableCell>
              <TableCell>340 Kč</TableCell>
              <TableCell>0 Kč</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">PODA Internet 1000</TableCell>
              <TableCell>1000 Mb/s</TableCell>
              <TableCell>440 Kč</TableCell>
              <TableCell>0 Kč</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">PODA Internet 2000</TableCell>
              <TableCell>2000 Mb/s</TableCell>
              <TableCell>520 Kč</TableCell>
              <TableCell>0 Kč</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="my-6 p-4 bg-muted border border-border">
        <p className="mb-2">
          Zajímá vás, jestli můžete za stejné peníze získat rychlejší připojení? Nebo potřebujete poradit s výběrem nejvhodnějšího tarifu?
        </p>
        <Link to="/kontakt" className="text-primary hover:text-primary/80 font-medium">
          Kontaktujte nás a najdeme vám nejvýhodnější řešení pro vaši domácnost →
        </Link>
      </div>

      <p className="mb-6">
        Všechny tarify PODA jsou nabízeny <strong>bez závazku</strong>, což je významná konkurenční výhoda. 
        Při uzavření smlouvy na 24 měsíců můžete získat slevu na aktivační poplatek.
      </p>
      
      <div className="my-6 p-4 bg-muted border border-border">
        <p className="mb-2">
          Potřebujete poradit s výběrem vhodného tarifu nebo zjistit dostupnost na vaší adrese?
        </p>
        <Link to="/kontakt" className="text-primary hover:text-primary/80 font-medium">
          Obraťte se na naše specialisty a získejte kompletní servis →
        </Link>
      </div>
    </>
  );
};

export default PodaTarifySection;
